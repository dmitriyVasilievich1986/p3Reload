import { SocialLinkLevel } from '@services/stats/socialLinkLevel/socialLinkLevel';

import type { ArcanasType } from '@constants/arcanas';

export type SocialLinkStatsType = {
  level: number;
  isRomatic: boolean;
  currentPoints: number;
  currentSocialLinkLevel: SocialLinkLevel;
};

export type SocialLinkStatsProps = {
  [key in ArcanasType]?: SocialLinkStatsType;
};
