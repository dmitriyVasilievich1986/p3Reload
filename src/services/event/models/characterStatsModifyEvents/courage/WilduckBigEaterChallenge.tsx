import dayjs from 'dayjs';

/**
 * Wilduck Burger big eater challenge event at Iwatodai Strip Mall.
 */
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { Times } from '@constants/times';
import {
  AvailabilityBase,
  TimeAvailability,
  DayOfWeekAvailability,
  DateAvailability,
  IsEventInHistoryAvailability,
  CharacterStatsAvailability,
} from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type CourageStatModifyNamesType, courageStatModifyNames } from './types';

import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';

/**
 * Wilduck Burger big eater challenge event at Iwatodai Strip Mall.
 *
 * Costs 1,800 yen and grants +4 Academics, +4 Courage, and +4 Charm.
 * Available during the evening on Mondays, Tuesdays, Wednesdays, Fridays, Saturdays, and Sundays.
 *
 * This event is only available if the Big Eater Challenge event has not been completed at least once.
 */
export class WilduckBigEaterChallengeEvent extends CharacterStatsModifyEventBase {
  static readonly name: CourageStatModifyNamesType =
    courageStatModifyNames.wilduckBigEaterChallenge;

  static readonly header: string = 'Big Eater Challenge';
  static readonly place: string = Places.WilduckBurger;
  static readonly district: string = Districts.IwatodaiStripMall;
  static readonly price: number = 1_800;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 4 },
    { name: CharacterStatsNames.Courage, operator: '+', value: 4 },
    { name: CharacterStatsNames.Charm, operator: '+', value: 4 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: [Times.Evening] }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-05-10') }),
    new IsEventInHistoryAvailability({
      name: courageStatModifyNames.wilduckBigEaterChallenge,
      isInHistory: false,
    }),
    new CharacterStatsAvailability({
      name: CharacterStatsNames.Courage,
      operator: 'ge',
      level: 4,
    }),
    new DayOfWeekAvailability({
      daysOfWeek: [
        DayOfWeek.Monday,
        DayOfWeek.Tuesday,
        DayOfWeek.Wednesday,
        DayOfWeek.Friday,
        DayOfWeek.Saturday,
        DayOfWeek.Sunday,
      ],
    }),
  ];

  override calculateStats(this: CharacterStatsModifyEventBase, _props: IsAvailableProps): Stats {
    const additionalStats = this.stats.additionalStats.addEvent(
      courageStatModifyNames.wilduckBigEaterChallenge
    );
    const characterStats = this.stats.characterStats.modify(
      (this.constructor as typeof CharacterStatsModifyEventBase).modifiers
    );
    return this.stats.updateAdditionalStats(additionalStats).updateCharacterStats(characterStats);
  }
}
