import { Districts } from '@constants/places';
/**
 * Sleep during class courage event at Gekkoukan High School.
 */
import { Times } from '@constants/times';
import { AvailabilityBase, TimeAvailability } from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type CourageStatModifyNamesType, courageStatModifyNames } from './types';

/**
 * Sleep during class courage event at Gekkoukan High School.
 *
 * Grants +2 Courage.
 */
export class SleepDuringClassCourageEvent extends CharacterStatsModifyEventBase {
  static readonly name: CourageStatModifyNamesType = courageStatModifyNames.sleepDuringClass;

  static readonly header: string = 'Sleep during class';
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Courage, operator: '+', value: 2 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: [Times.Morning] }),
  ];
}
