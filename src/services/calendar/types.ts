import type { Day } from '@services/day';

export type GetDayResult = {
  currentDay: Day;
  currentDayIndex: number;
  previousDay: Day;
  previousDayIndex: number;
  nextDay: Day;
  nextDayIndex: number;
  weekAgoDay: Day;
  weekAgoDayIndex: number;
};
