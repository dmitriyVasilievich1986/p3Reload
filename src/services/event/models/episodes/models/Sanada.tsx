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

export class SanadaEvent extends EpisodesEventBase {
  /** Header label shown in the event card. */
  static readonly header: string = EpisodeSocialLinkNames.Sanada;

  /** Episode identifier for this story arc. */
  static readonly name: EpisodeSocialLinkNamesTypes = EpisodeSocialLinkNames.Sanada;

  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Akihiko Sanada';
  /** District label shown in the event card. */
  static readonly district: string = Districts.IwatodaiStation;

  static override isAvailable(props: IsAvailableProps): boolean {
    const level = props.stats.episodesStats[this.name as EpisodeSocialLinkNamesTypes];
    switch (level) {
      case 0:
        return new AndAvailability({
          availabilities: [
            new TimeAvailability({ times: [Times.Evening] }),
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-05-29'), dayjs('2009-07-10')],
            }),
            new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Friday] }),
          ],
        }).isAvailable(props);
      case 1:
        return new AndAvailability({
          availabilities: [
            new TimeAvailability({ times: [Times.Evening] }),
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-07-24'), dayjs('2009-08-31')],
            }),
            new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Friday] }),
          ],
        }).isAvailable(props);
      case 2:
        return new AndAvailability({
          availabilities: [
            new TimeAvailability({ times: [Times.Evening] }),
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-10-09'), dayjs('2009-11-02')],
            }),
            new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Friday] }),
          ],
        }).isAvailable(props);
      case 3:
        return new AndAvailability({
          availabilities: [
            new TimeAvailability({ times: [Times.Evening] }),
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-12-12'), dayjs('2009-12-26')],
            }),
            new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Friday] }),
          ],
        }).isAvailable(props);
      case 4:
        return new AndAvailability({
          availabilities: [
            new TimeAvailability({ times: [Times.Evening] }),
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2010-01-04'), dayjs('2010-01-29')],
            }),
            new DayOfWeekAvailability({
              daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Saturday],
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
      case 2:
        modifiers.push({ name: CharacterStatsNames.Charm, operator: '+', value: 2 });
        break;
    }

    return modifiers;
  }
}
