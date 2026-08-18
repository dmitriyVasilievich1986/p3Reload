import { Card } from '@components/card';
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

  static getLevel(this: typeof SocialLinkEventBase, level: number): SocialLinkLevel {
    const payload = this.levels.find((l) => l.level === level);
    if (!payload) {
      throw new Error(`Level ${level} not found`);
    }
    return new SocialLinkLevel(payload);
  }

  getModifier(this: SocialLinkEventBase): number {
    const charmModifier = this.stats.characterStats.getCharmModifier();
    const afterExamModifier = this.stats.additionalStats.getAfterExamModifier(
      this.constructor.name as ArcanasType
    );
    return charmModifier * afterExamModifier;
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
    const currentLevel = constructor.getLevel(currentStat.currentSocialLinkLevel.level);
    const nextLevel = constructor.getLevel(currentStat.currentSocialLinkLevel.level + 1);
    const modifier = this.getModifier();
    const { isCardNeeded, pointsWithoutCard, pointsWithCard } = currentLevel.getIsCardNeeded({
      modifier,
    });
    const points = isCardNeeded ? pointsWithCard : pointsWithoutCard;

    return new Stats({
      ...this.stats,
      socialLinkStats: this.stats.socialLinkStats
        .increaseLevel({ arcana: constructor.name, level: nextLevel })
        .increasePoints({ arcana: constructor.name, points }),
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

    const nextLevel = constructor.getLevel(stats.currentSocialLinkLevel.level + 1);
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
              <LabelRow key="Distric:" label="District:" text={this.district} />
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
            <LabelRow key="Distric:" label="District:" text={this.district} />
            <LabelRow key="Place" label="Place:" text={this.place} />
          </>
        }
        header={this.name}
      />
    );
  }
}
