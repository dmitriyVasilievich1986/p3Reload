import dayjs from 'dayjs';

import { DayOfWeek } from '@constants/dayOfWeek';
import { Districts } from '@constants/places';
import { Times } from '@constants/times';
import {
  type IsAvailableProps,
  TimeAvailability,
  DateAvailability,
  DayOfWeekAvailability,
  AndAvailability,
} from '@services/availability';
import { CharacterStatsNames } from '@services/stats/characterStats';
import { type CharacterStatsModifierType } from '@services/stats/characterStats';
import {
  type EpisodeSocialLinkNamesTypes,
  EpisodeSocialLinkNames,
} from '@services/stats/episodesStats';

import { EpisodesEventBase } from '../base';

/**
 * Episode event for Amada's story scenes.
 *
 * Availability is driven by the current episode level and unlocks fixed date windows
 * from the school-year arc through January of the next year.
 */
export class AmadaEvent extends EpisodesEventBase {
  /** Header label shown in the event card. */
  static readonly header: string = EpisodeSocialLinkNames.Amada;

  /** Episode identifier for this story arc. */
  static readonly name: EpisodeSocialLinkNamesTypes = EpisodeSocialLinkNames.Amada;

  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Ken Amada';
  /** District label shown in the event card. */
  static readonly district: string = Districts.IwatodaiDormitory;

  /**
   * Determine whether this episode is available for the current episode level.
   *
   * Each level maps to a distinct schedule: level 0 uses recurring Tue/Fri daytime slots
   * in late spring, while later levels unlock one-off daytime dates in summer, fall,
   * winter, and early January.
   *
   * @param {IsAvailableProps} props - Current game state used for evaluation.
   * @returns {boolean} True when every rule for the active episode level passes.
   */
  static override isAvailable(this: typeof AmadaEvent, props: IsAvailableProps): boolean {
    const level = props.stats.episodesStats[this.name as EpisodeSocialLinkNamesTypes];

    switch (level) {
      case 0:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-09-08'), dayjs('2009-09-30')],
            }),
            new TimeAvailability({ times: [Times.Evening] }),
            new DayOfWeekAvailability({
              daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday],
            }),
          ],
        }).isAvailable(props);
      case 1:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-09-08'), dayjs('2009-09-30')],
            }),
            new TimeAvailability({ times: [Times.Evening] }),
            new DayOfWeekAvailability({
              daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday],
            }),
          ],
        }).isAvailable(props);
      case 2:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-11-10'), dayjs('2009-12-02')],
            }),
            new TimeAvailability({ times: [Times.Evening] }),
            new DayOfWeekAvailability({
              daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday],
            }),
          ],
        }).isAvailable(props);
      case 3:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-12-22'), dayjs('2009-12-30')],
            }),
            new TimeAvailability({ times: [Times.Evening] }),
            new DayOfWeekAvailability({
              daysOfWeek: [
                DayOfWeek.Monday,
                DayOfWeek.Tuesday,
                DayOfWeek.Wednesday,
                DayOfWeek.Friday,
                DayOfWeek.Saturday,
              ],
            }),
          ],
        }).isAvailable(props);
      case 4:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2010-01-19'), dayjs('2010-01-27')],
            }),
            new TimeAvailability({ times: [Times.Evening] }),
            new DayOfWeekAvailability({
              daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday],
            }),
          ],
        }).isAvailable(props);
      default:
        return false;
    }
  }

  override getModifiers(this: EpisodesEventBase, level: number): CharacterStatsModifierType[] {
    const modifiers: CharacterStatsModifierType[] = [];

    switch (level) {
      case 0:
        modifiers.push({ name: CharacterStatsNames.Academics, operator: '+', value: 2 });
        break;
      case 1:
        modifiers.push({ name: CharacterStatsNames.Courage, operator: '+', value: 2 });
        break;
      case 2:
        modifiers.push({ name: CharacterStatsNames.Charm, operator: '+', value: 2 });
        break;
    }

    return modifiers;
  }
}
