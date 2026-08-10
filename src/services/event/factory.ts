import { BaseEvent } from './base';
import { characterStatsModifyEvents } from './models/characterStatsModifyEvents';
import {
  schoolQuestionsEvents,
  type SchoolQuestionEventProps,
  type SchoolQuestionEventsNamesType,
} from './models/schoolQuestions';
import { specialEvents } from './models/specialEvents';

import type { EventNamesType, EventProps } from './types';

export const Events = {
  ...characterStatsModifyEvents,
  ...schoolQuestionsEvents,
  ...specialEvents,
} as const;

export function eventFactory(name: EventNamesType, props: Record<string, unknown>): BaseEvent {
  if (name in characterStatsModifyEvents) {
    return new characterStatsModifyEvents[name as keyof typeof characterStatsModifyEvents](
      props as EventProps
    );
  }
  if (name in specialEvents) {
    return new specialEvents[name as keyof typeof specialEvents](props as EventProps);
  }
  if (name in schoolQuestionsEvents) {
    return new schoolQuestionsEvents[name as SchoolQuestionEventsNamesType](
      props as SchoolQuestionEventProps
    );
  }
  throw new Error(`Event ${name} not found`);
}
