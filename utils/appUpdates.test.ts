import { afterEach, describe, expect, it, vi } from 'vitest';

const capState = vi.hoisted(() => ({
  platform: 'web',
  native: false,
  pluginAvailable: false,
}));

const appInfoState = vi.hoisted(() => ({
  info: {
    id: 'wb.uniusc9734.tool7',
    name: 'Moro',
    version: '1.0.7.0',
    build: '8',
  },
}));

vi.mock('./buildInfo', () => ({
  APP_VERSION: 'test',
  BUILD_LABEL: 'test@0000000',
}));

vi.mock('@capacitor/core', () => ({
  Capacitor: {
    getPlatform: () => capState.platform,
    isNativePlatform: () => capState.native,
    isPluginAvailable: () => capState.pluginAvailable,
  },
  CapacitorHttp: {
    get: vi.fn(),
    request: vi.fn(),
  },
  registerPlugin: vi.fn(() => ({})),
}));

vi.mock('@capacitor/app', () => ({
  App: {
    getInfo: vi.fn(async () => appInfoState.info),
  },
}));

const latestRelease = {
  tag_name: 'v1.0.3',
  name: 'Moro v1.0.3',
  body: 'Moro 1.0.3 正式版',
  published_at: '2026-06-30T13:57:57Z',
  assets: [
    {
      name: 'moro-update.json',
      browser_download_url: 'https://github.com/SAWA-25/moro-native/releases/download/v1.0.3/moro-update.json',
    },
    {
      name: 'moro.apk',
      browser_download_url: 'https://github.com/SAWA-25/moro-native/releases/download/v1.0.3/moro.apk',
      size: 208374501,
      digest: 'sha256:59ab60cc521a50fa2913e7bf80d6b3724a3ab7567071d1add20d5ec864446c6f',
    },
  ],
};

const iosOnlyRelease = {
  tag_name: 'ios-1.0.7.1',
  name: 'Moro iOS 1.0.7.1',
  body: 'iOS 安装包',
  published_at: '2026-07-05T13:57:57Z',
  assets: [
    {
      name: 'Moro-ios-1.0.7.1.ipa',
      browser_download_url: 'https://github.com/SAWA-25/moro-native/releases/download/ios-1.0.7.1/Moro-ios-1.0.7.1.ipa',
    },
  ],
};

const releaseList = [iosOnlyRelease, latestRelease];

describe('app update manifest', () => {
  afterEach(() => {
    capState.platform = 'web';
    capState.native = false;
    capState.pluginAvailable = false;
    appInfoState.info = {
      id: 'wb.uniusc9734.tool7',
      name: 'Moro',
      version: '1.0.7.0',
      build: '8',
    };
    vi.unstubAllGlobals();
    vi.clearAllMocks();
    vi.resetModules();
  });

  it('falls back to latest release metadata when the manifest asset is stale', async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.startsWith('https://api.github.com/repos/SAWA-25/moro-native/releases?per_page=20')) {
        return Response.json(releaseList);
      }
      if (url.startsWith('https://github.com/SAWA-25/moro-native/releases/download/v1.0.3/moro-update.json')) {
        return Response.json({
          versionCode: 3,
          versionName: '1.0.2',
          apkUrl: 'https://github.com/SAWA-25/moro-native/releases/latest/download/moro.apk',
          releaseNotes: '旧清单',
        });
      }
      throw new Error(`Unexpected URL: ${url}`);
    });
    vi.stubGlobal('fetch', fetchMock);

    const { fetchConfiguredAppUpdateManifest } = await import('./appUpdates');
    const manifest = await fetchConfiguredAppUpdateManifest();

    expect(manifest.versionCode).toBe(4);
    expect(manifest.versionName).toBe('1.0.3');
    expect(manifest.apkUrl).toBe('https://github.com/SAWA-25/moro-native/releases/download/v1.0.3/moro.apk');
    expect(manifest.sha256).toBe('59ab60cc521a50fa2913e7bf80d6b3724a3ab7567071d1add20d5ec864446c6f');
  });

  it('uses the manifest asset when it matches the selected Android release', async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.startsWith('https://api.github.com/repos/SAWA-25/moro-native/releases?per_page=20')) {
        return Response.json(releaseList);
      }
      if (url.startsWith('https://github.com/SAWA-25/moro-native/releases/download/v1.0.3/moro-update.json')) {
        return Response.json({
          versionCode: 4,
          versionName: '1.0.3',
          apkUrl: 'https://github.com/SAWA-25/moro-native/releases/latest/download/moro.apk',
          releaseNotes: '新清单',
        });
      }
      throw new Error(`Unexpected URL: ${url}`);
    });
    vi.stubGlobal('fetch', fetchMock);

    const { fetchConfiguredAppUpdateManifest } = await import('./appUpdates');
    const manifest = await fetchConfiguredAppUpdateManifest();

    expect(manifest.versionCode).toBe(4);
    expect(manifest.versionName).toBe('1.0.3');
    expect(manifest.apkUrl).toBe('https://github.com/SAWA-25/moro-native/releases/download/v1.0.3/moro.apk');
    expect(manifest.releaseNotes).toBe('新清单');
  });

  it('uses the POST GitHub proxy when the direct GitHub releases request fails', async () => {
    const fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
      if (url.startsWith('https://api.github.com/repos/SAWA-25/moro-native/releases?per_page=20')) {
        return new Response('blocked', { status: 503 });
      }
      if (url.startsWith('https://sullymeow.ccwu.cc/github?url=')) {
        expect(init?.method).toBe('POST');
        expect((init?.headers as Record<string, string>)['X-GitHub-Method']).toBe('GET');
        return Response.json(releaseList);
      }
      if (url.startsWith('https://github.com/SAWA-25/moro-native/releases/download/v1.0.3/moro-update.json')) {
        return Response.json({
          versionCode: 4,
          versionName: '1.0.3',
          apkUrl: 'https://github.com/SAWA-25/moro-native/releases/latest/download/moro.apk',
        });
      }
      throw new Error(`Unexpected URL: ${url}`);
    });
    vi.stubGlobal('fetch', fetchMock);

    const { fetchConfiguredAppUpdateManifest } = await import('./appUpdates');
    const manifest = await fetchConfiguredAppUpdateManifest();

    expect(manifest.versionCode).toBe(4);
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringMatching(/^https:\/\/sullymeow\.ccwu\.cc\/github\?url=/),
      expect.objectContaining({
        method: 'POST',
      }),
    );
  });

  it('selects an iOS IPA release and opens through an install manifest', async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.startsWith('https://api.github.com/repos/SAWA-25/moro-native/releases?per_page=20')) {
        return Response.json(releaseList);
      }
      throw new Error(`Unexpected URL: ${url}`);
    });
    vi.stubGlobal('fetch', fetchMock);

    const { fetchConfiguredAppUpdateManifest } = await import('./appUpdates');
    const manifest = await fetchConfiguredAppUpdateManifest('ios');

    expect(manifest.platform).toBe('ios');
    expect(manifest.packageType).toBe('ipa');
    expect(manifest.versionName).toBe('1.0.7.1');
    expect(manifest.ipaUrl).toBe('https://github.com/SAWA-25/moro-native/releases/download/ios-1.0.7.1/Moro-ios-1.0.7.1.ipa');
    expect(manifest.plistUrl).toBe('https://raw.githubusercontent.com/SAWA-25/moro-native/main/release/moro-ios-install.plist');
    expect(manifest.installUrl).toMatch(/^itms-services:\/\/\?action=download-manifest&url=/);
  });

  it('checks iOS updates against the native app version name', async () => {
    capState.platform = 'ios';
    capState.native = true;
    const { CapacitorHttp } = await import('@capacitor/core');
    vi.mocked(CapacitorHttp.get).mockImplementation(async (options: any) => {
      const url = String(options?.url || '');
      if (url.startsWith('https://api.github.com/repos/SAWA-25/moro-native/releases?per_page=20')) {
        return { status: 200, data: releaseList, headers: {}, url };
      }
      throw new Error(`Unexpected URL: ${url}`);
    });

    const { checkConfiguredAppUpdate } = await import('./appUpdates');
    const result = await checkConfiguredAppUpdate();

    expect(result.current.platform).toBe('ios');
    expect(result.latest.platform).toBe('ios');
    expect(result.latest.versionName).toBe('1.0.7.1');
    expect(result.updateAvailable).toBe(true);
  });
});
