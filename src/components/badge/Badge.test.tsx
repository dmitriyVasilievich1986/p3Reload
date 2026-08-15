import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vite-plus/test';

import { Badge } from './Badge';

describe('Badge', () => {
  it('renders the provided text', () => {
    render(<Badge size="md" color="gold" text="Social Link" />);

    expect(screen.getByText('Social Link')).toBeInTheDocument();
  });

  it('is always round', () => {
    render(<Badge size="sm" color="blue" text="New" />);

    expect(screen.getByText('New')).toHaveClass('rounded-full');
  });

  it('applies size and color classes', () => {
    render(<Badge size="lg" color="green" text="Ready" />);

    const badge = screen.getByText('Ready');

    expect(badge).toHaveClass('text-base');
    expect(badge).toHaveClass('bg-emerald-100');
    expect(badge).toHaveClass('text-emerald-800');
  });
});
