import _ from 'lodash';

import { DayOfWeekPosition, type DayOfWeekType } from '@constants/dayOfWeek';

/**
 * Day of week-based availability rule for gating events to specific days of the week.
 */
import { AvailabilityBase } from '../../base';

import type { IsAvailableProps } from '../../types';

/**
 * Evaluates whether an event is available during one of the configured days of the week.
 */
export class DayOfWeekAvailability extends AvailabilityBase {
  readonly daysOfWeek: number[];

  /**
   * Create a new day of week-based availability rule.
   *
   * @param {{daysOfWeek: DayOfWeekType[]}} props - Configuration for allowed days of the week.
   */
  constructor(props: { daysOfWeek: DayOfWeekType[] }) {
    super();
    this.daysOfWeek = props.daysOfWeek.map((dayOfWeek) => DayOfWeekPosition[dayOfWeek]);
  }

  /**
   * Check whether the given day of the week is included in this rule's allowed days of the week.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when the day of the week is one of the configured days of the week.
   */
  isAvailable(props: IsAvailableProps): boolean {
    return _.includes(this.daysOfWeek, props.date.day());
  }
}
