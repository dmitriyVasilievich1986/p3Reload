import { expect } from 'vite-plus/test';

import { Times } from '@constants/times';
import { isAvailableFixtures, createIsAvailablePropsFixture } from '@services/fixtures';
import { CharacterStatsNames } from '@services/stats/characterStats/types';

import { CharacterStatsAvailability } from '../characterStatsAvailability/CharacterStatsAvailability';
import { TimeAvailability } from '../timeAvailability/TimeAvailability';
import { AndAvailability } from './AndAvailability';

isAvailableFixtures('should be available', () => {
  const availability = new AndAvailability({
    availabilities: [
      new TimeAvailability({ times: [Times.Morning, Times.Day] }),
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
  const availability = new AndAvailability({
    availabilities: [
      new TimeAvailability({ times: [Times.Morning, Times.Day] }),
      new CharacterStatsAvailability({
        name: CharacterStatsNames.Academics,
        operator: 'ge',
        level: 2,
      }),
    ],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be available with empty availabilities', () => {
  const availability = new AndAvailability({ availabilities: [] });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});
