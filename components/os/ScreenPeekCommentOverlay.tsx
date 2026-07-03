import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChatCircleText, GearSix, Minus, Sparkle, X } from '@phosphor-icons/react';
import { AppID } from '../../types';
import { INSTALLED_APPS } from '../../constants';
import { useOS } from '../../context/OSContext';
import { resolveAuxApi } from '../../utils/auxApi';
import { getRealPhoneUsageSnapshot, openRealPhoneUsageAccessSettings } from '../../utils/deviceInsight';
import {
  getRealPhoneScreenCaptureStatus,
  getRealPhoneScreenFrame,
  openRealPhoneOverlaySettings,
  startRealPhoneScreenCapture,
  stopRealPhoneScreenCapture,
  updateRealPhoneCommentOverlay,
} from '../../utils/screenCapture';
import {
  generateScreenPeekLiveComment,
  pickObservedUserPhoneApp,
  SCREEN_PEEK_COMMENT_AUTO_COOLDOWN_MS,
  SCREEN_PEEK_COMMENT_DWELL_MS,
  SCREEN_PEEK_COMMENT_MAX,
} from '../../utils/screenPeekComments';
import type { ScreenPeekCommentTrigger, ScreenPeekDeviceSnapshot } from '../../types';

const POS_KEY = 'moro_screen_peek_comment_pos_v1';
const PANEL_W = 292;
const PANEL_H = 186;

const appNameFor = (id: AppID) => INSTALLED_APPS.find(app => app.id === id)?.name || id;

const clampPos = (pos: { x: number; y: number }) => {
  const w = typeof window === 'undefined' ? 390 : window.innerWidth;
  const h = typeof window === 'undefined' ? 844 : window.innerHeight;
  return {
    x: Math.max(8, Math.min(w - 72, Number.isFinite(pos.x) ? pos.x : w - PANEL_W - 16)),
    y: Math.max(56, Math.min(h - 74, Number.isFinite(pos.y) ? pos.y : h - PANEL_H - 120)),
  };
};

const statusTextFor = (snapshot?: ScreenPeekDeviceSnapshot | null) => {
  if (!snapshot) return '正在看用户真实手机录屏';
  if (snapshot.source === 'android_screen_capture') {
    if (!snapshot.screenFrame) return '录屏中，等待画面';
    return snapshot.overlayPermissionGranted === false ? '录屏中，悬浮窗待授权' : '录屏悬浮窗运行中';
  }
  if (snapshot.source === 'screen_capture_permission_required') return '需要 Android 录屏授权';
  if (snapshot.source === 'permission_required') return '需要 Android 使用情况访问权限';
  if (snapshot.source === 'unsupported') return snapshot.unavailableReason || '当前平台不支持真实手机窥屏';
  const observed = pickObservedUserPhoneApp(snapshot);
  return observed ? `看到：${observed.appName}` : '已连接真实手机状态';
};

const ScreenPeekCommentOverlay: React.FC = () => {
  const {
    activeApp,
    apiConfig,
    auxApiConfig,
    characters,
    userProfile,
    screenPeekCommentSession,
    appendScreenPeekComment,
    setScreenPeekCommentCollapsed,
    setScreenPeekCommentStatus,
    stopScreenPeekCommentSession,
    openApp,
    setActiveCharacterId,
    addToast,
  } = useOS();
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [snapshot, setSnapshot] = useState<ScreenPeekDeviceSnapshot | null>(screenPeekCommentSession?.card.deviceSnapshot || null);
  const [busy, setBusy] = useState(false);
  const sessionRef = useRef(screenPeekCommentSession);
  const busyRef = useRef(false);
  const lastAutoAtRef = useRef(0);
  const startedSessionIdRef = useRef('');
  const appSwitchTimerRef = useRef<number | null>(null);
  const dwellTimerRef = useRef<number | null>(null);
  const dragRef = useRef<{ dx: number; dy: number; moved: boolean } | null>(null);
  const latestPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => { sessionRef.current = screenPeekCommentSession; }, [screenPeekCommentSession]);
  useEffect(() => { latestPosRef.current = pos; }, [pos]);

  useLayoutEffect(() => {
    let next: { x: number; y: number } | null = null;
    try {
      const raw = localStorage.getItem(POS_KEY);
      if (raw) next = clampPos(JSON.parse(raw));
    } catch { /* ignore */ }
    if (!next) next = clampPos({ x: window.innerWidth - PANEL_W - 16, y: window.innerHeight - PANEL_H - 116 });
    latestPosRef.current = next;
    setPos(next);
  }, []);

  useEffect(() => () => {
    if (appSwitchTimerRef.current) window.clearTimeout(appSwitchTimerRef.current);
    if (dwellTimerRef.current) window.clearTimeout(dwellTimerRef.current);
  }, []);

  const persistPos = (next: { x: number; y: number }) => {
    try { localStorage.setItem(POS_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  };

  const requestComment = useCallback(async (trigger: ScreenPeekCommentTrigger, force = false) => {
    const session = sessionRef.current;
    if (!session || busyRef.current) return;
    if (session.commentCount >= SCREEN_PEEK_COMMENT_MAX) {
      setScreenPeekCommentStatus('error', '这次窥屏评论已经到上限了，旧评论都留在卡片里');
      return;
    }
    const now = Date.now();
    if (!force && trigger !== 'session_start' && now - lastAutoAtRef.current < SCREEN_PEEK_COMMENT_AUTO_COOLDOWN_MS) return;
    const char = characters.find(item => item.id === session.charId);
    if (!char) return;

    busyRef.current = true;
    setBusy(true);
    setScreenPeekCommentStatus('thinking');
    try {
      const captureStatus = await getRealPhoneScreenCaptureStatus();
      setSnapshot(captureStatus);
      if (captureStatus.source !== 'android_screen_capture' || !captureStatus.screenCaptureActive) {
        setScreenPeekCommentStatus('error', captureStatus.source === 'screen_capture_permission_required'
          ? '需要先授权真实手机录屏'
          : (captureStatus.unavailableReason || '当前平台暂时看不到真实手机录屏'));
        return;
      }
      let frame;
      try {
        frame = await getRealPhoneScreenFrame({ maxAgeMs: 10_000 });
      } catch (error: any) {
        setScreenPeekCommentStatus('error', error?.message || '正在等待第一帧录屏画面');
        return;
      }
      const usageSnapshot = await getRealPhoneUsageSnapshot({
        rangeStart: now - 8 * 60 * 60 * 1000,
        rangeEnd: now,
        limit: 12,
      }).catch(() => null);
      const nextSnapshot: ScreenPeekDeviceSnapshot = usageSnapshot?.source === 'android_usage_stats'
        ? {
          ...usageSnapshot,
          ...captureStatus,
          source: 'android_screen_capture',
          screenFrame: frame,
          currentForegroundApp: usageSnapshot.currentForegroundApp,
          lastExternalApp: usageSnapshot.lastExternalApp,
          appUsage: usageSnapshot.appUsage,
          batteryLevel: usageSnapshot.batteryLevel,
          isCharging: usageSnapshot.isCharging,
          networkLabel: usageSnapshot.networkLabel,
          deviceLabel: usageSnapshot.deviceLabel,
          screenTimeMinutes: usageSnapshot.screenTimeMinutes,
          unlockCount: usageSnapshot.unlockCount,
        }
        : { ...captureStatus, source: 'android_screen_capture', screenFrame: frame };
      setSnapshot(nextSnapshot);
      const comment = await generateScreenPeekLiveComment({
        api: resolveAuxApi(auxApiConfig, apiConfig),
        char,
        userProfile,
        card: session.card,
        deviceSnapshot: nextSnapshot,
        trigger,
        recentComments: session.card.liveComments,
      });
      await updateRealPhoneCommentOverlay({
        title: `${session.charName} 正在看你的手机`,
        text: comment.text,
        tone: comment.tone,
      });
      await appendScreenPeekComment(comment);
      lastAutoAtRef.current = Date.now();
    } catch (error: any) {
      setScreenPeekCommentStatus('error', error?.message || 'TA 这句没说出来');
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  }, [apiConfig, appendScreenPeekComment, auxApiConfig, characters, setScreenPeekCommentStatus, userProfile]);

  useEffect(() => {
    const session = screenPeekCommentSession;
    if (!session) return;
    setSnapshot(session.card.deviceSnapshot || null);
    if (startedSessionIdRef.current === session.id) return;
    startedSessionIdRef.current = session.id;
    lastAutoAtRef.current = 0;
    const timer = window.setTimeout(() => { void requestComment(session.card.liveComments?.length ? 'resume' : 'session_start', true); }, 1800);
    return () => window.clearTimeout(timer);
  }, [requestComment, screenPeekCommentSession]);

  useEffect(() => {
    if (!screenPeekCommentSession) return undefined;
    if (appSwitchTimerRef.current) window.clearTimeout(appSwitchTimerRef.current);
    appSwitchTimerRef.current = window.setTimeout(() => { void requestComment('app_switch'); }, 2200);
    return () => {
      if (appSwitchTimerRef.current) window.clearTimeout(appSwitchTimerRef.current);
      appSwitchTimerRef.current = null;
    };
  }, [activeApp, requestComment, screenPeekCommentSession]);

  useEffect(() => {
    if (!screenPeekCommentSession) return undefined;
    if (dwellTimerRef.current) window.clearTimeout(dwellTimerRef.current);
    dwellTimerRef.current = window.setTimeout(() => { void requestComment('dwell'); }, SCREEN_PEEK_COMMENT_DWELL_MS);
    return () => {
      if (dwellTimerRef.current) window.clearTimeout(dwellTimerRef.current);
      dwellTimerRef.current = null;
    };
  }, [activeApp, requestComment, screenPeekCommentSession?.lastCommentAt, screenPeekCommentSession?.id]);

  if (!screenPeekCommentSession || !pos) return null;

  const session = screenPeekCommentSession;
  const comments = session.card.liveComments || [];
  const latest = comments[comments.length - 1];
  const collapsed = !!session.collapsed;
  const statusText = statusTextFor(snapshot);
  const activeName = appNameFor(activeApp);
  const canAskScreenCapture = snapshot?.source === 'screen_capture_permission_required' || (snapshot?.source === 'android_screen_capture' && !snapshot.screenCaptureActive);
  const canAskOverlay = snapshot?.source === 'android_screen_capture' && snapshot.overlayPermissionGranted === false && snapshot.canOpenOverlaySettings !== false;
  const canAskUsagePermission = snapshot?.source === 'permission_required' && snapshot.canOpenUsageAccessSettings !== false;

  const onPointerDown = (event: React.PointerEvent) => {
    dragRef.current = { dx: event.clientX - pos.x, dy: event.clientY - pos.y, moved: false };
    try { (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId); } catch { /* ignore */ }
  };
  const onPointerMove = (event: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag) return;
    const next = clampPos({ x: event.clientX - drag.dx, y: event.clientY - drag.dy });
    drag.moved = true;
    latestPosRef.current = next;
    setPos(next);
  };
  const onPointerUp = (event: React.PointerEvent) => {
    if (dragRef.current?.moved && latestPosRef.current) persistPos(latestPosRef.current);
    dragRef.current = null;
    try { (event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId); } catch { /* ignore */ }
  };

  const openChat = () => {
    setActiveCharacterId(session.charId);
    openApp(AppID.Chat);
  };

  const closeSession = () => {
    void stopRealPhoneScreenCapture();
    stopScreenPeekCommentSession();
  };

  return (
    <div
      className="absolute left-0 top-0 z-[59] select-none will-change-transform"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`, touchAction: 'none' }}
    >
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`moro-screen-peek-comment ${collapsed ? 'w-[62px] h-[62px] rounded-full p-0' : 'w-[292px] rounded-[18px] p-3'} bg-slate-950/92 text-white border border-white/15 shadow-2xl backdrop-blur-xl transition-[width,height,border-radius,padding] duration-200`}
      >
        {collapsed ? (
          <button type="button" onClick={() => setScreenPeekCommentCollapsed(false)} className="w-full h-full rounded-full flex items-center justify-center active:scale-95">
            <Sparkle size={24} weight="fill" />
          </button>
        ) : (
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              {session.charAvatar ? <img src={session.charAvatar} className="w-8 h-8 rounded-full object-cover border border-white/15" alt="" /> : <div className="w-8 h-8 rounded-full bg-white/12 flex items-center justify-center text-xs font-black">{session.charName.slice(0, 1)}</div>}
              <button type="button" onClick={openChat} className="min-w-0 flex-1 text-left active:opacity-70">
                <div className="text-[12px] font-black truncate">{session.charName} 正在看你的手机</div>
                <div className="text-[10px] text-white/45 truncate">Moro 当前：{activeName} · {statusText}</div>
              </button>
              <button type="button" onClick={() => setScreenPeekCommentCollapsed(true)} className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center active:scale-95" aria-label="折叠"><Minus size={14} weight="bold" /></button>
              <button type="button" onClick={closeSession} className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center active:scale-95" aria-label="关闭"><X size={14} weight="bold" /></button>
            </div>

            <div className="rounded-[14px] bg-white/9 border border-white/10 px-3 py-2 min-h-[58px]">
              {busy || session.status === 'thinking' ? (
                <div className="flex items-center gap-2 text-[12px] text-white/70"><span className="w-3.5 h-3.5 rounded-full border-2 border-white/20 border-t-white animate-spin" />TA 正在看一眼录屏画面…</div>
              ) : session.status === 'error' ? (
                <div className="text-[12px] leading-relaxed text-amber-100">{session.error || 'TA 暂时看不到真实手机录屏'}</div>
              ) : latest ? (
                <div className="text-[13px] leading-relaxed whitespace-pre-wrap break-words">{latest.text}</div>
              ) : (
                <div className="text-[12px] leading-relaxed text-white/55">等 TA 第一句悬浮评论。</div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => { void requestComment('manual', true); }}
                disabled={busy || session.commentCount >= SCREEN_PEEK_COMMENT_MAX}
                className="h-8 flex-1 rounded-full bg-white text-slate-950 text-[11px] font-black flex items-center justify-center gap-1.5 disabled:opacity-40 active:scale-95"
              >
                <ChatCircleText size={14} weight="bold" />再说一句
              </button>
              {canAskScreenCapture && (
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const next = await startRealPhoneScreenCapture({ title: `${session.charName} 正在看你的手机` });
                      setSnapshot(next);
                    } catch (error: any) {
                      addToast(error?.message || '打不开录屏授权', 'error');
                    }
                  }}
                  className="h-8 px-2.5 rounded-full bg-amber-300 text-slate-950 text-[11px] font-black flex items-center gap-1 active:scale-95"
                >
                  <GearSix size={13} weight="bold" />录屏
                </button>
              )}
              {canAskOverlay && (
                <button
                  type="button"
                  onClick={async () => {
                    try { await openRealPhoneOverlaySettings(); }
                    catch (error: any) { addToast(error?.message || '打不开悬浮窗权限设置', 'error'); }
                  }}
                  className="h-8 px-2.5 rounded-full bg-sky-200 text-slate-950 text-[11px] font-black flex items-center gap-1 active:scale-95"
                >
                  <GearSix size={13} weight="bold" />浮窗
                </button>
              )}
              {canAskUsagePermission && (
                <button
                  type="button"
                  onClick={async () => {
                    try { await openRealPhoneUsageAccessSettings(); }
                    catch (error: any) { addToast(error?.message || '打不开权限设置', 'error'); }
                  }}
                  className="h-8 px-3 rounded-full bg-amber-300 text-slate-950 text-[11px] font-black flex items-center gap-1 active:scale-95"
                >
                  <GearSix size={13} weight="bold" />用量
                </button>
              )}
            </div>

            <div className="flex items-center justify-between text-[10px] text-white/35">
              <span>{session.commentCount}/{SCREEN_PEEK_COMMENT_MAX} 条已留在窥屏卡</span>
              <span>{latest ? new Date(latest.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'live'}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenPeekCommentOverlay;
