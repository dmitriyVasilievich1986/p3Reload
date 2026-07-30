import dayjs from 'dayjs';
import { describe, expect, it } from 'vite-plus/test';

import { DayOfWeek, DayOfWeekPosition } from './dayOfWeek';

describe('DayOfWeekPosition', () => {
  it('matches dayjs().day() for each weekday in 2009', () => {
    const datesByDay = {
      [DayOfWeek.Monday]: '2009-04-06',
      [DayOfWeek.Tuesday]: '2009-04-07',
      [DayOfWeek.Wednesday]: '2009-04-08',
      [DayOfWeek.Thursday]: '2009-04-09',
      [DayOfWeek.Friday]: '2009-04-10',
      [DayOfWeek.Saturday]: '2009-04-11',
      [DayOfWeek.Sunday]: '2009-04-12',
    };

    for (const [day, date] of Object.entries(datesByDay) as Array<
      [keyof typeof DayOfWeekPosition, string]
    >) {
      expect(DayOfWeekPosition[day]).toBe(dayjs(date).day());
    }
  });
});
