import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import { MemoryRouter, useSearchParams } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vite-plus/test';

import { DEFAULT_DAY } from '@constants/dates';
import { Times } from '@constants/times';
import { Calendar } from '@services/calendar';
import { TextEvent } from '@services/event/models/specialEvents';
import { createDayFixture } from '@services/fixtures';
import { useMainStore } from '@store/main';

import { CenterPanel } from './CenterPanel';

function SearchParamsProbe() {
  const [searchParams] = useSearchParams();

  return <div data-testid="search">{searchParams.toString()}</div>;
}

function renderCenterPanel(initialEntry: string) {
  return render(
    <MemoryRouter basename="/p3Reload" initialEntries={[initialEntry]}>
      <CenterPanel />
      <SearchParamsProbe />
    </MemoryRouter>
  );
}

describe('CenterPanel', () => {
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

  it('does nothing when calendar is null', async () => {
    renderCenterPanel('/p3Reload/?darkTheme=false');

    await waitFor(() => {
      expect(screen.getByTestId('search')).not.toHaveTextContent('day=');
    });
    expect(useMainStore.getState().currentDay).toBeNull();
    expect(screen.queryByRole('region', { name: 'Center panel' })).not.toBeInTheDocument();
  });

  it('sets the default day param and currentDay when calendar is set', async () => {
    const day = createDayFixture({ date: dayjs(DEFAULT_DAY) });
    useMainStore.getState().setCalendar(new Calendar({ days: [day] }));

    renderCenterPanel('/p3Reload/?darkTheme=false');

    await waitFor(() => {
      expect(screen.getByTestId('search')).toHaveTextContent(`day=${DEFAULT_DAY}`);
      expect(useMainStore.getState().currentDay).toBe(day);
    });
    expect(screen.getByRole('region', { name: 'Center panel' })).toHaveClass(
      'flex-[2]',
      'overflow-y-auto'
    );
    expect(screen.getByRole('banner', { name: 'Day navigation' })).toHaveClass('sticky');
    expect(screen.getByText('April 7, Tuesday')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Previous day/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Next day/ })).not.toBeInTheDocument();
  });

  it('renders adjacent DateStepButtons when neighboring days exist', async () => {
    const previousDay = createDayFixture({ date: dayjs('2009-04-06') });
    const currentDay = createDayFixture({ date: dayjs('2009-04-07') });
    const nextDay = createDayFixture({ date: dayjs('2009-04-08') });
    useMainStore.getState().setCalendar(new Calendar({ days: [previousDay, currentDay, nextDay] }));

    renderCenterPanel('/p3Reload/?darkTheme=false&day=2009-04-07');

    await waitFor(() => {
      expect(useMainStore.getState().currentDay).toBe(currentDay);
    });

    expect(screen.getByText('April 7, Tuesday')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Previous day, April 6' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next day, April 8' })).toBeInTheDocument();
  });

  it('keeps an existing day param and sets currentDay from it', async () => {
    const day = createDayFixture({ date: dayjs('2009-05-15') });
    useMainStore.getState().setCalendar(new Calendar({ days: [day] }));

    renderCenterPanel('/p3Reload/?darkTheme=false&day=2009-05-15');

    await waitFor(() => {
      expect(screen.getByTestId('search')).toHaveTextContent('day=2009-05-15');
      expect(useMainStore.getState().currentDay).toBe(day);
    });
  });

  it('sets currentDay to undefined when getDay throws', async () => {
    const day = createDayFixture({ date: dayjs(DEFAULT_DAY) });
    useMainStore.getState().setCalendar(new Calendar({ days: [day] }));

    renderCenterPanel('/p3Reload/?darkTheme=false&day=2009-12-25');

    await waitFor(() => {
      expect(useMainStore.getState().currentDay).toBeUndefined();
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
    expect(screen.getByTestId('search')).toHaveTextContent('day=2009-12-25');
  });

  it('does not replace currentDay when it already matches the day param', async () => {
    const day = createDayFixture({ date: dayjs('2009-05-15') });
    const calendar = new Calendar({ days: [day] });
    useMainStore.setState({ calendar, currentDay: day });

    renderCenterPanel('/p3Reload/?darkTheme=false&day=2009-05-15');

    await waitFor(() => {
      expect(useMainStore.getState().currentDay).toBe(day);
    });
  });

  it('renders the day events in a single column', async () => {
    const morning = new TextEvent({
      time: Times.Morning,
      skipCheck: true,
      isChangeable: false,
      isTall: false,
      rows: [{ name: 'TextRow', props: { text: 'Morning event', textAlign: 'center' } }],
    });
    const dayEvent = new TextEvent({
      time: Times.Day,
      skipCheck: true,
      isChangeable: false,
      isTall: false,
      header: 'Day event',
      rows: [{ name: 'TextRow', props: { text: 'Afternoon', textAlign: 'center' } }],
    });
    const day = createDayFixture({
      date: dayjs(DEFAULT_DAY),
      events: [morning, dayEvent],
    });
    useMainStore.getState().setCalendar(new Calendar({ days: [day] }));

    renderCenterPanel('/p3Reload/?darkTheme=false');

    await waitFor(() => {
      expect(useMainStore.getState().currentDay).toBe(day);
    });

    const list = screen.getByRole('list');
    expect(list).toHaveClass('flex', 'flex-col');
    expect(screen.getByText('Morning event')).toBeInTheDocument();
    expect(screen.getByText('Day event')).toBeInTheDocument();
    expect(list.querySelectorAll(':scope > li')).toHaveLength(2);
  });

  it('injects selection props into rendered event cards', async () => {
    const user = userEvent.setup();
    const morning = new TextEvent({
      time: Times.Morning,
      skipCheck: true,
      isChangeable: true,
      isTall: false,
      rows: [{ name: 'TextRow', props: { text: 'Morning event', textAlign: 'center' } }],
    });
    const day = createDayFixture({
      date: dayjs(DEFAULT_DAY),
      events: [morning],
    });
    useMainStore.getState().setCalendar(new Calendar({ days: [day] }));

    renderCenterPanel('/p3Reload/?darkTheme=false');

    await waitFor(() => {
      expect(useMainStore.getState().currentDay).toBe(day);
    });

    const card = screen.getByRole('article');
    expect(card).toHaveAttribute('aria-selected', 'false');

    await user.click(card);

    expect(useMainStore.getState().selectedEvent).toBe(morning);
    expect(card).toHaveAttribute('aria-selected', 'true');

    await user.click(card);

    expect(useMainStore.getState().selectedEvent).toBeNull();
    expect(card).toHaveAttribute('aria-selected', 'false');
  });
});
