export const Times = {
  Morning: 'Morning',
  ExamResults: 'Exam Results',
  DayFreeTime: 'Day Free Time',
  Day: 'Day',
  EveningFreeTime: 'Evening Free Time',
  Evening: 'Evening',
  Night: 'Night',
  DarkHour: 'Dark Hour',
} as const;

export type TimesType = (typeof Times)[keyof typeof Times];
