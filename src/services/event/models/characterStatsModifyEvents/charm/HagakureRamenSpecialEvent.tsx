import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
/**
 * Hagakure Ramen charm event at Iwatodai Strip Mall.
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
import { type CharmStatModifyNamesType, charmStatModifyNames } from './types';

/**
 * Charm activity at Hagakure Ramen in Iwatodai Strip Mall.
 *
 * Costs 900 yen and grants +3 Charm. Available during the day or evening on
 * Mondays, Tuesdays, Wednesdays, Thursdays, and Fridays.
 */
export class HagakureRamenSpecialEvent extends CharacterStatsModifyEventBase {
  static readonly name: CharmStatModifyNamesType = charmStatModifyNames.hagakureRamenSpecial;

  static readonly header: string = 'Special Hagakure Bowl';
  static readonly place: string = Places.HagakureRamen;
  static readonly district: string = Districts.IwatodaiStripMall;
  static readonly price: number = 1_200;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Charm, operator: '+', value: 4 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: [Times.Evening] }),
    new IsEventInHistoryAvailability({
      name: charmStatModifyNames.hagakureRamen,
      isInHistory: true,
    }),
    new CharacterStatsAvailability({
      name: CharacterStatsNames.Charm,
      operator: 'ge',
      level: 3,
    }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Friday],
    }),
  ];
}
