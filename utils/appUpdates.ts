import { Capacitor, CapacitorHttp, registerPlugin, type PluginListenerHandle } from '@capacitor/core';
import { App as CapApp } from '@capacitor/app';
import { APP_VERSION } from './buildInfo';

const GITHUB_RELEASE_MANIFEST_ASSET = 'moro-update.json';
const DEFAULT_RELEASE_OWNER = 'SAWA-25';
const DEFAULT_RELEASE_REPO = 'moro-native';
const DEFAULT_GITHUB_PROXY_URL = 'https://sullymeow.ccwu.cc/github?url=';

export type AppUpdatePlatform = 'android' | 'ios';
export type AppUpdatePackageKind = 'apk' | 'ipa' | 'url';

export interface NativeAppInfo {
  native: boolean;
  platform: string;
  packageName: string;
  versionName: string;
  versionCode: number | string;
  canRequestPackageInstalls: boolean;
}

export interface AppUpdateManifest {
  platform?: AppUpdatePlatform;
  packageKind?: AppUpdatePackageKind;
  versionCode: number;
  versionName: string;
  downloadUrl?: string;
  apkUrl: string;
  ipaUrl?: string;
  domesticApkUrl?: string;
  domesticIpaUrl?: string;
  domesticDownloadUrl?: string;
  sha256?: string;
  sizeBytes?: number;
  releaseNotes?: string;
  mandatory?: boolean;
  publishedAt?: string;
}

export interface AppUpdateCheckResult {
  current: NativeAppInfo;
  latest: AppUpdateManifest;
  updateAvailable: boolean;
}

export interface ApkDownloadProgress {
  status: 'start' | 'downloading' | 'verifying' | 'installing' | 'done';
  receivedBytes: number;
  totalBytes: number;
  progress: number;
}

interface MoroUpdaterPlugin {
  getInfo(): Promise<NativeAppInfo>;
  openInstallSettings(): Promise<void>;
  downloadAndInstall(options: { url: string; fileName?: string; sha256?: string }): Promise<{ fileName: string; bytes: number }>;
  addListener(eventName: 'downloadProgress', listenerFunc: (event: ApkDownloadProgress) => void): Promise<PluginListenerHandle>;
}

const MoroUpdater = registerPlugin<MoroUpdaterPlugin>('MoroUpdater');

const envManifestUrl = () => (import.meta.env.VITE_MORO_UPDATE_MANIFEST_URL || '').trim();
const envReleaseOwner = () => (import.meta.env.VITE_MORO_RELEASE_OWNER || DEFAULT_RELEASE_OWNER).trim();
const envReleaseRepo = () => (import.meta.env.VITE_MORO_RELEASE_REPO || DEFAULT_RELEASE_REPO).trim();
const envReleaseApiUrl = () => (import.meta.env.VITE_MORO_RELEASE_API_URL || '').trim();
const envGithubProxyUrl = () => (import.meta.env.VITE_MORO_GITHUB_PROXY_URL || DEFAULT_GITHUB_PROXY_URL).trim();

const getUpdatePlatform = (platform = Capacitor.getPlatform()): AppUpdatePlatform =>
  platform === 'ios' ? 'ios' : 'android';

export function hasConfiguredAppUpdateSource(): boolean {
  return !!envManifestUrl() || !!envReleaseApiUrl() || (!!envReleaseOwner() && !!envReleaseRepo());
}

export async function getNativeAppInfo(): Promise<NativeAppInfo> {
  const platform = Capacitor.getPlatform();
  const fallback: NativeAppInfo = {
    native: Capacitor.isNativePlatform(),
    platform,
    packageName: '',
    versionName: APP_VERSION,
    versionCode: 0,
    canRequestPackageInstalls: false,
  };

  if (!Capacitor.isNativePlatform()) return fallback;

  if (Capacitor.isPluginAvailable('MoroUpdater')) {
    try {
      return await MoroUpdater.getInfo();
    } catch {
      // Fall through to Capacitor App info below.
    }
  }

  try {
    const info = await CapApp.getInfo();
    const buildNumber = Number(info.build);
    return {
      native: true,
      platform,
      packageName: info.id || '',
      versionName: info.version || APP_VERSION,
      versionCode: Number.isFinite(buildNumber) ? buildNumber : (info.build || 0),
      canRequestPackageInstalls: platform !== 'android',
    };
  } catch {
    return fallback;
  }
}

const pickString = (...values: unknown[]): string => {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return '';
};

const pickNumber = (...values: unknown[]): number => {
  for (const value of values) {
    const n = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : NaN;
    if (Number.isFinite(n)) return n;
  }
  return NaN;
};

const normalizeNotes = (value: unknown): string | undefined => {
  if (Array.isArray(value)) {
    const notes = value.map(v => sanitizeAppUpdateDisplayText(String(v).trim())).filter(Boolean).join('\n');
    return notes || undefined;
  }
  if (typeof value === 'string' && value.trim()) return sanitizeAppUpdateDisplayText(value.trim());
  return undefined;
};

export const sanitizeAppUpdateDisplayText = (value: string): string =>
  value
    .replace(/https?:\/\/[^\s<>"'，。！？、)）\]}]+/gi, '[链接已隐藏]')
    .replace(/\b(?:www\.)?github\.com\/[^\s<>"'，。！？、)）\]}]+/gi, '[链接已隐藏]');

export const getAppUpdateUserErrorMessage = (fallback = '更新失败，请稍后重试。'): string => fallback;

const isGithubUrl = (url: string): boolean => {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === 'github.com' || host === 'api.github.com' || host === 'uploads.github.com' || host.endsWith('.githubusercontent.com');
  } catch {
    return false;
  }
};

const proxifyGithubUrl = (url: string): string | undefined => {
  const proxy = envGithubProxyUrl();
  if (!proxy || !isGithubUrl(url)) return undefined;
  if (proxy.includes('{url}')) return proxy.replace('{url}', encodeURIComponent(url));
  const glue = proxy.endsWith('=') || proxy.endsWith('/') ? '' : proxy.includes('?') ? '&url=' : '?url=';
  return `${proxy}${glue}${encodeURIComponent(url)}`;
};

const addCacheBust = (url: string): string => {
  const bust = url.includes('?') ? '&' : '?';
  return `${url}${bust}_=${Date.now()}`;
};

const fetchJsonNoStore = async (url: string, headers: Record<string, string> = {}): Promise<any> => {
  const requestUrl = addCacheBust(url);
  if (Capacitor.isNativePlatform()) {
    const res = await CapacitorHttp.get({ url: requestUrl, headers });
    if (res.status < 200 || res.status >= 300) throw new Error(`HTTP ${res.status}`);
    if (typeof res.data === 'string') return JSON.parse(res.data.replace(/^\uFEFF/, ''));
    return res.data;
  }

  const res = await fetch(requestUrl, { cache: 'no-store', headers });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};

const fetchGithubJsonViaProxyNoStore = async (url: string, headers: Record<string, string> = {}): Promise<any> => {
  const requestUrl = addCacheBust(url);
  const proxiedUrl = proxifyGithubUrl(requestUrl);
  if (!proxiedUrl) throw new Error('GitHub 代理暂不可用');
  const proxyHeaders = { ...headers, 'X-GitHub-Method': 'GET' };

  if (Capacitor.isNativePlatform()) {
    const res = await CapacitorHttp.request({ url: proxiedUrl, method: 'POST', headers: proxyHeaders });
    if (res.status < 200 || res.status >= 300) throw new Error(`HTTP ${res.status}`);
    if (typeof res.data === 'string') return JSON.parse(res.data.replace(/^\uFEFF/, ''));
    return res.data;
  }

  const res = await fetch(proxiedUrl, { method: 'POST', cache: 'no-store', headers: proxyHeaders });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return JSON.parse((await res.text()).replace(/^\uFEFF/, ''));
};

const fetchGithubJsonNoStore = async (url: string, headers: Record<string, string> = {}): Promise<any> => {
  try {
    return await fetchJsonNoStore(url, headers);
  } catch (directError) {
    try {
      return await fetchGithubJsonViaProxyNoStore(url, headers);
    } catch {
      throw directError;
    }
  }
};

const versionFromReleaseTag = (value: unknown): string => {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  if (!trimmed) return '';
  const match = trimmed.match(/v?\d+(?:\.\d+){1,3}/i);
  return match ? match[0].replace(/^v/i, '') : trimmed;
};

const versionCodeFromVersionName = (versionName: string): number => {
  const match = versionName.match(/^1\.0\.(\d+)$/);
  if (!match) return NaN;
  const patch = Number(match[1]);
  return Number.isFinite(patch) ? patch + 1 : NaN;
};

const inferReleaseVersionCode = (release: GitHubRelease, apkName?: string): number => {
  const explicit = parseVersionCodeFromText(release.body, release.name, release.tag_name, apkName);
  if (Number.isFinite(explicit) && explicit > 0) return explicit;
  const versionName = versionFromReleaseTag(release.tag_name) || versionFromReleaseTag(release.name);
  const fromVersionName = versionCodeFromVersionName(versionName);
  return Number.isFinite(fromVersionName) && fromVersionName > 0 ? Math.floor(fromVersionName) : NaN;
};

const isDifferentReleaseManifest = (manifest: AppUpdateManifest, release: GitHubRelease): boolean => {
  const releaseVersionName = versionFromReleaseTag(release.tag_name) || versionFromReleaseTag(release.name);
  if (releaseVersionName && versionFromReleaseTag(manifest.versionName) !== releaseVersionName) return true;

  const releaseVersionCode = inferReleaseVersionCode(release);
  return Number.isFinite(releaseVersionCode) && releaseVersionCode > 0 && manifest.versionCode !== releaseVersionCode;
};

const getPlatformData = (data: any, platform: AppUpdatePlatform): any => {
  if (!data || typeof data !== 'object') return {};
  if (platform === 'ios') return data.ios || data.iOS || data.apple || {};
  return data.android || {};
};

const packageKindFromUrl = (platform: AppUpdatePlatform, url: string): AppUpdatePackageKind => {
  if (platform === 'android') return 'apk';
  try {
    const path = new URL(url).pathname.toLowerCase();
    return path.endsWith('.ipa') ? 'ipa' : 'url';
  } catch {
    return /\.ipa(?:$|\?)/i.test(url) ? 'ipa' : 'url';
  }
};

const parseAppUpdateManifest = (
  data: any,
  baseUrl: string,
  fallbackApkUrl?: string,
  fallbackIpaUrl?: string,
): AppUpdateManifest => {
  const platform = getUpdatePlatform();
  const scoped = getPlatformData(data, platform);
  const versionCode = pickNumber(
    scoped.versionCode,
    scoped.version_code,
    scoped.buildNumber,
    scoped.build_number,
    scoped.build,
    data?.[`${platform}VersionCode`],
    data?.[`${platform}_version_code`],
    data?.versionCode,
    data?.version_code,
  );
  const versionName = pickString(
    scoped.versionName,
    scoped.version_name,
    scoped.version,
    data?.[`${platform}VersionName`],
    data?.[`${platform}_version_name`],
    data?.versionName,
    data?.version_name,
    `v${versionCode}`,
  );
  const rawDownloadUrl = platform === 'ios'
    ? pickString(
      scoped.ipaUrl,
      scoped.ipa_url,
      scoped.downloadUrl,
      scoped.download_url,
      scoped.installUrl,
      scoped.install_url,
      scoped.appStoreUrl,
      scoped.app_store_url,
      data?.iosIpaUrl,
      data?.ios_ipa_url,
      data?.ipaUrl,
      data?.ipa_url,
      data?.iosDownloadUrl,
      data?.ios_download_url,
      data?.iosInstallUrl,
      data?.ios_install_url,
      data?.appStoreUrl,
      data?.app_store_url,
      fallbackIpaUrl,
    )
    : pickString(
      scoped.apkUrl,
      scoped.apk_url,
      scoped.downloadUrl,
      scoped.download_url,
      data?.apkUrl,
      data?.apk_url,
      data?.downloadUrl,
      data?.download_url,
      fallbackApkUrl,
    );
  const rawDomesticDownloadUrl = platform === 'ios'
    ? pickString(
      scoped.domesticIpaUrl,
      scoped.domestic_ipa_url,
      scoped.cnIpaUrl,
      scoped.cn_ipa_url,
      scoped.ipaUrlCn,
      scoped.ipa_url_cn,
      scoped.mirrorIpaUrl,
      scoped.mirror_ipa_url,
      scoped.domesticDownloadUrl,
      scoped.domestic_download_url,
      data?.domesticIpaUrl,
      data?.domestic_ipa_url,
      data?.cnIpaUrl,
      data?.cn_ipa_url,
      data?.ipaUrlCn,
      data?.ipa_url_cn,
      data?.mirrorIpaUrl,
      data?.mirror_ipa_url,
      data?.domesticDownloadUrl,
      data?.domestic_download_url,
    )
    : pickString(
      scoped.domesticApkUrl,
      scoped.domestic_apk_url,
      scoped.cnApkUrl,
      scoped.cn_apk_url,
      scoped.apkUrlCn,
      scoped.apk_url_cn,
      scoped.mirrorApkUrl,
      scoped.mirror_apk_url,
      scoped.domesticDownloadUrl,
      scoped.domestic_download_url,
      data?.domesticApkUrl,
      data?.domestic_apk_url,
      data?.cnApkUrl,
      data?.cn_apk_url,
      data?.apkUrlCn,
      data?.apk_url_cn,
      data?.mirrorApkUrl,
      data?.mirror_apk_url,
      data?.domesticDownloadUrl,
      data?.domestic_download_url,
    );

  if (!Number.isFinite(versionCode) || versionCode <= 0) throw new Error('更新信息缺少有效版本号');
  if (!rawDownloadUrl) throw new Error(platform === 'ios' ? 'iOS 更新包暂不可用' : '更新包暂不可用');

  const downloadUrl = new URL(rawDownloadUrl, baseUrl).href;
  const explicitDomesticDownloadUrl = rawDomesticDownloadUrl ? new URL(rawDomesticDownloadUrl, baseUrl).href : '';
  const domesticDownloadUrl = explicitDomesticDownloadUrl || proxifyGithubUrl(downloadUrl);
  const sizeBytes = pickNumber(scoped.sizeBytes, scoped.size_bytes, data?.sizeBytes, data?.size_bytes);
  const sha256 = pickString(scoped.sha256, scoped.sha256sum, data?.sha256, data?.sha256sum).replace(/\s+/g, '').toLowerCase();
  const packageKind = packageKindFromUrl(platform, downloadUrl);

  return {
    platform,
    packageKind,
    versionCode: Math.floor(versionCode),
    versionName,
    downloadUrl,
    apkUrl: downloadUrl,
    ipaUrl: platform === 'ios' ? downloadUrl : undefined,
    domesticApkUrl: platform === 'android' ? domesticDownloadUrl : undefined,
    domesticIpaUrl: platform === 'ios' ? domesticDownloadUrl : undefined,
    domesticDownloadUrl,
    sha256: sha256 || undefined,
    sizeBytes: Number.isFinite(sizeBytes) && sizeBytes > 0 ? Math.floor(sizeBytes) : undefined,
    releaseNotes: normalizeNotes(scoped.releaseNotes ?? scoped.release_notes ?? scoped.notes ?? data?.releaseNotes ?? data?.release_notes ?? data?.notes),
    mandatory: Boolean(scoped.mandatory ?? data?.mandatory),
    publishedAt: pickString(scoped.publishedAt, scoped.published_at, data?.publishedAt, data?.published_at) || undefined,
  };
};

export async function fetchAppUpdateManifest(manifestUrl: string, fallbackApkUrl?: string, fallbackIpaUrl?: string): Promise<AppUpdateManifest> {
  const url = manifestUrl.trim();
  if (!url) throw new Error('更新通道暂未接入');
  const data = isGithubUrl(url) ? await fetchGithubJsonNoStore(url) : await fetchJsonNoStore(url);
  return parseAppUpdateManifest(data, url, fallbackApkUrl, fallbackIpaUrl);
}

interface GitHubReleaseAsset {
  name?: string;
  url?: string;
  browser_download_url?: string;
  size?: number;
  digest?: string;
}

interface GitHubRelease {
  tag_name?: string;
  name?: string;
  body?: string;
  published_at?: string;
  html_url?: string;
  assets?: GitHubReleaseAsset[];
}

const parseSha256Digest = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  const digest = value.trim().toLowerCase();
  const stripped = digest.startsWith('sha256:') ? digest.slice('sha256:'.length) : digest;
  return /^[a-f0-9]{64}$/.test(stripped) ? stripped : undefined;
};

const findApkAsset = (assets: GitHubReleaseAsset[], preferredName?: string): GitHubReleaseAsset | undefined => {
  if (preferredName) {
    const exact = assets.find(asset => asset.name === preferredName);
    if (exact?.browser_download_url) return exact;
  }
  return assets.find(asset => /\.apk$/i.test(asset.name || '') && /moro/i.test(asset.name || '') && !!asset.browser_download_url)
    || assets.find(asset => /\.apk$/i.test(asset.name || '') && !!asset.browser_download_url);
};

const findIpaAsset = (assets: GitHubReleaseAsset[], preferredName?: string): GitHubReleaseAsset | undefined => {
  if (preferredName) {
    const exact = assets.find(asset => asset.name === preferredName);
    if (exact?.browser_download_url) return exact;
  }
  return assets.find(asset => /\.ipa$/i.test(asset.name || '') && /moro/i.test(asset.name || '') && !!asset.browser_download_url)
    || assets.find(asset => /\.ipa$/i.test(asset.name || '') && !!asset.browser_download_url);
};

const parseVersionCodeFromText = (...values: unknown[]): number => {
  for (const value of values) {
    if (typeof value !== 'string') continue;
    const match = value.match(/(?:versionCode|version_code|vc|code)[\s:=_-]*(\d+)/i);
    if (match) {
      const n = Number(match[1]);
      if (Number.isFinite(n) && n > 0) return Math.floor(n);
    }
  }
  return NaN;
};

async function fetchGithubLatestRelease(): Promise<GitHubRelease> {
  const explicitApi = envReleaseApiUrl();
  const apiUrl = explicitApi || `https://api.github.com/repos/${encodeURIComponent(envReleaseOwner())}/${encodeURIComponent(envReleaseRepo())}/releases/latest`;
  if (!explicitApi && (!envReleaseOwner() || !envReleaseRepo())) {
    throw new Error('更新通道暂未接入');
  }

  try {
    return await fetchGithubJsonNoStore(apiUrl, {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    });
  } catch {
    throw new Error('更新信息读取失败，请稍后再试');
  }
}

async function fetchGithubReleaseUpdateManifest(): Promise<AppUpdateManifest> {
  const release = await fetchGithubLatestRelease();
  const assets = Array.isArray(release.assets) ? release.assets : [];
  const manifestAsset = assets.find(asset => (asset.name || '').toLowerCase() === GITHUB_RELEASE_MANIFEST_ASSET && !!asset.browser_download_url);
  const apk = findApkAsset(assets);
  const ipa = findIpaAsset(assets);
  const platform = getUpdatePlatform();
  const packageAsset = platform === 'ios' ? ipa : apk;

  if (manifestAsset?.browser_download_url) {
    try {
      const data = await fetchGithubJsonNoStore(manifestAsset.browser_download_url);
      const manifest = parseAppUpdateManifest(data, manifestAsset.browser_download_url, apk?.browser_download_url, ipa?.browser_download_url);
      if (!isDifferentReleaseManifest(manifest, release)) return manifest;
      if (!packageAsset?.browser_download_url) return manifest;
      console.warn('[appUpdates] GitHub release manifest version did not match latest release; falling back to release metadata', {
        manifestVersionName: manifest.versionName,
        manifestVersionCode: manifest.versionCode,
        releaseName: release.name,
        releaseTag: release.tag_name,
      });
    } catch (manifestError) {
      if (!packageAsset?.browser_download_url) throw manifestError;
      console.warn('[appUpdates] GitHub release manifest asset failed; falling back to release metadata', manifestError);
    }
  }

  if (!packageAsset?.browser_download_url) throw new Error(platform === 'ios' ? 'iOS 更新包暂不可用' : '更新包暂不可用');

  const versionCode = inferReleaseVersionCode(release, packageAsset.name);
  if (!Number.isFinite(versionCode) || versionCode <= 0) {
    throw new Error('更新信息暂不可用');
  }
  const downloadUrl = packageAsset.browser_download_url;
  const domesticDownloadUrl = proxifyGithubUrl(downloadUrl);
  const packageKind = packageKindFromUrl(platform, downloadUrl);

  return {
    platform,
    packageKind,
    versionCode,
    versionName: versionFromReleaseTag(release.tag_name) || versionFromReleaseTag(release.name) || pickString(release.name, release.tag_name, `v${versionCode}`),
    downloadUrl,
    apkUrl: downloadUrl,
    ipaUrl: platform === 'ios' ? downloadUrl : undefined,
    domesticApkUrl: platform === 'android' ? domesticDownloadUrl : undefined,
    domesticIpaUrl: platform === 'ios' ? domesticDownloadUrl : undefined,
    domesticDownloadUrl,
    sha256: parseSha256Digest(packageAsset.digest),
    sizeBytes: typeof packageAsset.size === 'number' && packageAsset.size > 0 ? packageAsset.size : undefined,
    releaseNotes: normalizeNotes(release.body),
    publishedAt: release.published_at,
  };
}

export async function fetchConfiguredAppUpdateManifest(): Promise<AppUpdateManifest> {
  const manifestUrl = envManifestUrl();
  if (manifestUrl) return fetchAppUpdateManifest(manifestUrl);
  return fetchGithubReleaseUpdateManifest();
}

export async function checkConfiguredAppUpdate(): Promise<AppUpdateCheckResult> {
  const [current, latest] = await Promise.all([
    getNativeAppInfo(),
    fetchConfiguredAppUpdateManifest(),
  ]);
  const currentVersionCode = typeof current.versionCode === 'number' ? current.versionCode : Number(current.versionCode);
  return {
    current,
    latest,
    updateAvailable: latest.versionCode > (Number.isFinite(currentVersionCode) ? currentVersionCode : 0),
  };
}

export async function openInstallerPermissionSettings(): Promise<void> {
  if (!Capacitor.isNativePlatform() || !Capacitor.isPluginAvailable('MoroUpdater')) return;
  await MoroUpdater.openInstallSettings();
}

export function getAppUpdateDownloadUrl(manifest: AppUpdateManifest, useDomesticLine = false): string {
  if (useDomesticLine) {
    return manifest.domesticDownloadUrl || manifest.domesticApkUrl || manifest.domesticIpaUrl || manifest.downloadUrl || manifest.apkUrl || '';
  }
  return manifest.downloadUrl || manifest.apkUrl || manifest.ipaUrl || '';
}

export function getAppUpdatePackageLabel(manifest?: AppUpdateManifest | null): string {
  if (manifest?.packageKind === 'url') return '安装页';
  if (manifest?.packageKind === 'ipa' || manifest?.platform === 'ios') return 'IPA';
  return 'APK';
}

export async function downloadAndInstallApk(
  manifest: AppUpdateManifest,
  onProgress?: (progress: ApkDownloadProgress) => void,
): Promise<void> {
  const downloadUrl = getAppUpdateDownloadUrl(manifest);
  if (!downloadUrl) throw new Error('更新包暂不可用');

  if (!Capacitor.isNativePlatform() || !Capacitor.isPluginAvailable('MoroUpdater')) {
    window.open(downloadUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  const fileName = `moro-${manifest.versionName.replace(/[^\w.-]+/g, '-')}-${manifest.versionCode}.apk`;
  const handle = onProgress ? await MoroUpdater.addListener('downloadProgress', onProgress) : null;
  try {
    await MoroUpdater.downloadAndInstall({ url: downloadUrl, fileName, sha256: manifest.sha256 });
  } finally {
    await handle?.remove();
  }
}

export async function openAppUpdatePackage(
  manifest: AppUpdateManifest,
  options: { useDomesticLine?: boolean; onProgress?: (progress: ApkDownloadProgress) => void } = {},
): Promise<void> {
  const downloadUrl = getAppUpdateDownloadUrl(manifest, options.useDomesticLine);
  if (!downloadUrl) throw new Error('更新包暂不可用');
  if (manifest.platform === 'android' || manifest.packageKind === 'apk') {
    const downloadTarget = options.useDomesticLine
      ? { ...manifest, downloadUrl, apkUrl: downloadUrl }
      : manifest;
    await downloadAndInstallApk(downloadTarget, options.onProgress);
    return;
  }
  window.open(downloadUrl, '_blank', 'noopener,noreferrer');
}
