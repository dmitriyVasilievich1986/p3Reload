import { SchoolQuestionsEvent, ExamQuestionsEvent } from './models';
import {
  schoolQuestionEventsNames,
  type SchoolQuestionEventsNamesType,
  type SchoolQuestionEventProps,
} from './types';

export {
  SchoolQuestionsEvent,
  ExamQuestionsEvent,
  schoolQuestionEventsNames,
  type SchoolQuestionEventsNamesType,
  type SchoolQuestionEventProps,
};

export const schoolQuestionsEvents = {
  [schoolQuestionEventsNames.schoolQuestion]: SchoolQuestionsEvent,
  [schoolQuestionEventsNames.examQuestion]: ExamQuestionsEvent,
} as const;
