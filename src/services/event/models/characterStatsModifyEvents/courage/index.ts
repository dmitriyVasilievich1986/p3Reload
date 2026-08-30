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
  SleepDuringClassCourageEvent,
};

export const CourageStatModifyEvents = {
  [CourageStatModifyNames.wilduckBigEaterChallenge]: WilduckBigEaterChallengeEvent,
  [CourageStatModifyNames.wilduckBurgerWeekendWilduckSet]: WilduckBurgerWeekendWilduckSetEvent,
  [CourageStatModifyNames.sleepDuringClass]: SleepDuringClassCourageEvent,
  [CourageStatModifyNames.gameParadeCourage]: GameParadeCourageEvent,
} as const;
