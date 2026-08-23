import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import { MemoryRouter, useSearchParams } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vite-plus/test';

import holidayIcon from '@assets/holiday.svg';
import moonIcon from '@assets/moon.svg';
import studyIcon from '@assets/study.svg';
import { DEFAULT_DAY } from '@constants/dates';
import { Times } from '@constants/times';
import { Calendar } from '@services/calendar';
import { EmptyEvent } from '@services/event/models/specialEvents';
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
    expect(screen.getByRole('region', { name: 'Center panel' })).toBeInTheDocument();
    expect(screen.queryByText('Date not found')).not.toBeInTheDocument();
    expect(screen.queryByRole('banner', { name: 'Day navigation' })).not.toBeInTheDocument();
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
    expect(screen.queryByRole('img', { name: 'Full moon' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Holiday' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Exam day' })).not.toBeInTheDocument();
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
    const examIcon = screen.getByRole('img', { name: 'Exam day' });
    expect(examIcon).toHaveAttribute('src', studyIcon);

    await userEvent.setup().hover(examIcon);
    expect(screen.getByRole('tooltip')).toHaveTextContent('Exams are held on this day');
  });

  it('shows a full moon icon on full moon days', async () => {
    const day = createDayFixture({ date: dayjs('2009-04-09') });
    useMainStore.getState().setCalendar(new Calendar({ days: [day] }));

    renderCenterPanel('/p3Reload/?darkTheme=false&day=2009-04-09');

    await waitFor(() => {
      expect(useMainStore.getState().currentDay).toBe(day);
    });

    const fullMoonIcon = screen.getByRole('img', { name: 'Full moon' });
    expect(fullMoonIcon).toHaveAttribute('src', moonIcon);
    expect(screen.queryByRole('img', { name: 'Holiday' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Exam day' })).not.toBeInTheDocument();

    await userEvent.setup().hover(fullMoonIcon);
    expect(screen.getByRole('tooltip')).toHaveTextContent('A full moon occurs on this day');
  });

  it('shows a holiday icon on day-off days', async () => {
    const day = createDayFixture({ date: dayjs('2009-04-29') });
    useMainStore.getState().setCalendar(new Calendar({ days: [day] }));

    renderCenterPanel('/p3Reload/?darkTheme=false&day=2009-04-29');

    await waitFor(() => {
      expect(useMainStore.getState().currentDay).toBe(day);
    });

    const holiday = screen.getByRole('img', { name: 'Holiday' });
    expect(holiday).toHaveAttribute('src', holidayIcon);
    expect(screen.queryByRole('img', { name: 'Full moon' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Exam day' })).not.toBeInTheDocument();

    await userEvent.setup().hover(holiday);
    expect(screen.getByRole('tooltip')).toHaveTextContent('School is closed on this day');
  });

  it('shows every matching special-day icon', async () => {
    const day = createDayFixture({ date: dayjs('2009-08-06') });
    useMainStore.getState().setCalendar(new Calendar({ days: [day] }));

    renderCenterPanel('/p3Reload/?darkTheme=false&day=2009-08-06');

    await waitFor(() => {
      expect(useMainStore.getState().currentDay).toBe(day);
    });

    expect(screen.getByRole('img', { name: 'Full moon' })).toHaveAttribute('src', moonIcon);
    expect(screen.getByRole('img', { name: 'Holiday' })).toHaveAttribute('src', holidayIcon);
  });

  it('sets currentDay to undefined when getDay throws', async () => {
    const day = createDayFixture({ date: dayjs(DEFAULT_DAY) });
    useMainStore.getState().setCalendar(new Calendar({ days: [day] }));

    renderCenterPanel('/p3Reload/?darkTheme=false&day=2009-12-25');

    await waitFor(() => {
      expect(useMainStore.getState().currentDay).toBeUndefined();
      expect(screen.getByText('Date not found')).toBeInTheDocument();
    });
    expect(screen.getByTestId('search')).toHaveTextContent('day=2009-12-25');
    expect(screen.getByRole('region', { name: 'Center panel' })).toBeInTheDocument();
    expect(screen.queryByRole('banner', { name: 'Day navigation' })).not.toBeInTheDocument();
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
    const dayEvent = new EmptyEvent({ time: Times.Day, skipCheck: true, isChangeable: false });
    const eveningEvent = new EmptyEvent({
      time: Times.Evening,
      skipCheck: true,
      isChangeable: false,
    });
    const day = createDayFixture({
      date: dayjs(DEFAULT_DAY),
      events: [dayEvent, eveningEvent],
    });
    useMainStore.getState().setCalendar(new Calendar({ days: [day] }));

    renderCenterPanel('/p3Reload/?darkTheme=false');

    await waitFor(() => {
      expect(useMainStore.getState().currentDay).toBe(day);
    });

    const list = screen.getByRole('list');
    expect(list).toHaveClass('flex', 'flex-col');
    expect(screen.getAllByText('Blank event')).toHaveLength(2);
    expect(screen.getAllByText('Do nothing')).toHaveLength(2);
    expect(list.querySelectorAll(':scope > li')).toHaveLength(2);
  });

  it('injects selection props into rendered event cards', async () => {
    const user = userEvent.setup();
    const dayEvent = new EmptyEvent({ time: Times.Day, skipCheck: true, isChangeable: true });
    const day = createDayFixture({
      date: dayjs(DEFAULT_DAY),
      events: [dayEvent],
    });
    useMainStore.getState().setCalendar(new Calendar({ days: [day] }));

    renderCenterPanel('/p3Reload/?darkTheme=false');

    await waitFor(() => {
      expect(useMainStore.getState().currentDay).toBe(day);
    });

    const card = screen.getByRole('article');
    expect(card).toHaveAttribute('aria-selected', 'false');

    await user.click(card);

    expect(useMainStore.getState().selectedEvent).toBe(dayEvent);
    expect(card).toHaveAttribute('aria-selected', 'true');

    await user.click(card);

    expect(useMainStore.getState().selectedEvent).toBeNull();
    expect(card).toHaveAttribute('aria-selected', 'false');
  });
});
