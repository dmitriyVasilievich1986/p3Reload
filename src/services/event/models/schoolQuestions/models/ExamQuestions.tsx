import { SchoolQuestionEventBase } from '../base';
import { type SchoolQuestionEventsNamesType, schoolQuestionEventsNames } from '../types';

import type { IsAvailableProps } from '@services/availability/types';
import type { CalculateStatsResult } from '@services/event/types';

export class ExamQuestionsEvent extends SchoolQuestionEventBase {
  static readonly name: SchoolQuestionEventsNamesType = schoolQuestionEventsNames.examQuestion;

  calculateStats(this: ExamQuestionsEvent, _props: IsAvailableProps): CalculateStatsResult {
    return {
      additionalStats: this.additionalStats,
      characterStats: this.characterStats,
      socialLinkStats: this.socialLinkStats,
    };
  }
}
