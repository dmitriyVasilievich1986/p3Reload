import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vite-plus/test';

import { LeftDrawer } from './LeftDrawer';
import { LEFT_DRAWER_COLLAPSED_WIDTH_PX, LEFT_DRAWER_EXPANDED_WIDTH_PX } from './types';

describe('LeftDrawer', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders above the app as a collapsed navigation rail', () => {
    render(
      <LeftDrawer>
        <button type="button">Home</button>
      </LeftDrawer>
    );

    const drawer = screen.getByRole('navigation', { name: 'Navigation' });

    expect(drawer).toHaveClass('fixed');
    expect(drawer).toHaveClass('z-50');
    expect(drawer).toHaveAttribute('aria-expanded', 'false');
    expect(drawer).toHaveStyle({ width: `${LEFT_DRAWER_COLLAPSED_WIDTH_PX}px` });
    expect(LEFT_DRAWER_COLLAPSED_WIDTH_PX).toBeGreaterThanOrEqual(30);
  });

  it('fully expands on hover and collapses on leave', async () => {
    const user = userEvent.setup();

    render(
      <LeftDrawer>
        <button type="button">Home</button>
      </LeftDrawer>
    );

    const drawer = screen.getByRole('navigation', { name: 'Navigation' });

    await user.hover(drawer);

    expect(drawer).toHaveAttribute('aria-expanded', 'true');
    expect(drawer).toHaveStyle({ width: `${LEFT_DRAWER_EXPANDED_WIDTH_PX}px` });

    await user.unhover(drawer);

    expect(drawer).toHaveAttribute('aria-expanded', 'false');
    expect(drawer).toHaveStyle({ width: `${LEFT_DRAWER_COLLAPSED_WIDTH_PX}px` });
  });

  it('expands when focus moves inside', async () => {
    const user = userEvent.setup();

    render(
      <LeftDrawer>
        <button type="button">Home</button>
      </LeftDrawer>
    );

    const drawer = screen.getByRole('navigation', { name: 'Navigation' });

    await user.tab();

    expect(screen.getByRole('button', { name: 'Home' })).toHaveFocus();
    expect(drawer).toHaveAttribute('aria-expanded', 'true');
    expect(drawer).toHaveStyle({ width: `${LEFT_DRAWER_EXPANDED_WIDTH_PX}px` });
  });

  it('includes dark-mode classes', () => {
    render(
      <LeftDrawer>
        <span>Item</span>
      </LeftDrawer>
    );

    const drawer = screen.getByRole('navigation', { name: 'Navigation' });

    expect(drawer).toHaveClass('dark:bg-slate-900');
    expect(drawer).toHaveClass('dark:text-slate-50');
    expect(drawer).toHaveClass('dark:border-slate-700');
  });

  it('renders a footer with the app and game versions', () => {
    render(
      <LeftDrawer>
        <span>Item</span>
      </LeftDrawer>
    );

    expect(screen.getByText('App version')).toBeInTheDocument();
    expect(screen.getByText('Game version')).toBeInTheDocument();
    expect(screen.getByText(import.meta.env.VITE_APP_VERSION)).toBeInTheDocument();
    expect(screen.getByText(import.meta.env.VITE_GAME_VERSION)).toBeInTheDocument();
  });

  it('accepts a custom aria-label and className', () => {
    render(
      <LeftDrawer aria-label="Main menu" className="custom-drawer">
        <span>Item</span>
      </LeftDrawer>
    );

    const drawer = screen.getByRole('navigation', { name: 'Main menu' });

    expect(drawer).toHaveClass('custom-drawer');
  });
});
