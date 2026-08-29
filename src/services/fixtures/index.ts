import dayjs, { Dayjs } from 'dayjs';
import { test } from 'vite-plus/test';

import { Times, type TimesType } from '@constants/times';
import { Day } from '@services/day';
import { StayAwakeAcademicsEvent } from '@services/event/models/characterStatsModifyEvents/academic';
import { Stats, type StatsProps } from '@services/stats';
import { AdditionalStats, type AdditionalStatsProps } from '@services/stats/additionalStats';
import {
  CharacterStats,
  CharacterStatsNames,
  type CharacterStatsProps,
} from '@services/stats/characterStats';
import { DormActivitesStats, type DormActivitesStatsProps } from '@services/stats/dormActivities';
import { EpisodesStats, type EpisodesStatsProps } from '@services/stats/episodesStats';
import { SocialLinkStats } from '@services/stats/socialLinkStats';

import type { IsAvailableProps } from '@services/availability';
import type { DayProps } from '@services/day/types';
import type { BaseEvent } from '@services/event/base';
import type { EventProps } from '@services/event/types';
import type { SocialLinkStatsProps } from '@services/stats/socialLinkStats/types';

/** Baseline point totals used by {@link createCharacterStatsFixture}. */
export const DEFAULT_CHARACTER_STATS: Required<CharacterStatsProps> = {
  [CharacterStatsNames.Academics]: 10,
  [CharacterStatsNames.Courage]: 10,
  [CharacterStatsNames.Charm]: 10,
};

/**
 * Builds a {@link TimesType} fixture.
 *
 * @param time - Optional override; defaults to {@link Times.Day}.
 */
export function createTimeFixture(time: TimesType = Times.Day): TimesType {
  return time;
}

/**
 * Builds a {@link Dayjs} fixture.
 *
 * @param date - Optional override; defaults to {@link dayjs('2009-05-15')}.
 */
export function createDateFixture(date: Dayjs = dayjs('2009-05-15')): Dayjs {
  return dayjs(date);
}

/**
 * Builds a {@link CharacterStats} fixture with baseline social-stat totals.
 *
 * @param overrides - Partial point totals merged over {@link DEFAULT_CHARACTER_STATS}.
 */
export function createCharacterStatsFixture(overrides?: CharacterStatsProps): CharacterStats {
  return new CharacterStats({
    ...DEFAULT_CHARACTER_STATS,
    ...overrides,
  });
}

/**
 * Builds a {@link SocialLinkStats} fixture.
 *
 * Omitted arcanas keep the {@link SocialLinkStats} constructor defaults (level `0`).
 *
 * @param overrides - Optional per-arcana stats.
 */
export function createSocialLinkStatsFixture(overrides?: SocialLinkStatsProps): SocialLinkStats {
  return new SocialLinkStats(overrides);
}

/**
 * Builds a {@link AdditionalStats} fixture.
 *
 * @param overrides - Optional additional stats.
 */
export function createAdditionalStatsFixture(overrides?: AdditionalStatsProps): AdditionalStats {
  return new AdditionalStats(overrides);
}

/**
 * Builds a {@link EpisodesStats} fixture.
 *
 * Omitted links keep the {@link EpisodesStats} constructor defaults (level `0`).
 *
 * @param overrides - Optional per-link levels.
 */
export function createEpisodesStatsFixture(overrides?: EpisodesStatsProps): EpisodesStats {
  return new EpisodesStats(overrides);
}

/**
 * Builds a {@link DormActivitesStats} fixture.
 *
 * Omitted activities keep the {@link DormActivitesStats} constructor defaults (level `0`).
 *
 * @param overrides - Optional per-activity levels.
 */
export function createDormActivitesStatsFixture(
  overrides?: DormActivitesStatsProps
): DormActivitesStats {
  return new DormActivitesStats(overrides);
}

/**
 * Builds a {@link Stats} fixture from the shared stat fixtures.
 *
 * @param overrides - Partial stats merged over the default fixtures.
 */
export function createStatsFixture(overrides?: StatsProps): Stats {
  return new Stats({
    characterStats: createCharacterStatsFixture(),
    socialLinkStats: createSocialLinkStatsFixture(),
    additionalStats: createAdditionalStatsFixture(),
    episodesStats: createEpisodesStatsFixture(),
    dormActivitesStats: createDormActivitesStatsFixture(),
    ...overrides,
  });
}

/**
 * Builds a {@link BaseEvent} fixture.
 *
 * Uses {@link StayAwakeAcademicsEvent} as a concrete stand-in.
 *
 * @param overrides - Partial event props merged over the defaults.
 */
export function createEventFixture(overrides?: Partial<EventProps>): BaseEvent {
  return new StayAwakeAcademicsEvent({
    time: createTimeFixture(),
    skipCheck: true,
    isChangeable: true,
    ...overrides,
  });
}

/**
 * Builds a {@link Day} fixture.
 *
 * @param overrides - Partial day props merged over the defaults.
 */
export function createDayFixture(overrides?: Partial<DayProps>): Day {
  const statsAtStartOfDay = overrides?.statsAtStartOfDay ?? createStatsFixture();
  return new Day({
    date: createDateFixture(),
    statsAtStartOfDay,
    statsAtEndOfDay: statsAtStartOfDay,
    events: [],
    ...overrides,
  });
}

/**
 * Builds a full {@link IsAvailableProps} object from the shared field fixtures.
 *
 * @param overrides - Partial props merged over the default fixtures.
 */
export function createIsAvailablePropsFixture(
  overrides?: Partial<IsAvailableProps>
): IsAvailableProps {
  const date = overrides?.date ?? createDateFixture();
  const time = overrides?.time ?? createTimeFixture();
  const stats = overrides?.stats ?? createStatsFixture();
  const event = overrides?.event ?? createEventFixture({ time, stats });

  return {
    time,
    date,
    stats,
    event,
    currentDay:
      overrides?.currentDay ??
      createDayFixture({
        date,
        events: [event],
        statsAtStartOfDay: stats,
        statsAtEndOfDay: stats,
      }),
    previousDay: overrides?.previousDay ?? createDayFixture({ date: date.subtract(1, 'day') }),
    dayWeekBefore: overrides?.dayWeekBefore ?? createDayFixture({ date: date.subtract(7, 'day') }),
  };
}

/**
 * Extended Vitest test with default {@link IsAvailableProps} fields injected.
 *
 * Use when a test needs individual fixture fields from the shared baseline:
 *
 * ```ts
 * isAvailableFixtures('example', ({ time, date, stats, event, currentDay }) => {
 *   // ...
 * });
 * ```
 */
export const isAvailableFixtures = test.extend<IsAvailableProps>({
  // eslint-disable-next-line no-empty-pattern -- Vitest fixtures require a deps object
  time: async ({}, provide) => {
    await provide(createTimeFixture());
  },
  // eslint-disable-next-line no-empty-pattern -- Vitest fixtures require a deps object
  date: async ({}, provide) => {
    await provide(createDateFixture());
  },
  // eslint-disable-next-line no-empty-pattern -- Vitest fixtures require a deps object
  stats: async ({}, provide) => {
    await provide(createStatsFixture());
  },
  // eslint-disable-next-line no-empty-pattern -- Vitest fixtures require a deps object
  event: async ({}, provide) => {
    await provide(createEventFixture());
  },
  currentDay: async ({ date, event, stats }, provide) => {
    await provide(
      createDayFixture({
        date,
        events: [event],
        statsAtStartOfDay: stats,
        statsAtEndOfDay: stats,
      })
    );
  },
  previousDay: async ({ date }, provide) => {
    await provide(createDayFixture({ date: date.subtract(1, 'day') }));
  },
  dayWeekBefore: async ({ date }, provide) => {
    await provide(createDayFixture({ date: date.subtract(7, 'day') }));
  },
});
