import type { EventProps } from '../../types';

export type AnswerType = {
  text: string;
  points: number;
};

export type QuestionType = {
  text: string;
  answers: AnswerType[];
};

export const schoolQuestionEventsNames = {
  schoolQuestion: 'SchoolQuestionsEvent',
  examQuestion: 'ExamQuestionsEvent',
} as const;

export type SchoolQuestionEventsNamesType =
  (typeof schoolQuestionEventsNames)[keyof typeof schoolQuestionEventsNames];

export type SchoolQuestionEventProps = EventProps & {
  questions: QuestionType[];
};
