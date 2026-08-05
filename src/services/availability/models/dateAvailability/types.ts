import type { Dayjs } from 'dayjs';

export type DateAvailabilityProps =
  | {
      value: Dayjs[];
      operator: 'in' | 'notIn';
    }
  | {
      operator: 'ge' | 'gt' | 'le' | 'lt' | 'eq' | 'neq';
      value: Dayjs;
    };

export type operator = DateAvailabilityProps['operator'];
