import dayjs from 'dayjs';
import { expect } from 'vite-plus/test';

import {
  isAvailableFixtures,
  createIsAvailablePropsFixture,
  createDateFixture,
} from '@services/fixtures';

import { FalseAvailability } from './FalseAvailability';

isAvailableFixtures('should be unavailable with default props', () => {
  const availability = new FalseAvailability();
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be unavailable regardless of the date', () => {
  const availability = new FalseAvailability();
  expect(
    availability.isAvailable(
      createIsAvailablePropsFixture({ date: createDateFixture(dayjs('2009-04-29')) })
    )
  ).toEqual(false);
});
