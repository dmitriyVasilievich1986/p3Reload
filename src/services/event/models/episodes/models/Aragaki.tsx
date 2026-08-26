import dayjs from 'dayjs';

import { Card } from '@components/card';
import { LabelRow, ModifiersRow, TextRow } from '@components/row';
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
import { Stats } from '@services/stats';
import { CharacterStatsNames } from '@services/stats/characterStats';
import { type CharacterStatsModifierType } from '@services/stats/characterStats';
import {
  type EpisodeSocialLinkNamesTypes,
  EpisodeSocialLinkNames,
} from '@services/stats/episodesStats';

import { EpisodesEventBase } from '../base';

/**
 * Episode event for Aragaki's story scenes.
 *
 * Availability is driven by the current episode level and unlocks fixed date windows
 * from the school-year arc through January of the next year.
 */
export class AragakiEvent extends EpisodesEventBase {
  /** Header label shown in the event card. */
  static readonly header: string = EpisodeSocialLinkNames.Aragaki;

  /** Episode identifier for this story arc. */
  static readonly name: EpisodeSocialLinkNamesTypes = EpisodeSocialLinkNames.Aragaki;

  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Shinjiro Aragaki';
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
              operator: 'in',
              value: [
                dayjs('2009-09-04'),
                dayjs('2009-09-11'),
                dayjs('2009-09-13'),
                dayjs('2009-09-14'),
                dayjs('2009-09-16'),
                dayjs('2009-09-17'),
                dayjs('2009-09-21'),
                dayjs('2009-09-22'),
                dayjs('2009-09-24'),
                dayjs('2009-09-25'),
                dayjs('2009-09-27'),
                dayjs('2009-09-28'),
                dayjs('2009-09-29'),
                dayjs('2009-09-30'),
                dayjs('2009-10-02'),
              ],
            }),
            new TimeAvailability({ times: [Times.Day] }),
          ],
        }).isAvailable(props);
      case 1:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-09-11'), dayjs('2009-10-02')],
            }),
            new TimeAvailability({ times: [Times.Day] }),
            new DayOfWeekAvailability({
              daysOfWeek: [
                DayOfWeek.Monday,
                DayOfWeek.Tuesday,
                DayOfWeek.Wednesday,
                DayOfWeek.Thursday,
                DayOfWeek.Friday,
                DayOfWeek.Sunday,
              ],
            }),
          ],
        }).isAvailable(props);
      case 2:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-09-13'), dayjs('2009-10-02')],
            }),
            new TimeAvailability({ times: [Times.Day] }),
            new DayOfWeekAvailability({
              daysOfWeek: [
                DayOfWeek.Monday,
                DayOfWeek.Tuesday,
                DayOfWeek.Wednesday,
                DayOfWeek.Thursday,
                DayOfWeek.Friday,
                DayOfWeek.Sunday,
              ],
            }),
          ],
        }).isAvailable(props);
      case 3:
        return new AndAvailability({
          availabilities: [
            new DateAvailability({
              operator: 'between',
              value: [dayjs('2009-09-14'), dayjs('2009-10-02')],
            }),
            new TimeAvailability({ times: [Times.Day] }),
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
        return true;
      default:
        return false;
    }
  }

  override calculateStats(_props: IsAvailableProps): Stats {
    const level = this.getLevel();
    const modifiers: CharacterStatsModifierType[] = [];

    switch (level) {
      case 0:
        modifiers.push({ name: CharacterStatsNames.Courage, operator: '+', value: 2 });
        break;
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
    const characterStats = this.stats.characterStats.modify(modifiers);
    const episodeStats = this.stats.episodesStats.increaseLevel(
      this.constructor.name as EpisodeSocialLinkNamesTypes
    );
    return this.stats.updateEpisodesStats(episodeStats).updateCharacterStats(characterStats);
  }

  override render(props: IsAvailableProps): React.ReactNode | null {
    const level = this.getLevel();
    const modifiers: CharacterStatsModifierType[] = [];
    const constructor = this.constructor as typeof AragakiEvent;

    switch (level) {
      case 0:
        modifiers.push({ name: CharacterStatsNames.Courage, operator: '+', value: 2 });
        break;
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

    return (
      <Card
        key={`${constructor.name}-${props.time}`}
        body={
          <>
            <LabelRow key="place" label="Place:" text={constructor.place} />
            <LabelRow key="name" label="Name:" text={constructor.socialLinkName} />
            <LabelRow key="district" label="District:" text={constructor.district} />
            <ModifiersRow key="modifiers" modifiers={modifiers} />
            {level === 0 ? (
              <TextRow textAlign="center" isBold key="text" text="Create a bond with Social Link" />
            ) : (
              <TextRow
                textAlign="center"
                isBold
                key="text"
                text="Increase your bond with Social Link"
              />
            )}
          </>
        }
        header={constructor.header}
      />
    );
  }
}
