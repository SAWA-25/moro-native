import {
  installRootErrorFallback,
  isRootErrorFallbackVisible,
  reportRootError,
} from './utils/rootErrorFallback';

installRootErrorFallback();

void import('./bootstrap').catch((error) => {
  if (isRootErrorFallbackVisible()) return;
  reportRootError(error, { source: 'bootstrap-import' });
});

