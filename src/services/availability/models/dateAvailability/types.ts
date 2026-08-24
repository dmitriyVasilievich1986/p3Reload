import type { Dayjs } from 'dayjs';

export type DateAvailabilityProps =
  | {
      value: Dayjs[];
      operator: 'in' | 'notIn';
    }
  | {
      operator: 'ge' | 'gt' | 'le' | 'lt' | 'eq' | 'neq';
      value: Dayjs;
    }
  | {
      operator: 'between';
      /** Inclusive `[start, end]` bounds. */
      value: [Dayjs, Dayjs];
    };

export type Operator = DateAvailabilityProps['operator'];
