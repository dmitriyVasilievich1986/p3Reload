import { EdogawaMedicineEvent } from './EdogawaMedicineEvent';
import { GameParadeCourageEvent } from './GameParadeCourage';
import { SleepDuringClassCourageEvent } from './SleepDuringClass';
import { CourageStatModifyNames, type CourageStatModifyNamesType } from './types';
import { WilduckBigEaterChallengeEvent } from './WilduckBigEaterChallenge';
import { WilduckBurgerWeekendWilduckSetEvent } from './WilduckBurgerWeekendWilduckSet';

export {
  CourageStatModifyNames,
  type CourageStatModifyNamesType,
  WilduckBigEaterChallengeEvent,
  WilduckBurgerWeekendWilduckSetEvent,
  EdogawaMedicineEvent,
  SleepDuringClassCourageEvent,
};

export const CourageStatModifyEvents = {
  [CourageStatModifyNames.wilduckBigEaterChallenge]: WilduckBigEaterChallengeEvent,
  [CourageStatModifyNames.wilduckBurgerWeekendWilduckSet]: WilduckBurgerWeekendWilduckSetEvent,
  [CourageStatModifyNames.edogawaMedicine]: EdogawaMedicineEvent,
  [CourageStatModifyNames.sleepDuringClass]: SleepDuringClassCourageEvent,
  [CourageStatModifyNames.gameParadeCourage]: GameParadeCourageEvent,
} as const;
