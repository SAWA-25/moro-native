import { afterEach, describe, expect, it, vi } from 'vitest';

const capState = vi.hoisted(() => ({
  native: false,
  pluginAvailable: false,
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
}));

vi.mock('@capacitor/core', () => ({
  Capacitor: {
    isNativePlatform: () => capState.native,
    isPluginAvailable: () => capState.pluginAvailable,
  },
}));

vi.mock('@capacitor/live-updates', () => ({
  getConfig: vi.fn(async () => liveState.config),
  sync: vi.fn(async (progress?: (percentage: number) => void) => {
    liveState.progress.forEach(value => progress?.(value));
    if (liveState.syncError) throw liveState.syncError;
    return liveState.syncResult;
  }),
  reload: vi.fn(async () => undefined),
}));

describe('cloud updates', () => {
  afterEach(() => {
    capState.native = false;
    capState.pluginAvailable = false;
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
    localStorage.clear();
    vi.clearAllMocks();
    vi.resetModules();
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
});
