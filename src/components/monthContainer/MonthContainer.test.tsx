import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import { MemoryRouter, useSearchParams } from 'react-router';
import { afterEach, describe, expect, it } from 'vite-plus/test';

import { createDayFixture, createEventFixture } from '@services/fixtures';

import { LEFT_DRAWER_COLLAPSED_WIDTH_PX } from '../leftDrawer';
import { LeftDrawerContext } from '../leftDrawer/context';
import { MonthContainer } from './MonthContainer';

import type { Day } from '@services/day';

function SearchParamsProbe() {
  const [searchParams] = useSearchParams();

  return <div data-testid="search">{searchParams.toString()}</div>;
}

const aprilDays = [
  createDayFixture({ date: dayjs('2009-04-08') }),
  createDayFixture({ date: dayjs('2009-04-07') }),
  createDayFixture({ date: dayjs('2009-04-20') }),
];

/** April days where only 2009-04-07 has an event whose name contains "stayawake". */
function aprilDaysWithStayAwakeOnTheSeventh(): Day[] {
  return [
    createDayFixture({ date: dayjs('2009-04-08'), events: [] }),
    createDayFixture({ date: dayjs('2009-04-07'), events: [createEventFixture()] }),
    createDayFixture({ date: dayjs('2009-04-20'), events: [] }),
  ];
}

function renderMonthContainer(
  days: Day[] = aprilDays,
  initialEntry = '/?day=2009-04-07',
  drawerExpanded = false,
  filterName?: string
) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <LeftDrawerContext.Provider value={{ isExpanded: drawerExpanded }}>
        <MonthContainer days={days} filterName={filterName} />
      </LeftDrawerContext.Provider>
      <SearchParamsProbe />
    </MemoryRouter>
  );
}

describe('MonthContainer', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders nothing when there are no days', () => {
    const { container } = renderMonthContainer([]);

    expect(container.querySelector('section')).not.toBeInTheDocument();
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
  });

  it('shows the first letter of the month when the drawer is collapsed', () => {
    renderMonthContainer(aprilDays, '/?day=2009-04-07', false);

    const heading = screen.getByRole('heading', { name: 'April' });

    expect(screen.getByRole('region', { name: 'April' })).toBeInTheDocument();
    expect(heading).toHaveTextContent(/^A$/);
    expect(screen.getByText('A')).toHaveClass('rounded-full', 'bg-slate-100');
    expect(heading.querySelector('span')).toHaveStyle({
      width: `${LEFT_DRAWER_COLLAPSED_WIDTH_PX}px`,
    });
    expect(screen.queryByRole('list', { name: 'April dates' })).not.toBeInTheDocument();
  });

  it('shows the full month name when the drawer is expanded', () => {
    renderMonthContainer(aprilDays, '/?day=2009-04-07', true);

    // Badge shows the first letter, the expanded span shows the whole month name.
    expect(screen.getByRole('heading', { name: 'April' })).toHaveTextContent(/^AApril$/);
    expect(screen.queryByRole('list', { name: 'April dates' })).not.toBeInTheDocument();
  });

  it('expands the date list on header hover and collapses when the pointer leaves', async () => {
    const user = userEvent.setup();

    renderMonthContainer();

    const region = screen.getByRole('region', { name: 'April' });

    await user.hover(screen.getByRole('heading', { name: 'April' }));

    const list = screen.getByRole('list', { name: 'April dates' });
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('max-h-[300px]', 'overflow-y-auto');
    expect(screen.getByRole('button', { name: '7, Tuesday' })).toHaveTextContent('7, Tuesday');
    expect(screen.getByRole('button', { name: '8, Wednesday' })).toHaveTextContent('8, Wednesday');
    expect(screen.getByRole('button', { name: '20, Monday' })).toHaveTextContent('20, Monday');

    await user.unhover(region);

    await waitFor(() => {
      expect(screen.queryByRole('list', { name: 'April dates' })).not.toBeInTheDocument();
    });
  });

  it('keeps the date list open while the pointer is over a date', async () => {
    const user = userEvent.setup();

    renderMonthContainer();

    await user.hover(screen.getByRole('heading', { name: 'April' }));
    await user.hover(screen.getByRole('button', { name: '8, Wednesday' }));

    expect(screen.getByRole('list', { name: 'April dates' })).toBeInTheDocument();
  });

  it('updates the day URL param when a date is clicked', async () => {
    const user = userEvent.setup();

    renderMonthContainer();

    await user.hover(screen.getByRole('heading', { name: 'April' }));
    await user.click(screen.getByRole('button', { name: '20, Monday' }));

    expect(screen.getByTestId('search')).toHaveTextContent('day=2009-04-20');
  });

  it('marks the date that matches the day URL param as current', async () => {
    const user = userEvent.setup();

    renderMonthContainer(aprilDays, '/?day=2009-04-08');

    await user.hover(screen.getByRole('heading', { name: 'April' }));

    expect(screen.getByRole('button', { name: '8, Wednesday' })).toHaveAttribute(
      'aria-current',
      'date'
    );
    expect(screen.getByRole('button', { name: '7, Tuesday' })).not.toHaveAttribute('aria-current');
  });

  it('includes dark-mode classes on the header', () => {
    renderMonthContainer();

    expect(screen.getByRole('heading', { name: 'April' })).toHaveClass('dark:text-slate-50');
    expect(screen.getByRole('region', { name: 'April' })).toHaveClass('group');
    expect(screen.getByRole('banner')).toHaveClass(
      'group-hover:bg-slate-100',
      'dark:group-hover:bg-slate-800'
    );
  });

  it('keeps only the days whose events match filterName', async () => {
    const user = userEvent.setup();

    renderMonthContainer(
      aprilDaysWithStayAwakeOnTheSeventh(),
      '/?day=2009-04-07',
      false,
      'stayawake'
    );

    await user.hover(screen.getByRole('heading', { name: 'April' }));

    expect(screen.getByRole('button', { name: '7, Tuesday' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '8, Wednesday' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '20, Monday' })).not.toBeInTheDocument();
  });

  it('renders nothing when no day in the month matches filterName', () => {
    renderMonthContainer(
      aprilDaysWithStayAwakeOnTheSeventh(),
      '/?day=2009-04-07',
      false,
      'karaoke'
    );

    expect(screen.queryByRole('region', { name: 'April' })).not.toBeInTheDocument();
  });

  it('shows every date when filterName is blank', async () => {
    const user = userEvent.setup();

    renderMonthContainer(aprilDaysWithStayAwakeOnTheSeventh(), '/?day=2009-04-07', false, '   ');

    await user.hover(screen.getByRole('heading', { name: 'April' }));

    expect(screen.getByRole('button', { name: '7, Tuesday' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '8, Wednesday' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '20, Monday' })).toBeInTheDocument();
  });
});
