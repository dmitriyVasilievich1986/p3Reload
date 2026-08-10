import { beforeEach, describe, expect, it } from 'vite-plus/test';

import { Times } from '@constants/times';
import { Calendar } from '@services/calendar';
import { createDayFixture } from '@services/fixtures';

import { useMainStore } from './mainStore';

const initialState = {
  isLoading: false,
  calendar: null,
  currentDay: null,
  selectedTimes: null,
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
    expect(state.selectedTimes).toBeNull();
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

  it('setSelectedTimes updates selectedTimes', () => {
    useMainStore.getState().setSelectedTimes(Times.Morning);

    expect(useMainStore.getState().selectedTimes).toBe(Times.Morning);
  });

  it('setters accept null to clear values', () => {
    const calendar = new Calendar({ days: [createDayFixture()] });
    const currentDay = createDayFixture();

    useMainStore.setState({
      isLoading: true,
      calendar,
      currentDay,
      selectedTimes: Times.Evening,
    });

    useMainStore.getState().setIsLoading(false);
    useMainStore.getState().setCalendar(null);
    useMainStore.getState().setCurrentDay(null);
    useMainStore.getState().setSelectedTimes(null);

    expect(useMainStore.getState()).toMatchObject(initialState);
  });
});
