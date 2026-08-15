import type { BaseEvent } from '@services/event/base';

type EventClass = typeof BaseEvent;

export type RightPanelTab = {
  name: string;
  color: string;
  events: EventClass[];
};
