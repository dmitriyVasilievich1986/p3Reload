import { Card } from '@components/card';
import { LabelRow, TextRow } from '@components/row';
import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { Places } from '@constants/places';
import { type IsAvailableProps } from '@services/availability';
import { SocialLinkLevel } from '@services/stats';

import { SocialLinkEventBase } from './base';

import type { EventProps } from '../../types';

export class FoolEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Fool;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'S.E.E.S.';
  /** Location label shown in the event card. */
  static readonly place: string = Places.Tartarus;

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
