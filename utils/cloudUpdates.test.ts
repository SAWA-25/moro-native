import { afterEach, describe, expect, it, vi } from 'vitest';

const capState = vi.hoisted(() => ({
  native: false,
  pluginAvailable: false,
  moroPluginAvailable: false,
}));

const liveState = vi.hoisted(() => ({
  config: {
    appId: 'app-123',
    channel: 'Production',
    enabled: true,
  },
  progress: [] as number[],
  syncResult: {
    liveUpdate: { appId: 'app-123', channel: 'Production' },
    snapshot: { id: 'snap-1', buildId: 'build-1' },
    source: 'download' as const,
    activeApplicationPathChanged: true,
  },
  syncError: null as any,
  syncErrors: [] as any[],
  moroSyncError: null as any,
  moroSyncErrors: [] as any[],
  getConfigError: null as any,
  reloadError: null as any,
  moroGetConfig: vi.fn(async () => liveState.config),
  moroSync: vi.fn(async (_options: Record<string, never>, callback: (result: any) => void) => {
    liveState.progress.forEach(value => callback({ progress: value }));
    const syncError = liveState.moroSyncErrors.length > 0 ? liveState.moroSyncErrors.shift() : liveState.moroSyncError;
    if (syncError) {
      callback({ failStep: 'CHECK', message: syncError.message || 'sync failed' });
      return '';
    }
    callback(liveState.syncResult);
    return '';
  }),
  moroReload: vi.fn(async () => undefined),
}));

vi.mock('@capacitor/core', () => ({
  Capacitor: {
    isNativePlatform: () => capState.native,
    isPluginAvailable: (name: string) => name === 'MoroLiveUpdates' ? capState.moroPluginAvailable : capState.pluginAvailable,
  },
  registerPlugin: vi.fn(() => ({
    getConfig: liveState.moroGetConfig,
    sync: liveState.moroSync,
    reload: liveState.moroReload,
  })),
}));

vi.mock('@capacitor/live-updates', () => ({
  getConfig: vi.fn(async () => {
    if (liveState.getConfigError) throw liveState.getConfigError;
    return liveState.config;
  }),
  sync: vi.fn(async (progress?: (percentage: number) => void) => {
    liveState.progress.forEach(value => progress?.(value));
    const syncError = liveState.syncErrors.length > 0 ? liveState.syncErrors.shift() : liveState.syncError;
    if (syncError) throw syncError;
    return liveState.syncResult;
  }),
  reload: vi.fn(async () => {
    if (liveState.reloadError) throw liveState.reloadError;
    return undefined;
  }),
}));

describe('cloud updates', () => {
  afterEach(() => {
    capState.native = false;
    capState.pluginAvailable = false;
    capState.moroPluginAvailable = false;
    liveState.config = {
      appId: 'app-123',
      channel: 'Production',
      enabled: true,
    };
    liveState.progress = [];
    liveState.syncResult = {
      liveUpdate: { appId: 'app-123', channel: 'Production' },
      snapshot: { id: 'snap-1', buildId: 'build-1' },
      source: 'download',
      activeApplicationPathChanged: true,
    };
    liveState.syncError = null;
    liveState.syncErrors = [];
    liveState.moroSyncError = null;
    liveState.moroSyncErrors = [];
    liveState.getConfigError = null;
    liveState.reloadError = null;
    liveState.moroGetConfig.mockClear();
    liveState.moroSync.mockClear();
    liveState.moroReload.mockClear();
    localStorage.clear();
    vi.clearAllMocks();
    vi.resetModules();
    vi.useRealTimers();
  });

  it('does not check live updates outside the native app', async () => {
    const liveUpdates = await import('@capacitor/live-updates');
    const { syncCloudUpdate } = await import('./cloudUpdates');

    const result = await syncCloudUpdate();

    expect(result.status).toBe('unsupported');
    expect(result.updateAvailable).toBe(false);
    expect(liveUpdates.sync).not.toHaveBeenCalled();
  });

  it('treats an unset Appflow app id as disabled', async () => {
    capState.native = true;
    capState.pluginAvailable = true;
    liveState.config = { appId: 'unset', channel: 'Production', enabled: false };
    const liveUpdates = await import('@capacitor/live-updates');
    const { syncCloudUpdate } = await import('./cloudUpdates');

    const result = await syncCloudUpdate();

    expect(result.status).toBe('disabled');
    expect(result.configured).toBe(false);
    expect(liveUpdates.sync).not.toHaveBeenCalled();
  });

  it('uses the native live update config even when the plugin registry is stale', async () => {
    capState.native = true;
    capState.pluginAvailable = false;
    const liveUpdates = await import('@capacitor/live-updates');
    const { syncCloudUpdate } = await import('./cloudUpdates');

    const result = await syncCloudUpdate();

    expect(result.status).toBe('ready');
    expect(result.supported).toBe(true);
    expect(liveUpdates.getConfig).toHaveBeenCalledTimes(1);
    expect(liveUpdates.sync).toHaveBeenCalledTimes(1);
  });

  it('falls back to the Moro native bridge when the official live update bridge is missing', async () => {
    capState.native = true;
    capState.pluginAvailable = false;
    capState.moroPluginAvailable = true;
    liveState.getConfigError = new Error('LiveUpdates bridge unavailable');
    liveState.syncError = new Error('LiveUpdates bridge unavailable');
    const liveUpdates = await import('@capacitor/live-updates');
    const { syncCloudUpdate } = await import('./cloudUpdates');

    const result = await syncCloudUpdate();

    expect(result.status).toBe('ready');
    expect(result.supported).toBe(true);
    expect(liveUpdates.getConfig).toHaveBeenCalledTimes(1);
    expect(liveUpdates.sync).toHaveBeenCalledTimes(1);
    expect(liveState.moroGetConfig).toHaveBeenCalledTimes(1);
    expect(liveState.moroSync).toHaveBeenCalledTimes(1);
  });

  it('reports a ready cloud update and normalizes progress', async () => {
    capState.native = true;
    capState.pluginAvailable = true;
    liveState.progress = [0.25, 50, 100];
    const progress: number[] = [];
    const { syncCloudUpdate } = await import('./cloudUpdates');

    const result = await syncCloudUpdate(value => progress.push(value));

    expect(result.status).toBe('ready');
    expect(result.updateAvailable).toBe(true);
    expect(result.snapshotId).toBe('snap-1');
    expect(progress).toEqual([0.25, 0.5, 1]);
  });

  it('retries transient sync-already-in-progress results', async () => {
    vi.useFakeTimers();
    capState.native = true;
    capState.pluginAvailable = true;
    const busyError = { failStep: 'CHECK', message: 'Live Update failed on CHECK step. Reason: Sync already in progress.' };
    liveState.syncErrors = [busyError];
    const liveUpdates = await import('@capacitor/live-updates');
    const { syncCloudUpdate } = await import('./cloudUpdates');

    const pending = syncCloudUpdate();
    await vi.runOnlyPendingTimersAsync();
    const result = await pending;

    expect(result.status).toBe('ready');
    expect(liveUpdates.sync).toHaveBeenCalledTimes(2);
  });

  it('marks a dismissed snapshot so it does not prompt again', async () => {
    capState.native = true;
    capState.pluginAvailable = true;
    const { markCloudUpdatePromptDismissed, shouldPromptCloudUpdate, syncCloudUpdate } = await import('./cloudUpdates');

    const result = await syncCloudUpdate();

    expect(shouldPromptCloudUpdate(result)).toBe(true);
    markCloudUpdatePromptDismissed(result);
    expect(shouldPromptCloudUpdate(result)).toBe(false);
  });

  it('marks a notified snapshot so the desktop notice is not sent repeatedly', async () => {
    capState.native = true;
    capState.pluginAvailable = true;
    const { markCloudUpdateNotified, shouldNotifyCloudUpdate, syncCloudUpdate } = await import('./cloudUpdates');

    const result = await syncCloudUpdate();

    expect(shouldNotifyCloudUpdate(result)).toBe(true);
    markCloudUpdateNotified(result);
    expect(shouldNotifyCloudUpdate(result)).toBe(false);
  });

  it('reloads through the live updates plugin when applying in native runtime', async () => {
    capState.native = true;
    capState.pluginAvailable = false;
    const liveUpdates = await import('@capacitor/live-updates');
    const { applyCloudUpdate } = await import('./cloudUpdates');

    await applyCloudUpdate();

    expect(liveUpdates.reload).toHaveBeenCalledTimes(1);
  });

  it('falls back to the Moro native bridge when reloading', async () => {
    capState.native = true;
    capState.pluginAvailable = false;
    capState.moroPluginAvailable = true;
    liveState.reloadError = new Error('LiveUpdates bridge unavailable');
    const { applyCloudUpdate } = await import('./cloudUpdates');

    await applyCloudUpdate();

    expect(liveState.moroReload).toHaveBeenCalledTimes(1);
  });
});
