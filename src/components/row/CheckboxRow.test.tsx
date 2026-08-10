import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vite-plus/test';

import { CheckboxRow } from './CheckboxRow';

describe('CheckboxRow', () => {
  it('renders a checkbox and the provided text', () => {
    render(<CheckboxRow text="Accept terms" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });
});
