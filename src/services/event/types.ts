import { characterStatsModifyNames } from './models/characterStatsModifyEvents/types';
import { schoolQuestionEventsNames } from './models/schoolQuestions/types';
import { SpecialEventsNames } from './models/specialEvents/types';

import type { TimesType } from '@constants/times';
import type { Stats } from '@services/stats';

export type EventProps = {
  time: TimesType;
  skipCheck: boolean;
  isChangeable: boolean;
  stats?: Stats;
};

export const EventNames = {
  ...characterStatsModifyNames,
  ...schoolQuestionEventsNames,
  ...SpecialEventsNames,
} as const;

export type EventNamesType = (typeof EventNames)[keyof typeof EventNames];
