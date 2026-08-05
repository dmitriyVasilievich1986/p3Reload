/**
 * Time-based availability rule for gating events to specific time slots.
 */
import { AvailabilityBase } from '../../base';

import type { IsAvailableProps } from '../../types';
import type { TimesType } from '@constants/times';

/**
 * Evaluates whether an event is available during one of the configured time slots.
 */
export class TimeAvailability extends AvailabilityBase {
  readonly times: TimesType[];

  /**
   * Create a new time-based availability rule.
   *
   * @param {{times: TimesType[]}} props - Configuration for allowed time slots.
   */
  constructor(props: { times: TimesType[] }) {
    super();
    this.times = props.times;
  }

  /**
   * Check whether the given time slot is included in this rule's allowed times.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when the time is one of the configured slots.
   */
  isAvailable(props: IsAvailableProps): boolean {
    return this.times.includes(props.time);
  }
}
