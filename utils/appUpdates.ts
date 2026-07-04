import { App } from '@capacitor/app';
import { Capacitor, CapacitorHttp, registerPlugin, type PluginListenerHandle } from '@capacitor/core';
import { APP_VERSION } from './buildInfo';

const GITHUB_RELEASE_MANIFEST_ASSET = 'moro-update.json';
const IOS_INSTALL_PLIST_ASSET = 'moro-ios-install.plist';
const DEFAULT_RELEASE_OWNER = 'SAWA-25';
const DEFAULT_RELEASE_REPO = 'moro-native';
const DEFAULT_RELEASE_BRANCH = 'main';
const DEFAULT_GITHUB_PROXY_URL = 'https://sullymeow.ccwu.cc/github?url=';
const GITHUB_RELEASES_PAGE_SIZE = 20;

export type AppUpdatePlatform = 'android' | 'ios';
export type AppUpdatePackageType = 'apk' | 'ipa';

export interface NativeAppInfo {
  native: boolean;
  platform: string;
  packageName: string;
  versionName: string;
  versionCode: number | string;
  canRequestPackageInstalls: boolean;
}

export interface AppUpdateManifest {
  platform: AppUpdatePlatform;
  packageType: AppUpdatePackageType;
  versionCode: number;
  versionName: string;
  /**
   * Back-compat primary install URL. Android stores the APK URL here; iOS stores
   * the itms-services install URL here so old callers still open the right thing.
   */
  apkUrl: string;
  domesticApkUrl?: string;
  installUrl?: string;
  ipaUrl?: string;
  plistUrl?: string;
  bundleId?: string;
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

interface IosManifestFallback {
  versionName?: string;
  versionCode?: number;
  installUrl?: string;
  plistUrl?: string;
  ipaUrl?: string;
  bundleId?: string;
  sizeBytes?: number;
  releaseNotes?: string;
  publishedAt?: string;
}

const MoroUpdater = registerPlugin<MoroUpdaterPlugin>('MoroUpdater');

const envManifestUrl = () => (import.meta.env.VITE_MORO_UPDATE_MANIFEST_URL || '').trim();
const envReleaseOwner = () => (import.meta.env.VITE_MORO_RELEASE_OWNER || DEFAULT_RELEASE_OWNER).trim();
const envReleaseRepo = () => (import.meta.env.VITE_MORO_RELEASE_REPO || DEFAULT_RELEASE_REPO).trim();
const envReleaseBranch = () => (import.meta.env.VITE_MORO_RELEASE_BRANCH || DEFAULT_RELEASE_BRANCH).trim();
const envReleaseApiUrl = () => (import.meta.env.VITE_MORO_RELEASE_API_URL || '').trim();
const envGithubProxyUrl = () => (import.meta.env.VITE_MORO_GITHUB_PROXY_URL || DEFAULT_GITHUB_PROXY_URL).trim();
const envIosInstallUrl = () => (import.meta.env.VITE_MORO_IOS_INSTALL_URL || '').trim();
const envIosPlistUrl = () => (import.meta.env.VITE_MORO_IOS_INSTALL_PLIST_URL || '').trim();

export function hasConfiguredAppUpdateSource(): boolean {
  return !!envManifestUrl() || !!envReleaseApiUrl() || (!!envReleaseOwner() && !!envReleaseRepo());
}

const resolveUpdatePlatform = (platform?: string): AppUpdatePlatform =>
  platform?.toLowerCase() === 'ios' ? 'ios' : 'android';

const defaultIosPlistUrl = (): string => {
  const owner = envReleaseOwner();
  const repo = envReleaseRepo();
  const branch = envReleaseBranch() || DEFAULT_RELEASE_BRANCH;
  if (!owner || !repo) return '';
  return `https://raw.githubusercontent.com/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/${encodeURIComponent(branch)}/release/${IOS_INSTALL_PLIST_ASSET}`;
};

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

  if (platform === 'android' && Capacitor.isPluginAvailable('MoroUpdater')) {
    try {
      return await MoroUpdater.getInfo();
    } catch {
      // Fall through to Capacitor App info. It works on both Android and iOS.
    }
  }

  try {
    const info = await App.getInfo();
    return {
      native: true,
      platform,
      packageName: info.id || '',
      versionName: info.version || APP_VERSION,
      versionCode: info.build || 0,
      canRequestPackageInstalls: false,
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
  if (Array.isArray(value)) return value.map(v => String(v).trim()).filter(Boolean).join('\n');
  if (typeof value === 'string' && value.trim()) return value.trim();
  return undefined;
};

const isGithubUrl = (url: string): boolean => {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host === 'github.com' || host === 'api.github.com' || host === 'uploads.github.com' || host.endsWith('.githubusercontent.com');
  } catch {
    return false;
  }
};

const isGithubLatestDownloadUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return parsed.hostname.toLowerCase() === 'github.com' && /\/releases\/latest\/download\//i.test(parsed.pathname);
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

const isDefaultGithubProxyUrl = (url: string): boolean => {
  const proxy = envGithubProxyUrl();
  return proxy === DEFAULT_GITHUB_PROXY_URL && url.startsWith(DEFAULT_GITHUB_PROXY_URL);
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

const versionParts = (value: unknown): number[] | null => {
  const normalized = versionFromReleaseTag(value);
  const match = normalized.match(/\d+(?:\.\d+){1,3}/);
  if (!match) return null;
  return match[0].split('.').map(v => Number(v)).filter(n => Number.isFinite(n));
};

const compareVersionNames = (a: unknown, b: unknown): number | null => {
  const aa = versionParts(a);
  const bb = versionParts(b);
  if (!aa?.length || !bb?.length) return null;
  const len = Math.max(aa.length, bb.length);
  for (let i = 0; i < len; i++) {
    const diff = (aa[i] || 0) - (bb[i] || 0);
    if (diff !== 0) return diff > 0 ? 1 : -1;
  }
  return 0;
};

const versionCodeFromAndroidVersionName = (versionName: string): number => {
  const match = versionName.match(/^1\.0\.(\d+)$/);
  if (!match) return NaN;
  const patch = Number(match[1]);
  return Number.isFinite(patch) ? patch + 1 : NaN;
};

const versionCodeFromDottedVersionName = (versionName: string): number => {
  const parts = versionParts(versionName);
  if (!parts?.length) return NaN;
  const [major = 0, minor = 0, patch = 0, build = 0] = parts;
  return major * 1_000_000 + minor * 10_000 + patch * 100 + build;
};

const inferReleaseVersionCode = (release: GitHubRelease, packageName?: string, platform: AppUpdatePlatform = 'android'): number => {
  const explicit = parseVersionCodeFromText(release.body, release.name, release.tag_name, packageName);
  if (Number.isFinite(explicit) && explicit > 0) return explicit;
  const versionName = versionFromReleaseTag(release.tag_name) || versionFromReleaseTag(release.name);
  const fromVersionName = platform === 'ios'
    ? versionCodeFromDottedVersionName(versionName)
    : versionCodeFromAndroidVersionName(versionName);
  return Number.isFinite(fromVersionName) && fromVersionName > 0 ? Math.floor(fromVersionName) : NaN;
};

const isDifferentReleaseManifest = (manifest: AppUpdateManifest, release: GitHubRelease, platform: AppUpdatePlatform): boolean => {
  const releaseVersionName = versionFromReleaseTag(release.tag_name) || versionFromReleaseTag(release.name);
  if (releaseVersionName && versionFromReleaseTag(manifest.versionName) !== releaseVersionName) return true;
  if (platform === 'ios') return false;

  const releaseVersionCode = inferReleaseVersionCode(release, undefined, platform);
  return Number.isFinite(releaseVersionCode) && releaseVersionCode > 0 && manifest.versionCode !== releaseVersionCode;
};

const toAbsoluteUrl = (rawUrl: string, baseUrl: string): string => {
  if (/^itms-services:/i.test(rawUrl)) return rawUrl;
  return new URL(rawUrl, baseUrl).href;
};

const toItmsServicesUrl = (plistUrl: string): string => {
  if (/^itms-services:/i.test(plistUrl)) return plistUrl;
  return `itms-services://?action=download-manifest&url=${encodeURIComponent(plistUrl)}`;
};

const parseAndroidUpdateManifest = (data: any, baseUrl: string, fallbackApkUrl?: string): AppUpdateManifest => {
  const android = data?.android || {};
  const versionCode = pickNumber(data?.versionCode, data?.version_code, android.versionCode, android.version_code);
  const versionName = pickString(data?.versionName, data?.version_name, android.versionName, android.version_name, `v${versionCode}`);
  const rawApkUrl = pickString(
    data?.apkUrl,
    data?.apk_url,
    data?.downloadUrl,
    data?.download_url,
    android.apkUrl,
    android.apk_url,
    android.downloadUrl,
    fallbackApkUrl,
  );
  const rawDomesticApkUrl = pickString(
    data?.domesticApkUrl,
    data?.domestic_apk_url,
    data?.cnApkUrl,
    data?.cn_apk_url,
    data?.apkUrlCn,
    data?.apk_url_cn,
    data?.mirrorApkUrl,
    data?.mirror_apk_url,
    android.domesticApkUrl,
    android.domestic_apk_url,
    android.cnApkUrl,
    android.cn_apk_url,
    android.apkUrlCn,
    android.apk_url_cn,
    android.mirrorApkUrl,
    android.mirror_apk_url,
  );

  if (!Number.isFinite(versionCode) || versionCode <= 0) throw new Error('更新信息缺少有效版本号');
  if (!rawApkUrl) throw new Error('更新包暂不可用');

  const parsedApkUrl = toAbsoluteUrl(rawApkUrl, baseUrl);
  const parsedFallbackApkUrl = fallbackApkUrl ? toAbsoluteUrl(fallbackApkUrl, baseUrl) : '';
  const apkUrl = parsedFallbackApkUrl && isGithubLatestDownloadUrl(parsedApkUrl)
    ? parsedFallbackApkUrl
    : parsedApkUrl;
  const explicitDomesticApkUrl = rawDomesticApkUrl ? toAbsoluteUrl(rawDomesticApkUrl, baseUrl) : '';
  const domesticApkUrl = explicitDomesticApkUrl && !isDefaultGithubProxyUrl(explicitDomesticApkUrl)
    ? explicitDomesticApkUrl
    : proxifyGithubUrl(apkUrl);
  const sizeBytes = pickNumber(data?.sizeBytes, data?.size_bytes, android.sizeBytes, android.size_bytes);
  const sha256 = pickString(data?.sha256, data?.sha256sum, android.sha256, android.sha256sum).replace(/\s+/g, '').toLowerCase();

  return {
    platform: 'android',
    packageType: 'apk',
    versionCode: Math.floor(versionCode),
    versionName,
    apkUrl,
    installUrl: apkUrl,
    domesticApkUrl,
    sha256: sha256 || undefined,
    sizeBytes: Number.isFinite(sizeBytes) && sizeBytes > 0 ? Math.floor(sizeBytes) : undefined,
    releaseNotes: normalizeNotes(data?.releaseNotes ?? data?.release_notes ?? data?.notes ?? android.releaseNotes ?? android.notes),
    mandatory: Boolean(data?.mandatory ?? android.mandatory),
    publishedAt: pickString(data?.publishedAt, data?.published_at, android.publishedAt, android.published_at) || undefined,
  };
};

const parseIosUpdateManifest = (data: any, baseUrl: string, fallback: IosManifestFallback = {}): AppUpdateManifest => {
  const ios = data?.ios || data?.ipa || {};
  const topLevelKind = pickString(data?.platform, data?.packageType, data?.package_type).toLowerCase();
  const topLevelIsIos = topLevelKind === 'ios' || topLevelKind === 'ipa';
  const versionName = pickString(
    ios.versionName,
    ios.version_name,
    ios.marketingVersion,
    ios.marketing_version,
    topLevelIsIos ? data?.versionName : undefined,
    topLevelIsIos ? data?.version_name : undefined,
    fallback.versionName,
  );
  let versionCode = pickNumber(
    ios.versionCode,
    ios.version_code,
    ios.buildNumber,
    ios.build_number,
    ios.bundleVersion,
    ios.bundle_version,
    topLevelIsIos ? data?.versionCode : undefined,
    topLevelIsIos ? data?.version_code : undefined,
    fallback.versionCode,
  );
  if ((!Number.isFinite(versionCode) || versionCode <= 0) && versionName) {
    versionCode = versionCodeFromDottedVersionName(versionName);
  }

  const rawInstallUrl = pickString(
    ios.installUrl,
    ios.install_url,
    ios.itmsServicesUrl,
    ios.itms_services_url,
    topLevelIsIos ? data?.installUrl : undefined,
    topLevelIsIos ? data?.install_url : undefined,
    fallback.installUrl,
  );
  const rawPlistUrl = pickString(
    ios.plistUrl,
    ios.plist_url,
    ios.manifestUrl,
    ios.manifest_url,
    ios.installPlistUrl,
    ios.install_plist_url,
    topLevelIsIos ? data?.plistUrl : undefined,
    topLevelIsIos ? data?.manifestUrl : undefined,
    fallback.plistUrl,
  );
  const rawIpaUrl = pickString(
    ios.ipaUrl,
    ios.ipa_url,
    ios.downloadUrl,
    ios.download_url,
    topLevelIsIos ? data?.ipaUrl : undefined,
    topLevelIsIos ? data?.downloadUrl : undefined,
    fallback.ipaUrl,
  );

  if (!Number.isFinite(versionCode) || versionCode <= 0) throw new Error('iPhone 更新信息缺少有效版本号');

  const plistUrl = rawPlistUrl ? toAbsoluteUrl(rawPlistUrl, baseUrl) : '';
  const ipaUrl = rawIpaUrl ? toAbsoluteUrl(rawIpaUrl, baseUrl) : '';
  const installUrl = rawInstallUrl
    ? (/^itms-services:/i.test(rawInstallUrl) ? rawInstallUrl : toAbsoluteUrl(rawInstallUrl, baseUrl))
    : plistUrl
      ? toItmsServicesUrl(plistUrl)
      : '';
  if (!installUrl && ipaUrl) throw new Error('iPhone 安装清单暂不可用，请发布 moro-ios-install.plist 或在更新清单里填写 ios.plistUrl');
  if (!installUrl) throw new Error('iPhone 更新包暂不可用');

  const sizeBytes = pickNumber(ios.sizeBytes, ios.size_bytes, topLevelIsIos ? data?.sizeBytes : undefined, fallback.sizeBytes);

  return {
    platform: 'ios',
    packageType: 'ipa',
    versionCode: Math.floor(versionCode),
    versionName: versionName || `v${Math.floor(versionCode)}`,
    apkUrl: installUrl,
    installUrl,
    plistUrl: plistUrl || undefined,
    ipaUrl: ipaUrl || undefined,
    bundleId: pickString(ios.bundleId, ios.bundle_id, ios.bundleIdentifier, ios.bundle_identifier, fallback.bundleId) || undefined,
    sizeBytes: Number.isFinite(sizeBytes) && sizeBytes > 0 ? Math.floor(sizeBytes) : undefined,
    releaseNotes: normalizeNotes(ios.releaseNotes ?? ios.release_notes ?? ios.notes ?? (topLevelIsIos ? data?.releaseNotes : undefined) ?? fallback.releaseNotes),
    mandatory: Boolean(ios.mandatory ?? (topLevelIsIos ? data?.mandatory : false)),
    publishedAt: pickString(ios.publishedAt, ios.published_at, topLevelIsIos ? data?.publishedAt : undefined, fallback.publishedAt) || undefined,
  };
};

const parseAppUpdateManifest = (
  data: any,
  baseUrl: string,
  platform: AppUpdatePlatform,
  fallbackApkUrl?: string,
  fallbackIos?: IosManifestFallback,
): AppUpdateManifest =>
  platform === 'ios'
    ? parseIosUpdateManifest(data, baseUrl, fallbackIos)
    : parseAndroidUpdateManifest(data, baseUrl, fallbackApkUrl);

export async function fetchAppUpdateManifest(
  manifestUrl: string,
  fallbackApkUrl?: string,
  platform: AppUpdatePlatform = resolveUpdatePlatform(Capacitor.getPlatform()),
): Promise<AppUpdateManifest> {
  const url = manifestUrl.trim();
  if (!url) throw new Error('更新通道暂未接入');
  const data = isGithubUrl(url) ? await fetchGithubJsonNoStore(url) : await fetchJsonNoStore(url);
  return parseAppUpdateManifest(data, url, platform, fallbackApkUrl);
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
  assets?: GitHubReleaseAsset[];
}

const parseSha256Digest = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  const digest = value.trim().toLowerCase();
  const stripped = digest.startsWith('sha256:') ? digest.slice('sha256:'.length) : digest;
  return /^[a-f0-9]{64}$/.test(stripped) ? stripped : undefined;
};

const findAssetByExt = (assets: GitHubReleaseAsset[], ext: string, preferredName?: string): GitHubReleaseAsset | undefined => {
  if (preferredName) {
    const exact = assets.find(asset => asset.name === preferredName);
    if (exact?.browser_download_url) return exact;
  }
  const re = new RegExp(`\\.${ext}$`, 'i');
  return assets.find(asset => re.test(asset.name || '') && /moro/i.test(asset.name || '') && !!asset.browser_download_url)
    || assets.find(asset => re.test(asset.name || '') && !!asset.browser_download_url);
};

const findApkAsset = (assets: GitHubReleaseAsset[], preferredName?: string): GitHubReleaseAsset | undefined =>
  findAssetByExt(assets, 'apk', preferredName);

const findIpaAsset = (assets: GitHubReleaseAsset[], preferredName?: string): GitHubReleaseAsset | undefined =>
  findAssetByExt(assets, 'ipa', preferredName);

const findPlistAsset = (assets: GitHubReleaseAsset[], preferredName?: string): GitHubReleaseAsset | undefined =>
  findAssetByExt(assets, 'plist', preferredName);

const parseVersionCodeFromText = (...values: unknown[]): number => {
  for (const value of values) {
    if (typeof value !== 'string') continue;
    const match = value.match(/(?:versionCode|version_code|buildNumber|build_number|build|vc|code)[\s:=_-]*(\d+)/i);
    if (match) {
      const n = Number(match[1]);
      if (Number.isFinite(n) && n > 0) return Math.floor(n);
    }
  }
  return NaN;
};

const githubReleaseHeaders = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

const hasAndroidUpdateAsset = (release: GitHubRelease): boolean => {
  const assets = Array.isArray(release.assets) ? release.assets : [];
  return assets.some(asset => (asset.name || '').toLowerCase() === GITHUB_RELEASE_MANIFEST_ASSET && !!asset.browser_download_url)
    || !!findApkAsset(assets);
};

const hasIosUpdateAsset = (release: GitHubRelease): boolean => {
  const assets = Array.isArray(release.assets) ? release.assets : [];
  return !!findIpaAsset(assets)
    || !!findPlistAsset(assets)
    || /^ios[-_/]/i.test(String(release.tag_name || release.name || ''));
};

const hasUpdateAssetForPlatform = (platform: AppUpdatePlatform) =>
  platform === 'ios' ? hasIosUpdateAsset : hasAndroidUpdateAsset;

async function fetchGithubRelease(platform: AppUpdatePlatform): Promise<GitHubRelease> {
  const explicitApi = envReleaseApiUrl();
  if (!explicitApi && (!envReleaseOwner() || !envReleaseRepo())) {
    throw new Error('更新通道暂未接入');
  }

  try {
    if (explicitApi) return await fetchGithubJsonNoStore(explicitApi, githubReleaseHeaders);

    const owner = encodeURIComponent(envReleaseOwner());
    const repo = encodeURIComponent(envReleaseRepo());
    const releasesUrl = `https://api.github.com/repos/${owner}/${repo}/releases?per_page=${GITHUB_RELEASES_PAGE_SIZE}`;
    const releases = await fetchGithubJsonNoStore(releasesUrl, githubReleaseHeaders);
    if (Array.isArray(releases)) {
      const release = releases.find(hasUpdateAssetForPlatform(platform));
      if (release) return release;
    }

    return await fetchGithubJsonNoStore(`https://api.github.com/repos/${owner}/${repo}/releases/latest`, githubReleaseHeaders);
  } catch {
    throw new Error('更新信息读取失败，请稍后再试');
  }
}

async function fetchGithubAndroidUpdateManifest(): Promise<AppUpdateManifest> {
  const release = await fetchGithubRelease('android');
  const assets = Array.isArray(release.assets) ? release.assets : [];
  const manifestAsset = assets.find(asset => (asset.name || '').toLowerCase() === GITHUB_RELEASE_MANIFEST_ASSET && !!asset.browser_download_url);
  const apk = findApkAsset(assets);

  if (manifestAsset?.browser_download_url) {
    try {
      const data = await fetchGithubJsonNoStore(manifestAsset.browser_download_url);
      const manifest = parseAppUpdateManifest(data, manifestAsset.browser_download_url, 'android', apk?.browser_download_url);
      if (!isDifferentReleaseManifest(manifest, release, 'android')) return manifest;
      if (!apk?.browser_download_url) return manifest;
      console.warn('[appUpdates] GitHub release manifest version did not match latest Android release; falling back to release metadata', {
        manifestVersionName: manifest.versionName,
        manifestVersionCode: manifest.versionCode,
        releaseName: release.name,
        releaseTag: release.tag_name,
      });
    } catch (manifestError) {
      if (!apk?.browser_download_url) throw manifestError;
      console.warn('[appUpdates] GitHub release manifest asset failed; falling back to release metadata', manifestError);
    }
  }

  if (!apk?.browser_download_url) throw new Error('更新包暂不可用');

  const versionCode = inferReleaseVersionCode(release, apk.name, 'android');
  if (!Number.isFinite(versionCode) || versionCode <= 0) {
    throw new Error('更新信息暂不可用');
  }

  return {
    platform: 'android',
    packageType: 'apk',
    versionCode,
    versionName: versionFromReleaseTag(release.tag_name) || versionFromReleaseTag(release.name) || pickString(release.name, release.tag_name, `v${versionCode}`),
    apkUrl: apk.browser_download_url,
    installUrl: apk.browser_download_url,
    sha256: parseSha256Digest(apk.digest),
    sizeBytes: typeof apk.size === 'number' && apk.size > 0 ? apk.size : undefined,
    releaseNotes: normalizeNotes(release.body),
    publishedAt: release.published_at,
  };
}

async function fetchGithubIosUpdateManifest(): Promise<AppUpdateManifest> {
  const release = await fetchGithubRelease('ios');
  const assets = Array.isArray(release.assets) ? release.assets : [];
  const manifestAsset = assets.find(asset => (asset.name || '').toLowerCase() === GITHUB_RELEASE_MANIFEST_ASSET && !!asset.browser_download_url);
  const ipa = findIpaAsset(assets);
  const plist = findPlistAsset(assets, IOS_INSTALL_PLIST_ASSET);
  const releaseLooksIos = hasIosUpdateAsset(release);
  const fallback: IosManifestFallback = {
    versionName: versionFromReleaseTag(release.tag_name) || versionFromReleaseTag(release.name) || pickString(release.name, release.tag_name),
    versionCode: inferReleaseVersionCode(release, ipa?.name || plist?.name, 'ios'),
    plistUrl: plist?.browser_download_url || envIosPlistUrl() || (releaseLooksIos ? defaultIosPlistUrl() : ''),
    installUrl: envIosInstallUrl(),
    ipaUrl: ipa?.browser_download_url,
    sizeBytes: typeof ipa?.size === 'number' && ipa.size > 0 ? ipa.size : undefined,
    releaseNotes: normalizeNotes(release.body),
    publishedAt: release.published_at,
  };

  if (manifestAsset?.browser_download_url) {
    try {
      const data = await fetchGithubJsonNoStore(manifestAsset.browser_download_url);
      const manifest = parseAppUpdateManifest(data, manifestAsset.browser_download_url, 'ios', undefined, fallback);
      if (!isDifferentReleaseManifest(manifest, release, 'ios')) return manifest;
      console.warn('[appUpdates] GitHub release manifest version did not match latest iOS release; falling back to release metadata', {
        manifestVersionName: manifest.versionName,
        manifestVersionCode: manifest.versionCode,
        releaseName: release.name,
        releaseTag: release.tag_name,
      });
    } catch (manifestError) {
      if (!ipa?.browser_download_url && !plist?.browser_download_url && !fallback.installUrl && !fallback.plistUrl) throw manifestError;
      console.warn('[appUpdates] GitHub iOS manifest asset failed; falling back to release metadata', manifestError);
    }
  }

  if (!ipa?.browser_download_url && !plist?.browser_download_url && !fallback.installUrl && !fallback.plistUrl) {
    throw new Error('iPhone 更新包暂不可用');
  }

  return parseIosUpdateManifest({ ios: fallback }, fallback.plistUrl || fallback.ipaUrl || fallback.installUrl || 'https://example.invalid/');
}

async function fetchGithubReleaseUpdateManifest(platform: AppUpdatePlatform): Promise<AppUpdateManifest> {
  return platform === 'ios'
    ? fetchGithubIosUpdateManifest()
    : fetchGithubAndroidUpdateManifest();
}

export async function fetchConfiguredAppUpdateManifest(
  platform: AppUpdatePlatform = resolveUpdatePlatform(Capacitor.getPlatform()),
): Promise<AppUpdateManifest> {
  const manifestUrl = envManifestUrl();
  if (manifestUrl) return fetchAppUpdateManifest(manifestUrl, undefined, platform);
  return fetchGithubReleaseUpdateManifest(platform);
}

const isUpdateAvailable = (current: NativeAppInfo, latest: AppUpdateManifest): boolean => {
  const byName = compareVersionNames(latest.versionName, current.versionName);
  if (latest.platform === 'ios' && byName !== null) return byName > 0;

  const currentVersionCode = typeof current.versionCode === 'number' ? current.versionCode : Number(current.versionCode);
  if (Number.isFinite(currentVersionCode) && currentVersionCode > 0) {
    return latest.versionCode > currentVersionCode;
  }
  if (byName !== null) return byName > 0;
  return latest.versionCode > 0;
};

export async function checkConfiguredAppUpdate(): Promise<AppUpdateCheckResult> {
  const current = await getNativeAppInfo();
  const platform = resolveUpdatePlatform(current.platform);
  const latest = await fetchConfiguredAppUpdateManifest(platform);
  return {
    current,
    latest,
    updateAvailable: isUpdateAvailable(current, latest),
  };
}

export async function openInstallerPermissionSettings(): Promise<void> {
  if (!Capacitor.isNativePlatform() || Capacitor.getPlatform() !== 'android' || !Capacitor.isPluginAvailable('MoroUpdater')) return;
  await MoroUpdater.openInstallSettings();
}

const openExternalInstallUrl = (url: string): void => {
  if (/^itms-services:/i.test(url)) {
    window.location.href = url;
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
};

export async function downloadAndInstallApp(
  manifest: AppUpdateManifest,
  onProgress?: (progress: ApkDownloadProgress) => void,
): Promise<void> {
  const installUrl = manifest.installUrl || manifest.apkUrl;
  if (manifest.platform === 'ios' || manifest.packageType === 'ipa') {
    openExternalInstallUrl(installUrl);
    return;
  }

  if (!Capacitor.isNativePlatform() || Capacitor.getPlatform() !== 'android' || !Capacitor.isPluginAvailable('MoroUpdater')) {
    openExternalInstallUrl(installUrl);
    return;
  }

  const fileName = `moro-${manifest.versionName.replace(/[^\w.-]+/g, '-')}-${manifest.versionCode}.apk`;
  const handle = onProgress ? await MoroUpdater.addListener('downloadProgress', onProgress) : null;
  try {
    await MoroUpdater.downloadAndInstall({ url: manifest.apkUrl, fileName, sha256: manifest.sha256 });
  } finally {
    await handle?.remove();
  }
}

export const downloadAndInstallApk = downloadAndInstallApp;
