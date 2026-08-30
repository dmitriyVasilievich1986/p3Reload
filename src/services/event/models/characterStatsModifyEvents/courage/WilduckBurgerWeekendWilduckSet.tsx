/**
 * Wilduck Burger weekend wilduck set event at Iwatodai Strip Mall.
 */
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { Times } from '@constants/times';
import {
  AvailabilityBase,
  TimeAvailability,
  DayOfWeekAvailability,
  IsEventInHistoryAvailability,
  CharacterStatsAvailability,
} from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type CourageStatModifyNamesType, CourageStatModifyNames } from './types';

/**
 * Courage activity at Wilduck Burger in Iwatodai Strip Mall.
 *
 * Costs 1,200 yen and grants +4 Courage. Available during the day or evening on
 * Saturdays and Sundays.
 */
export class WilduckBurgerWeekendWilduckSetEvent extends CharacterStatsModifyEventBase {
  static readonly name: CourageStatModifyNamesType =
    CourageStatModifyNames.wilduckBurgerWeekendWilduckSet;

  static readonly header: string = 'Weekend Wilduck Set';
  static readonly place: string = Places.WilduckBurger;
  static readonly district: string = Districts.IwatodaiStripMall;
  static readonly price: number = 1_200;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Courage, operator: '+', value: 4 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new CharacterStatsAvailability({ name: CharacterStatsNames.Courage, operator: 'lt', level: 6 }),
    new TimeAvailability({ times: [Times.Day, Times.Evening] }),
    new IsEventInHistoryAvailability({
      name: CourageStatModifyNames.wilduckBigEaterChallenge,
      isInHistory: true,
    }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Saturday, DayOfWeek.Sunday],
    }),
  ];
}
