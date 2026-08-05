import { expect } from 'vite-plus/test';

import { CharacterStats } from '@services/characterStats';
/**
 * Vitest tests for the CharacterStatsAvailability class.
 */
import { CharacterStatsNames } from '@services/characterStats/types';
import { isAvailableFixtures, createIsAvailablePropsFixture } from '@services/fixtures';

import { CharacterStatsAvailability } from './CharacterStatsAvailability';

isAvailableFixtures('should be available', () => {
  const availability = new CharacterStatsAvailability({
    name: CharacterStatsNames.Academics,
    operator: 'gt',
    level: 1,
  });
  const points = CharacterStats.getCharacterStatsLevelByLevel(
    CharacterStatsNames.Academics,
    2
  ).points;
  const characterStats = new CharacterStats({
    [CharacterStatsNames.Academics]: points,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ characterStats }))).toEqual(true);
});

isAvailableFixtures('should be unavailable', () => {
  const availability = new CharacterStatsAvailability({
    name: CharacterStatsNames.Academics,
    operator: 'gt',
    level: 5,
  });
  const points = CharacterStats.getCharacterStatsLevelByLevel(
    CharacterStatsNames.Academics,
    2
  ).points;
  const characterStats = new CharacterStats({
    [CharacterStatsNames.Academics]: points,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ characterStats }))).toEqual(
    false
  );
});
