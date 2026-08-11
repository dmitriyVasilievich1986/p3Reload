import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import { MemoryRouter, useSearchParams } from 'react-router';
import { afterEach, describe, expect, it } from 'vite-plus/test';

import { DateStepButton } from './DateStepButton';
import { DateStepDirections } from './types';

function SearchParamsProbe() {
  const [searchParams] = useSearchParams();

  return <div data-testid="search">{searchParams.toString()}</div>;
}

function renderButton(
  props: Parameters<typeof DateStepButton>[0],
  initialEntry = '/?day=2009-04-07'
) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <DateStepButton {...props} />
      <SearchParamsProbe />
    </MemoryRouter>
  );
}

describe('DateStepButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('returns null when date is undefined', () => {
    const { container } = renderButton({
      direction: DateStepDirections.left,
    });

    expect(container.querySelector('button')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders a previous-day control with the formatted date for the left direction', () => {
    renderButton({
      date: dayjs('2009-04-06'),
      direction: DateStepDirections.left,
    });

    const button = screen.getByRole('button', { name: 'Previous day, April 6' });
    expect(button).toHaveTextContent('April 6');
  });

  it('renders a next-day control with the formatted date for the right direction', () => {
    renderButton({
      date: dayjs('2009-04-20'),
      direction: DateStepDirections.right,
    });

    const button = screen.getByRole('button', { name: 'Next day, April 20' });
    expect(button).toHaveTextContent('April 20');
  });

  it('updates the day URL param on click', async () => {
    const user = userEvent.setup();

    renderButton({
      date: dayjs('2009-04-08'),
      direction: DateStepDirections.right,
    });

    await user.click(screen.getByRole('button', { name: 'Next day, April 8' }));

    expect(screen.getByTestId('search')).toHaveTextContent('day=2009-04-08');
  });
});
