import type { TimesType } from '@constants/times';
import type { Calendar } from '@services/calendar';
import type { Day } from '@services/day';

export type MainStoreInitialState = {
  isLoading: boolean;
  calendar: Calendar | null;
  currentDay: Day | null;
  selectedTimes: TimesType | null;
  setIsLoading: (isLoading: boolean) => void;
  setCalendar: (calendar: Calendar | null) => void;
  setCurrentDay: (currentDay: Day | null) => void;
  setSelectedTimes: (time: TimesType | null) => void;
};
