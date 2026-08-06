import { characterStatsModifyNames } from './models/characterStatsModifyEvents/types';
import { schoolQuestionEventsNames } from './models/schoolQuestions/types';

import type { TimesType } from '@constants/times';
import type { AdditionalStats, CharacterStats, SocialLinkStats } from '@services/stats';

export type EventProps = {
  time: TimesType;
  skipCheck: boolean;
  isChangeable: boolean;
  additionalStats?: AdditionalStats;
  characterStats?: CharacterStats;
  socialLinkStats?: SocialLinkStats;
};

export type CalculateStatsResult = {
  additionalStats: AdditionalStats;
  characterStats: CharacterStats;
  socialLinkStats: SocialLinkStats;
};

export const EventNames = {
  ...characterStatsModifyNames,
  ...schoolQuestionEventsNames,
} as const;

export type EventNamesType = (typeof EventNames)[keyof typeof EventNames];
