import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, useSearchParams } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vite-plus/test';

import { App } from './App';

function SearchParamsProbe() {
  const [searchParams] = useSearchParams();

  return <div data-testid="search">{searchParams.toString()}</div>;
}

function renderApp(initialEntry: string) {
  return render(
    <MemoryRouter basename="/p3Reload" initialEntries={[initialEntry]}>
      <App />
      <SearchParamsProbe />
    </MemoryRouter>
  );
}

describe('App', () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('adds darkTheme from the system preference when missing', async () => {
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

    renderApp('/p3Reload/');

    await waitFor(() => {
      expect(screen.getByTestId('search')).toHaveTextContent('darkTheme=true');
    });
  });

  it('keeps an existing darkTheme parameter', async () => {
    renderApp('/p3Reload/?darkTheme=false');

    await waitFor(() => {
      expect(screen.getByTestId('search')).toHaveTextContent('darkTheme=false');
    });
  });

  it('toggles the dark class from the darkTheme URL param', async () => {
    renderApp('/p3Reload/?darkTheme=true');

    await waitFor(() => {
      expect(document.documentElement).toHaveClass('dark');
    });

    cleanup();
    renderApp('/p3Reload/?darkTheme=false');

    await waitFor(() => {
      expect(document.documentElement).not.toHaveClass('dark');
    });
  });

  it('renders the left drawer and a 1:2:1 scrollable body layout', () => {
    renderApp('/p3Reload/?darkTheme=false');

    expect(screen.getByRole('navigation', { name: 'Navigation' })).toBeInTheDocument();

    const left = screen.getByRole('region', { name: 'Left panel' });
    const right = screen.getByRole('region', { name: 'Right panel' });

    expect(left).toHaveClass('flex-1', 'overflow-y-auto');
    expect(right).toHaveClass('flex-1', 'overflow-y-auto');
    expect(screen.queryByRole('region', { name: 'Center panel' })).not.toBeInTheDocument();
  });
});
