export const courageStatModifyNames = {
  sleepDuringClass: 'SleepDuringClassCourageEvent',
  gameParadeCourage: 'GameParadeCourageEvent',
  edogawaMedicine: 'EdogawaMedicineEvent',
  wilduckBigEaterChallenge: 'WilduckBigEaterChallengeEvent',
  wilduckBurgerWeekendWilduckSet: 'WilduckBurgerWeekendWilduckSetEvent',
} as const;

export type CourageStatModifyNamesType =
  (typeof courageStatModifyNames)[keyof typeof courageStatModifyNames];
