import _ from 'lodash';

import { AvailabilityBase } from '../../base';

import type { IsAvailableProps } from '../../types';
import type { DateAvailabilityProps, operator } from './types';
import type { Dayjs } from 'dayjs';

/**
 * Evaluates whether an event is available on one of the configured dates.
 */
export class DateAvailability extends AvailabilityBase {
  readonly operator: operator;
  readonly value: Dayjs | Dayjs[];

  /**
   * Create a new date-based availability rule.
   *
   * @param {DateAvailabilityProps} props - Configuration for allowed calendar days.
   */
  constructor(props: DateAvailabilityProps) {
    super();
    this.operator = props.operator;
    this.value = props.value;
  }

  /**
   * Check whether the given date matches one of this rule's allowed days.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when the date matches one of the configured days.
   */
  isAvailable(props: IsAvailableProps): boolean {
    switch (this.operator) {
      case 'in':
        return _.some(this.value as Dayjs[], (date) => date.isSame(props.date, 'day'));
      case 'notIn':
        return !_.some(this.value as Dayjs[], (date) => date.isSame(props.date, 'day'));
      case 'ge':
        return (
          props.date.isAfter(this.value as Dayjs) || props.date.isSame(this.value as Dayjs, 'day')
        );
      case 'gt':
        return props.date.isAfter(this.value as Dayjs);
      case 'le':
        return (
          props.date.isBefore(this.value as Dayjs) || props.date.isSame(this.value as Dayjs, 'day')
        );
      case 'lt':
        return props.date.isBefore(this.value as Dayjs);
      case 'eq':
        return props.date.isSame(this.value as Dayjs, 'day');
      case 'neq':
        return !props.date.isSame(this.value as Dayjs, 'day');
      default:
        throw new Error(`Invalid operator: ${this.operator}`);
    }
  }
}
