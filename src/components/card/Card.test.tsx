import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vite-plus/test';

import { Times } from '@constants/times';

import { BadgeColors, BadgeSizes } from '../badge';
import { Card } from './Card';
import { CardIcons } from './types';

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
    expect(article).toHaveClass('bg-slate-100', 'dark:bg-slate-800');
    expect(article).not.toHaveClass('opacity-60');
    expect(article).not.toHaveClass('hover:shadow-md');
    expect(article).not.toHaveClass('transition-[box-shadow,border-color,background-color]');
    expect(article).not.toHaveClass('duration-150');

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
    expect(article).toHaveClass('transition-[box-shadow,border-color,background-color]');
    expect(article).toHaveClass('duration-150');

    await user.click(screen.getByText('Pick me'));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('is keyboard-accessible when selectable and has onClick', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    const { container } = render(
      <Card time={Times.Morning} onClick={onClick} body={<span>Pick me</span>} />
    );

    const article = container.querySelector('article');

    expect(article).toHaveAttribute('tabIndex', '0');

    await user.tab();
    expect(article).toHaveFocus();

    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledOnce();

    await user.keyboard(' ');
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('is not keyboard-accessible when not selectable', () => {
    const { container } = render(
      <Card
        time={Times.Morning}
        isSelectable={false}
        onClick={vi.fn()}
        body={<span>Locked</span>}
      />
    );

    const article = container.querySelector('article');

    expect(article).not.toHaveAttribute('tabIndex');
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

  it('does not render modifier icons by default', () => {
    render(<Card header="Event" body={<span>Content</span>} />);

    expect(screen.queryByLabelText('Modifiers')).not.toBeInTheDocument();
  });

  it('renders provided modifier icons at the header with their alt text', () => {
    render(
      <Card
        header="Event"
        body={<span>Content</span>}
        icons={[
          { icon: CardIcons.CharismaticCharacter, tooltip: 'Charisma is maxed' },
          { icon: CardIcons.TarotCard, tooltip: 'Equip the related card' },
          { icon: CardIcons.ExamPassed, tooltip: 'Exam already passed' },
        ]}
      />
    );

    expect(screen.getByAltText('Charismatic character')).toBeInTheDocument();
    expect(screen.getByAltText('Tarot card')).toBeInTheDocument();
    expect(screen.getByAltText('Exam passed')).toBeInTheDocument();
  });

  it('shows the customized tooltip text for a modifier icon on hover', async () => {
    const user = userEvent.setup();

    render(
      <Card
        header="Event"
        body={<span>Content</span>}
        icons={[{ icon: CardIcons.TarotCard, tooltip: 'Equip the Star arcana card' }]}
      />
    );

    await user.hover(screen.getByAltText('Tarot card'));

    expect(screen.getByRole('tooltip')).toHaveTextContent('Equip the Star arcana card');
  });

  it('allows the same icon to be reused with different tooltip text', async () => {
    const user = userEvent.setup();

    render(
      <Card
        header="Event"
        body={<span>Content</span>}
        icons={[
          { icon: CardIcons.TarotCard, tooltip: 'Equip the Star arcana card' },
          { icon: CardIcons.TarotCard, tooltip: 'Or the Moon arcana card' },
        ]}
      />
    );

    const cards = screen.getAllByAltText('Tarot card');
    expect(cards).toHaveLength(2);

    await user.hover(cards[1]);

    expect(screen.getByRole('tooltip')).toHaveTextContent('Or the Moon arcana card');
  });

  it('renders the header row for icons even without header content', () => {
    render(
      <Card
        body={<span>Content</span>}
        icons={[{ icon: CardIcons.ExamPassed, tooltip: 'Exam already passed' }]}
      />
    );

    expect(screen.getByAltText('Exam passed')).toBeInTheDocument();
  });
});
