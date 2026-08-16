import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vite-plus/test';

import { CheckboxRow } from './CheckboxRow';

describe('CheckboxRow', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders a checkbox and the provided text', () => {
    render(<CheckboxRow text="Accept terms" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('does not propagate checkbox clicks to a parent', async () => {
    const user = userEvent.setup();
    const onParentClick = vi.fn();

    render(
      <div onClick={onParentClick}>
        <CheckboxRow text="Accept terms" />
      </div>
    );

    await user.click(screen.getByRole('checkbox'));

    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(onParentClick).not.toHaveBeenCalled();
  });
});
