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
   * Create a new time-based availability rule.
   *
   * @param {{daysOfWeek: DayOfWeekType[]}} props - Configuration for allowed time slots.
   */
  constructor(props: { daysOfWeek: DayOfWeekType[] }) {
    super();
    this.daysOfWeek = props.daysOfWeek.map((dayOfWeek) => DayOfWeekPosition[dayOfWeek]);
  }

  /**
   * Check whether the given time slot is included in this rule's allowed times.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when the time is one of the configured slots.
   */
  isAvailable(props: IsAvailableProps): boolean {
    return _.includes(this.daysOfWeek, props.date.day());
  }
}
