import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vite-plus/test';

import { rowFactory, RowNames } from './factory';
import { TextAligns } from './types';

describe('rowFactory', () => {
  it('creates a LabelRow', () => {
    render(rowFactory(RowNames.LabelRow, { label: 'Name', text: 'Alice' }));

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('creates a CheckboxRow', () => {
    render(rowFactory(RowNames.CheckboxRow, { text: 'Accept terms' }));

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('creates a TextRow', () => {
    const { container } = render(
      rowFactory(RowNames.TextRow, {
        text: 'Centered',
        isBold: true,
        textAlign: TextAligns.center,
      })
    );

    expect(screen.getByText('Centered')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('font-bold');
    expect(container.firstChild).toHaveClass('text-center');
  });
});
