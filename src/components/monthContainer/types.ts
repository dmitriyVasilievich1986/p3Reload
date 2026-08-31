import type { Dayjs } from 'dayjs';

export type MonthContainerProps = {
  /** Dates that belong to this month. The month name is taken from the earliest date. */
  dates: Dayjs[];
  /**
   * Case-insensitive event-name filter. When set, only dates whose {@link Day}
   * has a matching event (via `Day.eventSearch`) are shown; the whole month is
   * hidden when nothing matches.
   */
  filterName?: string;
  className?: string;
};
