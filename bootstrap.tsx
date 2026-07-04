import React, { Component, ErrorInfo, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import App from './App';
import { ActiveMsgRuntime } from './utils/activeMsgRuntime';
import { KeepAlive } from './utils/keepAlive';
import { ProactiveChat } from './utils/proactiveChat';
import { VRScheduler } from './utils/vrWorld/scheduler';
import { installIOSStandaloneWorkaround } from './utils/iosStandalone';
import { installNativeAppRuntimeClass, isNativeAppRuntime, NATIVE_APP_READY_EVENT } from './utils/nativeRuntime';
import { installWakeListener } from './utils/proactivePushConfig';
import { markRootReactMounted, reportRootError } from './utils/rootErrorFallback';

type RootReactErrorBoundaryState = {
  hasError: boolean;
};

class RootReactErrorBoundary extends Component<{ children: React.ReactNode }, RootReactErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): RootReactErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    reportRootError(error, {
      source: 'react-root-boundary',
      extra: { componentStack: errorInfo.componentStack },
    });
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const RootMountSentinel: React.FC = () => {
  useEffect(() => {
    markRootReactMounted();
  }, []);

  return null;
};

const nativeRuntime = installNativeAppRuntimeClass();
if (!nativeRuntime) installIOSStandaloneWorkaround();

// Register the keep-alive Service Worker early so it's ready before any AI calls.
// Native Android WebView does not need the browser SW wake path; keeping it out
// avoids startup work and web-only side effects inside the packaged app.
const runtimeReady = isNativeAppRuntime() ? Promise.resolve() : KeepAlive.init();
let backgroundRuntimesStarted = false;
const startBackgroundRuntimes = () => {
  if (backgroundRuntimesStarted) return;
  backgroundRuntimesStarted = true;
  try {
    // Resume any active proactive schedule after SW is ready.
    ProactiveChat.resume();
    // Resume page-out autonomous-login schedules.
    VRScheduler.resume();
    void ActiveMsgRuntime.init();
    // Record every wake the SW reports so the diagnostic panel can show "last received".
    installWakeListener();
  } catch (error) {
    reportRootError(error, { source: 'background-runtime' });
  }
};

if (nativeRuntime) {
  window.addEventListener(NATIVE_APP_READY_EVENT, () => {
    window.setTimeout(startBackgroundRuntimes, 600);
  }, { once: true });
} else {
  runtimeReady
    .then(startBackgroundRuntimes)
    .catch((error) => reportRootError(error, { source: 'background-runtime' }));
}

const mountReactApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Could not find root element to mount to');
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RootReactErrorBoundary>
        <RootMountSentinel />
        <App />
      </RootReactErrorBoundary>
    </React.StrictMode>,
  );
};

try {
  mountReactApp();
} catch (error) {
  reportRootError(error, { source: 'react-mount' });
  throw error;
}

