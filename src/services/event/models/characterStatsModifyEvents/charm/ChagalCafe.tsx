/**
 * Chagall Cafe charm event at Paulownia Mall.
 */
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { Times } from '@constants/times';
import {
  AvailabilityBase,
  TimeAvailability,
  DayOfWeekAvailability,
  OrAvailability,
  AndAvailability,
  CharacterStatsAvailability,
} from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type CharmStatModifyNamesType, CharmStatModifyNames } from './types';

/**
 * Evening charm activity at Chagall Cafe in Paulownia Mall.
 *
 * Costs 500 yen and grants +2 Charm.
 */
export class ChagalCafeCharmEvent extends CharacterStatsModifyEventBase {
  static readonly name: CharmStatModifyNamesType = CharmStatModifyNames.chagallCafeCharm;

  static readonly header: string = 'Pheromone Coffee';
  static readonly place: string = Places.ChagallCafe;
  static readonly district: string = Districts.PaulowniaMall;
  static readonly price: number = 500;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Charm, operator: '+', value: 2 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new CharacterStatsAvailability({ name: CharacterStatsNames.Charm, operator: 'lt', level: 6 }),
    new OrAvailability({
      availabilities: [
        new TimeAvailability({ times: [Times.Evening] }),
        new AndAvailability({
          availabilities: [
            new TimeAvailability({ times: [Times.Day] }),
            new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Tuesday] }),
          ],
        }),
      ],
    }),
  ];
}
