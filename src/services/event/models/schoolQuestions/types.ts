import type { EventProps } from '../../types';

export type AnswerType = {
  text: string;
  points: number;
};

export type QuestionType = {
  text: string;
  answers: AnswerType[];
};

export const SchoolQuestionEventsNames = {
  schoolQuestion: 'SchoolQuestionsEvent',
  examQuestion: 'ExamQuestionsEvent',
} as const;

export type SchoolQuestionEventsNamesType =
  (typeof SchoolQuestionEventsNames)[keyof typeof SchoolQuestionEventsNames];

export type SchoolQuestionEventProps = EventProps & {
  questions: QuestionType[];
};
