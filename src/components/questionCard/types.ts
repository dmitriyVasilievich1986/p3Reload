export const AnswerPoints = {
  none: 0,
  low: 5,
  medium: 10,
  high: 15,
} as const;

export type AnswerPoint = (typeof AnswerPoints)[keyof typeof AnswerPoints];

export type QuestionCardAnswer = {
  text: string;
  points: AnswerPoint;
  isFork?: boolean;
};

export type QuestionCardProps = {
  question: string;
  answers: QuestionCardAnswer[];
};
