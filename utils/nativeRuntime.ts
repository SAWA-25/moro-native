import { Capacitor } from '@capacitor/core';

export function isNativeAppRuntime(): boolean {
  try { return Capacitor.isNativePlatform(); } catch { return false; }
}

export function installNativeAppRuntimeClass(): boolean {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;
  if (!isNativeAppRuntime()) return false;

  document.documentElement.classList.add('moro-native-app');
  document.body.classList.add('moro-native-app');
  document.documentElement.dataset.moroRuntime = 'native';

  let frame = 0;
  let stableViewportHeight = 0;

  const getFocusedEditable = (): Element | null => {
    const active = document.activeElement;
    if (!active) return null;
    if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement || active instanceof HTMLSelectElement) return active;
    return active instanceof HTMLElement && active.isContentEditable ? active : null;
  };

  const readViewportHeight = (): number => {
    const visual = window.visualViewport;
    const visualHeight = visual ? Math.round(visual.height + Math.max(0, visual.offsetTop || 0)) : 0;
    const innerHeight = Math.round(window.innerHeight || 0);
    const rootHeight = Math.round(document.documentElement.clientHeight || 0);
    const bodyHeight = Math.round(document.body?.clientHeight || 0);
    const measured = Math.max(innerHeight, visualHeight, rootHeight, bodyHeight, 0);

    const screenHeight = Math.round(Math.max(window.screen?.availHeight || 0, window.screen?.height || 0));
    const focusedEditable = !!getFocusedEditable();
    const looksClippedByCompatMode = !focusedEditable && screenHeight > 0 && measured > 0 && measured < screenHeight * 0.72;
    const nextHeight = looksClippedByCompatMode ? screenHeight : measured;

    if (!focusedEditable && nextHeight > stableViewportHeight) stableViewportHeight = nextHeight;
    if (focusedEditable) return measured || stableViewportHeight || screenHeight || 0;
    return Math.max(nextHeight, stableViewportHeight, measured, screenHeight || 0);
  };

  const syncViewportVars = () => {
    if (frame) window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      const viewportHeight = readViewportHeight();

      document.documentElement.style.setProperty('--app-height', `${viewportHeight}px`);
      document.documentElement.style.setProperty('--visual-viewport-height', `${viewportHeight}px`);
      document.documentElement.style.setProperty('--keyboard-inset', '0px');
      document.documentElement.style.setProperty('--standalone-safe-area-top', '0px');
      document.documentElement.style.setProperty('--standalone-safe-area-bottom', '0px');
    });
  };

  syncViewportVars();
  window.addEventListener('resize', syncViewportVars, { passive: true });
  window.addEventListener('orientationchange', syncViewportVars, { passive: true });
  document.addEventListener('visibilitychange', syncViewportVars, { passive: true });
  window.visualViewport?.addEventListener('resize', syncViewportVars, { passive: true });
  window.visualViewport?.addEventListener('scroll', syncViewportVars, { passive: true });
  window.setTimeout(syncViewportVars, 250);
  window.setTimeout(syncViewportVars, 900);
  window.setTimeout(syncViewportVars, 1800);
  return true;
}
