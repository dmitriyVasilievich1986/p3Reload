import dayjs, { Dayjs } from 'dayjs';
import { test } from 'vite-plus/test';

import { Times, type TimesType } from '@constants/times';
import { AdditionalStats, type AdditionalStatsProps } from '@services/stats/additionalStats';
import {
  CharacterStats,
  CharacterStatsNames,
  type CharacterStatsProps,
} from '@services/stats/characterStats';
import { SocialLinkStats } from '@services/stats/socialLinkStats';

import type { IsAvailableProps } from '@services/availability';
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
 * Builds a full {@link IsAvailableProps} object from the shared field fixtures.
 *
 * @param overrides - Partial props merged over the default fixtures.
 */
export function createIsAvailablePropsFixture(
  overrides?: Partial<IsAvailableProps>
): IsAvailableProps {
  return {
    time: createTimeFixture(),
    date: createDateFixture(),
    characterStats: createCharacterStatsFixture(),
    socialLinkStats: createSocialLinkStatsFixture(),
    additionalStats: createAdditionalStatsFixture(),
    ...overrides,
  };
}

/**
 * Extended Vitest test with default {@link IsAvailableProps} fields injected.
 *
 * Use when a test needs individual fixture fields from the shared baseline:
 *
 * ```ts
 * isAvailableFixtures('example', ({ time, date, characterStats, socialLinkStats, additionalStats }) => {
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
  characterStats: async ({}, provide) => {
    await provide(createCharacterStatsFixture());
  },
  // eslint-disable-next-line no-empty-pattern -- Vitest fixtures require a deps object
  socialLinkStats: async ({}, provide) => {
    await provide(createSocialLinkStatsFixture());
  },
  // eslint-disable-next-line no-empty-pattern -- Vitest fixtures require a deps object
  additionalStats: async ({}, provide) => {
    await provide(createAdditionalStatsFixture());
  },
});
