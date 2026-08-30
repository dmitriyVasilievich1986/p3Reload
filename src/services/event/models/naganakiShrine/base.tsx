import { Card } from '@components/card';
import { LabelRow, TextRow } from '@components/row';
import { Districts } from '@constants/places';
import { BaseEvent } from '@services/event/base';
import { Stats } from '@services/stats';

import type { NaganakiShrineEventsNamesType } from './types';
import type { ArcanasType } from '@constants/arcanas';
import type { IsAvailableProps } from '@services/availability/types';

export abstract class NaganakiShrineEventBase extends BaseEvent {
  static readonly name: NaganakiShrineEventsNamesType;
  static readonly arcana: ArcanasType;
  static readonly socialLinkName: string;

  getModifier(this: NaganakiShrineEventBase): number {
    const charmModifier = this.stats.characterStats.getCharmModifier();
    const afterExamModifier = this.stats.additionalStats.getAfterExamModifier(
      (this.constructor as typeof NaganakiShrineEventBase).arcana
    );
    return charmModifier * afterExamModifier;
  }

  calculateStats(this: NaganakiShrineEventBase, props: IsAvailableProps): Stats {
    const constructor = this.constructor as typeof NaganakiShrineEventBase;
    const currentLevel = props.stats.socialLinkStats[constructor.arcana].currentSocialLinkLevel;
    const modifier = this.getModifier();
    const { isCardNeeded, pointsWithCard, pointsWithoutCard } = currentLevel.getIsCardNeeded({
      modifier,
      pointsWithCard: Math.floor(10 * modifier * 1.51),
      pointsWithoutCard: Math.floor(10 * modifier),
    });
    const points = isCardNeeded ? pointsWithCard : pointsWithoutCard;

    return new Stats({
      ...this.stats,
      socialLinkStats: this.stats.socialLinkStats.increasePoints({
        arcana: constructor.arcana,
        points: points,
      }),
    });
  }

  render(this: NaganakiShrineEventBase, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof NaganakiShrineEventBase;
    const stats = this.stats.socialLinkStats[constructor.arcana as ArcanasType];
    return (
      <Card
        key={`${constructor.name}-${props.time}`}
        time={props.time}
        badge={{
          size: 'sm',
          color: 'green',
          text: stats.level.toString(),
        }}
        isSelectable={this.isChangeable}
        body={
          <>
            <LabelRow key="Name" label="Name:" text={constructor.socialLinkName} />
            <LabelRow key="District" label="District:" text={Districts.NaganakiShrine} />
            <TextRow textAlign="center" isBold key="text" text="Improve your Social Link" />
          </>
        }
        header={`${constructor.arcana}[Naganaki Shrine]`}
      />
    );
  }

  static render(this: typeof NaganakiShrineEventBase, props: IsAvailableProps): React.ReactNode {
    return (
      <Card
        key={`${this.name}-${props.time}`}
        body={
          <>
            <LabelRow key="Name" label="Name:" text={this.socialLinkName} />
            <LabelRow key="District" label="District:" text={Districts.NaganakiShrine} />
          </>
        }
        header={`${this.arcana}[Naganaki Shrine]`}
      />
    );
  }
}
