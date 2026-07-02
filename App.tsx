
import React from 'react';
import { OSProvider } from './context/OSContext';
import { MusicProvider } from './context/MusicContext';
import { DesktopPetProvider } from './context/DesktopPetContext';
import PhoneShell from './components/PhoneShell';
import DevDebugPanel from './components/DevDebugPanel';
import VRBroadcast from './components/VRBroadcast';
import { isIOSStandaloneWebApp } from './utils/iosStandalone';

const BuildBadge = __BUILD_BADGE_VISIBLE__ ? React.lazy(() => import('./components/BuildBadge')) : null;

const App: React.FC = () => {
  const useAbsoluteShell = typeof window !== 'undefined' && isIOSStandaloneWebApp();
  const shellClassName = useAbsoluteShell
    ? 'fixed inset-0 w-full h-full bg-transparent overflow-hidden'
    : 'relative w-full bg-transparent overflow-hidden';
  const shellStyle = useAbsoluteShell
    ? { height: 'var(--app-height, 100lvh)', minHeight: 'var(--app-height, 100lvh)' }
    : { height: 'var(--app-height, 100lvh)', minHeight: 'var(--app-height, 100lvh)' };

  return (
    <>
      <div
        className={shellClassName}
        style={shellStyle}
      >
        <div
          className={`${useAbsoluteShell ? 'absolute' : 'fixed'} inset-0 w-full h-full z-0 bg-transparent`}
          style={{ transform: 'translateZ(0)' }}
        >
          <OSProvider>
            <DesktopPetProvider>
              <MusicProvider>
                <PhoneShell />
              </MusicProvider>
            </DesktopPetProvider>
          </OSProvider>
        </div>
      </div>
      {BuildBadge && (
        <React.Suspense fallback={null}>
          <BuildBadge />
        </React.Suspense>
      )}
      <DevDebugPanel />
      <VRBroadcast />
    </>
  );
};

export default App;
