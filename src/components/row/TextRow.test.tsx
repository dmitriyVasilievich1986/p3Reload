import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vite-plus/test';

import { TextRow } from './TextRow';
import { TextAligns } from './types';

describe('TextRow', () => {
  it('renders the provided text', () => {
    render(<TextRow text="Hello" />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('applies bold styling when isBold is true', () => {
    const { container } = render(<TextRow text="Bold" isBold />);

    expect(container.firstChild).toHaveClass('font-bold');
  });

  it('applies text alignment', () => {
    const { container } = render(<TextRow text="Centered" textAlign={TextAligns.center} />);

    expect(container.firstChild).toHaveClass('text-center');
  });
});
