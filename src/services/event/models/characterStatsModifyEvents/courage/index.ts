import { EdogawaMedicineEvent } from './EdogawaMedicineEvent';
import { SleepDuringClassCourageEvent } from './SleepDuringClass';
import { courageStatModifyNames, type CourageStatModifyNamesType } from './types';
import { WilduckBigEaterChallengeEvent } from './WilduckBigEaterChallenge';
import { WilduckBurgerWeekendWilduckSetEvent } from './WilduckBurgerWeekendWilduckSet';

export {
  courageStatModifyNames,
  type CourageStatModifyNamesType,
  WilduckBigEaterChallengeEvent,
  WilduckBurgerWeekendWilduckSetEvent,
  EdogawaMedicineEvent,
  SleepDuringClassCourageEvent,
};

export const courageStatModifyEvents = {
  [courageStatModifyNames.wilduckBigEaterChallenge]: WilduckBigEaterChallengeEvent,
  [courageStatModifyNames.wilduckBurgerWeekendWilduckSet]: WilduckBurgerWeekendWilduckSetEvent,
  [courageStatModifyNames.edogawaMedicine]: EdogawaMedicineEvent,
  [courageStatModifyNames.sleepDuringClass]: SleepDuringClassCourageEvent,
};
