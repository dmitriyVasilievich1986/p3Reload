/**
 * Type definitions and constants for availability model props.
 */
import { SocialLinkStats } from '@services/socialLinkStats';

import type { TimesType } from '@constants/times';
import type { AdditionalStats } from '@services/additionalStats';
import type { CharacterStats } from '@services/characterStats';

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
