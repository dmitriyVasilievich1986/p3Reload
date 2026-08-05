/**
 * Vitest tests for the IsEventInHistoryAvailability class.
 */
import { expect } from 'vite-plus/test';

import { AdditionalStats } from '@services/additionalStats';
import { isAvailableFixtures, createIsAvailablePropsFixture } from '@services/fixtures';

import { IsEventInHistoryAvailability } from './IsEventInHistoryAvailability';

isAvailableFixtures('should be available', () => {
  const additionalStats = new AdditionalStats({ singleTimeEvents: new Set(['test event']) });
  const availability = new IsEventInHistoryAvailability({
    name: 'test event',
    isInHistory: true,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ additionalStats }))).toBe(true);
});

isAvailableFixtures('should be unavailable with reverse logic', () => {
  const additionalStats = new AdditionalStats({ singleTimeEvents: new Set(['test event']) });
  const availability = new IsEventInHistoryAvailability({
    name: 'test event',
    isInHistory: false,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ additionalStats }))).toBe(false);
});

isAvailableFixtures('should be unavailable', () => {
  const availability = new IsEventInHistoryAvailability({
    name: 'test event',
    isInHistory: true,
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toBe(false);
});
