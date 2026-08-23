/**
 * Availability rule that is never satisfied, regardless of game state.
 */
import { AvailabilityBase } from '../../base';

import type { IsAvailableProps } from '../../types';

/**
 * Evaluates to unavailable in every case. Useful as a placeholder or to
 * explicitly disable an event without deleting its definition.
 */
export class FalseAvailability extends AvailabilityBase {
  /**
   * Always returns false.
   *
   * @param {IsAvailableProps} _props - The properties to evaluate (unused).
   * @returns {boolean} Always false.
   */
  isAvailable(_props: IsAvailableProps): boolean {
    return false;
  }
}
