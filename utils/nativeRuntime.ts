import { Capacitor } from '@capacitor/core';

export const NATIVE_APP_READY_EVENT = 'moro-native-app-ready';

type SafeAreaInsets = { top: number; right: number; bottom: number; left: number };
type SafeAreaEdge = keyof SafeAreaInsets;

const SAFE_AREA_RETRY_DELAYS_MS = [120, 500, 1500, 3000];
const cachedIOSNativeInsets: Record<SafeAreaEdge, number | null> = {
  top: null,
  right: null,
  bottom: null,
  left: null,
};

export function isNativeAppRuntime(): boolean {
  try { return Capacitor.isNativePlatform(); } catch { return false; }
}

export function isNativeIOSRuntime(): boolean {
  try { return Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'ios'; } catch { return false; }
}

const resetCachedSafeAreaInsets = () => {
  cachedIOSNativeInsets.top = null;
  cachedIOSNativeInsets.right = null;
  cachedIOSNativeInsets.bottom = null;
  cachedIOSNativeInsets.left = null;
};

const readIOSNativeSafeAreaInsets = (): SafeAreaInsets => {
  if (typeof window === 'undefined' || typeof document === 'undefined' || !document.body) {
    return {
      top: cachedIOSNativeInsets.top ?? 0,
      right: cachedIOSNativeInsets.right ?? 0,
      bottom: cachedIOSNativeInsets.bottom ?? 0,
      left: cachedIOSNativeInsets.left ?? 0,
    };
  }

  const probe = document.createElement('div');
  probe.style.position = 'fixed';
  probe.style.visibility = 'hidden';
  probe.style.pointerEvents = 'none';
  probe.style.opacity = '0';
  probe.style.paddingTop = 'env(safe-area-inset-top)';
  probe.style.paddingRight = 'env(safe-area-inset-right)';
  probe.style.paddingBottom = 'env(safe-area-inset-bottom)';
  probe.style.paddingLeft = 'env(safe-area-inset-left)';
  document.body.appendChild(probe);

  const computed = window.getComputedStyle(probe);
  const measured: SafeAreaInsets = {
    top: Math.round(parseFloat(computed.paddingTop) || 0),
    right: Math.round(parseFloat(computed.paddingRight) || 0),
    bottom: Math.round(parseFloat(computed.paddingBottom) || 0),
    left: Math.round(parseFloat(computed.paddingLeft) || 0),
  };

  document.body.removeChild(probe);

  (Object.keys(measured) as SafeAreaEdge[]).forEach(edge => {
    if (cachedIOSNativeInsets[edge] === null && measured[edge] > 0) {
      cachedIOSNativeInsets[edge] = measured[edge];
    }
  });

  return {
    top: cachedIOSNativeInsets.top ?? measured.top,
    right: cachedIOSNativeInsets.right ?? measured.right,
    bottom: cachedIOSNativeInsets.bottom ?? measured.bottom,
    left: cachedIOSNativeInsets.left ?? measured.left,
  };
};

export function installNativeAppRuntimeClass(): boolean {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;
  if (!isNativeAppRuntime()) return false;

  document.documentElement.classList.add('moro-native-app');
  document.body.classList.add('moro-native-app');
  document.documentElement.dataset.moroRuntime = 'native';
  const nativeIOS = isNativeIOSRuntime();
  if (nativeIOS) {
    document.documentElement.classList.add('moro-native-ios');
    document.body.classList.add('moro-native-ios');
  }

  let frame = 0;
  const syncViewportVars = () => {
    if (frame) window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      const viewportHeight = Math.round(window.visualViewport?.height || window.innerHeight || 0);
      const safeInsets = nativeIOS ? readIOSNativeSafeAreaInsets() : { top: 0, right: 0, bottom: 0, left: 0 };

      document.documentElement.style.setProperty('--app-height', `${viewportHeight}px`);
      document.documentElement.style.setProperty('--visual-viewport-height', `${viewportHeight}px`);
      document.documentElement.style.setProperty('--keyboard-inset', '0px');
      document.documentElement.style.setProperty('--standalone-safe-area-top', `${safeInsets.top}px`);
      document.documentElement.style.setProperty('--standalone-safe-area-right', `${safeInsets.right}px`);
      document.documentElement.style.setProperty('--standalone-safe-area-bottom', `${safeInsets.bottom}px`);
      document.documentElement.style.setProperty('--standalone-safe-area-left', `${safeInsets.left}px`);
    });
  };
  const syncSafeAreaVars = () => {
    if (nativeIOS) resetCachedSafeAreaInsets();
    syncViewportVars();
  };

  syncViewportVars();
  window.addEventListener('resize', syncSafeAreaVars, { passive: true });
  window.addEventListener('orientationchange', syncSafeAreaVars, { passive: true });
  window.visualViewport?.addEventListener('resize', syncViewportVars, { passive: true });
  document.addEventListener('visibilitychange', syncSafeAreaVars, { passive: true });
  if (nativeIOS) {
    for (const delay of SAFE_AREA_RETRY_DELAYS_MS) {
      window.setTimeout(syncViewportVars, delay);
    }
  }
  return true;
}
