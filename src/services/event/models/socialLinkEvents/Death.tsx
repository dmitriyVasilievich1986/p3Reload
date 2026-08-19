import { Card } from '@components/card';
import { LabelRow, TextRow } from '@components/row';
import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { Places, Districts } from '@constants/places';
import { type IsAvailableProps } from '@services/availability';
import { SocialLinkLevel, Stats } from '@services/stats';

import { SocialLinkEventBase } from './base';

import type { EventProps } from '../../types';

export class DeathEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Death;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Pharos';
  /** Location label shown in the event card. */
  static readonly place: string = Places.MainCharacterRoom;
  /** District label shown in the event card. */
  static readonly district: string = Districts.IwatodaiDormitory;

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

  calculateStats(this: SocialLinkEventBase, props: IsAvailableProps): Stats {
    const constructor = this.constructor as typeof DeathEvent;
    const currentStat = this.stats.socialLinkStats[constructor.name as ArcanasType];
    const result = super.calculateStats(props);
    const level = constructor.getLevel(0, props);
    const amountOfLevels = [1, 3, 6, 8].includes(currentStat.level) ? 2 : 1;
    return new Stats({
      ...result,
      socialLinkStats: result.socialLinkStats.increaseLevel({
        arcana: constructor.name,
        level: level,
        amountOfLevels,
      }),
    });
  }

  render(this: SocialLinkEventBase, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof SocialLinkEventBase;
    const stats = this.stats.socialLinkStats[constructor.name as ArcanasType];
    const amountOfLevels = [1, 3, 6, 8].includes(stats.level) ? 2 : 1;
    const nextLevel = constructor.getLevel(
      stats.currentSocialLinkLevel.level + amountOfLevels,
      props
    );
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
