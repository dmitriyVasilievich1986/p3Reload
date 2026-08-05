import dayjs from 'dayjs';
import { expect } from 'vite-plus/test';

import {
  isAvailableFixtures,
  createIsAvailablePropsFixture,
  createDateFixture,
} from '@services/fixtures';

import { DateAvailability } from './DateAvailability';

isAvailableFixtures('should be available', () => {
  const availability = new DateAvailability({
    dates: [createDateFixture(), createDateFixture(dayjs('2009-06-01'))],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be available when matching a later configured date', () => {
  const availability = new DateAvailability({
    dates: [createDateFixture(dayjs('2009-04-01')), createDateFixture()],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be available when the same day has a different time', () => {
  const availability = new DateAvailability({
    dates: [createDateFixture(dayjs('2009-05-15T08:00:00'))],
  });
  expect(
    availability.isAvailable(
      createIsAvailablePropsFixture({ date: createDateFixture(dayjs('2009-05-15T22:30:00')) })
    )
  ).toEqual(true);
});

isAvailableFixtures('should be unavailable', () => {
  const availability = new DateAvailability({
    dates: [createDateFixture(dayjs('2009-06-01'))],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be unavailable with an empty dates list', () => {
  const availability = new DateAvailability({ dates: [] });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});
