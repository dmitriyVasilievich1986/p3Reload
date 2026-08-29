export const CourageStatModifyNames = {
  sleepDuringClass: 'SleepDuringClassCourageEvent',
  gameParadeCourage: 'GameParadeCourageEvent',
  wilduckBigEaterChallenge: 'WilduckBigEaterChallengeEvent',
  wilduckBurgerWeekendWilduckSet: 'WilduckBurgerWeekendWilduckSetEvent',
} as const;

export type CourageStatModifyNamesType =
  (typeof CourageStatModifyNames)[keyof typeof CourageStatModifyNames];
