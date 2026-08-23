import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useSearchParams } from 'react-router';
import { afterEach, describe, expect, it } from 'vite-plus/test';

import { Settings } from './Settings';

function SearchParamsProbe() {
  const [searchParams] = useSearchParams();

  return <div data-testid="search">{searchParams.toString()}</div>;
}

function renderSettings(initialEntry = '/') {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Settings />
      <SearchParamsProbe />
    </MemoryRouter>
  );
}

describe('Settings', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders a closed gear button by default', () => {
    renderSettings();

    expect(screen.getByRole('button', { name: 'Open settings' })).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens the settings modal when the gear button is clicked', async () => {
    const user = userEvent.setup();
    renderSettings();

    await user.click(screen.getByRole('button', { name: 'Open settings' }));

    expect(screen.getByRole('dialog', { name: 'Settings' })).toBeInTheDocument();
  });

  it('shows the mainCharName URL param in the protagonist name input', async () => {
    const user = userEvent.setup();
    renderSettings('/?mainCharName=Makoto');

    await user.click(screen.getByRole('button', { name: 'Open settings' }));

    expect(screen.getByLabelText('Protagonist name')).toHaveValue('Makoto');
  });

  it('shows a placeholder and empty value when mainCharName is unset', async () => {
    const user = userEvent.setup();
    renderSettings();

    await user.click(screen.getByRole('button', { name: 'Open settings' }));

    const input = screen.getByLabelText('Protagonist name');
    expect(input).toHaveValue('');
    expect(input).toHaveAttribute('placeholder', 'Protagonist');
  });

  it('updates the mainCharName URL param when typing', async () => {
    const user = userEvent.setup();
    renderSettings();

    await user.click(screen.getByRole('button', { name: 'Open settings' }));
    await user.type(screen.getByLabelText('Protagonist name'), 'Makoto');

    expect(screen.getByTestId('search')).toHaveTextContent('mainCharName=Makoto');
  });

  it('clears the mainCharName URL param when the input is emptied', async () => {
    const user = userEvent.setup();
    renderSettings('/?mainCharName=Makoto');

    await user.click(screen.getByRole('button', { name: 'Open settings' }));
    await user.clear(screen.getByLabelText('Protagonist name'));

    expect(screen.getByTestId('search')).not.toHaveTextContent('mainCharName');
  });

  it('reflects and toggles the showSpoilers URL param via the switch', async () => {
    const user = userEvent.setup();
    renderSettings();

    await user.click(screen.getByRole('button', { name: 'Open settings' }));

    const toggle = screen.getByRole('switch', { name: 'Show spoilers' });
    expect(toggle).toHaveAttribute('aria-checked', 'false');

    await user.click(toggle);

    expect(toggle).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByTestId('search')).toHaveTextContent('showSpoilers=true');

    await user.click(toggle);

    expect(toggle).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByTestId('search')).toHaveTextContent('showSpoilers=false');
  });

  it('closes the modal when Escape is pressed', async () => {
    const user = userEvent.setup();
    renderSettings();

    await user.click(screen.getByRole('button', { name: 'Open settings' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', async () => {
    const user = userEvent.setup();
    renderSettings();

    await user.click(screen.getByRole('button', { name: 'Open settings' }));
    await user.click(screen.getByRole('button', { name: 'Close settings' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the modal when clicking the backdrop', async () => {
    const user = userEvent.setup();
    renderSettings();

    await user.click(screen.getByRole('button', { name: 'Open settings' }));

    const backdrop = document.body.querySelector('[aria-hidden="true"].absolute');
    expect(backdrop).not.toBeNull();

    await user.click(backdrop as Element);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
