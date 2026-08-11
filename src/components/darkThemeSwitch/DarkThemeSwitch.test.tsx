import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useSearchParams } from 'react-router';
import { afterEach, describe, expect, it } from 'vite-plus/test';

import dayIcon from '@assets/day.svg';
import nightIcon from '@assets/night.svg';

import { DarkThemeSwitch } from './DarkThemeSwitch';

function SearchParamsProbe() {
  const [searchParams] = useSearchParams();

  return <div data-testid="search">{searchParams.toString()}</div>;
}

function renderSwitch(initialEntry = '/?darkTheme=false') {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <DarkThemeSwitch />
      <SearchParamsProbe />
    </MemoryRouter>
  );
}

describe('DarkThemeSwitch', () => {
  afterEach(() => {
    cleanup();
  });

  it('shows the night icon in light theme', () => {
    renderSwitch('/?darkTheme=false');

    const button = screen.getByRole('button', { name: 'Switch to dark theme' });
    const icon = button.querySelector('img');

    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(icon).toHaveAttribute('src', nightIcon);
  });

  it('shows the day icon in dark theme', () => {
    renderSwitch('/?darkTheme=true');

    const button = screen.getByRole('button', { name: 'Switch to light theme' });
    const icon = button.querySelector('img');

    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(icon).toHaveAttribute('src', dayIcon);
  });

  it('toggles the darkTheme URL param on click', async () => {
    const user = userEvent.setup();

    renderSwitch('/?darkTheme=false');

    await user.click(screen.getByRole('button', { name: 'Switch to dark theme' }));

    expect(screen.getByTestId('search')).toHaveTextContent('darkTheme=true');
    expect(screen.getByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Switch to light theme' }));

    expect(screen.getByTestId('search')).toHaveTextContent('darkTheme=false');
  });

  it('animates the icon on click', async () => {
    const user = userEvent.setup();

    renderSwitch('/?darkTheme=false');

    const button = screen.getByRole('button', { name: 'Switch to dark theme' });
    const iconBefore = button.querySelector('img');

    expect(iconBefore).not.toHaveClass('animate-[spin_0.5s_ease-in-out]');

    await user.click(button);

    const iconAfter = screen
      .getByRole('button', { name: 'Switch to light theme' })
      .querySelector('img');

    expect(iconAfter).toHaveClass('animate-[spin_0.5s_ease-in-out]');
  });
});
