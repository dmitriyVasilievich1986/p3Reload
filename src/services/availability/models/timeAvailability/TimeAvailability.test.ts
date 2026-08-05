import { expect } from 'vite-plus/test';

import { Times } from '@constants/times';
import { isAvailableFixtures, createIsAvailablePropsFixture } from '@services/fixtures';

import { TimeAvailability } from './TimeAvailability';

isAvailableFixtures('should be available', () => {
  const availability = new TimeAvailability({ times: [Times.Morning, Times.Day] });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be unavailable', () => {
  const availability = new TimeAvailability({ times: [Times.Evening] });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});
