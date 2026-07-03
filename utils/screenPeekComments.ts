import type {
    CharacterProfile,
    ScreenPeekCard,
    ScreenPeekCommentTone,
    ScreenPeekCommentTrigger,
    ScreenPeekDeviceSnapshot,
    ScreenPeekLiveComment,
    UserProfile,
} from '../types';
import { AppID } from '../types';
import type { ResolvedApi } from './auxApi';
import { llmComplete } from './llmComplete';
import { screenPeekUserPhoneCommentPrompt } from './laiwangPrompts';

export const SCREEN_PEEK_COMMENT_MAX = 12;
export const SCREEN_PEEK_COMMENT_AUTO_COOLDOWN_MS = 30_000;
export const SCREEN_PEEK_COMMENT_DWELL_MS = 75_000;

const TONE_SET = new Set<ScreenPeekCommentTone>(['soft', 'tease', 'curious', 'alert', 'quiet']);

const cleanText = (value: unknown, limit = 90): string => {
    const text = String(value || '')
        .replace(/<think[\s\S]*?<\/think>/gi, '')
        .replace(/\s+/g, ' ')
        .trim();
    return text.length > limit ? `${text.slice(0, limit).trim()}…` : text;
};

const triggerLabel = (trigger: ScreenPeekCommentTrigger): string => ({
    session_start: '刚打开“TA 录屏窥屏”悬浮窗',
    app_switch: '真实手机录屏画面发生变化',
    dwell: '用户在当前真实手机画面停留了一会儿',
    manual: '用户点了“再说一句”',
    resume: '用户从旧窥屏卡重新唤起悬浮窗',
    permission: '用户正在处理录屏或悬浮窗授权',
}[trigger]);

function extractJsonObject(raw: string): any | null {
    const body = (raw || '').trim().replace(/^```(?:json)?/i, '').replace(/```$/i, '').trim();
    const start = body.indexOf('{');
    if (start < 0) return null;
    let depth = 0;
    let inString = false;
    let escaped = false;
    for (let i = start; i < body.length; i += 1) {
        const ch = body[i];
        if (inString) {
            if (escaped) escaped = false;
            else if (ch === '\\') escaped = true;
            else if (ch === '"') inString = false;
            continue;
        }
        if (ch === '"') inString = true;
        else if (ch === '{') depth += 1;
        else if (ch === '}' && --depth === 0) {
            try { return JSON.parse(body.slice(start, i + 1)); } catch { return null; }
        }
    }
    return null;
}

export function parseScreenPeekComment(raw: string): { text: string; tone: ScreenPeekCommentTone } | null {
    const parsed = extractJsonObject(raw);
    const text = cleanText(parsed?.text || parsed?.comment || parsed?.message || raw, 90);
    if (!text) return null;
    const toneRaw = String(parsed?.tone || '').trim() as ScreenPeekCommentTone;
    return { text, tone: TONE_SET.has(toneRaw) ? toneRaw : 'soft' };
}

export function summarizeScreenPeekDeviceSnapshot(snapshot: ScreenPeekDeviceSnapshot): string {
    if (snapshot.source === 'android_screen_capture') {
        const lines: string[] = [];
        lines.push(snapshot.screenCaptureActive === false
            ? '录屏授权已返回，但录屏服务尚未开始或已被系统停止。'
            : '已获得 Android 录屏授权，TA 正通过系统悬浮窗看用户真实手机画面。');
        if (snapshot.screenFrame) {
            lines.push(`本轮录屏帧：${snapshot.screenFrame.width || '?'}x${snapshot.screenFrame.height || '?'}，${new Date(snapshot.screenFrame.capturedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
        } else {
            lines.push('录屏服务已启动，但本轮还没有拿到可评论的画面帧。');
        }
        if (snapshot.overlayPermissionGranted === false) lines.push('系统悬浮窗权限尚未开启：用户离开 Moro 后可能看不到原生悬浮窗。');
        if (snapshot.currentForegroundApp) {
            lines.push(`辅助前台 App：${snapshot.currentForegroundApp.appName}${snapshot.currentForegroundApp.isMoro ? '（Moro 本身）' : ''}`);
        }
        if (snapshot.lastExternalApp && snapshot.lastExternalApp.packageName !== snapshot.currentForegroundApp?.packageName) {
            lines.push(`最近的外部 App：${snapshot.lastExternalApp.appName}`);
        }
        return lines.join('\n');
    }
    if (snapshot.source === 'screen_capture_permission_required') {
        return snapshot.unavailableReason || '还没有真实手机录屏授权。TA 现在看不到屏幕画面，不能生成窥屏评论。';
    }
    if (snapshot.source === 'permission_required') {
        return 'Android 使用情况访问权限尚未开启；如果录屏未授权，TA 也看不到真实手机画面。';
    }
    if (snapshot.source !== 'android_usage_stats') {
        return snapshot.unavailableReason || '当前平台不支持读取用户真实手机画面。';
    }
    const lines: string[] = [];
    const current = snapshot.currentForegroundApp;
    const lastExternal = snapshot.lastExternalApp;
    if (current) {
        lines.push(`当前前台：${current.appName}${current.isMoro ? '（Moro 本身）' : ''}${current.packageName ? ` / ${current.packageName}` : ''}`);
    }
    if (lastExternal && (!current || lastExternal.packageName !== current.packageName)) {
        lines.push(`刚才离开 Moro 前最近停留：${lastExternal.appName}${lastExternal.durationMinutes ? `，今日约 ${lastExternal.durationMinutes} 分钟` : ''}`);
    }
    if (typeof snapshot.screenTimeMinutes === 'number') lines.push(`今日统计到的屏幕使用约 ${snapshot.screenTimeMinutes} 分钟`);
    if (typeof snapshot.unlockCount === 'number') lines.push(`近期亮屏/解锁痕迹：${snapshot.unlockCount} 次`);
    if (typeof snapshot.batteryLevel === 'number' && snapshot.batteryLevel >= 0) {
        lines.push(`电量：${snapshot.batteryLevel}%${snapshot.isCharging ? '，正在充电' : ''}`);
    }
    if (snapshot.networkLabel) lines.push(`网络：${snapshot.networkLabel}`);
    if (snapshot.deviceLabel) lines.push(`设备：${snapshot.deviceLabel}`);
    const usage = (snapshot.appUsage || [])
        .filter(app => !app.isMoro)
        .slice(0, 6)
        .map(app => `${app.appName}${app.durationMinutes ? ` ${app.durationMinutes} 分钟` : ''}`);
    if (usage.length) lines.push(`今日常用 App：${usage.join('；')}`);
    return lines.length ? lines.join('\n') : '已取得真实手机使用情况权限，但这次没有读到可评论的前台 App。';
}

export function pickObservedUserPhoneApp(snapshot: ScreenPeekDeviceSnapshot) {
    return snapshot.lastExternalApp || snapshot.currentForegroundApp;
}

export function appendScreenPeekCommentToCard(
    card: ScreenPeekCard,
    comment: ScreenPeekLiveComment,
    max = SCREEN_PEEK_COMMENT_MAX,
): ScreenPeekCard {
    const existing = card.liveComments || [];
    return {
        ...card,
        viewTarget: card.viewTarget || 'user_phone',
        liveComments: [...existing, comment].slice(-max),
    };
}

export async function generateScreenPeekLiveComment(args: {
    api: ResolvedApi;
    char: CharacterProfile;
    userProfile: UserProfile;
    card: ScreenPeekCard;
    deviceSnapshot: ScreenPeekDeviceSnapshot;
    trigger: ScreenPeekCommentTrigger;
    recentComments?: ScreenPeekLiveComment[];
    signal?: AbortSignal;
}): Promise<ScreenPeekLiveComment> {
    const frame = args.deviceSnapshot.screenFrame;
    if (args.deviceSnapshot.source !== 'android_screen_capture' || !frame) {
        throw new Error(args.deviceSnapshot.source === 'screen_capture_permission_required'
            ? '需要先授权 Android 录屏，TA 才能看见用户真实手机画面'
            : (args.deviceSnapshot.unavailableReason || '正在等待真实手机录屏画面'));
    }
    if (!args.api.baseUrl || !args.api.model) throw new Error('请先在「文具盒」里配置 API');

    const prompt = screenPeekUserPhoneCommentPrompt({
        charName: args.char.name,
        userName: args.userProfile.name || '用户',
        characterBrief: cleanText(args.char.systemPrompt || args.char.description || '', 900),
        triggerLabel: triggerLabel(args.trigger),
        peekTitle: args.card.title || `${args.char.name} 来看你的手机`,
        peekNarrative: cleanText(args.card.narrative || '', 600),
        deviceSummary: summarizeScreenPeekDeviceSnapshot(args.deviceSnapshot),
        hasScreenFrame: !!frame,
        recentComments: (args.recentComments || []).slice(-4).map(item => item.text),
    });
    const userContent = [
        { type: 'text', text: prompt.user },
        { type: 'image_url', image_url: { url: frame.dataUrl, detail: 'low' } },
    ];

    const raw = await llmComplete(args.api, [
        { role: 'system', content: prompt.system },
        { role: 'user', content: userContent },
    ], {
        temperature: 0.82,
        maxTokens: 180,
        signal: args.signal,
        meta: {
            featureId: 'screen-peek.userPhoneComment',
            featureName: 'TA 窥屏真实手机录屏评论',
            purpose: '生成真实手机录屏悬浮评论',
            appId: AppID.Chat,
            appName: '絮语',
            apiRole: args.api.apiRole,
            apiBinding: args.api.apiBinding,
        },
    });
    const parsed = parseScreenPeekComment(raw);
    if (!parsed) throw new Error('TA 没有生成可显示的评论');
    const observed = pickObservedUserPhoneApp(args.deviceSnapshot);
    const now = Date.now();
    return {
        id: `spc_${now}_${Math.random().toString(36).slice(2, 8)}`,
        createdAt: now,
        trigger: args.trigger,
        observedAppId: observed?.appId ? String(observed.appId) : undefined,
        observedAppName: observed?.appName,
        observedPackageName: observed?.packageName,
        observedScreenCapturedAt: frame.capturedAt,
        deviceSnapshotSource: args.deviceSnapshot.source,
        text: parsed.text,
        tone: parsed.tone,
    };
}
