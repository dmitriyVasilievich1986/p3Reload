import { SchoolQuestionsEvent, ExamQuestionsEvent } from './models';
import {
  SchoolQuestionEventsNames,
  type SchoolQuestionEventsNamesType,
  type SchoolQuestionEventProps,
} from './types';

export {
  SchoolQuestionsEvent,
  ExamQuestionsEvent,
  SchoolQuestionEventsNames,
  type SchoolQuestionEventsNamesType,
  type SchoolQuestionEventProps,
};

export const SchoolQuestionsEvents = {
  [SchoolQuestionEventsNames.schoolQuestion]: SchoolQuestionsEvent,
  [SchoolQuestionEventsNames.examQuestion]: ExamQuestionsEvent,
} as const;
