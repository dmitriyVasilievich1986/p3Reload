import { expect } from 'vite-plus/test';

/**
 * Vitest tests for the OrAvailability class.
 */
import { Times } from '@constants/times';
import { CharacterStatsNames } from '@services/characterStats/types';
import { createIsAvailablePropsFixture, isAvailableFixtures } from '@services/fixtures';

import { CharacterStatsAvailability } from '../characterStatsAvailability/CharacterStatsAvailability';
import { TimeAvailability } from '../timeAvailability/TimeAvailability';
import { OrAvailability } from './OrAvailability';

isAvailableFixtures('should be available', () => {
  const availability = new OrAvailability({
    availabilities: [
      new TimeAvailability({ times: [Times.Evening] }),
      new CharacterStatsAvailability({
        name: CharacterStatsNames.Academics,
        operator: 'ge',
        level: 1,
      }),
    ],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should not be available', () => {
  const availability = new OrAvailability({
    availabilities: [
      new TimeAvailability({ times: [Times.Evening] }),
      new CharacterStatsAvailability({
        name: CharacterStatsNames.Academics,
        operator: 'ge',
        level: 2,
      }),
    ],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should not be available with empty availabilities', () => {
  const availability = new OrAvailability({ availabilities: [] });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});
