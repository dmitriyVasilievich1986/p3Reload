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
  CharacterStatsNames,
  type CharacterStatsModifierType,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type CharmStatModifyNamesType, CharmStatModifyNames } from './types';

import type { IsAvailableProps } from '@services/availability';
import type { Stats } from '@services/stats';

/**
 * Charm activity at Hagakure Ramen in Iwatodai Strip Mall.
 *
 * Costs 900 yen and grants +3 Charm. Available during the day or evening on
 * Mondays, Tuesdays, Wednesdays, Thursdays, and Fridays.
 */
export class HagakureRamenEvent extends CharacterStatsModifyEventBase {
  static readonly name: CharmStatModifyNamesType = CharmStatModifyNames.hagakureRamen;

  static readonly header: string = 'Pork Ramen';
  static readonly place: string = Places.HagakureRamen;
  static readonly district: string = Districts.IwatodaiStripMall;
  static readonly price: number = 900;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Charm, operator: '+', value: 3 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new CharacterStatsAvailability({ name: CharacterStatsNames.Charm, operator: 'lt', level: 6 }),
    new TimeAvailability({ times: [Times.Day, Times.Evening] }),
    new DayOfWeekAvailability({
      daysOfWeek: [
        DayOfWeek.Monday,
        DayOfWeek.Tuesday,
        DayOfWeek.Wednesday,
        DayOfWeek.Thursday,
        DayOfWeek.Friday,
      ],
    }),
  ];

  /**
   * Calculate the stats for this event.
   *
   * @param {IsAvailableProps} props - The properties of the event.
   * @returns {Stats} The stats for this event.
   */
  override calculateStats(this: HagakureRamenEvent, props: IsAvailableProps): Stats {
    const result = super.calculateStats(props);
    const isFirstTime =
      !result.additionalStats.isEventHappened(CharmStatModifyNames.hagakureRamen) &&
      props.time === Times.Evening;
    return isFirstTime
      ? result.updateAdditionalStats(
          result.additionalStats.addEvent(CharmStatModifyNames.hagakureRamen)
        )
      : result;
  }
}
