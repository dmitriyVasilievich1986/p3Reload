/**
 * Composite availability rule that passes when any nested rule passes.
 */
import _ from 'lodash';

import { AvailabilityBase } from '../../base';

import type { IsAvailableProps } from '../../types';

/**
 * Evaluates whether an event satisfies at least one configured availability rule.
 */
export class OrAvailability extends AvailabilityBase {
  readonly availabilities: AvailabilityBase[];

  /**
   * Create a new OR-composite availability rule.
   *
   * @param {{availabilities: AvailabilityBase[]}} props - Nested rules where at least one must pass.
   */
  constructor(props: { availabilities: AvailabilityBase[] }) {
    super();
    this.availabilities = props.availabilities;
  }

  /**
   * Check whether any nested availability rule passes for the given game state.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when at least one nested rule is available.
   */
  isAvailable(props: IsAvailableProps): boolean {
    return _.some(this.availabilities, (availability) => availability.isAvailable(props));
  }
}
