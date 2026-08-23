import dayjs from 'dayjs';

import { Card } from '@components/card';
import { LabelRow, TextRow } from '@components/row';
import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Districts } from '@constants/places';
import { Times } from '@constants/times';
import {
  type AvailabilityBase,
  SocialLinkLevelAvailability,
  TimeAvailability,
  DayOfWeekAvailability,
  DateAvailability,
  CharacterStatsAvailability,
  type IsAvailableProps,
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';
import { CharacterStatsNames } from '@services/stats/characterStats/types';

import { SocialLinkEventBase } from './base';

import type { EventProps } from '../../types';

export class SunEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Sun;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Akinari Kamiki';
  /** Location label shown in the event card. */
  static readonly district: string = Districts.NaganakiShrine;

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.HangedMan, operator: 'ge', level: 3 }),
    new SocialLinkLevelAvailability({ name: Arcanas.Sun, operator: 'lt', level: 10 }),
    new CharacterStatsAvailability({
      name: CharacterStatsNames.Academics,
      operator: 'ge',
      level: 4,
    }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-08-09') }),
    new TimeAvailability({ times: [Times.Day] }),
    new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Sunday] }),
  ];

  static readonly levels = [];

  constructor(props: EventProps) {
    super({ ...props, skipCheck: true, isChangeable: false });
  }

  static getLevel(
    this: typeof SocialLinkEventBase,
    level: number,
    _props: IsAvailableProps
  ): SocialLinkLevel {
    return new SocialLinkLevel({
      level: level,
      pointsToNextLevel: 0,
      nextLevelPointsToNextLevel: 0,
      previousLevelPointsToNextLevel: 0,
      isRomantic: false,
      isFork: false,
      questions: [],
    });
  }

  render(this: SocialLinkEventBase, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof SocialLinkEventBase;
    const stats = this.stats.socialLinkStats[constructor.name as ArcanasType];
    const nextLevel = constructor.getLevel(stats.currentSocialLinkLevel.level + 1, props);
    return (
      <Card
        key={`${constructor.name}-${props.time}`}
        time={props.time}
        badge={{
          size: 'sm',
          color: 'green',
          text: `${stats.level.toString()} → ${nextLevel.level.toString()}`,
        }}
        isSelectable={this.isChangeable}
        body={
          <>
            <LabelRow key="Name" label="Name:" text={constructor.socialLinkName} />
            <LabelRow key="District" label="District:" text={constructor.district} />
            <LabelRow key="Place" label="Place:" text={constructor.place} />
            {stats.level === 0 ? (
              <TextRow textAlign="center" isBold key="text" text="Create a bond with Social Link" />
            ) : (
              <TextRow
                textAlign="center"
                isBold
                key="text"
                text="Increase bond level with Social Link"
              />
            )}
          </>
        }
        header={constructor.name}
      />
    );
  }
}
