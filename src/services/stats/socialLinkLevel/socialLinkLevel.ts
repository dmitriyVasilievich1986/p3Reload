import _ from 'lodash';

import { Question } from './question';

import type { GetIsCardNeededResult, SocialLinkLevelProps } from './types';

export class SocialLinkLevel {
  readonly level: number;
  readonly pointsToNextLevel: number;
  readonly nextLevelPointsToNextLevel: number;
  readonly previousLevelPointsToNextLevel: number;
  readonly isRomantic: boolean;
  readonly isFork: boolean;
  readonly questions: Question[];

  constructor(props: SocialLinkLevelProps) {
    this.level = props.level;
    this.pointsToNextLevel = props.pointsToNextLevel;
    this.nextLevelPointsToNextLevel = props.nextLevelPointsToNextLevel;
    this.previousLevelPointsToNextLevel = props.previousLevelPointsToNextLevel;
    this.isRomantic = props.isRomantic;
    this.isFork = props.isFork;
    this.questions = props.questions.map((questionProps) => new Question(questionProps));
  }

  getPointsWithModifier(this: SocialLinkLevel, modifier: number): number {
    return _.sumBy(this.questions, (question) => Math.floor(question.maxPoints * modifier));
  }

  /**
   * Whether a persona card is the better way to reach the next rank, plus the
   * hangout point totals used to decide that.
   *
   * @param props.modifier - Charm / exam multiplier applied to hangout answers.
   * @param props.currentPoints - Points already earned toward the next rank (default `0`).
   * @param props.pointsForCalculation - Placeholder hangout value used when neither
   *   option reaches the next rank (default `10`).
   * @param props.pointsWithoutCard - Override for hangout points without a card.
   * @param props.pointsWithCard - Override for hangout points with a card.
   * @returns Whether a card is needed and the with/without-card point totals.
   */
  getIsCardNeeded(props: {
    modifier: number;
    currentPoints?: number;
    pointsForCalculation?: number;
    pointsWithCard?: number;
    pointsWithoutCard?: number;
    pointsToNextLevel?: number;
  }): GetIsCardNeededResult {
    const pointsWithoutCard = props.pointsWithoutCard ?? this.getPointsWithModifier(props.modifier);
    const pointsWithCard =
      props.pointsWithCard ?? this.getPointsWithModifier(props.modifier * 1.51);
    const currentPoints = props.currentPoints ?? 0;
    const pointsToNextLevel = (props.pointsToNextLevel ?? this.pointsToNextLevel) - currentPoints;

    let isCardNeeded: boolean;

    if (pointsToNextLevel <= pointsWithoutCard) {
      isCardNeeded = false;
    } else if (pointsToNextLevel <= pointsWithCard) {
      isCardNeeded = true;
    } else {
      const pointsForCalculation = props.pointsForCalculation ?? 10;
      isCardNeeded =
        Math.floor(
          (pointsToNextLevel - pointsWithoutCard) / (pointsForCalculation * props.modifier)
        ) >
        Math.floor(
          (pointsToNextLevel - pointsWithCard) / (pointsForCalculation * props.modifier * 1.51)
        );
    }

    return {
      isCardNeeded,
      pointsWithoutCard,
      pointsWithCard,
    };
  }
}
