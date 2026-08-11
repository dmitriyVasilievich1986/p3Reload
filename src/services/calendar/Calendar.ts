import _ from 'lodash';

import { DatesFormat } from '@constants/dates';
import { Times } from '@constants/times';
import { Day } from '@services/day';
import { EmptyEvent } from '@services/event/models/specialEvents';
import { Stats } from '@services/stats';

import type { TimesType } from '@constants/times';
import type { IsAvailableProps } from '@services/availability/types';
import type { DaySerializedType } from '@services/day/types';
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
   * Finds the day matching `date` and its index in {@link Calendar.days}.
   *
   * @param date - Calendar date to look up (compared by day).
   * @returns The matching day and its index.
   * @throws {Error} If no day matches `date`.
   */
  getDay(this: Calendar, date: Dayjs): [Day, number] {
    const dayIndex = _.findIndex(this.days, (day) => day.date.isSame(date, 'day'));
    if (dayIndex === -1) {
      throw new Error(`Day not found for date: ${date.format(DatesFormat)}`);
    }
    return [this.days[dayIndex], dayIndex];
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
    const [currentDay, dayIndex] = this.getDay(date);
    const previousDay =
      this.days[dayIndex - 1] ??
      new Day({
        date: date.subtract(1, 'day'),
        statsAtStartOfDay: new Stats(),
        statsAtEndOfDay: new Stats(),
        events: [],
      });
    const dayWeekBefore =
      this.days[dayIndex - 7] ??
      new Day({
        date: date.subtract(7, 'day'),
        statsAtStartOfDay: new Stats(),
        statsAtEndOfDay: new Stats(),
        events: [],
      });
    const event = currentDay.getEvent(time);
    return {
      time: time,
      date: date,
      stats: event.stats,
      event: event,
      currentDay: currentDay,
      previousDay: previousDay,
      dayWeekBefore: dayWeekBefore,
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
          days[index - 1] ??
          new Day({
            date: days[index].date.subtract(1, 'day'),
            statsAtStartOfDay: new Stats(),
            statsAtEndOfDay: new Stats(),
            events: [],
          }),
        dayWeekBefore:
          days[index - 7] ??
          new Day({
            date: days[index].date.subtract(7, 'day'),
            statsAtStartOfDay: new Stats(),
            statsAtEndOfDay: new Stats(),
            events: [],
          }),
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
  static calculateStats(days: Day[], startFrom?: Dayjs): Day[] {
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
        previousDay:
          days[index - 1] ??
          new Day({
            date: day.date.subtract(1, 'day'),
            statsAtStartOfDay: new Stats(),
            statsAtEndOfDay: new Stats(),
            events: [],
          }),
        dayWeekBefore:
          days[index - 7] ??
          new Day({
            date: day.date.subtract(7, 'day'),
            statsAtStartOfDay: new Stats(),
            statsAtEndOfDay: new Stats(),
            events: [],
          }),
      };
      let events = day.events;
      events = Day.filterEvents(events, isAvailableProps, true, true);
      events = Day.sortEvents(events);
      const result = Day.calculateStats(events, isAvailableProps, stats);
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
}
