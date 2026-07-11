import { Capacitor, registerPlugin } from '@capacitor/core';
import {
  getConfig as getLiveUpdateConfig,
  reload as reloadLiveUpdate,
  sync as syncLiveUpdate,
  type LiveUpdateConfig,
  type SyncResult,
} from '@capacitor/live-updates';

export type CloudUpdateStatus = 'unsupported' | 'disabled' | 'up-to-date' | 'ready' | 'error';

export interface CloudUpdateConfigStatus {
  supported: boolean;
  configured: boolean;
  enabled: boolean;
  appId?: string;
  channel?: string;
  message: string;
}

export interface CloudUpdateCheckResult extends CloudUpdateConfigStatus {
  status: CloudUpdateStatus;
  updateAvailable: boolean;
  source?: SyncResult['source'];
  snapshotId?: string;
  buildId?: string;
}

export type CloudUpdateReadyResult = CloudUpdateCheckResult & {
  status: 'ready';
  updateAvailable: true;
};

const CLOUD_UPDATE_DISMISSED_KEY = 'moro_cloud_update_dismissed_snapshot';
const CLOUD_UPDATE_NOTIFIED_KEY = 'moro_cloud_update_notified_snapshot';

let activeSync: Promise<CloudUpdateCheckResult> | null = null;

interface MoroLiveUpdatesPlugin {
  getConfig(): Promise<LiveUpdateConfig>;
  reload(): Promise<void>;
  sync(
    options: Record<string, never>,
    callback: (result: SyncResult | { progress: number } | { failStep: string; message: string; appId?: string }) => void,
  ): Promise<string>;
}

const MoroLiveUpdates = registerPlugin<MoroLiveUpdatesPlugin>('MoroLiveUpdates');

const cleanString = (value: unknown): string => (typeof value === 'string' ? value.trim() : '');

const hasLiveUpdatePlugin = (): boolean => {
  try {
    return Capacitor.isNativePlatform() && Capacitor.isPluginAvailable('LiveUpdates');
  } catch {
    return false;
  }
};

const isUsableAppflowAppId = (value: unknown): value is string => {
  const appId = cleanString(value);
  return !!appId && appId.toLowerCase() !== 'unset';
};

const messageFromError = (error: unknown): string => {
  const raw = error as { message?: unknown; failStep?: unknown } | null;
  const step = cleanString(raw?.failStep);
  const message = cleanString(raw?.message) || '云端更新检查失败';
  return step ? `${message}（${step}）` : message;
};

const normalizeProgress = (value: number): number => {
  if (!Number.isFinite(value) || value <= 0) return 0;
  if (value > 1) return Math.min(1, value / 100);
  return Math.min(1, value);
};

const getCloudLiveUpdateConfig = async (): Promise<LiveUpdateConfig> => {
  try {
    return await getLiveUpdateConfig();
  } catch (error) {
    if (!Capacitor.isNativePlatform()) throw error;
    try {
      return await MoroLiveUpdates.getConfig();
    } catch {
      throw error;
    }
  }
};

const syncMoroLiveUpdate = async (onProgress?: (progress: number) => void): Promise<SyncResult> =>
  new Promise((resolve, reject) => {
    MoroLiveUpdates.sync({}, (result) => {
      if ('progress' in result) {
        onProgress?.(result.progress);
      } else if ('failStep' in result) {
        reject(result);
      } else {
        resolve(result);
      }
    }).catch(reject);
  });

const syncCloudLiveUpdate = async (onProgress?: (progress: number) => void): Promise<SyncResult> => {
  try {
    return await syncLiveUpdate(onProgress);
  } catch (error) {
    if (!Capacitor.isNativePlatform()) throw error;
    try {
      return await syncMoroLiveUpdate(onProgress);
    } catch {
      throw error;
    }
  }
};

const reloadCloudLiveUpdate = async (): Promise<void> => {
  try {
    await reloadLiveUpdate();
  } catch (error) {
    if (!Capacitor.isNativePlatform()) throw error;
    try {
      await MoroLiveUpdates.reload();
    } catch {
      throw error;
    }
  }
};

export async function getCloudUpdateConfigStatus(): Promise<CloudUpdateConfigStatus> {
  if (!Capacitor.isNativePlatform()) {
    return {
      supported: false,
      configured: false,
      enabled: false,
      message: '云端功能更新仅支持手机安装版。',
    };
  }

  const pluginAdvertised = hasLiveUpdatePlugin();

  try {
    const config: LiveUpdateConfig = await getCloudLiveUpdateConfig();
    const appId = cleanString(config.appId);
    const channel = cleanString(config.channel) || 'Production';
    const configured = isUsableAppflowAppId(appId);
    const enabled = configured && config.enabled !== false;
    return {
      supported: true,
      configured,
      enabled,
      appId: configured ? appId : undefined,
      channel,
      message: enabled
        ? `云端功能更新已接入 ${channel} 通道。`
        : configured
          ? '云端功能更新通道已配置，但当前安装包关闭了自动更新。'
          : '云端功能更新通道暂未配置。',
    };
  } catch (error) {
    if (!pluginAdvertised) {
      return {
        supported: false,
        configured: false,
        enabled: false,
        message: '当前安装包还没有接入云端功能更新。',
      };
    }
    return {
      supported: true,
      configured: false,
      enabled: false,
      message: messageFromError(error),
    };
  }
}

export async function syncCloudUpdate(
  onProgress?: (progress: number) => void,
): Promise<CloudUpdateCheckResult> {
  if (activeSync) return activeSync;

  activeSync = (async () => {
    const config = await getCloudUpdateConfigStatus();
    if (!config.supported) {
      return { ...config, status: 'unsupported', updateAvailable: false };
    }
    if (!config.enabled) {
      return { ...config, status: 'disabled', updateAvailable: false };
    }

    try {
      const result = await syncCloudLiveUpdate((progress) => {
        onProgress?.(normalizeProgress(progress));
      });
      const updateAvailable = !!result.activeApplicationPathChanged;
      return {
        ...config,
        status: updateAvailable ? 'ready' : 'up-to-date',
        updateAvailable,
        source: result.source,
        snapshotId: result.snapshot?.id,
        buildId: result.snapshot?.buildId,
        message: updateAvailable
          ? '云端功能更新已准备好，点一键更新即可生效。'
          : '云端功能包已是最新。',
      };
    } catch (error) {
      return {
        ...config,
        status: 'error',
        updateAvailable: false,
        message: messageFromError(error),
      };
    }
  })();

  try {
    return await activeSync;
  } finally {
    activeSync = null;
  }
}

export async function applyCloudUpdate(): Promise<void> {
  if (Capacitor.isNativePlatform()) {
    await reloadCloudLiveUpdate();
    return;
  }
  if (typeof window !== 'undefined') window.location.reload();
}

export const isCloudUpdateReady = (result: CloudUpdateCheckResult | null | undefined): result is CloudUpdateReadyResult =>
  !!result?.updateAvailable && result.status === 'ready';

export const keyForCloudUpdate = (result: CloudUpdateCheckResult): string =>
  result.snapshotId || result.buildId || [result.appId, result.channel, result.source].filter(Boolean).join(':');

export function shouldPromptCloudUpdate(result: CloudUpdateCheckResult | null | undefined): boolean {
  if (!isCloudUpdateReady(result)) return false;
  const key = keyForCloudUpdate(result);
  if (!key) return true;
  try {
    return localStorage.getItem(CLOUD_UPDATE_DISMISSED_KEY) !== key;
  } catch {
    return true;
  }
}

export function markCloudUpdatePromptDismissed(result: CloudUpdateCheckResult | null | undefined): void {
  if (!isCloudUpdateReady(result)) return;
  const key = keyForCloudUpdate(result);
  if (!key) return;
  try {
    localStorage.setItem(CLOUD_UPDATE_DISMISSED_KEY, key);
  } catch {
    // ignore
  }
}

export function shouldNotifyCloudUpdate(result: CloudUpdateCheckResult | null | undefined): boolean {
  if (!isCloudUpdateReady(result)) return false;
  const key = keyForCloudUpdate(result);
  if (!key) return true;
  try {
    return localStorage.getItem(CLOUD_UPDATE_NOTIFIED_KEY) !== key;
  } catch {
    return true;
  }
}

export function markCloudUpdateNotified(result: CloudUpdateCheckResult | null | undefined): void {
  if (!isCloudUpdateReady(result)) return;
  const key = keyForCloudUpdate(result);
  if (!key) return;
  try {
    localStorage.setItem(CLOUD_UPDATE_NOTIFIED_KEY, key);
  } catch {
    // ignore
  }
}
