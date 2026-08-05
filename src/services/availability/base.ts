/**
 * Abstract base class for availability rule implementations.
 */
import type { AvailabilityType, IsAvailableProps } from './types';

/**
 * Shared contract for concrete availability rules that evaluate and serialize game constraints.
 */
export abstract class AvailabilityBase implements AvailabilityType {
  /**
   * Determine whether an event satisfies this availability rule.
   *
   * @param {IsAvailableProps} props - Current game state used for evaluation.
   * @returns {boolean} True when the rule allows the event to be available.
   */
  abstract isAvailable(props: IsAvailableProps): boolean;
}
