import dayjs from 'dayjs';
import { describe, expect, it, vi } from 'vite-plus/test';

import { DatesFormat } from '@constants/dates';
import { Times } from '@constants/times';
import { Day } from '@services/day';
import { StayAwakeAcademicsEvent } from '@services/event/models/characterStatsModifyEvents/academic';
import { AcademicStatModifyNames } from '@services/event/models/characterStatsModifyEvents/academic/types';
import { ChagalCafeCharmEvent } from '@services/event/models/characterStatsModifyEvents/charm';
import { SleepDuringClassCourageEvent } from '@services/event/models/characterStatsModifyEvents/courage';
import { createDateFixture, createDayFixture, createStatsFixture } from '@services/fixtures';
import { Stats } from '@services/stats';
import { CharacterStatsNames } from '@services/stats/characterStats/types';

import { Calendar } from './Calendar';
import aprilData from './data/april.json';
import augustData from './data/august.json';
import decemberData from './data/december.json';
import januaryData from './data/january.json';
import julyData from './data/july.json';
import juneData from './data/june.json';
import mayData from './data/may.json';
import novemberData from './data/november.json';
import octoberData from './data/october.json';
import septemberData from './data/september.json';

import type { DaySerializedType } from '@services/day/types';

const calendarMonthData: DaySerializedType[] = [
  ...(aprilData as DaySerializedType[]),
  ...(mayData as DaySerializedType[]),
  ...(juneData as DaySerializedType[]),
  ...(julyData as DaySerializedType[]),
  ...(augustData as DaySerializedType[]),
  ...(septemberData as DaySerializedType[]),
  ...(octoberData as DaySerializedType[]),
  ...(novemberData as DaySerializedType[]),
  ...(decemberData as DaySerializedType[]),
  ...(januaryData as DaySerializedType[]),
];

const baseEventProps = {
  skipCheck: true,
  isChangeable: true,
};

function createStayAwakeEvent(
  overrides?: Partial<ConstructorParameters<typeof StayAwakeAcademicsEvent>[0]>
) {
  return new StayAwakeAcademicsEvent({
    ...baseEventProps,
    time: Times.Morning,
    ...overrides,
  });
}

function createChagallCafeEvent(
  overrides?: Partial<ConstructorParameters<typeof ChagalCafeCharmEvent>[0]>
) {
  return new ChagalCafeCharmEvent({
    ...baseEventProps,
    time: Times.Evening,
    ...overrides,
  });
}

function createSleepDuringClassEvent(
  overrides?: Partial<ConstructorParameters<typeof SleepDuringClassCourageEvent>[0]>
) {
  return new SleepDuringClassCourageEvent({
    ...baseEventProps,
    time: Times.Morning,
    ...overrides,
  });
}

describe('Calendar', () => {
  describe('constructor', () => {
    it('stores days', () => {
      const days = [
        createDayFixture({ date: createDateFixture(dayjs('2009-04-20')) }),
        createDayFixture({ date: createDateFixture(dayjs('2009-04-21')) }),
      ];

      const calendar = new Calendar({ days });

      expect(calendar.days).toBe(days);
    });
  });

  describe('createEmptyDay', () => {
    it('creates a day with empty stats and no events', () => {
      const date = dayjs('2009-04-19');
      const day = Calendar.createEmptyDay(date);

      expect(day.date).toBe(date);
      expect(day.events).toEqual([]);
      expect(day.statsAtStartOfDay).toEqual(new Stats());
      expect(day.statsAtEndOfDay).toEqual(new Stats());
    });
  });

  describe('getDatesByMonth', () => {
    it('returns an empty list when the calendar has no days', () => {
      const calendar = new Calendar({ days: [] });

      expect(calendar.getDatesByMonth()).toEqual([]);
    });

    it('groups dates by year-month in first-seen order', () => {
      const aprilSeventh = createDayFixture({ date: createDateFixture(dayjs('2009-04-07')) });
      const aprilEighth = createDayFixture({ date: createDateFixture(dayjs('2009-04-08')) });
      const mayFirst = createDayFixture({ date: createDateFixture(dayjs('2009-05-01')) });
      const calendar = new Calendar({ days: [aprilSeventh, aprilEighth, mayFirst] });

      const groups = calendar.getDatesByMonth();

      expect(groups).toHaveLength(2);
      expect(groups[0]?.map((date) => date.format(DatesFormat))).toEqual([
        '2009-04-07',
        '2009-04-08',
      ]);
      expect(groups[1]?.map((date) => date.format(DatesFormat))).toEqual(['2009-05-01']);
    });
  });

  describe('serialize', () => {
    it('serializes each day', () => {
      const days = [
        createDayFixture({
          date: createDateFixture(dayjs('2009-04-20')),
          events: [createStayAwakeEvent()],
        }),
        createDayFixture({
          date: createDateFixture(dayjs('2009-04-21')),
          events: [createChagallCafeEvent()],
        }),
      ];
      const calendar = new Calendar({ days });

      expect(JSON.parse(JSON.stringify(calendar.serialize()))).toEqual(
        days.map((day) => day.serialize())
      );
    });
  });

  describe('getDay', () => {
    it('returns the current day with neighboring days and indexes', () => {
      const first = createDayFixture({ date: createDateFixture(dayjs('2009-04-20')) });
      const second = createDayFixture({ date: createDateFixture(dayjs('2009-04-21')) });
      const calendar = new Calendar({ days: [first, second] });

      const firstResult = calendar.getDay(dayjs('2009-04-20'));
      expect(firstResult.currentDay).toBe(first);
      expect(firstResult.currentDayIndex).toBe(0);
      expect(firstResult.previousDay.date.isSame(dayjs('2009-04-19'), 'day')).toBe(true);
      expect(firstResult.previousDay.events).toEqual([]);
      expect(firstResult.previousDay.statsAtStartOfDay).toEqual(new Stats());
      expect(firstResult.previousDayIndex).toBe(-1);
      expect(firstResult.nextDay).toBe(second);
      expect(firstResult.nextDayIndex).toBe(1);
      expect(firstResult.weekAgoDay.date.isSame(dayjs('2009-04-13'), 'day')).toBe(true);
      expect(firstResult.weekAgoDay.events).toEqual([]);
      expect(firstResult.weekAgoDay.statsAtStartOfDay).toEqual(new Stats());
      expect(firstResult.weekAgoDayIndex).toBe(-7);

      const secondResult = calendar.getDay(dayjs('2009-04-21'));
      expect(secondResult.currentDay).toBe(second);
      expect(secondResult.currentDayIndex).toBe(1);
      expect(secondResult.previousDay).toBe(first);
      expect(secondResult.previousDayIndex).toBe(0);
      expect(secondResult.nextDay.date.isSame(dayjs('2009-04-22'), 'day')).toBe(true);
      expect(secondResult.nextDay.events).toEqual([]);
      expect(secondResult.nextDayIndex).toBe(2);
      expect(secondResult.weekAgoDay.date.isSame(dayjs('2009-04-14'), 'day')).toBe(true);
      expect(secondResult.weekAgoDayIndex).toBe(-6);
    });

    it('returns existing week-ago and next days when they are in the calendar', () => {
      const days = Array.from({ length: 8 }, (_, index) =>
        createDayFixture({
          date: createDateFixture(dayjs('2009-04-13').add(index, 'day')),
        })
      );
      const calendar = new Calendar({ days });

      const result = calendar.getDay(dayjs('2009-04-20'));

      expect(result.currentDay).toBe(days[7]);
      expect(result.currentDayIndex).toBe(7);
      expect(result.previousDay).toBe(days[6]);
      expect(result.previousDayIndex).toBe(6);
      expect(result.nextDay.date.isSame(dayjs('2009-04-21'), 'day')).toBe(true);
      expect(result.nextDay.events).toEqual([]);
      expect(result.nextDayIndex).toBe(8);
      expect(result.weekAgoDay).toBe(days[0]);
      expect(result.weekAgoDayIndex).toBe(0);
    });

    it('throws when no day matches the date', () => {
      const calendar = new Calendar({
        days: [createDayFixture({ date: createDateFixture(dayjs('2009-04-20')) })],
      });

      expect(() => calendar.getDay(dayjs('2009-04-21'))).toThrow(
        `Day not found for date: ${dayjs('2009-04-21').format(DatesFormat)}`
      );
    });
  });

  describe('getIsAvailableProps', () => {
    it('returns availability props for the event at the given time', () => {
      const eventStats = createStatsFixture({
        characterStats: createStatsFixture().characterStats.modify([
          { name: CharacterStatsNames.Academics, operator: '+', value: 5 },
        ]),
      });
      const morning = createStayAwakeEvent({ stats: eventStats });
      const days = Array.from({ length: 8 }, (_, index) =>
        createDayFixture({
          date: createDateFixture(dayjs('2009-04-13').add(index, 'day')),
          events: index === 7 ? [morning] : [],
        })
      );
      const currentDay = days[7]!;
      const previousDay = days[6]!;
      const dayWeekBefore = days[0]!;
      const calendar = new Calendar({ days });

      const props = calendar.getIsAvailableProps(dayjs('2009-04-20'), Times.Morning);

      expect(props.time).toBe(Times.Morning);
      expect(props.date.isSame(dayjs('2009-04-20'), 'day')).toBe(true);
      expect(props.stats).toBe(eventStats);
      expect(props.event).toBe(morning);
      expect(props.currentDay).toBe(currentDay);
      expect(props.previousDay).toBe(previousDay);
      expect(props.dayWeekBefore).toBe(dayWeekBefore);
    });

    it('falls back to empty placeholder days when previous or week-before days are missing', () => {
      const morning = createStayAwakeEvent();
      const currentDay = createDayFixture({
        date: createDateFixture(dayjs('2009-04-20')),
        events: [morning],
      });
      const calendar = new Calendar({ days: [currentDay] });

      const props = calendar.getIsAvailableProps(dayjs('2009-04-20'), Times.Morning);

      expect(props.currentDay).toBe(currentDay);
      expect(props.previousDay.date.isSame(dayjs('2009-04-19'), 'day')).toBe(true);
      expect(props.previousDay.events).toEqual([]);
      expect(props.previousDay.statsAtStartOfDay).toEqual(new Stats());
      expect(props.dayWeekBefore.date.isSame(dayjs('2009-04-13'), 'day')).toBe(true);
      expect(props.dayWeekBefore.events).toEqual([]);
      expect(props.dayWeekBefore.statsAtStartOfDay).toEqual(new Stats());
    });
  });

  describe('calculateStats', () => {
    it('chains stats across days from an empty starting Stats', () => {
      const day1 = createDayFixture({
        date: createDateFixture(dayjs('2009-04-20')),
        events: [createStayAwakeEvent()],
      });
      const day2 = createDayFixture({
        date: createDateFixture(dayjs('2009-04-21')),
        events: [createChagallCafeEvent()],
      });
      const calendar = new Calendar({ days: [day1, day2] });

      const [resultDay1, resultDay2] = Calendar.calculateStats(calendar).days;

      expect(resultDay1?.statsAtStartOfDay.characterStats[CharacterStatsNames.Academics]).toBe(0);
      expect(resultDay1?.statsAtEndOfDay.characterStats[CharacterStatsNames.Academics]).toBe(2);
      expect(resultDay1?.statsAtEndOfDay.characterStats[CharacterStatsNames.Charm]).toBe(0);

      expect(resultDay2?.statsAtStartOfDay.characterStats[CharacterStatsNames.Academics]).toBe(2);
      expect(resultDay2?.statsAtEndOfDay.characterStats[CharacterStatsNames.Academics]).toBe(2);
      expect(resultDay2?.statsAtEndOfDay.characterStats[CharacterStatsNames.Charm]).toBe(2);
    });

    it('keeps days before startFrom unchanged and continues from their end stats', () => {
      const preservedStart = createStatsFixture();
      const preservedEnd = createStatsFixture({
        characterStats: createStatsFixture().characterStats.modify([
          { name: CharacterStatsNames.Academics, operator: '+', value: 4 },
        ]),
      });
      const preservedDay = new Day({
        date: createDateFixture(dayjs('2009-04-20')),
        statsAtStartOfDay: preservedStart,
        statsAtEndOfDay: preservedEnd,
        events: [createStayAwakeEvent()],
      });
      const recalculatedDay = createDayFixture({
        date: createDateFixture(dayjs('2009-04-21')),
        events: [createChagallCafeEvent()],
      });
      const calendar = new Calendar({ days: [preservedDay, recalculatedDay] });

      const [resultDay1, resultDay2] = Calendar.calculateStats(calendar, dayjs('2009-04-21')).days;

      expect(resultDay1).toBe(preservedDay);
      expect(resultDay2?.statsAtStartOfDay).toBe(preservedEnd);
      expect(resultDay2?.statsAtEndOfDay.characterStats[CharacterStatsNames.Academics]).toBe(
        preservedEnd.characterStats[CharacterStatsNames.Academics]
      );
      expect(resultDay2?.statsAtEndOfDay.characterStats[CharacterStatsNames.Charm]).toBe(
        preservedEnd.characterStats[CharacterStatsNames.Charm] + 2
      );
    });

    it('throws when an event is unavailable', () => {
      const unavailable = createStayAwakeEvent({ skipCheck: false, time: Times.Evening });
      const day = createDayFixture({
        date: createDateFixture(dayjs('2009-04-20')),
        events: [unavailable],
      });

      expect(() =>
        Calendar.calculateStats(new Calendar({ days: [day] }), undefined, true, true)
      ).toThrow(`Event ${AcademicStatModifyNames.stayAwake} is not available at this time.`);
    });

    it('throws when multiple events share the same time', () => {
      const first = createStayAwakeEvent({ skipCheck: false });
      const second = createStayAwakeEvent({ skipCheck: false });
      const day = createDayFixture({
        date: createDateFixture(dayjs('2009-04-20')),
        events: [first, second],
      });

      expect(() => Calendar.calculateStats(new Calendar({ days: [day] }))).toThrow(
        `Multiple events found at time ${Times.Morning}.`
      );
    });

    it('processes events in the order provided', () => {
      const evening = createChagallCafeEvent();
      const morning = createStayAwakeEvent();
      const day = createDayFixture({
        date: createDateFixture(dayjs('2009-04-20')),
        events: [evening, morning],
      });

      const [resultDay] = Calendar.calculateStats(new Calendar({ days: [day] })).days;

      expect(resultDay?.events[0]).toBe(evening);
      expect(resultDay?.events[1]).toBe(morning);
      expect(resultDay?.statsAtEndOfDay.characterStats[CharacterStatsNames.Academics]).toBe(2);
      expect(resultDay?.statsAtEndOfDay.characterStats[CharacterStatsNames.Charm]).toBe(2);
    });
  });

  describe('replaceEvent', () => {
    it('replaces the event and returns a new calendar with recalculated stats', () => {
      const morning = createStayAwakeEvent();
      const evening = createChagallCafeEvent();
      const calendar = new Calendar({
        days: [
          createDayFixture({
            date: createDateFixture(dayjs('2009-04-20')),
            events: [morning],
          }),
          createDayFixture({
            date: createDateFixture(dayjs('2009-04-21')),
            events: [evening],
          }),
        ],
      });
      const replacement = createSleepDuringClassEvent();

      const result = calendar.replaceEvent(dayjs('2009-04-20'), Times.Morning, replacement);

      expect(result).not.toBe(calendar);
      expect(result.days[0]?.events).toEqual([replacement]);
      expect(result.days[0]?.statsAtEndOfDay.characterStats[CharacterStatsNames.Courage]).toBe(2);
      expect(result.days[0]?.statsAtEndOfDay.characterStats[CharacterStatsNames.Academics]).toBe(0);
      expect(result.days[1]?.statsAtStartOfDay.characterStats[CharacterStatsNames.Courage]).toBe(2);
      expect(result.days[1]?.statsAtEndOfDay.characterStats[CharacterStatsNames.Charm]).toBe(2);
    });

    it('keeps days before the replacement date unchanged', () => {
      const preservedStart = createStatsFixture();
      const preservedEnd = createStatsFixture({
        characterStats: createStatsFixture().characterStats.modify([
          { name: CharacterStatsNames.Academics, operator: '+', value: 4 },
        ]),
      });
      const preservedDay = new Day({
        date: createDateFixture(dayjs('2009-04-20')),
        statsAtStartOfDay: preservedStart,
        statsAtEndOfDay: preservedEnd,
        events: [createStayAwakeEvent()],
      });
      const targetDay = createDayFixture({
        date: createDateFixture(dayjs('2009-04-21')),
        events: [createStayAwakeEvent()],
      });
      const calendar = new Calendar({ days: [preservedDay, targetDay] });
      const replacement = createSleepDuringClassEvent();

      const result = calendar.replaceEvent(dayjs('2009-04-21'), Times.Morning, replacement);

      expect(result.days[0]).toBe(preservedDay);
      expect(result.days[1]?.events).toEqual([replacement]);
      expect(result.days[1]?.statsAtStartOfDay).toBe(preservedEnd);
      expect(result.days[1]?.statsAtEndOfDay.characterStats[CharacterStatsNames.Courage]).toBe(
        preservedEnd.characterStats[CharacterStatsNames.Courage] + 2
      );
    });

    it('throws when no day matches the date', () => {
      const calendar = new Calendar({
        days: [createDayFixture({ date: createDateFixture(dayjs('2009-04-20')) })],
      });

      expect(() =>
        calendar.replaceEvent(dayjs('2009-04-21'), Times.Morning, createSleepDuringClassEvent())
      ).toThrow(`Day not found for date: ${dayjs('2009-04-21').format(DatesFormat)}`);
    });

    it('throws when multiple events share the same time', () => {
      const day = createDayFixture({
        date: createDateFixture(dayjs('2009-04-20')),
        events: [createStayAwakeEvent(), createSleepDuringClassEvent()],
      });
      const calendar = new Calendar({ days: [day] });

      expect(() =>
        calendar.replaceEvent(dayjs('2009-04-20'), Times.Morning, createChagallCafeEvent())
      ).toThrow(`Multiple events found at time ${Times.Morning}.`);
    });
  });

  it('calculates stats without errors or warnings', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const calendar = Calendar.deserialize(calendarMonthData);

    const result = Calendar.calculateStats(calendar, undefined, false, false);

    expect(result.days).toHaveLength(calendarMonthData.length);
    expect(warnSpy).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
  });
});
