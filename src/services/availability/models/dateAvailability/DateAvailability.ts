import _ from 'lodash';

/**
 * Date-based availability rule for gating events to specific calendar days.
 */
import { AvailabilityBase } from '../../base';

import type { IsAvailableProps } from '../../types';
import type { Dayjs } from 'dayjs';

/**
 * Evaluates whether an event is available on one of the configured dates.
 */
export class DateAvailability extends AvailabilityBase {
  readonly dates: Dayjs[];

  /**
   * Create a new date-based availability rule.
   *
   * @param {{dates: Dayjs[]}} props - Configuration for allowed calendar days.
   */
  constructor(props: { dates: Dayjs[] }) {
    super();
    this.dates = props.dates;
  }

  /**
   * Check whether the given date matches one of this rule's allowed days.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when the date matches one of the configured days.
   */
  isAvailable(props: IsAvailableProps): boolean {
    return _.some(this.dates, (date) => date.isSame(props.date, 'day'));
  }
}
