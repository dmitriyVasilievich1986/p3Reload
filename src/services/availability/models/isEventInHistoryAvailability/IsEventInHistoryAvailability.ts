/**
 * Is event in history availability rule for gating events to events that have already been completed.
 */
import { AvailabilityBase, type IsAvailableProps } from '@services/availability';

/**
 * Evaluates whether an event is available if it has already been completed.
 */
export class IsEventInHistoryAvailability extends AvailabilityBase {
  readonly name: string;
  readonly isInHistory: boolean;

  /**
   * Create a new is event in history availability rule.
   *
   * @param {{ name: string }} props - Configuration for exam availability.
   */
  constructor(props: { name: string; isInHistory?: boolean }) {
    super();
    this.name = props.name;
    this.isInHistory = props.isInHistory ?? false;
  }

  /**
   * Check whether the event has already been completed.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when the event has already been completed.
   */
  isAvailable(props: IsAvailableProps): boolean {
    const payload = props.additionalStats.isEventHappened(this.name);
    return this.isInHistory ? payload : !payload;
  }
}
