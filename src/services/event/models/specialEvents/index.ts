import { EmptyEvent } from './EmptyEvent';
import { specialEventsNames, type specialEventsNamesType } from './types';

export { EmptyEvent, specialEventsNames, type specialEventsNamesType };

export const specialEvents = {
  [specialEventsNames.Empty]: EmptyEvent,
} as const;
