import { Arcanas } from '@constants/arcanas';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';
import { EpisodeSocialLinkNames } from '@services/stats/episodesStats';

import { CharacterStatsModifyNames } from './models/characterStatsModifyEvents/types';
import { NaganakiShrineEventsNames } from './models/naganakiShrine/types';
import { PCProgramEventsNames } from './models/PCProgramEvents/types';
import { SchoolQuestionEventsNames } from './models/schoolQuestions/types';
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
  ...CharacterStatsModifyNames,
  ...SchoolQuestionEventsNames,
  ...NaganakiShrineEventsNames,
  ...EpisodeSocialLinkNames,
  ...PCProgramEventsNames,
  ...DormActivitiesNames,
  ...SpecialEventsNames,
  ...Arcanas,
} as const;

export type EventNamesType = (typeof EventNames)[keyof typeof EventNames];
