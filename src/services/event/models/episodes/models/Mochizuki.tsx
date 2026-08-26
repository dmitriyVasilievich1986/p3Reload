import dayjs from 'dayjs';

import { Times } from '@constants/times';
import {
  type IsAvailableProps,
  TimeAvailability,
  DateAvailability,
  AndAvailability,
} from '@services/availability';
import { Stats } from '@services/stats';
import {
  type EpisodeSocialLinkNamesTypes,
  EpisodeSocialLinkNames,
} from '@services/stats/episodesStats';

import { EpisodesEventBase } from '../base';

/**
 * Episode event for Mochizuki's story scenes.
 *
 * Availability is driven by the current episode level and unlocks fixed date windows
 * from the school-year arc through January of the next year.
 */
export class MochizukiEvent extends EpisodesEventBase {
  /** Header label shown in the event card. */
  static readonly header: string = 'Mochizuki';

  /** Episode identifier for this story arc. */
  static readonly name: EpisodeSocialLinkNamesTypes = EpisodeSocialLinkNames.Mochizuki;

  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Ryoji Mochizuki';
  /** District label shown in the event card. */
  static readonly district: string = 'Iwatodai Station';

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
        return false;
      case 1:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'in',
              value: [dayjs('2009-11-12'), dayjs('2009-11-14'), dayjs('2009-11-16')],
            }),
            new TimeAvailability({ times: [Times.Day] }),
          ],
        }).isAvailable(props);
      case 2:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'eq',
              value: dayjs('2009-11-18'),
            }),
            new TimeAvailability({ times: [Times.Day] }),
          ],
        }).isAvailable(props);
      case 3:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'eq',
              value: dayjs('2009-12-01'),
            }),
            new TimeAvailability({ times: [Times.Day] }),
          ],
        }).isAvailable(props);
      case 4:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'eq',
              value: dayjs('2009-12-31'),
            }),
            new TimeAvailability({ times: [Times.Day] }),
          ],
        }).isAvailable(props);
      default:
        return false;
    }
  }

  override calculateStats(_props: IsAvailableProps): Stats {
    return this.stats;
  }
}
