import { describe, expect, it } from 'vitest';
import { isBenignResizeObserverError, isChunkLoadError } from './rootErrorFallback';

describe('root error fallback filters', () => {
  it('recognizes Chromium ResizeObserver loop notifications as benign', () => {
    expect(isBenignResizeObserverError(null, 'ResizeObserver loop completed with undelivered notifications.')).toBe(true);
    expect(isBenignResizeObserverError(new Error('ResizeObserver loop limit exceeded'))).toBe(true);
  });

  it('does not hide real runtime or chunk load errors', () => {
    expect(isBenignResizeObserverError(new Error('Cannot read properties of undefined'))).toBe(false);
    expect(isChunkLoadError(new Error('Failed to fetch dynamically imported module'))).toBe(true);
  });
});
