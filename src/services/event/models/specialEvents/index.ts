import { EmptyEvent } from './EmptyEvent';
import { SpecialEventsNames, type SpecialEventsNamesType } from './types';

export { EmptyEvent, SpecialEventsNames, type SpecialEventsNamesType };

export const specialEvents = {
  [SpecialEventsNames.Empty]: EmptyEvent,
} as const;
