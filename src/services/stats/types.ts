import type { AdditionalStats } from './additionalStats';
import type { CharacterStats } from './characterStats';
import type { SocialLinkStats } from './socialLinkStats';

export type StatsProps = {
  additionalStats?: AdditionalStats;
  characterStats?: CharacterStats;
  socialLinkStats?: SocialLinkStats;
};
