import { beforeEach, describe, expect, it } from 'vite-plus/test';

import { Calendar } from '@services/calendar';
import { createDayFixture, createEventFixture } from '@services/fixtures';

import { useMainStore } from './mainStore';

const initialState = {
  isLoading: false,
  calendar: null,
  currentDay: null,
  selectedEvent: null,
};

describe('useMainStore', () => {
  beforeEach(() => {
    useMainStore.setState(initialState);
  });

  it('has the expected initial state', () => {
    const state = useMainStore.getState();

    expect(state.isLoading).toBe(false);
    expect(state.calendar).toBeNull();
    expect(state.currentDay).toBeNull();
    expect(state.selectedEvent).toBeNull();
  });

  it('setIsLoading updates isLoading', () => {
    useMainStore.getState().setIsLoading(true);

    expect(useMainStore.getState().isLoading).toBe(true);
  });

  it('setCalendar updates calendar', () => {
    const calendar = new Calendar({ days: [createDayFixture()] });

    useMainStore.getState().setCalendar(calendar);

    expect(useMainStore.getState().calendar).toBe(calendar);
  });

  it('setCurrentDay updates currentDay', () => {
    const currentDay = createDayFixture();

    useMainStore.getState().setCurrentDay(currentDay);

    expect(useMainStore.getState().currentDay).toBe(currentDay);
  });

  it('setSelectedEvent updates selectedEvent', () => {
    const selectedEvent = createEventFixture();

    useMainStore.getState().setSelectedEvent(selectedEvent);

    expect(useMainStore.getState().selectedEvent).toBe(selectedEvent);
  });

  it('setters accept null to clear values', () => {
    const calendar = new Calendar({ days: [createDayFixture()] });
    const currentDay = createDayFixture();
    const selectedEvent = createEventFixture();

    useMainStore.setState({
      isLoading: true,
      calendar,
      currentDay,
      selectedEvent,
    });

    useMainStore.getState().setIsLoading(false);
    useMainStore.getState().setCalendar(null);
    useMainStore.getState().setCurrentDay(null);
    useMainStore.getState().setSelectedEvent(null);

    expect(useMainStore.getState()).toMatchObject(initialState);
  });

  it('setCurrentDay accepts undefined', () => {
    useMainStore.getState().setCurrentDay(createDayFixture());
    useMainStore.getState().setCurrentDay(undefined);

    expect(useMainStore.getState().currentDay).toBeUndefined();
  });
});
