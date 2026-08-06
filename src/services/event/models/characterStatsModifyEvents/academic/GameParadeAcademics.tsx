/**
 * Game Parade academics event at Paulownia Mall.
 */
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { Times } from '@constants/times';
import { AvailabilityBase, TimeAvailability, DayOfWeekAvailability } from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type AcademicStatModifyNamesType, academicStatModifyNames } from './types';

/**
 * Academics activity at Game Parade's Play "You're the Answer" in Paulownia Mall.
 *
 * Costs 3,000 yen and grants +4 Academics. Available during the day or evening on
 * Wednesdays and Saturdays.
 */
export class GameParadeAcademicsEvent extends CharacterStatsModifyEventBase {
  static readonly name: AcademicStatModifyNamesType = academicStatModifyNames.gameParadeAcademics;

  static readonly header: string = '"You\'re the Answer"';
  static readonly place: string = Places.GameParade;
  static readonly district: string = Districts.PaulowniaMall;
  static readonly price: number = 3_000;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 4 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: [Times.Day, Times.Evening] }),
    new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Wednesday, DayOfWeek.Saturday] }),
  ];
}
