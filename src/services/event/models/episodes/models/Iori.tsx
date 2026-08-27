import dayjs from 'dayjs';

import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
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
 * Episode event for Junpei Iori's story scenes.
 *
 * Availability is driven by the current episode level and unlocks fixed date windows
 * from the school-year arc through January of the next year.
 */
export class IoriEvent extends EpisodesEventBase {
  /** Header label shown in the event card. */
  static readonly header: string = EpisodeSocialLinkNames.Iori;

  /** Episode identifier for this story arc. */
  static readonly name: EpisodeSocialLinkNamesTypes = EpisodeSocialLinkNames.Iori;

  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Junpei Iori';
  /** Location label shown in the event card. */
  static readonly place: string = Places.Classroom2F;
  /** District label shown in the event card. */
  static readonly district: string = Districts.GekkoukanHighSchool;

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
            new TimeAvailability({ times: [Times.Day] }),
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-05-12'), dayjs('2009-07-03')],
            }),
            new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Friday] }),
          ],
        }).isAvailable(props);
      case 1:
        return new AndAvailability({
          availabilities: [
            new TimeAvailability({ times: [Times.Day] }),
            new DateAvailability({
              operator: 'in',
              value: [
                dayjs('2009-08-09'),
                dayjs('2009-08-11'),
                dayjs('2009-08-14'),
                dayjs('2009-08-18'),
                dayjs('2009-08-21'),
                dayjs('2009-08-25'),
                dayjs('2009-08-28'),
              ],
            }),
          ],
        }).isAvailable(props);
      case 2:
        return new AndAvailability({
          availabilities: [
            new TimeAvailability({ times: [Times.Day] }),
            new DateAvailability({
              operator: 'in',
              value: [
                dayjs('2009-11-07'),
                dayjs('2009-11-10'),
                dayjs('2009-11-11'),
                dayjs('2009-11-13'),
              ],
            }),
          ],
        }).isAvailable(props);
      case 3:
        return new AndAvailability({
          availabilities: [
            new TimeAvailability({ times: [Times.Day] }),
            new DateAvailability({
              operator: 'in',
              value: [
                dayjs('2009-12-19'),
                dayjs('2009-12-22'),
                dayjs('2009-12-25'),
                dayjs('2009-12-26'),
              ],
            }),
          ],
        }).isAvailable(props);
      case 4:
        return new AndAvailability({
          availabilities: [
            new TimeAvailability({ times: [Times.Day] }),
            new DateAvailability({
              operator: 'in',
              value: [
                dayjs('2010-01-15'),
                dayjs('2010-01-18'),
                dayjs('2010-01-22'),
                dayjs('2010-01-23'),
                dayjs('2010-01-25'),
                dayjs('2010-01-26'),
                dayjs('2010-01-28'),
                dayjs('2010-01-29'),
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
      case 1:
        modifiers.push({ name: CharacterStatsNames.Charm, operator: '+', value: 2 });
        break;
      case 2:
        modifiers.push({ name: CharacterStatsNames.Academics, operator: '+', value: 2 });
        break;
      case 3:
        modifiers.push({ name: CharacterStatsNames.Courage, operator: '+', value: 2 });
        break;
    }

    return modifiers;
  }
}
