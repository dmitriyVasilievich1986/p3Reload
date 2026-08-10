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

  it('applies position classes', async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="On the right" position={TooltipPositions.right}>
        <button type="button">Open</button>
      </Tooltip>
    );

    await user.hover(screen.getByRole('button', { name: 'Open' }));

    expect(screen.getByRole('tooltip')).toHaveClass('left-full');
    expect(screen.getByRole('tooltip')).toHaveClass('ml-2');
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

  it('defaults to top position', async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content="Above">
        <button type="button">Default</button>
      </Tooltip>
    );

    await user.hover(screen.getByRole('button', { name: 'Default' }));

    expect(screen.getByRole('tooltip')).toHaveClass('bottom-full');
  });
});
