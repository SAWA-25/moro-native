const CATBOX_HOST = 'files.catbox.moe';
const DEFAULT_STICKER_BASE = '/stickers/default/';

export const stickerImageSrc = (src: string | undefined | null): string => {
    if (!src) return '';
    try {
        const url = new URL(src);
        if ((url.protocol === 'http:' || url.protocol === 'https:') && url.hostname === CATBOX_HOST) {
            const fileName = url.pathname.split('/').filter(Boolean).pop();
            if (fileName) return `${DEFAULT_STICKER_BASE}${fileName}`;
        }
    } catch {
        return src;
    }
    return src;
};
