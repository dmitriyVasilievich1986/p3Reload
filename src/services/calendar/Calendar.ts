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
   * Groups the dates of {@link Calendar.days} by year-month, in first-seen order.
   *
   * @returns Arrays of dates, one per month present in this calendar.
   */
  getDatesByMonth(this: Calendar): Dayjs[][] {
    const groups = new Map<string, Dayjs[]>();

    for (const day of this.days) {
      const key = day.date.format('YYYY-MM');
      const group = groups.get(key);

      if (group === undefined) {
        groups.set(key, [day.date]);
      } else {
        group.push(day.date);
      }
    }

    return [...groups.values()];
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
    return (this.constructor as typeof Calendar).calculateStats(this, date, false, false);
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
  static deserialize(data: DaySerializedType[]): Calendar {
    const days = data.map((day) => Day.deserialize(day));
    return new Calendar({ days });
  }

  /**
   * Recalculates stats for each day in order, chaining ending stats into the
   * next day's starting stats.
   *
   * Days strictly before `startFrom` are kept unchanged and only seed the running
   * stats from their {@link Day.statsAtEndOfDay}. Unavailable or duplicate-time
   * events cause {@link Day.calculateStats} to throw.
   *
   * @param calendar - Calendar whose days to process, expected in chronological order.
   * @param startFrom - Optional date; earlier days are preserved as-is.
   * @param throwAnErrorIfNotAvailable - Whether to throw on unavailable events.
   * @param throwAnErrorIfMultipleEvents - Whether to throw on duplicate-time events.
   * @returns A new {@link Calendar} with updated start/end stats and events
   *   (plus any preserved days before `startFrom`).
   */
  static calculateStats(
    calendar: Calendar,
    startFrom?: Dayjs,
    throwAnErrorIfNotAvailable: boolean = true,
    throwAnErrorIfMultipleEvents: boolean = true
  ): Calendar {
    const days = calendar.days;
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
        previousDay: payload[index - 1] ?? Calendar.createEmptyDay(day.date.subtract(1, 'day')),
        dayWeekBefore: payload[index - 7] ?? Calendar.createEmptyDay(day.date.subtract(7, 'day')),
      };
      const result = Day.calculateStats(
        day,
        isAvailableProps,
        stats,
        throwAnErrorIfNotAvailable,
        throwAnErrorIfMultipleEvents
      );
      stats = result.statsAtEndOfDay;
      payload.push(result);
    }

    return new Calendar({ days: payload });
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
