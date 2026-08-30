import { expect } from 'vite-plus/test';

import {
  createDormActivitiesStatsFixture,
  createIsAvailablePropsFixture,
  createStatsFixture,
  isAvailableFixtures,
} from '@services/fixtures';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { isDormActivitiesLevelUpAvailable } from './isDormActivitiesLevelUpAvailable';

function createStatsWithLevel(level: number) {
  return createStatsFixture({
    DormActivitiesStats: createDormActivitiesStatsFixture({
      [DormActivitiesNames.AigisBook]: level,
    }),
  });
}

isAvailableFixtures('should be available when the activity can still level up', () => {
  const stats = createStatsWithLevel(0);
  const availability = new isDormActivitiesLevelUpAvailable({
    name: DormActivitiesNames.AigisBook,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ stats }))).toBe(true);
});

isAvailableFixtures('should be unavailable once the activity reaches the max level', () => {
  const stats = createStatsWithLevel(3);
  const availability = new isDormActivitiesLevelUpAvailable({
    name: DormActivitiesNames.AigisBook,
    isLevelUpAvailable: true,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ stats }))).toBe(false);
});

isAvailableFixtures(
  'should be unavailable with reverse logic while a level-up is still possible',
  () => {
    const stats = createStatsWithLevel(0);
    const availability = new isDormActivitiesLevelUpAvailable({
      name: DormActivitiesNames.AigisBook,
      isLevelUpAvailable: false,
    });
    expect(availability.isAvailable(createIsAvailablePropsFixture({ stats }))).toBe(false);
  }
);

isAvailableFixtures('should be available with reverse logic once the activity is maxed out', () => {
  const stats = createStatsWithLevel(3);
  const availability = new isDormActivitiesLevelUpAvailable({
    name: DormActivitiesNames.AigisBook,
    isLevelUpAvailable: false,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ stats }))).toBe(true);
});

isAvailableFixtures('should default isLevelUpAvailable to true when omitted', () => {
  const availability = new isDormActivitiesLevelUpAvailable({
    name: DormActivitiesNames.AigisBook,
  });
  expect(availability.isLevelUpAvailable).toBe(true);
});
