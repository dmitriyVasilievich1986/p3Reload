import _ from 'lodash';

import { DatesFormat } from '@constants/dates';
import { Times } from '@constants/times';
import { Day } from '@services/day';
import { EmptyEvent } from '@services/event/models/specialEvents';
import { Stats } from '@services/stats';

import type { GetDayResult } from './types';
import type { TimesType } from '@constants/times';
import type { IsAvailableProps } from '@services/availability/types';
import type { DaySerializedType } from '@services/day/types';
import type { BaseEvent } from '@services/event/base';
import type { Dayjs } from 'dayjs';

/**
 * An ordered sequence of {@link Day} instances spanning a playable calendar.
 *
 * Provides lookup by date, builds {@link IsAvailableProps} from neighboring days,
 * and recalculates character stats across days via {@link Calendar.calculateStats}.
 */
export class Calendar {
  /** Days in this calendar, expected to already be ordered by date. */
  readonly days: Day[];

  /**
   * Creates a calendar from a list of days.
   *
   * Days are stored as given; callers should keep them chronologically ordered.
   *
   * @param props - Days that make up the calendar.
   */
  constructor(props: { days: Day[] }) {
    this.days = props.days;
  }

  /**
   * Returns a JSON-safe representation of every day's date and events.
   *
   * @returns Serialized payloads from each {@link Day.serialize} call.
   */
  serialize(this: Calendar): DaySerializedType[] {
    return _.map(this.days, (day) => day.serialize());
  }

  /**
   * Replaces the single event scheduled at `date`/`time` with `newEvent`.
   *
   * @param date - Date of the day to replace the event on.
   * @param time - Time slot whose event should be replaced.
   * @param newEvent - Event to insert at that time.
   * @returns A new {@link Calendar} instance.
   */
  replaceEvent(this: Calendar, date: Dayjs, time: TimesType, newEvent: BaseEvent): Calendar {
    const { currentDay } = this.getDay(date);
    currentDay.replaceEvent(time, newEvent);
    const days = (this.constructor as typeof Calendar).calculateStats(
      this.days,
      date,
      false,
      false
    );
    return new Calendar({ days: days });
  }

  /**
   * Finds the day matching `date` and the neighboring days around it.
   *
   * Missing previous, next, or week-ago days are replaced with empty
   * {@link Day} instances for the corresponding dates.
   *
   * @param date - Calendar date to look up (compared by day).
   * @returns The current day, its neighbors, and their indexes.
   * @throws {Error} If no day matches `date`.
   */
  getDay(this: Calendar, date: Dayjs): GetDayResult {
    const currentDayIndex = _.findIndex(this.days, (day) => day.date.isSame(date, 'day'));
    if (currentDayIndex === -1) {
      throw new Error(`Day not found for date: ${date.format(DatesFormat)}`);
    }

    const previousDayIndex = currentDayIndex - 1;
    const nextDayIndex = currentDayIndex + 1;
    const weekAgoDayIndex = currentDayIndex - 7;

    return {
      currentDay: this.days[currentDayIndex],
      currentDayIndex,
      previousDay:
        this.days[previousDayIndex] ??
        (this.constructor as typeof Calendar).createEmptyDay(date.subtract(1, 'day')),
      previousDayIndex,
      nextDay:
        this.days[nextDayIndex] ??
        (this.constructor as typeof Calendar).createEmptyDay(date.add(1, 'day')),
      nextDayIndex,
      weekAgoDay:
        this.days[weekAgoDayIndex] ??
        (this.constructor as typeof Calendar).createEmptyDay(date.subtract(7, 'day')),
      weekAgoDayIndex,
    };
  }

  /**
   * Builds {@link IsAvailableProps} for the event scheduled at `date`/`time`.
   *
   * Uses the previous calendar day and the day one week earlier when present;
   * otherwise substitutes empty placeholder {@link Day} instances.
   *
   * @param date - Date of the current day.
   * @param time - Time slot whose event supplies stats and event context.
   * @returns Availability context for that day and time.
   * @throws {Error} If the day or the event at `time` is missing.
   */
  getIsAvailableProps(this: Calendar, date: Dayjs, time: TimesType): IsAvailableProps {
    const { currentDay, previousDay, weekAgoDay } = this.getDay(date);
    const event = currentDay.getEvent(time);
    return {
      time: time,
      date: date,
      stats: event.stats,
      event: event,
      currentDay: currentDay,
      previousDay: previousDay,
      dayWeekBefore: weekAgoDay,
    };
  }

  /**
   * Deserializes a list of days into a {@link Calendar} instance.
   *
   * @param data - List of days to deserialize.
   * @param throwAnErrorIfNotAvailable - Whether to throw an error if an event is not available.
   * @param throwAnErrorIfMultipleEvents - Whether to throw an error if an event is scheduled at the same time.
   * @returns A new {@link Calendar} instance.
   */
  static deserialize(
    data: DaySerializedType[],
    throwAnErrorIfNotAvailable?: boolean,
    throwAnErrorIfMultipleEvents?: boolean
  ): Calendar {
    const days = _.map(data, (day) => Day.deserialize(day));
    const filteredDays: Day[] = [];
    let stats = new Stats();
    const event = new EmptyEvent({ time: Times.Day, skipCheck: true, isChangeable: true });

    for (let index = 0; index < days.length; index++) {
      const isAvailableProps = {
        time: Times.Day,
        date: days[index].date,
        stats: stats,
        event: event,
        currentDay: days[index],
        previousDay:
          days[index - 1] ?? Calendar.createEmptyDay(days[index].date.subtract(1, 'day')),
        dayWeekBefore:
          days[index - 7] ?? Calendar.createEmptyDay(days[index].date.subtract(7, 'day')),
      };
      let events = Day.filterEvents(
        days[index].events,
        isAvailableProps,
        throwAnErrorIfNotAvailable,
        throwAnErrorIfMultipleEvents
      );
      events = Day.sortEvents(events);
      const result = Day.calculateStats(events, isAvailableProps, stats);

      stats = result.endingStats;
      filteredDays.push(
        new Day({
          date: days[index].date,
          statsAtStartOfDay: result.startingStats,
          statsAtEndOfDay: result.endingStats,
          events: result.events,
        })
      );
    }
    return new Calendar({ days: filteredDays });
  }

  /**
   * Filters, sorts, and recalculates stats for each day in order, chaining ending
   * stats into the next day's starting stats.
   *
   * Days strictly before `startFrom` are kept unchanged and only seed the running
   * stats from their {@link Day.statsAtEndOfDay}. Unavailable or duplicate-time
   * events cause {@link Day.filterEvents} to throw.
   *
   * @param days - Days to process, expected in chronological order.
   * @param startFrom - Optional date; earlier days are preserved as-is.
   * @returns New {@link Day} instances with updated start/end stats and events
   *   (plus any preserved days before `startFrom`).
   */
  static calculateStats(
    days: Day[],
    startFrom?: Dayjs,
    throwAnErrorIfNotAvailable: boolean = true,
    throwAnErrorIfMultipleEvents: boolean = true
  ): Day[] {
    let stats = new Stats();
    const event = new EmptyEvent({ time: Times.Day, skipCheck: true, isChangeable: true });
    const payload: Day[] = [];

    for (let index = 0; index < days.length; index++) {
      const day = days[index];
      if (startFrom && day.date.isBefore(startFrom, 'day')) {
        stats = day.statsAtEndOfDay;
        payload.push(day);
        continue;
      }
      const isAvailableProps = {
        time: Times.Day, // not important
        date: day.date,
        stats,
        event, // not important
        currentDay: day,
        previousDay: days[index - 1] ?? Calendar.createEmptyDay(day.date.subtract(1, 'day')),
        dayWeekBefore: days[index - 7] ?? Calendar.createEmptyDay(day.date.subtract(7, 'day')),
      };
      let events = day.events;
      events = Day.filterEvents(
        events,
        isAvailableProps,
        throwAnErrorIfNotAvailable,
        throwAnErrorIfMultipleEvents
      );
      events = Day.sortEvents(events);
      const result = Day.calculateStats(
        events,
        isAvailableProps,
        stats,
        throwAnErrorIfNotAvailable,
        throwAnErrorIfMultipleEvents
      );
      stats = result.endingStats;
      payload.push(
        new Day({
          date: day.date,
          statsAtStartOfDay: result.startingStats,
          statsAtEndOfDay: result.endingStats,
          events: result.events,
        })
      );
    }

    return payload;
  }

  /**
   * Creates a placeholder {@link Day} with empty stats and no events.
   *
   * @param date - Calendar date the placeholder represents.
   * @returns A new empty {@link Day} instance.
   */
  static createEmptyDay(date: Dayjs): Day {
    return new Day({
      date,
      statsAtStartOfDay: new Stats(),
      statsAtEndOfDay: new Stats(),
      events: [],
    });
  }
}
