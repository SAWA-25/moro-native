import React, { useState } from 'react';
import { ArrowsClockwise, DownloadSimple, X } from '@phosphor-icons/react';
import {
  applyCloudUpdate,
  markCloudUpdatePromptDismissed,
  type CloudUpdateCheckResult,
} from '../utils/cloudUpdates';

interface CloudUpdatePromptProps {
  result: CloudUpdateCheckResult;
  onClose: () => void;
}

const snapshotLabel = (result: CloudUpdateCheckResult): string =>
  result.buildId || result.snapshotId || result.channel || 'latest';

export const CloudUpdatePrompt: React.FC<CloudUpdatePromptProps> = ({ result, onClose }) => {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const handleClose = () => {
    markCloudUpdatePromptDismissed(result);
    onClose();
  };

  const handleApply = async () => {
    if (busy) return;
    setBusy(true);
    setError('');
    try {
      await applyCloudUpdate();
    } catch (e: any) {
      setError(e?.message || '云端更新生效失败，请稍后再试。');
      setBusy(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center p-5 animate-fade-in">
      <div className="absolute inset-0 bg-[#111217]/62 backdrop-blur-md" onClick={handleClose} />
      <div className="relative w-full max-w-sm overflow-hidden border border-white/55 bg-[#fffdf8] shadow-2xl animate-slide-up" style={{ borderRadius: 28 }}>
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 h-8 w-8 rounded-full border border-black/10 bg-white/80 text-[#2f3437] flex items-center justify-center active:scale-95 transition-transform"
          aria-label="关闭云端更新提醒"
        >
          <X size={15} weight="bold" />
        </button>

        <div className="px-6 pt-7 pb-4 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#7fa8b3] text-white shadow-[0_16px_32px_-18px_rgba(31,35,38,0.62)]">
            <DownloadSimple size={23} weight="bold" />
          </div>
          <div className="mt-4 label-mono text-[9px] tracking-[0.22em] text-[#8a918d]">CLOUD UPDATE</div>
          <h2 className="mt-2 text-[20px] font-black leading-tight text-[#2f3437]">云端功能更新已送达</h2>
          <p className="mt-2 text-[12.5px] leading-relaxed text-[#69716d]">
            这次不用下载新 APK。功能包已经在云端准备好，点一下就能让最新版生效。
          </p>
        </div>

        <div className="mx-6 rounded-[18px] border border-[#dce8ea] bg-[#f3f7f6] px-4 py-3 text-left">
          <div className="text-[10px] font-black text-[#577782]">已准备</div>
          <div className="mt-1 text-[12px] font-mono text-[#2f3437] break-all">{snapshotLabel(result)}</div>
          <p className="mt-2 text-[11px] leading-relaxed text-[#69716d]">
            只有新增原生权限、升级底层插件、改 Android / iOS 壳层这类变动，才需要重新安装一次安装包。
          </p>
          {error && <p className="mt-2 text-[11px] font-bold leading-relaxed text-rose-500">{error}</p>}
        </div>

        <div className="grid grid-cols-[0.82fr_1.18fr] gap-3 px-6 pb-7 pt-5">
          <button
            type="button"
            onClick={handleClose}
            className="h-12 rounded-2xl border border-[#e7e1d6] bg-white/90 text-[13px] font-black text-[#577782] active:scale-95 transition-transform"
          >
            稍后
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => void handleApply()}
            className="h-12 rounded-2xl bg-[#7fa8b3] text-[13px] font-black text-white shadow-[0_12px_24px_-18px_rgba(31,35,38,0.48)] active:scale-95 transition-transform disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {busy ? <ArrowsClockwise size={16} weight="bold" className="animate-spin" /> : <DownloadSimple size={16} weight="bold" />}
            一键更新
          </button>
        </div>
      </div>
    </div>
  );
};
