type RootErrorSource =
    | 'bootstrap-import'
    | 'react-mount'
    | 'react-root-boundary'
    | 'window-error'
    | 'unhandledrejection'
    | 'vite-preload-error'
    | 'startup-asset'
    | 'startup-timeout'
    | 'background-runtime';

type RootErrorExtra = Record<string, unknown>;

type RootErrorReport = {
    source: RootErrorSource;
    error?: unknown;
    message?: string;
    detail?: string;
    extra?: RootErrorExtra;
};

type StartupAssetError = {
    tag?: string;
    rel?: string;
    url?: string;
    time?: string;
};

declare global {
    interface Window {
        __moroRootFallbackInstalled?: boolean;
        __moroRootMounted?: boolean;
        __moroRootErrorVisible?: boolean;
        __moroStaticAssetErrors?: StartupAssetError[];
        __moroRenderStartupError?: (payload: {
            source?: string;
            message?: string;
            detail?: string;
            asset?: StartupAssetError;
        }) => void;
    }
}

const ROOT_ERROR_ID = 'moro-root-error-fallback';
const PREBOOT_ERROR_ID = 'moro-preboot-error';

const TITLE = '\u542f\u52a8\u9047\u5230\u9519\u8bef';
const CHUNK_TITLE = '\u542f\u52a8\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25';
const HINT = '\u8bf7\u5148\u590d\u5236\u8bca\u65ad\u4fe1\u606f\u53d1\u7ed9\u5f00\u53d1\u8005\uff0c\u7136\u540e\u5c1d\u8bd5\u91cd\u65b0\u52a0\u8f7d\u3002';
const CHUNK_HINT = '\u8fd9\u901a\u5e38\u662f\u7f13\u5b58\u91cc\u7559\u7740\u65e7\u7248\u672c\u6587\u4ef6\uff0c\u6216\u5f53\u524d\u7f51\u7edc\u6ca1\u6709\u62c9\u5230\u6700\u65b0\u5305\u3002';
const COPY_LABEL = '\u590d\u5236\u8bca\u65ad';
const COPIED_LABEL = '\u5df2\u590d\u5236';
const MANUAL_COPY_LABEL = '\u8bf7\u624b\u52a8\u590d\u5236';
const RELOAD_LABEL = '\u91cd\u65b0\u52a0\u8f7d';

let lastRenderKey = '';
let lastRenderAt = 0;

export const isChunkLoadError = (error: unknown): boolean => {
    const text = stringifyError(error);
    return /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|ChunkLoadError|Loading chunk \d+ failed|Unable to preload CSS|vite:preloadError/i.test(text);
};

export const isRootErrorFallbackVisible = (): boolean => {
    if (typeof document === 'undefined') return false;
    return !!document.getElementById(ROOT_ERROR_ID);
};

export const markRootReactMounted = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    window.__moroRootMounted = true;
    document.documentElement.dataset.moroRootMounted = 'true';
    document.getElementById(PREBOOT_ERROR_ID)?.remove();
};

export const installRootErrorFallback = () => {
    if (typeof window === 'undefined') return;
    if (window.__moroRootFallbackInstalled) return;
    window.__moroRootFallbackInstalled = true;

    window.__moroRenderStartupError = (payload) => {
        reportRootError(payload?.asset || payload?.message || 'Startup error', {
            source: normalizeSource(payload?.source, 'startup-asset'),
            message: payload?.message,
            detail: payload?.detail,
            extra: payload?.asset ? { asset: payload.asset } : undefined,
        });
    };

    window.addEventListener('error', (event) => {
        const asset = getStartupAssetError(event);
        if (asset) {
            pushStartupAssetError(asset);
            reportRootError(asset.url || 'Startup asset failed to load', {
                source: 'startup-asset',
                message: '\u542f\u52a8\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25',
                detail: asset.url,
                extra: { asset },
            });
            return;
        }

        reportRootError(event.error || event.message || event, {
            source: 'window-error',
            message: event.message,
            extra: {
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
            },
        });
    });

    window.addEventListener('unhandledrejection', (event) => {
        reportRootError(event.reason || 'Unhandled promise rejection', {
            source: 'unhandledrejection',
        });
    });

    window.addEventListener('vite:preloadError', ((event: Event) => {
        event.preventDefault();
        const detail = (event as CustomEvent<unknown>).detail;
        reportRootError(detail || 'Vite preload error', {
            source: 'vite-preload-error',
            message: '\u52a8\u6001\u6587\u4ef6\u9884\u52a0\u8f7d\u5931\u8d25',
            extra: { detail: safeJson(detail) },
        });
    }) as EventListener);
};

export const reportRootError = (error: unknown, report: Omit<RootErrorReport, 'error'>) => {
    if (typeof document === 'undefined') return;
    if (shouldDeferToAppBoundary()) return;

    const fullReport: RootErrorReport = { ...report, error };
    const message = report.message || getErrorMessage(error);
    const stack = getErrorStack(error);
    const dedupeKey = `${report.source}|${message}|${stack.slice(0, 240)}`;
    const now = Date.now();
    if (dedupeKey === lastRenderKey && now - lastRenderAt < 800) return;
    lastRenderKey = dedupeKey;
    lastRenderAt = now;

    const render = () => renderRootError(fullReport);
    if (document.body) {
        render();
        return;
    }
    document.addEventListener('DOMContentLoaded', render, { once: true });
};

const renderRootError = (report: RootErrorReport) => {
    if (!document.body) return;

    const chunkError = isChunkLoadError(report.error) || report.source === 'vite-preload-error';
    const diagnostic = buildDiagnostic(report, chunkError);
    document.getElementById(PREBOOT_ERROR_ID)?.remove();

    let container = document.getElementById(ROOT_ERROR_ID);
    if (!container) {
        container = document.createElement('div');
        container.id = ROOT_ERROR_ID;
        document.body.appendChild(container);
    }
    window.__moroRootErrorVisible = true;

    container.setAttribute('role', 'alert');
    container.setAttribute('aria-live', 'assertive');
    container.style.cssText = [
        'position:fixed',
        'inset:0',
        'z-index:2147483647',
        'box-sizing:border-box',
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'padding:24px',
        'background:#0f172a',
        'color:#f8fafc',
        'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
        'overflow:auto',
    ].join(';');
    container.textContent = '';

    const panel = document.createElement('div');
    panel.style.cssText = [
        'width:min(720px,100%)',
        'max-height:100%',
        'box-sizing:border-box',
        'padding:22px',
        'border-radius:24px',
        'background:rgba(15,23,42,.96)',
        'border:1px solid rgba(255,255,255,.18)',
        'box-shadow:0 24px 80px rgba(0,0,0,.35)',
    ].join(';');

    const eyebrow = document.createElement('div');
    eyebrow.textContent = 'Moro startup diagnostics';
    eyebrow.style.cssText = 'font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#93c5fd;font-weight:700;margin-bottom:8px;';

    const title = document.createElement('h1');
    title.textContent = chunkError ? CHUNK_TITLE : TITLE;
    title.style.cssText = 'font-size:22px;line-height:1.25;margin:0 0 10px;font-weight:800;color:#fff;';

    const hint = document.createElement('p');
    hint.textContent = chunkError ? CHUNK_HINT : HINT;
    hint.style.cssText = 'font-size:13px;line-height:1.7;margin:0 0 16px;color:#cbd5e1;';

    const pre = document.createElement('pre');
    pre.textContent = diagnostic;
    pre.style.cssText = [
        'box-sizing:border-box',
        'width:100%',
        'max-height:45vh',
        'overflow:auto',
        'white-space:pre-wrap',
        'overflow-wrap:anywhere',
        'user-select:text',
        'margin:0 0 16px',
        'padding:14px',
        'border-radius:16px',
        'background:rgba(2,6,23,.78)',
        'border:1px solid rgba(148,163,184,.25)',
        'font:12px/1.55 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace',
        'color:#e2e8f0',
    ].join(';');

    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;';

    const copyButton = document.createElement('button');
    copyButton.type = 'button';
    copyButton.textContent = COPY_LABEL;
    copyButton.style.cssText = buttonStyle('#2563eb');
    copyButton.addEventListener('click', () => {
        void copyDiagnostic(diagnostic).then((copied) => {
            copyButton.textContent = copied ? COPIED_LABEL : MANUAL_COPY_LABEL;
            window.setTimeout(() => {
                copyButton.textContent = COPY_LABEL;
            }, 1800);
        });
    });

    const reloadButton = document.createElement('button');
    reloadButton.type = 'button';
    reloadButton.textContent = RELOAD_LABEL;
    reloadButton.style.cssText = buttonStyle('#475569');
    reloadButton.addEventListener('click', () => window.location.reload());

    actions.append(copyButton, reloadButton);
    panel.append(eyebrow, title, hint, pre, actions);
    container.appendChild(panel);
};

const shouldDeferToAppBoundary = (): boolean => {
    if (typeof document === 'undefined') return false;
    return !!document.querySelector('[data-moro-app-error-boundary="active"]');
};

const buttonStyle = (background: string) => [
    'appearance:none',
    'border:0',
    'border-radius:999px',
    'padding:11px 16px',
    `background:${background}`,
    'color:#fff',
    'font-size:13px',
    'font-weight:800',
    'cursor:pointer',
].join(';');

const copyDiagnostic = async (text: string): Promise<boolean> => {
    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch {
        // Fall through to textarea copy.
    }

    try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        textarea.style.pointerEvents = 'none';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const copied = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (copied) return true;
    } catch {
        // Fall through to prompt.
    }

    window.prompt('\u8bf7\u624b\u52a8\u590d\u5236\u8bca\u65ad\u4fe1\u606f', text);
    return false;
};

const buildDiagnostic = (report: RootErrorReport, chunkError: boolean): string => {
    const error = report.error;
    const lines = [
        'Moro root error diagnostic',
        `Time: ${new Date().toISOString()}`,
        `Source: ${report.source}`,
        `Chunk load error: ${chunkError ? 'yes' : 'no'}`,
        `React mounted: ${window.__moroRootMounted ? 'yes' : 'no'}`,
        `Build: ${getBuildLabel()}`,
        `URL: ${window.location.href}`,
        `User agent: ${navigator.userAgent}`,
        `Standalone: ${isStandaloneDisplayMode() ? 'yes' : 'no'}`,
        `iOS-like device: ${isIOSLikeDevice() ? 'yes' : 'no'}`,
        '',
        'Message:',
        report.message || getErrorMessage(error),
    ];

    const detail = report.detail || getErrorStack(error);
    if (detail) {
        lines.push('', 'Detail:', detail);
    }

    const staticAssetErrors = window.__moroStaticAssetErrors || [];
    if (staticAssetErrors.length > 0) {
        lines.push('', 'Startup asset errors:', safeJson(staticAssetErrors));
    }

    if (report.extra) {
        lines.push('', 'Extra:', safeJson(report.extra));
    }

    return lines.join('\n');
};

const getStartupAssetError = (event: ErrorEvent): StartupAssetError | null => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return null;
    const tag = target.tagName.toLowerCase();
    if (tag === 'script') {
        return {
            tag,
            url: (target as HTMLScriptElement).src || target.getAttribute('src') || undefined,
            time: new Date().toISOString(),
        };
    }
    if (tag !== 'link') return null;
    const link = target as HTMLLinkElement;
    const rel = (link.rel || link.getAttribute('rel') || '').toLowerCase();
    if (!/(modulepreload|preload|stylesheet)/.test(rel)) return null;
    return {
        tag,
        rel,
        url: link.href || link.getAttribute('href') || undefined,
        time: new Date().toISOString(),
    };
};

const pushStartupAssetError = (asset: StartupAssetError) => {
    window.__moroStaticAssetErrors = window.__moroStaticAssetErrors || [];
    window.__moroStaticAssetErrors.push(asset);
};

const normalizeSource = (source: string | undefined, fallback: RootErrorSource): RootErrorSource => {
    switch (source) {
        case 'bootstrap-import':
        case 'react-mount':
        case 'react-root-boundary':
        case 'window-error':
        case 'unhandledrejection':
        case 'vite-preload-error':
        case 'startup-asset':
        case 'startup-timeout':
        case 'background-runtime':
            return source;
        default:
            return fallback;
    }
};

const stringifyError = (error: unknown): string => {
    if (error instanceof Error) return `${error.name}: ${error.message}\n${error.stack || ''}`;
    if (typeof error === 'string') return error;
    return safeJson(error);
};

const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) return error.message || error.name;
    if (typeof error === 'string') return error;
    if (error && typeof error === 'object' && 'message' in error) {
        const message = (error as { message?: unknown }).message;
        if (typeof message === 'string') return message;
    }
    return stringifyError(error) || 'Unknown error';
};

const getErrorStack = (error: unknown): string => {
    if (error instanceof Error) return error.stack || '';
    if (error && typeof error === 'object' && 'stack' in error) {
        const stack = (error as { stack?: unknown }).stack;
        if (typeof stack === 'string') return stack;
    }
    return '';
};

const safeJson = (value: unknown): string => {
    try {
        return JSON.stringify(value, (_, item) => {
            if (item instanceof Error) {
                return {
                    name: item.name,
                    message: item.message,
                    stack: item.stack,
                };
            }
            if (typeof item === 'function') return `[Function ${item.name || 'anonymous'}]`;
            return item;
        }, 2).slice(0, 6000);
    } catch {
        return String(value);
    }
};

const getBuildLabel = (): string => {
    const branch = typeof __BUILD_BRANCH__ !== 'undefined' ? __BUILD_BRANCH__ : 'unknown';
    const commit = typeof __BUILD_COMMIT__ !== 'undefined' ? __BUILD_COMMIT__ : 'unknown';
    return `${branch}@${commit}`;
};

const isStandaloneDisplayMode = (): boolean => {
    try {
        return window.matchMedia?.('(display-mode: standalone)').matches || !!(window.navigator as Navigator & { standalone?: boolean }).standalone;
    } catch {
        return false;
    }
};

const isIOSLikeDevice = (): boolean => {
    const ua = navigator.userAgent || '';
    return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};
