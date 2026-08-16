import _ from 'lodash';

import { ExamDays } from '@constants/dates';

import { AvailabilityBase } from '../../base';

import type { IsAvailableProps } from '../../types';

/**
 * Evaluates whether an event is available based on whether the date is an exam day.
 */
export class ExamAvailability extends AvailabilityBase {
  readonly isAvailableOnAnExamDay: boolean;

  constructor(props: { isAvailableOnAnExamDay?: boolean }) {
    super();
    this.isAvailableOnAnExamDay = !!props.isAvailableOnAnExamDay;
  }

  /**
   * Check whether the given date is allowed for this rule.
   *
   * When false, only non-exam dates match.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when the date matches the exam preference.
   */
  isAvailable(props: IsAvailableProps): boolean {
    const isExamDay = _.some(ExamDays, (day) => day.isSame(props.date, 'day'));
    return this.isAvailableOnAnExamDay === isExamDay;
  }
}
