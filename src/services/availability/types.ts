import type { TimesType } from '@constants/times';
import type { Stats } from '@services/stats';
import type { Dayjs } from 'dayjs';

export type IsAvailableProps = {
  time: TimesType;
  date: Dayjs;
  stats: Stats;
};

/** Contract implemented by concrete availability rule classes. */
export type AvailabilityType = {
  isAvailable(props: IsAvailableProps): boolean;
};
