import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vite-plus/test';

import { LabelRow } from './LabelRow';

describe('LabelRow', () => {
  it('renders label and text', () => {
    render(<LabelRow label="Name" text="Alice" />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('returns null when text is undefined', () => {
    const { container } = render(<LabelRow label="Stats:" />);

    expect(container).toBeEmptyDOMElement();
  });

  it('makes the label bold and uses a 30/70 width split', () => {
    render(<LabelRow label="Role" text="Admin" />);

    const label = screen.getByText('Role');
    const text = screen.getByText('Admin');

    expect(label).toHaveClass('font-bold');
    expect(label).toHaveClass('w-[20%]');
    expect(text).toHaveClass('w-[80%]');
  });
});
