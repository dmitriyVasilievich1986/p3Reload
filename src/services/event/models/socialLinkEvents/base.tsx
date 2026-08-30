import _ from 'lodash';

import { Card, CardIcons, type CardIcon } from '@components/card';
import { QuestionCard, type AnswerPoint } from '@components/questionCard';
import { LabelRow, TextRow } from '@components/row';
import { Times } from '@constants/times';
import { BaseEvent } from '@services/event/base';
import { SocialLinkLevel, Stats } from '@services/stats';

import type { ArcanasType } from '@constants/arcanas';
import type { IsAvailableProps } from '@services/availability/types';

export abstract class SocialLinkEventBase extends BaseEvent {
  static readonly name: ArcanasType;
  static readonly socialLinkName: string;
  static readonly district: string;
  static readonly place: string;

  static readonly levels: SocialLinkLevel[] = [];

  static getLevel(
    this: typeof SocialLinkEventBase,
    level: number,
    props: IsAvailableProps
  ): SocialLinkLevel {
    const isRomantic = props.stats.socialLinkStats[this.name as ArcanasType].isRomantic;
    const filteredLevels = _.filter(this.levels, (l) => l.level === level);
    if (filteredLevels.length === 0) {
      throw new Error(`Level ${level} not found`);
    }
    if (filteredLevels.length === 1) {
      return filteredLevels[0];
    }
    return _.find(filteredLevels, (l) => l.isRomantic === isRomantic) as SocialLinkLevel;
  }

  getModifier(this: SocialLinkEventBase): number {
    const charmModifier = this.stats.characterStats.getCharmModifier();
    const afterExamModifier = this.stats.additionalStats.getAfterExamModifier(
      this.constructor.name as ArcanasType
    );
    return charmModifier * afterExamModifier;
  }

  /**
   * Builds the modifier icons (with tooltips) shown at the right end of the
   * hangout Card header: charm-maxed, the post-exam Social Link bonus, and
   * whether a Persona card is the better way to reach the next rank.
   */
  getModifierIcons(this: SocialLinkEventBase, currentLevel: SocialLinkLevel): CardIcon[] {
    const constructor = this.constructor as typeof SocialLinkEventBase;
    const charmModifier = this.stats.characterStats.getCharmModifier();
    const afterExamModifier = this.stats.additionalStats.getAfterExamModifier(
      constructor.name as ArcanasType
    );
    const modifier = charmModifier * afterExamModifier;
    const { isCardNeeded } = currentLevel.getIsCardNeeded({
      modifier,
      pointsToNextLevel: currentLevel.nextLevelPointsToNextLevel,
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

  calculateStats(this: SocialLinkEventBase, props: IsAvailableProps): Stats {
    const constructor = this.constructor as typeof SocialLinkEventBase;
    const isNewLevel = props.stats.socialLinkStats.getIsNewLevel({ arcana: constructor.name });
    if (props.time !== Times.Day && !isNewLevel) {
      return new Stats({
        ...this.stats,
        socialLinkStats: this.stats.socialLinkStats.increasePoints({
          arcana: constructor.name,
          points: 10,
        }),
      });
    }

    const currentStat = this.stats.socialLinkStats[constructor.name as ArcanasType];
    const currentLevel = constructor.getLevel(currentStat.currentSocialLinkLevel.level, props);
    const nextLevel = constructor.getLevel(currentStat.currentSocialLinkLevel.level + 1, props);
    const modifier = this.getModifier();
    const { isCardNeeded, pointsWithoutCard, pointsWithCard } = currentLevel.getIsCardNeeded({
      modifier,
      pointsToNextLevel: currentLevel.nextLevelPointsToNextLevel,
    });
    const points = isCardNeeded ? pointsWithCard : pointsWithoutCard;

    return new Stats({
      ...this.stats,
      socialLinkStats: this.stats.socialLinkStats.increaseLevel({
        arcana: constructor.name,
        level: nextLevel,
        currentPoints: points,
      }),
    });
  }

  render(this: SocialLinkEventBase, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof SocialLinkEventBase;
    const isNewLevel = props.stats.socialLinkStats.getIsNewLevel({ arcana: constructor.name });
    const stats = this.stats.socialLinkStats[constructor.name as ArcanasType];
    if (props.time !== Times.Day && !isNewLevel) {
      return (
        <Card
          key={`${constructor.name}-${props.time}`}
          badge={{ size: 'sm', color: 'blue', text: stats.level.toString() }}
          time={props.time}
          body={
            <>
              <LabelRow key="Name" label="Name:" text={constructor.socialLinkName} />
              <LabelRow key="District" label="District:" text={constructor.district} />
              <LabelRow key="Place" label="Place:" text={constructor.place} />
              <TextRow key="text" text="Spend Time with Social Link" />
            </>
          }
          header={`${constructor.name}[Spend Time]`}
        />
      );
    }

    const nextLevel = constructor.getLevel(stats.currentSocialLinkLevel.level + 1, props);
    const icons = this.getModifierIcons(stats.currentSocialLinkLevel);
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
        icons={icons}
        body={
          <>
            <LabelRow key="Name" label="Name:" text={constructor.socialLinkName} />
            <LabelRow key="District" label="District:" text={constructor.district} />
            <LabelRow key="Place" label="Place:" text={constructor.place} />
            {stats.level === 0 && (
              <TextRow textAlign="center" isBold key="text" text="Create a bond with Social Link" />
            )}
            {stats.currentSocialLinkLevel.questions.map((q, index) => {
              return (
                <QuestionCard
                  key={`${constructor.name}-${props.time}-${index}`}
                  question={q.text}
                  answers={q.answers.map((a) => ({
                    text: a.text,
                    points: a.points as AnswerPoint,
                    isFork: a.isFork,
                  }))}
                />
              );
            })}
          </>
        }
        header={constructor.name}
      />
    );
  }

  static render(props: IsAvailableProps): React.ReactNode {
    const isNewLevel = props.stats.socialLinkStats.getIsNewLevel({ arcana: this.name });
    if (props.time !== Times.Day && !isNewLevel) {
      return (
        <Card
          key={`${this.name}-${props.time}`}
          body={
            <>
              <LabelRow key="Name" label="Name:" text={this.socialLinkName} />
              <LabelRow key="District" label="District:" text={this.district} />
              <LabelRow key="Place" label="Place:" text={this.place} />
            </>
          }
          header={`${this.name}[Spend Time]`}
        />
      );
    }
    return (
      <Card
        key={`${this.name}-${props.time}`}
        body={
          <>
            <LabelRow key="Name" label="Name:" text={this.socialLinkName} />
            <LabelRow key="District" label="District:" text={this.district} />
            <LabelRow key="Place" label="Place:" text={this.place} />
          </>
        }
        header={this.name}
      />
    );
  }
}
