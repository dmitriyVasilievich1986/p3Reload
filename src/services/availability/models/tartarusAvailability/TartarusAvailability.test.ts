import { expect } from 'vite-plus/test';

import { TartarusEvent } from '@services/event/models/specialEvents';
import {
  isAvailableFixtures,
  createDayFixture,
  createTimeFixture,
  createIsAvailablePropsFixture,
} from '@services/fixtures';

import { TartarusAvailability } from './TartarusAvailability';

isAvailableFixtures('should be available', () => {
  const availability = new TartarusAvailability();
  const previousDay = createDayFixture({
    events: [
      new TartarusEvent({
        time: createTimeFixture(),
        skipCheck: true,
        isChangeable: true,
        rows: [],
        isTall: false,
      }),
    ],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture({ previousDay }))).toBe(true);
});

isAvailableFixtures('should be unavailable', () => {
  const availability = new TartarusAvailability();
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toBe(false);
});
