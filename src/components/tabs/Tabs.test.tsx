import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vite-plus/test';

import { Tabs } from './Tabs';

const tabs = [
  { name: 'Academics', color: 'blue' as const },
  { name: 'Charm', color: 'violet' as const },
  { name: 'Courage', color: 'orange' as const },
];

describe('Tabs', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders a vertical tablist with mnemonic initials', () => {
    render(<Tabs tabs={tabs} />);

    const tablist = screen.getByRole('tablist', { name: 'Tabs' });
    expect(tablist).toHaveAttribute('aria-orientation', 'vertical');

    expect(screen.getByRole('tab', { name: 'Academics' })).toHaveTextContent('A');
    expect(screen.getByRole('tab', { name: 'Charm' })).toHaveTextContent('C');
    expect(screen.getByRole('tab', { name: 'Courage' })).toHaveTextContent('C');
  });

  it('applies mnemonic color classes', () => {
    render(<Tabs tabs={tabs} />);

    expect(
      screen.getByRole('tab', { name: 'Academics' }).querySelector('span.absolute')
    ).toHaveClass('bg-sky-100');
    expect(screen.getByRole('tab', { name: 'Charm' }).querySelector('span.absolute')).toHaveClass(
      'bg-violet-100'
    );
  });

  it('selects the first tab by default', () => {
    render(<Tabs tabs={tabs} />);

    expect(screen.getByRole('tab', { name: 'Academics' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Charm' })).toHaveAttribute('aria-selected', 'false');
  });

  it('calls onChange and updates selection on click', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Tabs tabs={tabs} onChange={onChange} />);

    await user.click(screen.getByRole('tab', { name: 'Charm' }));

    expect(onChange).toHaveBeenCalledWith('Charm');
    expect(screen.getByRole('tab', { name: 'Charm' })).toHaveAttribute('aria-selected', 'true');
  });

  it('supports controlled selection', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    const { rerender } = render(<Tabs tabs={tabs} value="Courage" onChange={onChange} />);

    expect(screen.getByRole('tab', { name: 'Courage' })).toHaveAttribute('aria-selected', 'true');

    await user.click(screen.getByRole('tab', { name: 'Academics' }));

    expect(onChange).toHaveBeenCalledWith('Academics');
    expect(screen.getByRole('tab', { name: 'Courage' })).toHaveAttribute('aria-selected', 'true');

    rerender(<Tabs tabs={tabs} value="Academics" onChange={onChange} />);

    expect(screen.getByRole('tab', { name: 'Academics' })).toHaveAttribute('aria-selected', 'true');
  });

  it('expands full label styles on hover via overlay without growing layout width', () => {
    render(<Tabs tabs={tabs} />);

    const academics = screen.getByRole('tab', { name: 'Academics' });
    const overlay = academics.querySelector('span.absolute');
    const label = academics.querySelector('[aria-hidden="true"]');

    expect(academics).toHaveClass('w-9');
    expect(overlay).toHaveClass('group-hover:w-max');
    expect(label).toHaveClass('group-hover:opacity-100');
    expect(label).toHaveTextContent('cademics');
  });

  it('renders a full-width body whose border matches the selected tab', async () => {
    const user = userEvent.setup();

    render(<Tabs tabs={tabs} body={<p>Panel content</p>} />);

    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveTextContent('Panel content');
    expect(panel).toHaveClass('w-full', 'border-sky-400');

    await user.click(screen.getByRole('tab', { name: 'Courage' }));

    expect(panel).toHaveClass('border-orange-400');
    expect(panel).not.toHaveClass('border-sky-400');
  });
});
