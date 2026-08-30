/**
 * Game Parade courage event at Paulownia Mall.
 */
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { Times } from '@constants/times';
import {
  AvailabilityBase,
  TimeAvailability,
  DayOfWeekAvailability,
  CharacterStatsAvailability,
} from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type CourageStatModifyNamesType, CourageStatModifyNames } from './types';

/**
 * Courage activity at Game Parade's House of the Deceased in Paulownia Mall.
 *
 * Costs 3,000 yen and grants +4 Courage. Available during the day or evening on
 * Tuesdays and Fridays.
 */
export class GameParadeCourageEvent extends CharacterStatsModifyEventBase {
  static readonly name: CourageStatModifyNamesType = CourageStatModifyNames.gameParadeCourage;

  static readonly header: string = '"House of the Deceased"';
  static readonly place: string = Places.GameParade;
  static readonly district: string = Districts.PaulowniaMall;
  static readonly price: number = 3_000;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Courage, operator: '+', value: 4 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new CharacterStatsAvailability({ name: CharacterStatsNames.Courage, operator: 'lt', level: 6 }),
    new TimeAvailability({ times: [Times.Day, Times.Evening] }),
    new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Friday] }),
  ];
}
