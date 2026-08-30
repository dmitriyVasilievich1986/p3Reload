import dayjs from 'dayjs';

import { Card } from '@components/card';
import { QuestionCard, type AnswerPoint } from '@components/questionCard';
import { LabelRow, TextRow } from '@components/row';
import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { socialLinkFullNames } from '@constants/socialLinkNames';
import { Times } from '@constants/times';
import {
  type AvailabilityBase,
  TimeAvailability,
  IsLevelUpAvailable,
  ExamAvailability,
  DayOffAvailability,
  DayOfWeekAvailability,
  DateAvailability,
  type IsAvailableProps,
} from '@services/availability';
import { SocialLinkLevel, Stats } from '@services/stats';

import { SocialLinkEventBase } from '../base';
import { StrengthEvent } from '../strength';
import data from './data.json';

export class ChariotEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Chariot;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = socialLinkFullNames.Chariot;
  /** Location label shown in the event card. */
  static readonly place: string = Places.Classroom2F;
  /** District label shown in the event card. */
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new IsLevelUpAvailable({ name: Arcanas.Chariot, isLevelUpAvailable: true }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-04-23') }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new TimeAvailability({ times: [Times.Day] }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Thursday, DayOfWeek.Friday],
    }),
  ];

  calculateStats(this: SocialLinkEventBase, props: IsAvailableProps): Stats {
    const result = super.calculateStats(props);
    const constructor = this.constructor as typeof SocialLinkEventBase;
    const currentStat = this.stats.socialLinkStats[constructor.name as ArcanasType];
    const currentLevel = constructor.getLevel(currentStat.currentSocialLinkLevel.level, props);
    const strengthNewLevel = StrengthEvent.getLevel(1, props);
    if (currentLevel.level === 1) {
      return new Stats({
        ...result,
        socialLinkStats: result.socialLinkStats.increaseLevel({
          arcana: Arcanas.Strength,
          level: strengthNewLevel,
        }),
      });
    }
    return result;
  }

  /**
   * Render bond milestone text for the current Magician rank.
   *
   * @returns {React.ReactNode | null} Event card content for bond creation, level-up, or max bond.
   */
  override render(props: IsAvailableProps): React.ReactNode | null {
    const constructor = this.constructor as typeof SocialLinkEventBase;
    const stats = this.stats.socialLinkStats[constructor.name as ArcanasType];
    if (stats.currentSocialLinkLevel.level === 1) {
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
          body={
            <>
              <LabelRow key="Name" label="Name:" text={constructor.socialLinkName} />
              <LabelRow key="District" label="District:" text={constructor.district} />
              <LabelRow key="Place" label="Place:" text={constructor.place} />
              {stats.level === 0 && (
                <TextRow
                  textAlign="center"
                  isBold
                  key="text"
                  text="Create a bond with Social Link"
                />
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
    return super.render(props);
  }
}
