export const Times: Record<string, string> = {
  Morning: 'Morning',
  DayFreeTime: 'Day Free Time',
  Day: 'Day',
  EveningFreeTime: 'Evening Free Time',
  Evening: 'Evening',
  Night: 'Night',
  DarkHour: 'Dark Hour',
} as const;

export type TimesType = (typeof Times)[keyof typeof Times];
