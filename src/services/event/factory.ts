import { BaseEvent } from './base';
import { CharacterStatsModifyEvents } from './models/characterStatsModifyEvents';
import {
  SchoolQuestionsEvents,
  type SchoolQuestionEventProps,
  type SchoolQuestionEventsNamesType,
} from './models/schoolQuestions';
import { SpecialEventsNames, TextEvent, EmptyEvent } from './models/specialEvents';

import type { TextEventProps } from './models/specialEvents/types';
import type { EventNamesType, EventProps } from './types';

export const Events = {
  ...CharacterStatsModifyEvents,
  ...SchoolQuestionsEvents,
  [SpecialEventsNames.Empty]: EmptyEvent,
  [SpecialEventsNames.Text]: TextEvent,
} as const;

export function eventFactory(name: EventNamesType, props: Record<string, unknown>): BaseEvent {
  if (name in CharacterStatsModifyEvents) {
    return new CharacterStatsModifyEvents[name as keyof typeof CharacterStatsModifyEvents](
      props as EventProps
    );
  }
  if (name === SpecialEventsNames.Empty) {
    return new EmptyEvent(props as EventProps);
  }
  if (name === SpecialEventsNames.Text) {
    return new TextEvent(props as TextEventProps);
  }
  if (name in SchoolQuestionsEvents) {
    return new SchoolQuestionsEvents[name as SchoolQuestionEventsNamesType](
      props as SchoolQuestionEventProps
    );
  }
  throw new Error(`Event ${name} not found`);
}
