import dayjs from 'dayjs';
import { expect } from 'vite-plus/test';

import {
  isAvailableFixtures,
  createIsAvailablePropsFixture,
  createDateFixture,
} from '@services/fixtures';

import { DateAvailability } from './DateAvailability';

isAvailableFixtures('should be available with in', () => {
  const availability = new DateAvailability({
    operator: 'in',
    value: [createDateFixture(), createDateFixture(dayjs('2009-06-01'))],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be available with in when matching a later configured date', () => {
  const availability = new DateAvailability({
    operator: 'in',
    value: [createDateFixture(dayjs('2009-04-01')), createDateFixture()],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be unavailable with in', () => {
  const availability = new DateAvailability({
    operator: 'in',
    value: [createDateFixture(dayjs('2009-06-01'))],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be unavailable with in and an empty value list', () => {
  const availability = new DateAvailability({
    operator: 'in',
    value: [],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be available with notIn', () => {
  const availability = new DateAvailability({
    operator: 'notIn',
    value: [createDateFixture(dayjs('2009-06-01'))],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be unavailable with notIn', () => {
  const availability = new DateAvailability({
    operator: 'notIn',
    value: [createDateFixture(), createDateFixture(dayjs('2009-06-01'))],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be available with eq', () => {
  const availability = new DateAvailability({
    operator: 'eq',
    value: createDateFixture(dayjs('2009-05-15')),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be unavailable with eq', () => {
  const availability = new DateAvailability({
    operator: 'eq',
    value: createDateFixture(dayjs('2009-06-01')),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be available with neq', () => {
  const availability = new DateAvailability({
    operator: 'neq',
    value: createDateFixture(dayjs('2009-06-01')),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be unavailable with neq', () => {
  const availability = new DateAvailability({
    operator: 'neq',
    value: createDateFixture(),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be available with ge on the same day', () => {
  const availability = new DateAvailability({
    operator: 'ge',
    value: createDateFixture(),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be available with ge after the value', () => {
  const availability = new DateAvailability({
    operator: 'ge',
    value: createDateFixture(dayjs('2009-05-01')),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be unavailable with ge before the value', () => {
  const availability = new DateAvailability({
    operator: 'ge',
    value: createDateFixture(dayjs('2009-06-01')),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be available with gt after the value', () => {
  const availability = new DateAvailability({
    operator: 'gt',
    value: createDateFixture(dayjs('2009-05-01')),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be unavailable with gt on the same day', () => {
  const availability = new DateAvailability({
    operator: 'gt',
    value: createDateFixture(),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be available with le on the same day', () => {
  const availability = new DateAvailability({
    operator: 'le',
    value: createDateFixture(),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be available with le before the value', () => {
  const availability = new DateAvailability({
    operator: 'le',
    value: createDateFixture(dayjs('2009-06-01')),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be unavailable with le after the value', () => {
  const availability = new DateAvailability({
    operator: 'le',
    value: createDateFixture(dayjs('2009-05-01')),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be available with lt before the value', () => {
  const availability = new DateAvailability({
    operator: 'lt',
    value: createDateFixture(dayjs('2009-06-01')),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be unavailable with lt on the same day', () => {
  const availability = new DateAvailability({
    operator: 'lt',
    value: createDateFixture(),
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be available with between on the start day', () => {
  const availability = new DateAvailability({
    operator: 'between',
    value: [createDateFixture(), createDateFixture(dayjs('2009-06-01'))],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be available with between on the end day', () => {
  const availability = new DateAvailability({
    operator: 'between',
    value: [createDateFixture(dayjs('2009-05-01')), createDateFixture()],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be available with between strictly inside the range', () => {
  const availability = new DateAvailability({
    operator: 'between',
    value: [createDateFixture(dayjs('2009-05-01')), createDateFixture(dayjs('2009-06-01'))],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(true);
});

isAvailableFixtures('should be unavailable with between before the range', () => {
  const availability = new DateAvailability({
    operator: 'between',
    value: [createDateFixture(dayjs('2009-06-01')), createDateFixture(dayjs('2009-07-01'))],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});

isAvailableFixtures('should be unavailable with between after the range', () => {
  const availability = new DateAvailability({
    operator: 'between',
    value: [createDateFixture(dayjs('2009-03-01')), createDateFixture(dayjs('2009-04-01'))],
  });
  expect(availability.isAvailable(createIsAvailablePropsFixture())).toEqual(false);
});
