import type { TimesType } from '@constants/times';
import type { Day } from '@services/day';
import type { BaseEvent } from '@services/event/base';
import type { Stats } from '@services/stats';
import type { Dayjs } from 'dayjs';

export type IsAvailableProps = {
  time: TimesType;
  date: Dayjs;
  stats: Stats;
  event: BaseEvent;
  currentDay: Day;
  previousDay: Day;
  dayWeekBefore: Day;
};

/** Contract implemented by concrete availability rule classes. */
export type AvailabilityType = {
  isAvailable(props: IsAvailableProps): boolean;
};
