import type { AnswerProps, QuestionProps } from './types';

export class Answer {
  readonly text: string;
  readonly points: number;
  readonly isFork: boolean;

  constructor(props: AnswerProps) {
    this.text = props.text;
    this.points = props.points;
    this.isFork = props.isFork;
  }
}

export class Question {
  readonly text: string;
  readonly answers: Answer[];
  readonly maxPoints: number;

  constructor(props: QuestionProps) {
    this.text = props.text;
    this.answers = props.answers.map((answerProps) => new Answer(answerProps));
    this.maxPoints = this.getMaxPoints(this.answers);
  }

  private getMaxPoints(answers: Answer[]): number {
    let maxPoints = 0;
    for (const answer of answers) {
      if (answer.isFork) {
        return answer.points;
      }
      if (answer.points > maxPoints) {
        maxPoints = answer.points;
      }
    }
    return maxPoints;
  }
}
