import type { Dayjs } from 'dayjs';

export type MonthContainerProps = {
  /** Dates that belong to this month. The month name is taken from the earliest date. */
  dates: Dayjs[];
  className?: string;
};
