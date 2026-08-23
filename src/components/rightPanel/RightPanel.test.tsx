import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useSearchParams } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vite-plus/test';

import { Times } from '@constants/times';
import { Calendar } from '@services/calendar';
import { StayAwakeAcademicsEvent } from '@services/event/models/characterStatsModifyEvents/academic';
import { EmptyEvent } from '@services/event/models/specialEvents';
import { createDayFixture } from '@services/fixtures';
import { useMainStore } from '@store/main';

import { RightPanel } from './RightPanel';

import type { BaseEvent } from '@services/event/base';

function DayParamButton({ day }: { day: string }) {
  const [, setSearchParams] = useSearchParams();

  return (
    <button type="button" onClick={() => setSearchParams({ day })}>
      Set day
    </button>
  );
}

function OtherParamButton() {
  const [, setSearchParams] = useSearchParams();

  return (
    <button
      type="button"
      onClick={() =>
        setSearchParams((prev) => {
          prev.set('darkTheme', 'true');
          return prev;
        })
      }
    >
      Toggle theme
    </button>
  );
}

function SelectEventButton({ event }: { event: BaseEvent }) {
  return (
    <button type="button" onClick={() => useMainStore.getState().setSelectedEvent(event)}>
      Select event
    </button>
  );
}

function renderRightPanel(initialEntry: string) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <RightPanel />
      <DayParamButton day="2009-04-08" />
    </MemoryRouter>
  );
}

/**
 * Sets up a calendar with a single Morning slot occupied by `selectedEvent`,
 * so the "Class" tab lists `SleepDuringClassCourageEvent` as its only other
 * available option (both events only require `TimeAvailability`).
 */
function setUpMorningCalendar() {
  const selectedEvent = new StayAwakeAcademicsEvent({
    time: Times.Morning,
    skipCheck: true,
    isChangeable: true,
  });
  const day = createDayFixture({ events: [selectedEvent] });
  useMainStore.setState({ calendar: new Calendar({ days: [day] }), currentDay: day });

  return selectedEvent;
}

describe('RightPanel', () => {
  beforeEach(() => {
    useMainStore.setState({
      isLoading: false,
      calendar: null,
      currentDay: null,
      selectedEvent: null,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders an empty section when nothing is selected', () => {
    renderRightPanel('/p3Reload/?day=2009-04-07');

    expect(screen.getByRole('region', { name: 'Right panel' })).toBeInTheDocument();
  });

  it('clears the selected event on mount', () => {
    const event = new EmptyEvent({ time: Times.Day, skipCheck: true, isChangeable: true });
    useMainStore.setState({ selectedEvent: event });

    renderRightPanel('/p3Reload/?day=2009-04-07');

    expect(useMainStore.getState().selectedEvent).toBeNull();
  });

  it('clears the selected event when the day param changes', async () => {
    const user = userEvent.setup();
    renderRightPanel('/p3Reload/?day=2009-04-07');

    const event = new EmptyEvent({ time: Times.Day, skipCheck: true, isChangeable: true });
    useMainStore.getState().setSelectedEvent(event);
    expect(useMainStore.getState().selectedEvent).toBe(event);

    await user.click(screen.getByRole('button', { name: 'Set day' }));

    expect(useMainStore.getState().selectedEvent).toBeNull();
  });

  it('keeps the selected event when a non-day param changes', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/p3Reload/?day=2009-04-07']}>
        <RightPanel />
        <OtherParamButton />
      </MemoryRouter>
    );

    const event = new EmptyEvent({ time: Times.Day, skipCheck: true, isChangeable: true });
    useMainStore.getState().setSelectedEvent(event);

    await user.click(screen.getByRole('button', { name: 'Toggle theme' }));

    expect(useMainStore.getState().selectedEvent).toBe(event);
  });

  it('shows a search input once an event is selected', async () => {
    const user = userEvent.setup();
    const selectedEvent = setUpMorningCalendar();

    render(
      <MemoryRouter initialEntries={['/p3Reload/?day=2009-04-07']}>
        <RightPanel />
        <SelectEventButton event={selectedEvent} />
      </MemoryRouter>
    );

    await user.click(screen.getByRole('button', { name: 'Select event' }));

    const search = screen.getByRole('textbox', { name: 'Search events' });
    expect(search).toHaveAttribute('placeholder', 'Search events');
    const icons = screen.getAllByAltText('');
    expect(icons.some((icon) => icon.getAttribute('src')?.includes('search'))).toBe(true);
  });

  it('filters tab events that match the search query', async () => {
    const user = userEvent.setup();
    const selectedEvent = setUpMorningCalendar();

    render(
      <MemoryRouter initialEntries={['/p3Reload/?day=2009-04-07']}>
        <RightPanel />
        <SelectEventButton event={selectedEvent} />
      </MemoryRouter>
    );

    await user.click(screen.getByRole('button', { name: 'Select event' }));
    expect(screen.getByText('Sleep during class')).toBeInTheDocument();

    await user.type(screen.getByRole('textbox', { name: 'Search events' }), 'sleep');
    expect(screen.getByText('Sleep during class')).toBeInTheDocument();
  });

  it('hides tab events that do not match the search query', async () => {
    const user = userEvent.setup();
    const selectedEvent = setUpMorningCalendar();

    render(
      <MemoryRouter initialEntries={['/p3Reload/?day=2009-04-07']}>
        <RightPanel />
        <SelectEventButton event={selectedEvent} />
      </MemoryRouter>
    );

    await user.click(screen.getByRole('button', { name: 'Select event' }));
    expect(screen.getByText('Sleep during class')).toBeInTheDocument();

    await user.type(screen.getByRole('textbox', { name: 'Search events' }), 'no such event');

    expect(screen.queryByText('Sleep during class')).not.toBeInTheDocument();
    expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
  });

  it('search is case-insensitive', async () => {
    const user = userEvent.setup();
    const selectedEvent = setUpMorningCalendar();

    render(
      <MemoryRouter initialEntries={['/p3Reload/?day=2009-04-07']}>
        <RightPanel />
        <SelectEventButton event={selectedEvent} />
      </MemoryRouter>
    );

    await user.click(screen.getByRole('button', { name: 'Select event' }));
    await user.type(screen.getByRole('textbox', { name: 'Search events' }), 'SLEEP');

    expect(screen.getByText('Sleep during class')).toBeInTheDocument();
  });

  it('shows a clear button with the trash bin icon once an event is selected', async () => {
    const user = userEvent.setup();
    const selectedEvent = setUpMorningCalendar();

    render(
      <MemoryRouter initialEntries={['/p3Reload/?day=2009-04-07']}>
        <RightPanel />
        <SelectEventButton event={selectedEvent} />
      </MemoryRouter>
    );

    await user.click(screen.getByRole('button', { name: 'Select event' }));

    const clearButton = screen.getByRole('button', { name: 'Clear search' });
    const icon = clearButton.querySelector('img');
    expect(icon).toHaveAttribute('src', expect.stringContaining('trash-bin'));
  });

  it('clears the search query and restores hidden events when clicked', async () => {
    const user = userEvent.setup();
    const selectedEvent = setUpMorningCalendar();

    render(
      <MemoryRouter initialEntries={['/p3Reload/?day=2009-04-07']}>
        <RightPanel />
        <SelectEventButton event={selectedEvent} />
      </MemoryRouter>
    );

    await user.click(screen.getByRole('button', { name: 'Select event' }));

    const search = screen.getByRole('textbox', { name: 'Search events' });
    await user.type(search, 'no such event');
    expect(screen.queryByText('Sleep during class')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Clear search' }));

    expect(search).toHaveValue('');
    expect(screen.getByText('Sleep during class')).toBeInTheDocument();
  });
});
