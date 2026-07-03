import { Capacitor, registerPlugin } from '@capacitor/core';
import type { ScreenPeekCaptureFrame, ScreenPeekDeviceSnapshot } from '../types';

interface MoroScreenCapturePlugin {
    getStatus(): Promise<any>;
    openOverlaySettings(): Promise<any>;
    startCapture(options?: { title?: string }): Promise<any>;
    stopCapture(): Promise<any>;
    getLatestFrame(options?: { maxAgeMs?: number }): Promise<any>;
    updateOverlay(options: { title?: string; text: string; tone?: string }): Promise<any>;
}

const MoroScreenCapture = registerPlugin<MoroScreenCapturePlugin>('MoroScreenCapture');

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const unsupportedCaptureSnapshot = (reason: string): ScreenPeekDeviceSnapshot => ({
    source: 'unsupported',
    native: Capacitor.isNativePlatform(),
    platform: Capacitor.getPlatform(),
    capturedAt: Date.now(),
    screenCaptureActive: false,
    overlayPermissionGranted: false,
    canOpenOverlaySettings: false,
    unavailableReason: reason,
});

const normalizeFrame = (raw: any): ScreenPeekCaptureFrame | undefined => {
    const source = raw?.source === 'android_media_projection' ? raw.source : 'android_media_projection';
    const dataUrl = typeof raw?.dataUrl === 'string' ? raw.dataUrl : '';
    if (!dataUrl.startsWith('data:image/')) return undefined;
    return {
        source,
        capturedAt: typeof raw?.capturedAt === 'number' ? raw.capturedAt : Date.now(),
        width: typeof raw?.width === 'number' ? raw.width : undefined,
        height: typeof raw?.height === 'number' ? raw.height : undefined,
        dataUrl,
        mimeType: typeof raw?.mimeType === 'string' ? raw.mimeType : 'image/jpeg',
    };
};

const normalizeCaptureSnapshot = (
    raw: any,
    fallbackSource?: ScreenPeekDeviceSnapshot['source'],
): ScreenPeekDeviceSnapshot => {
    const frame = normalizeFrame(raw?.frame) || normalizeFrame({
        source: 'android_media_projection',
        capturedAt: raw?.latestFrameCapturedAt,
        width: raw?.latestFrameWidth,
        height: raw?.latestFrameHeight,
        dataUrl: raw?.latestFrameDataUrl,
        mimeType: 'image/jpeg',
    });
    const active = raw?.captureActive === true;
    const source = fallbackSource || (active ? 'android_screen_capture' : 'screen_capture_permission_required');
    return {
        source,
        native: !!raw?.native,
        platform: typeof raw?.platform === 'string' ? raw.platform : Capacitor.getPlatform(),
        packageName: typeof raw?.packageName === 'string' ? raw.packageName : undefined,
        capturedAt: typeof raw?.latestFrameCapturedAt === 'number' && raw.latestFrameCapturedAt > 0
            ? raw.latestFrameCapturedAt
            : Date.now(),
        screenCaptureActive: active,
        overlayPermissionGranted: raw?.overlayPermissionGranted === true,
        canOpenOverlaySettings: raw?.canOpenOverlaySettings !== false,
        screenFrame: frame,
        unavailableReason: typeof raw?.unavailableReason === 'string' ? raw.unavailableReason : undefined,
    };
};

export function isRealPhoneScreenCaptureRuntime(): boolean {
    try {
        return Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android' && Capacitor.isPluginAvailable('MoroScreenCapture');
    } catch {
        return false;
    }
}

export async function getRealPhoneScreenCaptureStatus(): Promise<ScreenPeekDeviceSnapshot> {
    if (!isRealPhoneScreenCaptureRuntime()) {
        return unsupportedCaptureSnapshot('当前平台不能录制真实手机屏幕。Android App 授权录屏和悬浮窗后可用；Web/PWA/iOS 不支持。');
    }
    try {
        return normalizeCaptureSnapshot(await MoroScreenCapture.getStatus());
    } catch (error: any) {
        return unsupportedCaptureSnapshot(error?.message || '录屏插件暂不可用。');
    }
}

export async function startRealPhoneScreenCapture(options: { title?: string } = {}): Promise<ScreenPeekDeviceSnapshot> {
    if (!isRealPhoneScreenCaptureRuntime()) {
        return unsupportedCaptureSnapshot('当前平台不能录制真实手机屏幕。Android App 授权录屏和悬浮窗后可用；Web/PWA/iOS 不支持。');
    }
    try {
        let snapshot = normalizeCaptureSnapshot(
            await MoroScreenCapture.startCapture({ title: options.title || 'TA 正在看你的手机' }),
            'android_screen_capture',
        );
        for (let i = 0; i < 8 && (!snapshot.screenCaptureActive || !snapshot.screenFrame); i += 1) {
            await delay(250);
            snapshot = normalizeCaptureSnapshot(await MoroScreenCapture.getLatestFrame(), 'android_screen_capture');
        }
        return snapshot;
    } catch (error: any) {
        const message = error?.message || String(error || '');
        return {
            ...normalizeCaptureSnapshot(await MoroScreenCapture.getStatus().catch(() => ({})), 'screen_capture_permission_required'),
            unavailableReason: /denied|cancel|取消/i.test(message) ? '用户取消了录屏授权。' : (message || '需要先授权录屏。'),
        };
    }
}

export async function stopRealPhoneScreenCapture(): Promise<void> {
    if (!isRealPhoneScreenCaptureRuntime()) return;
    await MoroScreenCapture.stopCapture();
}

export async function openRealPhoneOverlaySettings(): Promise<void> {
    if (!isRealPhoneScreenCaptureRuntime()) throw new Error('当前平台没有可打开的悬浮窗权限页');
    await MoroScreenCapture.openOverlaySettings();
}

export async function getRealPhoneScreenFrame(options: { maxAgeMs?: number } = {}): Promise<ScreenPeekCaptureFrame> {
    if (!isRealPhoneScreenCaptureRuntime()) throw new Error('当前平台不能读取真实屏幕录屏帧');
    const snapshot = normalizeCaptureSnapshot(await MoroScreenCapture.getLatestFrame({ maxAgeMs: options.maxAgeMs }));
    const frame = snapshot.screenFrame;
    if (!snapshot.screenCaptureActive) throw new Error('需要先授权真实手机录屏');
    if (!frame) throw new Error('正在等待第一帧录屏画面');
    if (options.maxAgeMs && Date.now() - frame.capturedAt > options.maxAgeMs) {
        throw new Error('录屏画面太旧，等下一帧再评论');
    }
    return frame;
}

export async function updateRealPhoneCommentOverlay(options: { title?: string; text: string; tone?: string }): Promise<void> {
    if (!isRealPhoneScreenCaptureRuntime()) return;
    await MoroScreenCapture.updateOverlay(options);
}
