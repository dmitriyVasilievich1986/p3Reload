import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { MainStoreInitialState } from './types';
import type { TimesType } from '@constants/times';
import type { Calendar } from '@services/calendar';
import type { Day } from '@services/day';

export const useMainStore = create<MainStoreInitialState>()(
  devtools((set) => ({
    isLoading: false,
    calendar: null,
    currentDay: null,
    selectedTimes: null,
    setIsLoading: (isLoading: boolean) => set({ isLoading }, undefined, 'setIsLoading'),
    setCalendar: (calendar: Calendar | null) => set({ calendar }, undefined, 'setCalendar'),
    setCurrentDay: (currentDay: Day | null) => set({ currentDay }, undefined, 'setCurrentDay'),
    setSelectedTimes: (time: TimesType | null) =>
      set({ selectedTimes: time }, undefined, 'setSelectedTimes'),
  }))
);
