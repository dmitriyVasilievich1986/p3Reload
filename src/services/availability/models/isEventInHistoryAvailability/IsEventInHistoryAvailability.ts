/**
 * Event-history availability rule for gating events by whether a named event has already occurred.
 */
import { AvailabilityBase, type IsAvailableProps } from '@services/availability';

/**
 * Evaluates whether an event is available based on another event's presence in history.
 *
 * When `isInHistory` is `true`, the rule passes if the named event has already happened.
 * When `false` (the default), the rule passes only if that event has not happened yet.
 */
export class IsEventInHistoryAvailability extends AvailabilityBase {
  readonly name: string;
  readonly isInHistory: boolean;

  /**
   * Create a new event-history availability rule.
   *
   * @param props - Configuration for the event-history availability rule.
   * @param props.name - Event id checked via additional stats history.
   * @param props.isInHistory - When `true`, require the event to have happened;
   *   when `false` or omitted, require that it has not happened yet.
   */
  constructor(props: { name: string; isInHistory?: boolean }) {
    super();
    this.name = props.name;
    this.isInHistory = props.isInHistory ?? false;
  }

  /**
   * Check whether the named event's history status matches this rule.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when history presence matches `isInHistory`.
   */
  isAvailable(props: IsAvailableProps): boolean {
    const payload = props.additionalStats.isEventHappened(this.name);
    return this.isInHistory ? payload : !payload;
  }
}
