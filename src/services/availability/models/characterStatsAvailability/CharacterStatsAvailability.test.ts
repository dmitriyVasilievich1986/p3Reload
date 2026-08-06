import { expect } from 'vite-plus/test';

import { isAvailableFixtures, createIsAvailablePropsFixture } from '@services/fixtures';
import { Stats } from '@services/stats';
import { CharacterStats } from '@services/stats/characterStats';
import { CharacterStatsNames } from '@services/stats/characterStats/types';

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
  const stats = new Stats({ characterStats });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ stats }))).toEqual(true);
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
  const stats = new Stats({ characterStats });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ stats }))).toEqual(false);
});
