import { DEFAULT_STICKER_BASE, DEFAULT_STICKER_RENAMES } from './defaultStickerFiles';

const CATBOX_HOST = 'files.catbox.moe';
const LEGACY_DEFAULT_STICKER_BASE = '/stickers/default/';

const resolveDefaultStickerPath = (fileName: string): string => {
    const nextFileName = DEFAULT_STICKER_RENAMES[fileName] ?? fileName;
    return `${DEFAULT_STICKER_BASE}${nextFileName}`;
};

const getFileNameFromPath = (path: string): string => {
    const cleanPath = path.split(/[?#]/)[0];
    return cleanPath.split('/').filter(Boolean).pop() ?? '';
};

export const localizeDefaultStickerSrc = (src: string | undefined | null): string => {
    if (!src) return '';
    try {
        const url = new URL(src);
        if ((url.protocol === 'http:' || url.protocol === 'https:') && url.hostname === CATBOX_HOST) {
            const fileName = getFileNameFromPath(url.pathname);
            if (fileName && DEFAULT_STICKER_RENAMES[fileName]) return resolveDefaultStickerPath(fileName);
        }
    } catch {
        // Not a full URL, fall through to local-path handling.
    }

    if (src.startsWith(LEGACY_DEFAULT_STICKER_BASE) || src.startsWith('stickers/default/')) {
        const fileName = getFileNameFromPath(src);
        if (fileName) return resolveDefaultStickerPath(fileName);
    }

    return src;
};

export const isDefaultStickerSrc = (src: string | undefined | null): boolean => {
    if (!src) return false;
    return localizeDefaultStickerSrc(src).startsWith(DEFAULT_STICKER_BASE);
};

export const stickerImageSrc = localizeDefaultStickerSrc;
