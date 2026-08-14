import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { MainStoreType } from './types';
import type { Calendar } from '@services/calendar';
import type { Day } from '@services/day';
import type { BaseEvent } from '@services/event/base';

export const useMainStore = create<MainStoreType>()(
  devtools((set) => ({
    isLoading: false,
    calendar: null,
    currentDay: null,
    selectedEvent: null,
    setIsLoading: (isLoading: boolean) => set({ isLoading }, undefined, 'setIsLoading'),
    setCalendar: (calendar: Calendar | null) => set({ calendar }, undefined, 'setCalendar'),
    setCurrentDay: (currentDay: Day | null | undefined) =>
      set({ currentDay }, undefined, 'setCurrentDay'),
    setSelectedEvent: (event: BaseEvent | null) =>
      set({ selectedEvent: event }, undefined, 'setSelectedEvent'),
  }))
);
