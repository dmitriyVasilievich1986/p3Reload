import { beforeEach, describe, expect, it, vi } from 'vite-plus/test';

describe('main', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    window.history.pushState({}, '', '/p3Reload/');
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
    vi.resetModules();
  });

  it('boots without throwing', async () => {
    await expect(import('./main')).resolves.toBeDefined();
    expect(document.getElementById('root')).toBeInTheDocument();
  });
});
