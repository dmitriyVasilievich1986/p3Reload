import { CharacterStatsNames } from '@services/stats/characterStats/types';

import { SchoolQuestionEventBase } from '../base';
import { type SchoolQuestionEventsNamesType, schoolQuestionEventsNames } from '../types';

import type { IsAvailableProps } from '@services/availability/types';
import type { CalculateStatsResult } from '@services/event/types';

export class SchoolQuestionsEvent extends SchoolQuestionEventBase {
  static readonly name: SchoolQuestionEventsNamesType = schoolQuestionEventsNames.schoolQuestion;

  override calculateStats(
    this: SchoolQuestionsEvent,
    _props: IsAvailableProps
  ): CalculateStatsResult {
    const characterStats = this.characterStats.modify([
      { name: CharacterStatsNames.Charm, operator: '+', value: 2 },
    ]);
    return {
      additionalStats: this.additionalStats,
      socialLinkStats: this.socialLinkStats,
      characterStats,
    };
  }
}
