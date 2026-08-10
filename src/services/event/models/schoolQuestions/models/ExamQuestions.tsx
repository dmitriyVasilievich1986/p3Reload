import { SchoolQuestionEventBase } from '../base';
import { type SchoolQuestionEventsNamesType, SchoolQuestionEventsNames } from '../types';

import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';

export class ExamQuestionsEvent extends SchoolQuestionEventBase {
  static readonly name: SchoolQuestionEventsNamesType = SchoolQuestionEventsNames.examQuestion;

  calculateStats(this: ExamQuestionsEvent, _props: IsAvailableProps): Stats {
    return this.stats;
  }
}
