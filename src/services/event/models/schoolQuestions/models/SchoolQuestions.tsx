import { CharacterStatsNames } from '@services/stats/characterStats/types';

import { SchoolQuestionEventBase } from '../base';
import { type SchoolQuestionEventsNamesType, SchoolQuestionEventsNames } from '../types';

import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';

export class SchoolQuestionsEvent extends SchoolQuestionEventBase {
  static readonly name: SchoolQuestionEventsNamesType = SchoolQuestionEventsNames.schoolQuestion;

  override calculateStats(this: SchoolQuestionsEvent, _props: IsAvailableProps): Stats {
    const characterStats = this.stats.characterStats.modify([
      { name: CharacterStatsNames.Charm, operator: '+', value: 2 },
    ]);
    return this.stats.updateCharacterStats(characterStats);
  }
}
