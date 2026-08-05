import type { TimesType } from '@constants/times';
import type { AdditionalStats } from '@services/stats/additionalStats';
import type { CharacterStats } from '@services/stats/characterStats';
/**
 * Type definitions and constants for availability model props.
 */
import type { SocialLinkStats } from '@services/stats/socialLinkStats';

export type IsAvailableProps = {
  time: TimesType;
  characterStats: CharacterStats;
  socialLinkStats: SocialLinkStats;
  additionalStats: AdditionalStats;
};

/** Contract implemented by concrete availability rule classes. */
export type AvailabilityType = {
  isAvailable(props: IsAvailableProps): boolean;
};
