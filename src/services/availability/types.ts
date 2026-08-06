import type { TimesType } from '@constants/times';
import type { AdditionalStats } from '@services/stats/additionalStats';
import type { CharacterStats } from '@services/stats/characterStats';
import type { SocialLinkStats } from '@services/stats/socialLinkStats';
import type { Dayjs } from 'dayjs';

export type IsAvailableProps = {
  time: TimesType;
  date: Dayjs;
  characterStats: CharacterStats;
  socialLinkStats: SocialLinkStats;
  additionalStats: AdditionalStats;
};

/** Contract implemented by concrete availability rule classes. */
export type AvailabilityType = {
  isAvailable(props: IsAvailableProps): boolean;
};
