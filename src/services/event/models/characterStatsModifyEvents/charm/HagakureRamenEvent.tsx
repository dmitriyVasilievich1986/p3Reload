import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { Times } from '@constants/times';
import { AvailabilityBase, TimeAvailability, DayOfWeekAvailability } from '@services/availability';
/**
 * Hagakure Ramen charm event at Iwatodai Strip Mall.
 */
import {
  CharacterStatsNames,
  type CharacterStatsModifierType,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type CharmStatModifyNamesType, charmStatModifyNames } from './types';

import type { IsAvailableProps } from '@services/availability';
import type { Stats } from '@services/stats';

/**
 * Charm activity at Hagakure Ramen in Iwatodai Strip Mall.
 *
 * Costs 900 yen and grants +3 Charm. Available during the day or evening on
 * Mondays, Tuesdays, Wednesdays, Thursdays, and Fridays.
 */
export class HagakureRamenEvent extends CharacterStatsModifyEventBase {
  static readonly name: CharmStatModifyNamesType = charmStatModifyNames.hagakureRamen;

  static readonly header: string = 'Pork Ramen';
  static readonly place: string = Places.HagakureRamen;
  static readonly district: string = Districts.IwatodaiStripMall;
  static readonly price: number = 900;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Charm, operator: '+', value: 3 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
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
   * Apply this event's Academics modifier to its current stats and return the result.
   *
   * @returns {Stats} Stats after the modifier has been applied.
   */
  override calculateStats(this: HagakureRamenEvent, props: IsAvailableProps): Stats {
    const result = super.calculateStats(props);
    const isFirstTime =
      !this.stats.additionalStats.isEventHappened(charmStatModifyNames.hagakureRamen) &&
      props.time === Times.Evening;
    return isFirstTime
      ? result.updateAdditionalStats(
          this.stats.additionalStats.addEvent(charmStatModifyNames.hagakureRamen)
        )
      : result;
  }
}
