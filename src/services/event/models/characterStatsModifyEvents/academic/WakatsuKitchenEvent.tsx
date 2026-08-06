import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { Times } from '@constants/times';
import { AvailabilityBase, TimeAvailability, DayOfWeekAvailability } from '@services/availability';
/**
 * Wakatsu Kitchen academics event at Iwatodai Strip Mall.
 */
import {
  CharacterStatsNames,
  type CharacterStatsModifierType,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type AcademicStatModifyNamesType, academicStatModifyNames } from './types';

import type { IsAvailableProps } from '@services/availability';
import type { CalculateStatsResult } from '@services/event/types';

/**
 * Academics activity at Wakatsu Kitchen in Iwatodai Strip Mall.
 *
 * Costs 680 yen and grants +3 Academics. Available during the day or evening on
 * Mondays, Wednesdays, Thursdays, Fridays, Saturdays, and Sundays.
 */
export class WakatsuKitchenEvent extends CharacterStatsModifyEventBase {
  static readonly name: AcademicStatModifyNamesType = academicStatModifyNames.wakatsuKitchen;

  static readonly header: string = 'Prodigy Platter';
  static readonly place: string = Places.WakatsuKitchen;
  static readonly district: string = Districts.IwatodaiStripMall;
  static readonly price: number = 680;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 3 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: [Times.Day, Times.Evening] }),
    new DayOfWeekAvailability({
      daysOfWeek: [
        DayOfWeek.Monday,
        DayOfWeek.Wednesday,
        DayOfWeek.Thursday,
        DayOfWeek.Friday,
        DayOfWeek.Saturday,
        DayOfWeek.Sunday,
      ],
    }),
  ];

  /**
   * Apply this event's Academics modifier to its current stats and return the result.
   *
   * @returns {stats: Stats; socialLinksStats: SocialLinksStats} Stat totals after the modifier has been applied.
   */
  override calculateStats(
    this: WakatsuKitchenEvent,
    props: IsAvailableProps
  ): CalculateStatsResult {
    const isFirstTime =
      !this.additionalStats.isEventHappened(academicStatModifyNames.wakatsuKitchen) &&
      props.time === Times.Evening;
    return {
      characterStats: this.characterStats,
      socialLinkStats: this.socialLinkStats,
      additionalStats: isFirstTime
        ? this.additionalStats.addEvent(academicStatModifyNames.wakatsuKitchen)
        : this.additionalStats,
    };
  }
}
