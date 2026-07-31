export type SocialLinkLevelProps = {
  level: number;
  pointsToNextLevel: number;
  nextLevelPointsToNextLevel: number;
  previousLevelPointsToNextLevel: number;
  isRomantic: boolean;
  isFork: boolean;
  questions: QuestionProps[];
};

export type AnswerProps = {
  text: string;
  points: number;
  isFork: boolean;
};

export type QuestionProps = {
  text: string;
  answers: AnswerProps[];
};
