import dayjs from 'dayjs';
import _ from 'lodash';

import { DatesFormat } from '@constants/dates';
import { Times, type TimesType } from '@constants/times';
import { BaseEvent } from '@services/event/base';
import { eventFactory } from '@services/event/factory';
import { Stats } from '@services/stats';

import type { DayProps, DaySerializedType } from './types';
import type { IsAvailableProps } from '@services/availability/types';
import type { EventNamesType } from '@services/event/types';
import type { Dayjs } from 'dayjs';

/**
 * A single calendar day of scheduled events and character stats.
 *
 * Holds the day's date, start/end {@link Stats}, and the {@link BaseEvent}
 * list for that day. Static helpers normalize, order, filter, and score events
 * before a {@link Day} instance is constructed.
 */
export class Day {
  /** Character stats at the beginning of the day, before events are applied. */
  statsAtStartOfDay: Stats;
  /** Character stats after all of the day's events have been applied. */
  statsAtEndOfDay: Stats;
  /** Events scheduled for this day, expected to already be ordered by time. */
  events: BaseEvent[];

  /** Calendar date this day represents. */
  readonly date: Dayjs;

  /**
   * Creates a day from precomputed stats and an ordered event list.
   *
   * Events are stored as given; callers should sort them (for example with
   * {@link Day.sortEvents}) before construction.
   *
   * @param props - Date, start/end stats, and events for the day.
   */
  constructor(props: DayProps) {
    this.statsAtStartOfDay = props.statsAtStartOfDay;
    this.statsAtEndOfDay = props.statsAtEndOfDay;
    this.date = props.date;

    // we're not sorting events here. they should be sorted by the time they occur.
    this.events = props.events;
  }

  /**
   * Returns a JSON-safe representation of the day's date and events.
   *
   * @returns Serialized date string and each event's serialize payload.
   */
  serialize(this: Day): DaySerializedType {
    return {
      date: this.date.format(DatesFormat),
      events: _.map(this.events, (event) => event.serialize()),
    };
  }

  /**
   * Gets an event by time.
   *
   * @param time - Time of the event to get.
   * @returns The event.
   * @throws {Error} If the event is not found.
   */
  getEvent(this: Day, time: TimesType): BaseEvent {
    const events = _.filter(this.events, (event) => event.time === time);
    if (events.length > 1) {
      throw new Error(`Multiple events found for time: ${time}`);
    } else if (events.length === 0) {
      throw new Error(`No events found for time: ${time}`);
    }
    return events[0];
  }

  /**
   * Normalizes a mixed list of event instances and serialized event payloads
   * into {@link BaseEvent} instances via {@link eventFactory}.
   *
   * @param events - Existing events or serialized event payloads.
   * @returns The same events as {@link BaseEvent} instances.
   */
  static processEvents(
    events: BaseEvent[] | { name: EventNamesType; props: Record<string, unknown> }[]
  ): BaseEvent[] {
    return events.map((event) => {
      if (event instanceof BaseEvent) {
        return event;
      }
      return eventFactory(event.name, event.props);
    });
  }

  /**
   * Rebuilds a {@link Day} from a {@link DaySerializedType} payload.
   *
   * Hydrates events through {@link Day.processEvents} and seeds empty
   * start/end {@link Stats}; callers that need scored stats should run
   * {@link Day.calculateStats} afterward.
   *
   * @param data - Serialized date string and event payloads.
   * @returns A new {@link Day} for the given date and events.
   */
  static deserialize(data: DaySerializedType): Day {
    const events = this.processEvents(data.events);
    return new Day({
      statsAtStartOfDay: new Stats(),
      statsAtEndOfDay: new Stats(),
      date: dayjs(data.date),
      events: events,
    });
  }

  /**
   * Sorts events into chronological time-of-day order
   * (Morning → Day Free Time → Day → Evening Free Time → Evening → Night → Dark Hour).
   *
   * @param events - Events to order.
   * @returns A new array sorted by each event's {@link BaseEvent.time}.
   */
  static sortEvents(events: BaseEvent[]): BaseEvent[] {
    const timesMapping = {
      [Times.Morning]: 10,
      [Times.DayFreeTime]: 20,
      [Times.Day]: 30,
      [Times.EveningFreeTime]: 40,
      [Times.Evening]: 50,
      [Times.Night]: 60,
      [Times.DarkHour]: 70,
    };
    return _.sortBy(events, (event) => timesMapping[event.time]);
  }

  /**
   * Keeps events that are available under the given props.
   *
   * Events with {@link BaseEvent.skipCheck} are always kept. Unavailable events
   * either throw or emit a console warning, depending on `throwAnErrorIfNotAvailable`.
   *
   * @param events - Events to filter.
   * @param props - Availability context (time, date, stats).
   * @param throwAnErrorIfNotAvailable - When true, throw instead of warning and dropping.
   * @returns Events that pass availability (or skip the check).
   */
  static filterEvents(
    events: BaseEvent[],
    props: IsAvailableProps,
    throwAnErrorIfNotAvailable: boolean = false,
    throwAnErrorIfMultipleEvents: boolean = false
  ): BaseEvent[] {
    const seenTimes = new Set<TimesType>();
    return _.filter(events, (event) => {
      if (seenTimes.has(event.time)) {
        if (throwAnErrorIfMultipleEvents) {
          throw new Error(`Multiple events found at time ${event.time}.`);
        } else {
          console.warn(`Multiple events found at time ${event.time}.`);
        }
      }
      seenTimes.add(event.time);
      if (event.skipCheck) {
        return true;
      }
      const isAvailable = event.isAvailable({
        ...props,
        event,
        time: event.time,
        stats: event.stats,
      });
      if (throwAnErrorIfNotAvailable && !isAvailable) {
        throw new Error(
          `Event ${(event.constructor as typeof BaseEvent).name} is not available at this time.`
        );
      } else if (!isAvailable) {
        console.warn(
          `Event ${(event.constructor as typeof BaseEvent).name} is not available at this time.`
        );
      }
      return isAvailable;
    });
  }

  /**
   * Applies each event's stat changes in order, seeding from `stats` or a fresh {@link Stats}.
   *
   * Mutates each event's {@link BaseEvent.stats} to the stats in effect when that
   * event runs, then returns the starting and ending totals.
   *
   * @param events - Ordered events whose `calculateStats` methods to chain.
   * @param props - Context passed through to each event's `calculateStats`.
   * @param stats - Optional starting stats; defaults to a new empty {@link Stats}.
   * @returns The input events plus starting and ending stats.
   */
  static calculateStats(
    events: BaseEvent[],
    props: IsAvailableProps,
    stats?: Stats,
    throwAnErrorIfNotAvailable: boolean = false,
    throwAnErrorIfMultipleEvents: boolean = false
  ): { events: BaseEvent[]; startingStats: Stats; endingStats: Stats } {
    const startingStats = stats || new Stats();
    let stats_ = startingStats;
    const payload: BaseEvent[] = [];
    const seenTimes = new Set<TimesType>();

    events.forEach((event) => {
      if (
        !event.skipCheck &&
        !event.isAvailable({ ...props, event, time: event.time, stats: stats_ })
      ) {
        if (throwAnErrorIfNotAvailable) {
          throw new Error(
            `Event ${(event.constructor as typeof BaseEvent).name} is not available at this time.`
          );
        }
        console.warn(
          `Event ${(event.constructor as typeof BaseEvent).name} is not available at this time.`
        );
        return;
      }
      if (seenTimes.has(event.time)) {
        if (throwAnErrorIfMultipleEvents) {
          throw new Error(`Multiple events found at time ${event.time}.`);
        }
        console.warn(`Multiple events found at time ${event.time}.`);
      }
      if (!event.skipCheck) {
        seenTimes.add(event.time);
      }
      event.stats = stats_;
      stats_ = event.calculateStats({ ...props, stats: stats_, event, time: event.time });
      payload.push(event);
    });

    return { events: payload, startingStats, endingStats: stats_ };
  }

  /**
   * Replaces the single event scheduled at `time` with `newEvent`.
   *
   * @param events - Event list to update.
   * @param time - Time slot whose event should be replaced.
   * @param newEvent - Event to insert at that time.
   * @returns A new array with the matching time slot replaced.
   * @throws {Error} If more than one event shares `time`.
   */
  static replaceEvent(events: BaseEvent[], time: TimesType, newEvent: BaseEvent): BaseEvent[] {
    let isReplaced = false;
    return _.map(events, (event) => {
      if (event.time === time) {
        if (isReplaced) {
          throw new Error(`Multiple events found at time ${time}.`);
        }
        isReplaced = true;
        return newEvent;
      }
      return event;
    });
  }

  /**
   * Replaces the single event scheduled at `time` with `newEvent`.
   *
   * @param time - Time slot whose event should be replaced.
   * @param newEvent - Event to insert at that time.
   */
  replaceEvent(this: Day, time: TimesType, newEvent: BaseEvent): void {
    this.events = (this.constructor as typeof Day).replaceEvent(this.events, time, newEvent);
  }
}
