import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
/**
 * Wakatsu Kitchen academics event at Iwatodai Strip Mall (Seafood Full Course).
 */
import { Times } from '@constants/times';
import {
  AvailabilityBase,
  TimeAvailability,
  DayOfWeekAvailability,
  CharacterStatsAvailability,
  IsEventInHistoryAvailability,
} from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type AcademicStatModifyNamesType, AcademicStatModifyNames } from './types';

/**
 * Academics activity at Wakatsu Kitchen in Iwatodai Strip Mall (Seafood Full Course).
 *
 * Costs 900 yen and grants +4 Academics. Available during the evening on
 * Mondays, Thursdays, Fridays, and Sundays.
 */
export class WakatsuKitchenSpecialEvent extends CharacterStatsModifyEventBase {
  static readonly name: AcademicStatModifyNamesType = AcademicStatModifyNames.wakatsuKitchenSpecial;

  static readonly header: string = 'Seafood Full Course';
  static readonly place: string = Places.WakatsuKitchen;
  static readonly district: string = Districts.IwatodaiStripMall;
  static readonly price: number = 900;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 4 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new CharacterStatsAvailability({
      name: CharacterStatsNames.Academics,
      operator: 'lt',
      level: 6,
    }),
    new TimeAvailability({ times: [Times.Evening] }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Sunday],
    }),
    new CharacterStatsAvailability({
      name: CharacterStatsNames.Charm,
      operator: 'ge',
      level: 2,
    }),
    new IsEventInHistoryAvailability({
      name: AcademicStatModifyNames.wakatsuKitchen,
      isInHistory: true,
    }),
  ];
}
