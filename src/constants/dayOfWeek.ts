export const DayOfWeek: Record<string, string> = {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  Sunday: 'Sunday',
};

export type DayOfWeekType = (typeof DayOfWeek)[keyof typeof DayOfWeek];

// for dayjs
export const DayOfWeekPosition: Record<DayOfWeekType, number> = {
  [DayOfWeek.Monday]: 1,
  [DayOfWeek.Tuesday]: 2,
  [DayOfWeek.Wednesday]: 3,
  [DayOfWeek.Thursday]: 4,
  [DayOfWeek.Friday]: 5,
  [DayOfWeek.Saturday]: 6,
  [DayOfWeek.Sunday]: 0,
};
