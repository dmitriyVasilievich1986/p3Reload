import { Card, CardIcons, type CardIcon } from '@components/card';
import { LabelRow, TextRow } from '@components/row';
import { Districts } from '@constants/places';
import { BaseEvent } from '@services/event/base';
import { SocialLinkLevel, Stats } from '@services/stats';

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
    const stats = props.stats.socialLinkStats[constructor.arcana];
    const currentLevel = stats.currentSocialLinkLevel;
    const modifier = this.getModifier();
    const { isCardNeeded, pointsWithCard, pointsWithoutCard } = currentLevel.getIsCardNeeded({
      modifier,
      currentPoints: stats.currentPoints,
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

  getModifierIcons(this: NaganakiShrineEventBase, currentLevel: SocialLinkLevel): CardIcon[] {
    const constructor = this.constructor as typeof NaganakiShrineEventBase;
    const stats = this.stats.socialLinkStats[constructor.arcana];
    const charmModifier = this.stats.characterStats.getCharmModifier();
    const afterExamModifier = this.stats.additionalStats.getAfterExamModifier(
      constructor.arcana as ArcanasType
    );
    const modifier = charmModifier * afterExamModifier;
    const { isCardNeeded } = currentLevel.getIsCardNeeded({
      modifier,
      currentPoints: stats.currentPoints,
      pointsWithCard: Math.floor(10 * modifier * 1.51),
      pointsWithoutCard: Math.floor(10 * modifier),
    });

    const icons: CardIcon[] = [];

    if (charmModifier === 1.51) {
      icons.push({
        icon: CardIcons.CharismaticCharacter,
        tooltip: 'Charm is maxed, boosting Social Link points.',
      });
    }

    if (afterExamModifier === 1.51) {
      icons.push({
        icon: CardIcons.ExamPassed,
        tooltip: 'Top class: the biggest Social Link point boost.',
      });
    } else if (afterExamModifier === 1.21) {
      icons.push({
        icon: CardIcons.ExamPassed,
        tooltip: 'Top 10: a solid Social Link point boost.',
      });
    }

    if (isCardNeeded) {
      icons.push({
        icon: CardIcons.TarotCard,
        tooltip: 'Equip a matching Persona card to reach the next rank.',
      });
    }

    return icons;
  }

  render(this: NaganakiShrineEventBase, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof NaganakiShrineEventBase;
    const stats = this.stats.socialLinkStats[constructor.arcana as ArcanasType];
    const icons = this.getModifierIcons(stats.currentSocialLinkLevel);
    return (
      <Card
        key={`${constructor.name}-${props.time}`}
        time={props.time}
        icons={icons}
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
