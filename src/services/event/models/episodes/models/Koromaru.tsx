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
  OrAvailability,
} from '@services/availability';
import { CharacterStatsNames } from '@services/stats/characterStats';
import { type CharacterStatsModifierType } from '@services/stats/characterStats';
import {
  type EpisodeSocialLinkNamesTypes,
  EpisodeSocialLinkNames,
} from '@services/stats/episodesStats';

import { EpisodesEventBase } from '../base';

/**
 * Episode event for Koromaru's story scenes.
 *
 * Availability is driven by the current episode level and unlocks fixed date windows
 * from the school-year arc through January of the next year.
 */
export class KoromaruEvent extends EpisodesEventBase {
  /** Header label shown in the event card. */
  static readonly header: string = EpisodeSocialLinkNames.Koromaru;

  /** Episode identifier for this story arc. */
  static readonly name: EpisodeSocialLinkNamesTypes = EpisodeSocialLinkNames.Koromaru;

  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Koromaru';
  /** District label shown in the event card. */
  static readonly district: string = Districts.IwatodaiStation;

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
  static override isAvailable(props: IsAvailableProps): boolean {
    const level = props.stats.episodesStats[this.name as EpisodeSocialLinkNamesTypes];

    switch (level) {
      case 0:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-08-22'), dayjs('2010-01-30')],
            }),
            new TimeAvailability({ times: [Times.Day] }),
            new OrAvailability({
              availabilities: [
                new DayOfWeekAvailability({
                  daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Friday],
                }),
                new DateAvailability({
                  operator: 'in',
                  value: [dayjs('2009-08-22'), dayjs('2010-01-28'), dayjs('2010-01-30')],
                }),
              ],
            }),
          ],
        }).isAvailable(props);
      case 1:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-09-04'), dayjs('2010-01-30')],
            }),
            new TimeAvailability({ times: [Times.Day] }),
            new OrAvailability({
              availabilities: [
                new DayOfWeekAvailability({
                  daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Friday],
                }),
                new DateAvailability({
                  operator: 'in',
                  value: [dayjs('2010-01-28'), dayjs('2010-01-30')],
                }),
              ],
            }),
          ],
        }).isAvailable(props);
      case 2:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-09-15'), dayjs('2010-01-30')],
            }),
            new TimeAvailability({ times: [Times.Day] }),
            new OrAvailability({
              availabilities: [
                new DayOfWeekAvailability({
                  daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Friday],
                }),
                new DateAvailability({
                  operator: 'in',
                  value: [dayjs('2010-01-28'), dayjs('2010-01-30')],
                }),
              ],
            }),
          ],
        }).isAvailable(props);
      case 3:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-09-16'), dayjs('2010-01-30')],
            }),
            new TimeAvailability({ times: [Times.Day] }),
            new OrAvailability({
              availabilities: [
                new DayOfWeekAvailability({
                  daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Friday],
                }),
                new DateAvailability({
                  operator: 'in',
                  value: [dayjs('2010-01-28'), dayjs('2010-01-30')],
                }),
              ],
            }),
          ],
        }).isAvailable(props);
      case 4:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2010-01-05'), dayjs('2010-01-30')],
            }),
            new TimeAvailability({ times: [Times.Day] }),
            new OrAvailability({
              availabilities: [
                new DayOfWeekAvailability({
                  daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Friday],
                }),
                new DateAvailability({
                  operator: 'in',
                  value: [dayjs('2010-01-28'), dayjs('2010-01-29'), dayjs('2010-01-30')],
                }),
              ],
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
        modifiers.push({ name: CharacterStatsNames.Charm, operator: '+', value: 2 });
        break;
      case 1:
      case 3:
        modifiers.push({ name: CharacterStatsNames.Courage, operator: '+', value: 2 });
        break;
    }

    return modifiers;
  }
}
