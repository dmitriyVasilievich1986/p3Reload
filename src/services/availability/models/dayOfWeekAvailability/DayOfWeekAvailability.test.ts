import dayjs from 'dayjs';
import { expect } from 'vite-plus/test';

import { DayOfWeek } from '@constants/dayOfWeek';
import {
  isAvailableFixtures,
  createIsAvailablePropsFixture,
  createDateFixture,
} from '@services/fixtures';

import { DayOfWeekAvailability } from './DayOfWeekAvailability';

isAvailableFixtures('should be available', () => {
  const availability = new DayOfWeekAvailability({
    daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Friday],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be available when matching a later configured day', () => {
  const availability = new DayOfWeekAvailability({
    daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Wednesday, DayOfWeek.Friday],
  });
  expect(
    availability.isAvailable(
      createIsAvailablePropsFixture({ date: createDateFixture(dayjs('2009-04-10')) })
    )
  ).toEqual(true);
});

isAvailableFixtures('should be available on Sunday', () => {
  const availability = new DayOfWeekAvailability({
    daysOfWeek: [DayOfWeek.Sunday],
  });
  expect(
    availability.isAvailable(
      createIsAvailablePropsFixture({ date: createDateFixture(dayjs('2009-04-12')) })
    )
  ).toEqual(true);
});

isAvailableFixtures('should be unavailable', () => {
  const availability = new DayOfWeekAvailability({
    daysOfWeek: [DayOfWeek.Monday],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be unavailable with an empty daysOfWeek list', () => {
  const availability = new DayOfWeekAvailability({ daysOfWeek: [] });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});
