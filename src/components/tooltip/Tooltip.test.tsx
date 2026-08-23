import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vite-plus/test';

import { Tooltip } from './Tooltip';
import { TooltipPositions } from './types';

describe('Tooltip', () => {
  afterEach(() => {
    cleanup();
  });

  it('shows content on hover', async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="Hint text">
        <button type="button">Trigger</button>
      </Tooltip>
    );

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    await user.hover(screen.getByRole('button', { name: 'Trigger' }));

    expect(screen.getByRole('tooltip')).toHaveTextContent('Hint text');
  });

  it('renders into a document.body portal, not the local DOM tree', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <Tooltip content="Portalled">
        <button type="button">Trigger</button>
      </Tooltip>
    );

    await user.hover(screen.getByRole('button', { name: 'Trigger' }));

    const tooltip = screen.getByRole('tooltip');

    expect(container.contains(tooltip)).toBe(false);
    expect(document.body.contains(tooltip)).toBe(true);
  });

  it('positions to the right of the trigger', async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="On the right" position={TooltipPositions.right}>
        <button type="button">Open</button>
      </Tooltip>
    );

    await user.hover(screen.getByRole('button', { name: 'Open' }));

    expect(screen.getByRole('tooltip')).toHaveStyle({ transform: 'translateY(-50%)' });
  });

  it('positions below the trigger', async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="Below" position={TooltipPositions.bottom}>
        <button type="button">Open</button>
      </Tooltip>
    );

    await user.hover(screen.getByRole('button', { name: 'Open' }));

    expect(screen.getByRole('tooltip')).toHaveStyle({ transform: 'translateX(-50%)' });
  });

  it('positions to the left of the trigger', async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="To the left" position={TooltipPositions.left}>
        <button type="button">Open</button>
      </Tooltip>
    );

    await user.hover(screen.getByRole('button', { name: 'Open' }));

    expect(screen.getByRole('tooltip')).toHaveStyle({ transform: 'translate(-100%, -50%)' });
  });

  it('defaults to top position', async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="Above">
        <button type="button">Default</button>
      </Tooltip>
    );

    await user.hover(screen.getByRole('button', { name: 'Default' }));

    expect(screen.getByRole('tooltip')).toHaveStyle({ transform: 'translate(-50%, -100%)' });
  });

  it('stays above other content with a very high z-index', async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="On top">
        <button type="button">Trigger</button>
      </Tooltip>
    );

    await user.hover(screen.getByRole('button', { name: 'Trigger' }));

    expect(screen.getByRole('tooltip')).toHaveClass('z-[9999]');
  });

  it('includes dark-mode classes', async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="Dark ready">
        <button type="button">Theme</button>
      </Tooltip>
    );

    await user.hover(screen.getByRole('button', { name: 'Theme' }));

    const tooltip = screen.getByRole('tooltip');

    expect(tooltip).toHaveClass('dark:bg-slate-100');
    expect(tooltip).toHaveClass('dark:text-slate-900');
  });
});
