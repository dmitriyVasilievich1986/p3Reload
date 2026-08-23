import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useSearchParams } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vite-plus/test';

import { DatesFormat } from '@constants/dates';
import { Calendar } from '@services/calendar/Calendar';
import { useMainStore } from '@store/main';

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

function createCalendar(days: { date: string; events: [] }[]) {
  return Calendar.calculateStats(Calendar.deserialize(days), undefined, false, false);
}

describe('Settings', () => {
  afterEach(() => {
    cleanup();
    useMainStore.setState({ calendar: null, currentDay: null, selectedEvent: null });
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

  it('imports a calendar from a selected JSON file, clearing the current day', async () => {
    const user = userEvent.setup();
    const initialCalendar = createCalendar([{ date: '2009-04-07', events: [] }]);
    useMainStore.setState({
      calendar: initialCalendar,
      currentDay: initialCalendar.days[0],
      selectedEvent: null,
    });

    renderSettings();
    await user.click(screen.getByRole('button', { name: 'Open settings' }));

    const file = new File(
      [
        JSON.stringify([
          { date: '2009-05-01', events: [] },
          { date: '2009-05-02', events: [] },
        ]),
      ],
      'calendar.json',
      { type: 'application/json' }
    );

    await user.upload(screen.getByLabelText('Import calendar file'), file);

    await screen.findByText('Calendar imported (2 days).');

    const { calendar, currentDay, selectedEvent } = useMainStore.getState();
    expect(calendar?.days).toHaveLength(2);
    expect(calendar?.days[0]?.date.format(DatesFormat)).toBe('2009-05-01');
    expect(currentDay).toBeNull();
    expect(selectedEvent).toBeNull();
  });

  it('shows an error and leaves the store untouched when the file is not valid JSON', async () => {
    const user = userEvent.setup();

    renderSettings();
    await user.click(screen.getByRole('button', { name: 'Open settings' }));

    const file = new File(['not valid json'], 'calendar.json', { type: 'application/json' });
    await user.upload(screen.getByLabelText('Import calendar file'), file);

    await screen.findByText(/Couldn't import that file/);
    expect(useMainStore.getState().calendar).toBeNull();
  });

  it('disables the export button when there is no calendar', async () => {
    const user = userEvent.setup();

    renderSettings();
    await user.click(screen.getByRole('button', { name: 'Open settings' }));

    expect(screen.getByRole('button', { name: 'Export calendar' })).toBeDisabled();
  });

  it('exports the current calendar as a downloaded JSON file when clicked', async () => {
    const user = userEvent.setup();
    useMainStore.setState({ calendar: createCalendar([{ date: '2009-04-07', events: [] }]) });

    const originalCreateObjectURL = URL.createObjectURL;
    const originalRevokeObjectURL = URL.revokeObjectURL;
    const createObjectURL = vi.fn(() => 'blob:mock-url');
    const revokeObjectURL = vi.fn();
    URL.createObjectURL = createObjectURL as typeof URL.createObjectURL;
    URL.revokeObjectURL = revokeObjectURL;
    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});

    try {
      renderSettings();
      await user.click(screen.getByRole('button', { name: 'Open settings' }));

      const exportButton = screen.getByRole('button', { name: 'Export calendar' });
      expect(exportButton).not.toBeDisabled();

      await user.click(exportButton);

      expect(createObjectURL).toHaveBeenCalledTimes(1);
      expect(clickSpy).toHaveBeenCalledTimes(1);
      expect(revokeObjectURL).toHaveBeenCalledWith('blob:mock-url');
    } finally {
      clickSpy.mockRestore();
      URL.createObjectURL = originalCreateObjectURL;
      URL.revokeObjectURL = originalRevokeObjectURL;
    }
  });
});
