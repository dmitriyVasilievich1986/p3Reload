import _ from 'lodash';

import { DayOffDays } from '@constants/dates';

import { AvailabilityBase } from '../../base';

import type { IsAvailableProps } from '../../types';

/**
 * Evaluates whether an event is available based on whether the date is a day off.
 */
export class DayOffAvailability extends AvailabilityBase {
  readonly isAvailableOnADayOff: boolean;

  constructor(props: { isAvailableOnADayOff?: boolean }) {
    super();
    this.isAvailableOnADayOff = !!props.isAvailableOnADayOff;
  }

  /**
   * Check whether the given date is allowed for this rule.
   *
   * When {@link isAvailableOnADayOff} is true, only day-off dates match.
   * When false, only non-day-off dates match.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when the date matches the day-off preference.
   */
  isAvailable(props: IsAvailableProps): boolean {
    const isDayOff = _.some(DayOffDays, (day) => day.isSame(props.date, 'day'));
    return this.isAvailableOnADayOff === isDayOff;
  }
}
