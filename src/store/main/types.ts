import type { Calendar } from '@services/calendar';
import type { Day } from '@services/day';
import type { BaseEvent } from '@services/event/base';

export type MainStoreType = {
  isLoading: boolean;
  calendar: Calendar | null;
  currentDay: Day | null | undefined;
  selectedEvent: BaseEvent | null;
  setIsLoading: (isLoading: boolean) => void;
  setCalendar: (calendar: Calendar | null) => void;
  setCurrentDay: (currentDay: Day | null | undefined) => void;
  setSelectedEvent: (event: BaseEvent | null) => void;
};
