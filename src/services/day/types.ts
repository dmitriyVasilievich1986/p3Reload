import type { BaseEvent } from '@services/event/base';
import type { EventNamesType } from '@services/event/types';
import type { Stats } from '@services/stats';
import type { Dayjs } from 'dayjs';

export type DayProps = {
  statsAtStartOfDay: Stats;
  statsAtEndOfDay: Stats;
  events: BaseEvent[];
  date: Dayjs;
};

export type DaySerializedType = {
  date: string;
  events: { name: EventNamesType; props: Record<string, unknown> }[];
};
