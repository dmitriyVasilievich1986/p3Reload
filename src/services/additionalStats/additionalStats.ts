import type { AdditionalStatsProps } from './types';

/**
 * Immutable container for one-off game flags and the post-exam Social Link multiplier.
 *
 * Tracks which single-time events have already occurred and the modifier applied
 * to Social Link gains after exams. Use {@link AdditionalStats.addEvent} and
 * {@link AdditionalStats.updateAfterExamModifier} to produce updated instances.
 */
export class AdditionalStats {
  /** Names of single-time events that have already happened. */
  readonly singleTimeEvents: Set<string>;
  /** Multiplier applied to Social Link gains after exams. Defaults to `1`. */
  readonly afterExamModifier: number;

  /**
   * Creates an additional-stats instance.
   * Omitted `SingleTimeEvents` defaults to an empty set; omitted `afterExamModifier` defaults to `1`.
   *
   * @param props - Optional initial events set and after-exam modifier.
   */
  constructor(props?: AdditionalStatsProps) {
    this.singleTimeEvents = props?.SingleTimeEvents ?? new Set();
    this.afterExamModifier = props?.afterExamModifier ?? 1;
  }

  /**
   * Returns whether the named single-time event has already occurred.
   *
   * @param eventName - Event identifier to check.
   * @returns `true` if the event is recorded in {@link AdditionalStats.singleTimeEvents}.
   */
  isEventHappened(this: AdditionalStats, eventName: string): boolean {
    return this.singleTimeEvents.has(eventName);
  }

  /**
   * Returns a new instance with `eventName` recorded (does not mutate `this`).
   * Adding an event that is already present leaves the set unchanged in content.
   *
   * @param eventName - Event identifier to record.
   * @returns A new {@link AdditionalStats} including the event and the current modifier.
   */
  addEvent(this: AdditionalStats, eventName: string): AdditionalStats {
    const newEventsList = new Set<string>([...this.singleTimeEvents, eventName]);
    return new AdditionalStats({
      SingleTimeEvents: newEventsList,
      afterExamModifier: this.afterExamModifier,
    });
  }

  /**
   * Returns a new instance with an updated after-exam modifier (does not mutate `this`).
   *
   * @param modifier - New multiplier for post-exam Social Link gains.
   * @returns A new {@link AdditionalStats} with the same events and the given modifier.
   */
  updateAfterExamModifier(this: AdditionalStats, modifier: number): AdditionalStats {
    return new AdditionalStats({
      SingleTimeEvents: this.singleTimeEvents,
      afterExamModifier: modifier,
    });
  }
}
