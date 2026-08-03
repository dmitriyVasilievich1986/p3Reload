import { SocialLinkLevel } from '@services/socialLinkLevel/socialLinkLevel';

import type { ArcanasType } from '@constants/arcanas';

export type SocialLinkStatsType = {
  level: number;
  isRomantic: boolean;
  currentPoints: number;
  currentSocialLinkLevel: SocialLinkLevel;
};

export type SocialLinkStatsProps = {
  [key in ArcanasType]?: SocialLinkStatsType;
};
