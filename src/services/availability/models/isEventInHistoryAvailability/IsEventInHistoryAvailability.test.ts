import { expect } from 'vite-plus/test';

import { isAvailableFixtures, createIsAvailablePropsFixture } from '@services/fixtures';
import { Stats } from '@services/stats';
import { AdditionalStats } from '@services/stats/additionalStats';

import { IsEventInHistoryAvailability } from './IsEventInHistoryAvailability';

isAvailableFixtures('should be available', () => {
  const additionalStats = new AdditionalStats({ singleTimeEvents: new Set(['test event']) });
  const stats = new Stats({ additionalStats });
  const availability = new IsEventInHistoryAvailability({
    name: 'test event',
    isInHistory: true,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ stats }))).toBe(true);
});

isAvailableFixtures('should be unavailable with reverse logic', () => {
  const additionalStats = new AdditionalStats({ singleTimeEvents: new Set(['test event']) });
  const stats = new Stats({ additionalStats });
  const availability = new IsEventInHistoryAvailability({
    name: 'test event',
    isInHistory: false,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ stats }))).toBe(false);
});

isAvailableFixtures('should be unavailable', () => {
  const availability = new IsEventInHistoryAvailability({
    name: 'test event',
    isInHistory: true,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toBe(false);
});
