import dayjs from 'dayjs';
import { beforeEach, describe, expect, it, vi } from 'vite-plus/test';

import { Times } from '@constants/times';
import { StayAwakeAcademicsEvent } from '@services/event/models/characterStatsModifyEvents/academic';
import { AcademicStatModifyNames } from '@services/event/models/characterStatsModifyEvents/academic/types';
import { ChagalCafeCharmEvent } from '@services/event/models/characterStatsModifyEvents/charm';
import { CharmStatModifyNames } from '@services/event/models/characterStatsModifyEvents/charm/types';
import { SleepDuringClassCourageEvent } from '@services/event/models/characterStatsModifyEvents/courage';
import {
  createDateFixture,
  createIsAvailablePropsFixture,
  createStatsFixture,
} from '@services/fixtures';
import { CharacterStatsNames } from '@services/stats/characterStats/types';

import { Day } from './Day';

const baseEventProps = {
  skipCheck: false,
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

describe('Day', () => {
  describe('constructor', () => {
    it('stores stats, date, and events', () => {
      const statsAtStartOfDay = createStatsFixture();
      const statsAtEndOfDay = createStatsFixture({
        characterStats: createStatsFixture().characterStats.modify([
          { name: CharacterStatsNames.Academics, operator: '+', value: 2 },
        ]),
      });
      const events = [createStayAwakeEvent()];
      const date = createDateFixture();

      const day = new Day({ statsAtStartOfDay, statsAtEndOfDay, events, date });

      expect(day.statsAtStartOfDay).toBe(statsAtStartOfDay);
      expect(day.statsAtEndOfDay).toBe(statsAtEndOfDay);
      expect(day.events).toBe(events);
      expect(day.date).toBe(date);
    });
  });

  describe('serialize', () => {
    it('serializes the date and each event', () => {
      const events = [createStayAwakeEvent(), createChagallCafeEvent()];
      const day = new Day({
        statsAtStartOfDay: createStatsFixture(),
        statsAtEndOfDay: createStatsFixture(),
        events,
        date: createDateFixture(dayjs('2009-04-20')),
      });
      const serialized = JSON.parse(JSON.stringify(day.serialize()));

      expect(serialized).toEqual({
        date: '2009-04-20',
        events: events.map((event) => event.serialize()),
      });
    });
  });

  describe('getEvent', () => {
    it('returns the event at the given time', () => {
      const morning = createStayAwakeEvent();
      const evening = createChagallCafeEvent();
      const day = new Day({
        statsAtStartOfDay: createStatsFixture(),
        statsAtEndOfDay: createStatsFixture(),
        events: [morning, evening],
        date: createDateFixture(),
      });

      expect(day.getEvent(Times.Morning)).toBe(morning);
      expect(day.getEvent(Times.Evening)).toBe(evening);
    });

    it('throws when no event matches the time', () => {
      const day = new Day({
        statsAtStartOfDay: createStatsFixture(),
        statsAtEndOfDay: createStatsFixture(),
        events: [createChagallCafeEvent()],
        date: createDateFixture(),
      });

      expect(() => day.getEvent(Times.Morning)).toThrow(
        `No events found for time: ${Times.Morning}`
      );
    });

    it('throws when multiple events share the same time', () => {
      const day = new Day({
        statsAtStartOfDay: createStatsFixture(),
        statsAtEndOfDay: createStatsFixture(),
        events: [createStayAwakeEvent(), createSleepDuringClassEvent({ time: Times.Morning })],
        date: createDateFixture(),
      });

      expect(() => day.getEvent(Times.Morning)).toThrow(
        `Multiple events found for time: ${Times.Morning}`
      );
    });
  });

  describe('processEvents', () => {
    it('returns BaseEvent instances unchanged', () => {
      const events = [createStayAwakeEvent(), createChagallCafeEvent()];

      expect(Day.processEvents(events)).toEqual(events);
    });

    it('builds events from serialized name/props pairs', () => {
      const processed = Day.processEvents([
        {
          name: AcademicStatModifyNames.stayAwake,
          props: { ...baseEventProps, time: Times.Morning },
        },
        {
          name: CharmStatModifyNames.chagallCafeCharm,
          props: { ...baseEventProps, time: Times.Evening },
        },
      ]);

      expect(processed[0]).toBeInstanceOf(StayAwakeAcademicsEvent);
      expect(processed[1]).toBeInstanceOf(ChagalCafeCharmEvent);
      expect(processed[0]?.serialize()).toEqual({
        name: AcademicStatModifyNames.stayAwake,
        props: { ...baseEventProps, time: Times.Morning },
      });
      expect(processed[1]?.serialize()).toEqual({
        name: CharmStatModifyNames.chagallCafeCharm,
        props: { ...baseEventProps, time: Times.Evening },
      });
    });
  });

  describe('sortEvents', () => {
    it('orders events by time of day', () => {
      const morning = createStayAwakeEvent({ time: Times.Morning });
      const day = createSleepDuringClassEvent({ time: Times.Day });
      const evening = createChagallCafeEvent({ time: Times.Evening });
      const night = createChagallCafeEvent({ time: Times.Night });
      const darkHour = createChagallCafeEvent({ time: Times.DarkHour });
      const dayFreeTime = createStayAwakeEvent({ time: Times.DayFreeTime });
      const eveningFreeTime = createChagallCafeEvent({ time: Times.EveningFreeTime });

      const sorted = Day.sortEvents([
        darkHour,
        evening,
        morning,
        night,
        dayFreeTime,
        eveningFreeTime,
        day,
      ]);

      expect(sorted).toEqual([
        morning,
        dayFreeTime,
        day,
        eveningFreeTime,
        evening,
        night,
        darkHour,
      ]);
    });
  });

  describe('filterEvents', () => {
    beforeEach(() => {
      vi.restoreAllMocks();
    });

    it('keeps available events', () => {
      const morningEvent = createStayAwakeEvent();
      const eveningEvent = createChagallCafeEvent();
      const props = createIsAvailablePropsFixture({ time: Times.Morning });

      expect(Day.filterEvents([morningEvent, eveningEvent], props)).toEqual([morningEvent]);
    });

    it('keeps events that skip availability checks', () => {
      const unavailableButSkipped = createChagallCafeEvent({ skipCheck: true });
      const props = createIsAvailablePropsFixture({ time: Times.Morning });

      expect(Day.filterEvents([unavailableButSkipped], props)).toEqual([unavailableButSkipped]);
    });

    it('warns and drops unavailable events by default', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
      const eveningEvent = createChagallCafeEvent();
      const props = createIsAvailablePropsFixture({ time: Times.Morning });

      expect(Day.filterEvents([eveningEvent], props)).toEqual([]);
      expect(warnSpy).toHaveBeenCalledWith(
        `Event ${CharmStatModifyNames.chagallCafeCharm} is not available at this time.`
      );
    });

    it('throws when unavailable and throwAnErrorIfNotAvailable is true', () => {
      const eveningEvent = createChagallCafeEvent();
      const props = createIsAvailablePropsFixture({ time: Times.Morning });

      expect(() => Day.filterEvents([eveningEvent], props, true)).toThrow(
        `Event ${CharmStatModifyNames.chagallCafeCharm} is not available at this time.`
      );
    });

    it('warns when multiple events share the same time by default', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
      const first = createStayAwakeEvent({ skipCheck: true });
      const second = createSleepDuringClassEvent({ time: Times.Morning, skipCheck: true });
      const props = createIsAvailablePropsFixture({ time: Times.Morning });

      expect(Day.filterEvents([first, second], props)).toEqual([first, second]);
      expect(warnSpy).toHaveBeenCalledWith(`Multiple events found at time ${Times.Morning}.`);
    });

    it('throws when multiple events share the same time and throwAnErrorIfMultipleEvents is true', () => {
      const first = createStayAwakeEvent({ skipCheck: true });
      const second = createSleepDuringClassEvent({ time: Times.Morning, skipCheck: true });
      const props = createIsAvailablePropsFixture({ time: Times.Morning });

      expect(() => Day.filterEvents([first, second], props, false, true)).toThrow(
        `Multiple events found at time ${Times.Morning}.`
      );
    });

    it('does not warn about duplicates when event times are unique', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
      const morning = createStayAwakeEvent({ skipCheck: true });
      const evening = createChagallCafeEvent({ skipCheck: true });
      const props = createIsAvailablePropsFixture();

      expect(Day.filterEvents([morning, evening], props)).toEqual([morning, evening]);
      expect(warnSpy).not.toHaveBeenCalledWith(
        expect.stringContaining('Multiple events found at time')
      );
    });
  });

  describe('calculateStats', () => {
    it('uses empty Stats when none are provided and chains event modifications', () => {
      const stayAwake = createStayAwakeEvent();
      const chagallCafe = createChagallCafeEvent();
      const props = createIsAvailablePropsFixture();

      const result = Day.calculateStats([stayAwake, chagallCafe], props);

      expect(result.startingStats.characterStats[CharacterStatsNames.Academics]).toBe(0);
      expect(result.startingStats.characterStats[CharacterStatsNames.Charm]).toBe(0);
      expect(result.endingStats.characterStats[CharacterStatsNames.Academics]).toBe(2);
      expect(result.endingStats.characterStats[CharacterStatsNames.Charm]).toBe(2);
      expect(stayAwake.stats).toBe(result.startingStats);
      expect(chagallCafe.stats.characterStats[CharacterStatsNames.Academics]).toBe(2);
      expect(result.events).toEqual([stayAwake, chagallCafe]);
    });

    it('starts from the provided stats', () => {
      const stayAwake = createStayAwakeEvent();
      const startingStats = createStatsFixture();
      const props = createIsAvailablePropsFixture({ stats: startingStats });

      const result = Day.calculateStats([stayAwake], props, startingStats);

      expect(result.startingStats).toBe(startingStats);
      expect(result.endingStats.characterStats[CharacterStatsNames.Academics]).toBe(
        startingStats.characterStats[CharacterStatsNames.Academics] + 2
      );
    });
  });

  describe('replaceEvent', () => {
    it('replaces the event at the given time', () => {
      const morning = createStayAwakeEvent();
      const evening = createChagallCafeEvent();
      const replacement = createSleepDuringClassEvent({ time: Times.Morning });

      expect(Day.replaceEvent([morning, evening], Times.Morning, replacement)).toEqual([
        replacement,
        evening,
      ]);
    });

    it('throws when multiple events share the same time', () => {
      const first = createStayAwakeEvent();
      const second = createSleepDuringClassEvent({ time: Times.Morning });
      const replacement = createChagallCafeEvent({ time: Times.Morning });

      expect(() => Day.replaceEvent([first, second], Times.Morning, replacement)).toThrow(
        `Multiple events found at time ${Times.Morning}.`
      );
    });

    it('leaves the list unchanged when no event matches the time', () => {
      const evening = createChagallCafeEvent();
      const replacement = createStayAwakeEvent();

      expect(Day.replaceEvent([evening], Times.Morning, replacement)).toEqual([evening]);
    });
  });
});
