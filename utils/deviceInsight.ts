import { Capacitor, registerPlugin } from '@capacitor/core';
import type { ScreenPeekDeviceSnapshot, ScreenPeekObservedApp } from '../types';

interface MoroDeviceInsightPlugin {
    getStatus(): Promise<Partial<ScreenPeekDeviceSnapshot>>;
    openUsageAccessSettings(): Promise<void>;
    getUsageSnapshot(options: { rangeStart?: number; rangeEnd?: number; limit?: number }): Promise<Partial<ScreenPeekDeviceSnapshot>>;
}

const MoroDeviceInsight = registerPlugin<MoroDeviceInsightPlugin>('MoroDeviceInsight');

const asObservedApp = (value: any): ScreenPeekObservedApp | undefined => {
    const appName = typeof value?.appName === 'string' ? value.appName.trim() : '';
    const packageName = typeof value?.packageName === 'string' ? value.packageName.trim() : '';
    if (!appName && !packageName) return undefined;
    return {
        appName: appName || packageName,
        packageName: packageName || undefined,
        isMoro: typeof value?.isMoro === 'boolean' ? value.isMoro : undefined,
        isSystem: typeof value?.isSystem === 'boolean' ? value.isSystem : undefined,
        durationMinutes: typeof value?.durationMinutes === 'number' ? value.durationMinutes : undefined,
        lastTimeUsed: typeof value?.lastTimeUsed === 'number' ? value.lastTimeUsed : undefined,
        startedAt: typeof value?.startedAt === 'number' ? value.startedAt : undefined,
        endedAt: typeof value?.endedAt === 'number' ? value.endedAt : undefined,
        category: typeof value?.category === 'string' ? value.category : undefined,
        note: typeof value?.note === 'string' ? value.note : undefined,
    };
};

const normalizeSnapshot = (
    raw: Partial<ScreenPeekDeviceSnapshot> | null | undefined,
    source: ScreenPeekDeviceSnapshot['source'],
): ScreenPeekDeviceSnapshot => {
    const appUsage = Array.isArray((raw as any)?.appUsage)
        ? (raw as any).appUsage.map(asObservedApp).filter(Boolean).slice(0, 24) as ScreenPeekObservedApp[]
        : undefined;
    return {
        source,
        native: !!raw?.native,
        platform: typeof raw?.platform === 'string' ? raw.platform : Capacitor.getPlatform(),
        packageName: typeof raw?.packageName === 'string' ? raw.packageName : undefined,
        capturedAt: typeof raw?.capturedAt === 'number' ? raw.capturedAt : Date.now(),
        rangeStart: typeof raw?.rangeStart === 'number' ? raw.rangeStart : undefined,
        rangeEnd: typeof raw?.rangeEnd === 'number' ? raw.rangeEnd : undefined,
        usageAccessGranted: typeof raw?.usageAccessGranted === 'boolean' ? raw.usageAccessGranted : undefined,
        canOpenUsageAccessSettings: typeof raw?.canOpenUsageAccessSettings === 'boolean' ? raw.canOpenUsageAccessSettings : undefined,
        currentForegroundApp: asObservedApp((raw as any)?.currentForegroundApp),
        lastExternalApp: asObservedApp((raw as any)?.lastExternalApp),
        appUsage,
        batteryLevel: typeof raw?.batteryLevel === 'number' ? raw.batteryLevel : undefined,
        isCharging: typeof raw?.isCharging === 'boolean' ? raw.isCharging : undefined,
        networkLabel: typeof raw?.networkLabel === 'string' ? raw.networkLabel : undefined,
        deviceLabel: typeof raw?.deviceLabel === 'string' ? raw.deviceLabel : undefined,
        screenTimeMinutes: typeof raw?.screenTimeMinutes === 'number' ? raw.screenTimeMinutes : undefined,
        unlockCount: typeof raw?.unlockCount === 'number' ? raw.unlockCount : undefined,
        unavailableReason: typeof raw?.unavailableReason === 'string' ? raw.unavailableReason : undefined,
    };
};

const unsupportedSnapshot = (reason: string): ScreenPeekDeviceSnapshot => ({
    source: 'unsupported',
    native: Capacitor.isNativePlatform(),
    platform: Capacitor.getPlatform(),
    capturedAt: Date.now(),
    usageAccessGranted: false,
    canOpenUsageAccessSettings: false,
    unavailableReason: reason,
});

export function isRealPhoneInsightRuntime(): boolean {
    try {
        return Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android' && Capacitor.isPluginAvailable('MoroDeviceInsight');
    } catch {
        return false;
    }
}

export async function getRealPhoneInsightStatus(): Promise<ScreenPeekDeviceSnapshot> {
    if (!isRealPhoneInsightRuntime()) {
        return unsupportedSnapshot('当前平台不能读取用户真实手机使用情况。Android App 授权后可用；Web/PWA/iOS 不支持全机窥屏。');
    }
    try {
        const status = await MoroDeviceInsight.getStatus();
        return normalizeSnapshot(status, status?.usageAccessGranted ? 'android_usage_stats' : 'permission_required');
    } catch (error: any) {
        return unsupportedSnapshot(error?.message || '设备洞察插件暂不可用。');
    }
}

export async function openRealPhoneUsageAccessSettings(): Promise<void> {
    if (!isRealPhoneInsightRuntime()) throw new Error('当前平台没有可打开的真实手机使用情况权限页');
    await MoroDeviceInsight.openUsageAccessSettings();
}

export async function getRealPhoneUsageSnapshot(options: {
    rangeStart?: number;
    rangeEnd?: number;
    limit?: number;
} = {}): Promise<ScreenPeekDeviceSnapshot> {
    if (!isRealPhoneInsightRuntime()) {
        return unsupportedSnapshot('当前平台不能读取用户真实手机使用情况。Android App 授权后可用；Web/PWA/iOS 不支持全机窥屏。');
    }
    try {
        const status = await MoroDeviceInsight.getStatus();
        if (!status?.usageAccessGranted) {
            return normalizeSnapshot(status, 'permission_required');
        }
        const snapshot = await MoroDeviceInsight.getUsageSnapshot({
            rangeStart: options.rangeStart,
            rangeEnd: options.rangeEnd,
            limit: options.limit ?? 12,
        });
        return normalizeSnapshot(snapshot, 'android_usage_stats');
    } catch (error: any) {
        const message = error?.message || String(error || '');
        if (/USAGE_ACCESS_REQUIRED|使用情况|Usage/i.test(message)) {
            const status = await getRealPhoneInsightStatus();
            return { ...status, source: 'permission_required', unavailableReason: message };
        }
        return unsupportedSnapshot(message || '无法读取真实手机使用情况。');
    }
}
