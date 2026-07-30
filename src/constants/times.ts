export const Times = {
  Morning: 'Morning',
  DayFreeTime: 'Day Free Time',
  Day: 'Day',
  EveningFreeTime: 'Evening Free Time',
  Evening: 'Evening',
  Night: 'Night',
  DarkHour: 'Dark Hour',
};

export type TimesType = (typeof Times)[keyof typeof Times];
