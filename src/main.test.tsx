import { beforeEach, describe, expect, it, vi } from 'vite-plus/test';

describe('main', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    window.history.pushState({}, '', '/p3Reload/');
    vi.resetModules();
  });

  it('boots without throwing', async () => {
    await expect(import('./main')).resolves.toBeDefined();
    expect(document.getElementById('root')).toBeInTheDocument();
  });
});
