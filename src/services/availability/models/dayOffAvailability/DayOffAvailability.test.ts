import dayjs from 'dayjs';
import { expect } from 'vite-plus/test';

import {
  isAvailableFixtures,
  createIsAvailablePropsFixture,
  createDateFixture,
} from '@services/fixtures';

import { DayOffAvailability } from './DayOffAvailability';

isAvailableFixtures('should be available on a day off when isAvailableOnADayOff is true', () => {
  const availability = new DayOffAvailability({ isAvailableOnADayOff: true });
  expect(
    availability.isAvailable(
      createIsAvailablePropsFixture({ date: createDateFixture(dayjs('2009-04-29')) })
    )
  ).toEqual(true);
});

isAvailableFixtures(
  'should be unavailable on a non-day-off when isAvailableOnADayOff is true',
  () => {
    const availability = new DayOffAvailability({ isAvailableOnADayOff: true });
    expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
  }
);

isAvailableFixtures(
  'should be available on a non-day-off when isAvailableOnADayOff is false',
  () => {
    const availability = new DayOffAvailability({ isAvailableOnADayOff: false });
    expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
  }
);

isAvailableFixtures('should be unavailable on a day off when isAvailableOnADayOff is false', () => {
  const availability = new DayOffAvailability({ isAvailableOnADayOff: false });
  expect(
    availability.isAvailable(
      createIsAvailablePropsFixture({ date: createDateFixture(dayjs('2009-05-04')) })
    )
  ).toEqual(false);
});

isAvailableFixtures('should default isAvailableOnADayOff to false', () => {
  const availability = new DayOffAvailability({});
  expect(availability.isAvailableOnADayOff).toEqual(false);
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});
