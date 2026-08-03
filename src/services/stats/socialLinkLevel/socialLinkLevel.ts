import _ from 'lodash';

import { Question } from './question';

import type { SocialLinkLevelProps } from './types';

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

  private getPointsWithModifier(this: SocialLinkLevel, modifier: number): number {
    return _.sumBy(this.questions, (question) => Math.floor(question.maxPoints * modifier));
  }

  getIsCardNeeded(props: {
    modifier: number;
    currentPoints?: number;
    pointsForCalculation?: number;
    pointsWithCard?: number;
    pointsWithoutCard?: number;
  }): boolean {
    const pointsWithoutCard = props.pointsWithoutCard ?? this.getPointsWithModifier(props.modifier);
    const pointsWithCard =
      props.pointsWithCard ?? this.getPointsWithModifier(props.modifier * 1.51);
    const currentPoints = props.currentPoints ?? 0;
    const pointsToNextLevel = this.pointsToNextLevel - currentPoints;

    if (pointsToNextLevel <= pointsWithoutCard) {
      return false;
    } else if (pointsToNextLevel <= pointsWithCard) {
      return true;
    }

    const pointsForCalculation = props.pointsForCalculation ?? 10;
    return (
      (pointsToNextLevel - pointsWithoutCard) / (pointsForCalculation * props.modifier) >
      (pointsToNextLevel - pointsWithCard) / (pointsForCalculation * props.modifier * 1.51)
    );
  }
}
