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
import { type CharmStatModifyNamesType, CharmStatModifyNames } from './types';

/**
 * Special Hagakure Ramen charm event at Iwatodai Strip Mall.
 *
 * Costs 1200 yen and grants +4 Charm. Available during the evening on
 * Tuesdays, Wednesdays, and Fridays.
 *
 * This event is only available if the Hagakure Ramen event has been completed at least once.
 */
export class HagakureRamenSpecialEvent extends CharacterStatsModifyEventBase {
  static readonly name: CharmStatModifyNamesType = CharmStatModifyNames.hagakureRamenSpecial;

  static readonly header: string = 'Special Hagakure Bowl';
  static readonly place: string = Places.HagakureRamen;
  static readonly district: string = Districts.IwatodaiStripMall;
  static readonly price: number = 1_200;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Charm, operator: '+', value: 4 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new CharacterStatsAvailability({ name: CharacterStatsNames.Charm, operator: 'lt', level: 6 }),
    new TimeAvailability({ times: [Times.Evening] }),
    new IsEventInHistoryAvailability({
      name: CharmStatModifyNames.hagakureRamen,
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
