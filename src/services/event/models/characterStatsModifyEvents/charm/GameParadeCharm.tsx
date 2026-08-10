/**
 * Game Parade charm event at Paulownia Mall.
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
import { type CharmStatModifyNamesType, CharmStatModifyNames } from './types';

/**
 * Charm activity at Game Parade's House of the Deceased in Paulownia Mall.
 *
 * Costs 1,500 yen and grants +4 Charm. Available during the day or evening on
 * Mondays and Thursdays.
 */
export class GameParadeCharmEvent extends CharacterStatsModifyEventBase {
  static readonly name: CharmStatModifyNamesType = CharmStatModifyNames.gameParadeCharm;

  static readonly header: string = '"High School of Youth"';
  static readonly place: string = Places.GameParade;
  static readonly district: string = Districts.PaulowniaMall;
  static readonly price: number = 1_500;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Charm, operator: '+', value: 4 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: [Times.Day, Times.Evening] }),
    new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Thursday] }),
  ];
}
