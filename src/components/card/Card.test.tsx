import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vite-plus/test';

import { Times } from '@constants/times';

import { BadgeColors, BadgeSizes } from '../badge';
import { Card } from './Card';

describe('Card', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders optional header and body items', () => {
    render(
      <Card
        time={Times.Morning}
        header="Event"
        body={[<span key="a">First</span>, <span key="b">Second</span>]}
      />
    );

    expect(screen.getByText('Event')).toBeInTheDocument();
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });

  it('renders the time badge at the top-left when provided', () => {
    render(<Card time={Times.Evening} body={<span>Content</span>} />);

    expect(screen.getByText(Times.Evening)).toBeInTheDocument();
  });

  it('does not render a time badge when time is omitted', () => {
    render(<Card body={<span>Content</span>} />);

    expect(screen.queryByText(Times.Evening)).not.toBeInTheDocument();
    expect(screen.queryByText(Times.Morning)).not.toBeInTheDocument();
  });

  it('renders an optional badge at the top-right', () => {
    render(
      <Card
        time={Times.Day}
        badge={{ size: BadgeSizes.sm, color: BadgeColors.green, text: 'Available' }}
        body={<span>Content</span>}
      />
    );

    expect(screen.getByText('Available')).toBeInTheDocument();
  });

  it('marks the card as selected', () => {
    const { container } = render(
      <Card time={Times.Night} isSelected body={<span>Content</span>} />
    );

    const article = container.querySelector('article');

    expect(article).toHaveAttribute('aria-selected', 'true');
    expect(article).toHaveClass('ring-2');
  });

  it('disables interaction when not selectable', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    const { container } = render(
      <Card
        time={Times.Morning}
        isSelectable={false}
        onClick={onClick}
        body={<span>Locked</span>}
      />
    );

    const article = container.querySelector('article');

    expect(article).toHaveAttribute('aria-disabled', 'true');
    expect(article).toHaveClass('opacity-60');
    expect(article).not.toHaveClass('hover:shadow-md');

    await user.click(screen.getByText('Locked'));

    expect(onClick).not.toHaveBeenCalled();
  });

  it('calls onClick when selectable', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    const { container } = render(
      <Card time={Times.Morning} onClick={onClick} body={<span>Pick me</span>} />
    );

    const article = container.querySelector('article');

    expect(article).toHaveClass('hover:shadow-md');
    expect(article).toHaveClass('active:shadow-sm');

    await user.click(screen.getByText('Pick me'));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('includes dark-mode classes', () => {
    const { container } = render(<Card time={Times.Day} body={<span>Content</span>} />);

    const article = container.querySelector('article');

    expect(article).toHaveClass('dark:bg-slate-900');
    expect(article).toHaveClass('dark:border-slate-700');
  });

  it('applies min-height when isTall is true', () => {
    const { container } = render(<Card isTall body={<span>Content</span>} />);

    const article = container.querySelector('article');

    expect(article).toHaveClass('min-h-[300px]');
  });

  it('does not apply min-height by default', () => {
    const { container } = render(<Card body={<span>Content</span>} />);

    const article = container.querySelector('article');

    expect(article).not.toHaveClass('min-h-[300px]');
  });
});
