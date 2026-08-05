/**
 * Composite availability rule that requires all nested rules to pass.
 */
import _ from 'lodash';

import { AvailabilityBase } from '../../base';

import type { IsAvailableProps } from '../../types';

/**
 * Evaluates whether an event satisfies every configured availability rule.
 */
export class AndAvailability extends AvailabilityBase {
  readonly availabilities: AvailabilityBase[];

  /**
   * Create a new AND-composite availability rule.
   *
   * @param {{availabilities: AvailabilityBase[]}} props - Nested rules that must all pass.
   */
  constructor(props: { availabilities: AvailabilityBase[] }) {
    super();
    this.availabilities = props.availabilities;
  }

  /**
   * Check whether every nested availability rule passes for the given game state.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when all nested rules are available.
   */
  isAvailable(props: IsAvailableProps): boolean {
    return _.every(this.availabilities, (availability) => availability.isAvailable(props));
  }
}
