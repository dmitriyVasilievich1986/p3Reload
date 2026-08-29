import { BaseEvent } from './base';
import { CharacterStatsModifyEvents } from './models/characterStatsModifyEvents';
import { EpisodesEventModels } from './models/episodes';
import { NaganakiShrineEvents } from './models/naganakiShrine';
import { PCProgramEvents } from './models/PCProgramEvents';
import {
  SchoolQuestionsEvents,
  type SchoolQuestionEventProps,
  type SchoolQuestionEventsNamesType,
} from './models/schoolQuestions';
import { SocialLinkEvents } from './models/socialLinkEvents';
import {
  SpecialEventsNames,
  TextEvent,
  EmptyEvent,
  TartarusEvent,
  ExamResultsEvent,
} from './models/specialEvents';

import type { TextEventProps } from './models/specialEvents/types';
import type { EventNamesType, EventProps } from './types';

export const Events = {
  ...CharacterStatsModifyEvents,
  ...SchoolQuestionsEvents,
  ...SocialLinkEvents,
  ...NaganakiShrineEvents,
  ...EpisodesEventModels,
  ...PCProgramEvents,
  [SpecialEventsNames.ExamResults]: ExamResultsEvent,
  [SpecialEventsNames.Tartarus]: TartarusEvent,
  [SpecialEventsNames.Empty]: EmptyEvent,
  [SpecialEventsNames.Text]: TextEvent,
} as const;

export function eventFactory(name: EventNamesType, props: Record<string, unknown>): BaseEvent {
  if (name in CharacterStatsModifyEvents) {
    return new CharacterStatsModifyEvents[name as keyof typeof CharacterStatsModifyEvents](
      props as EventProps
    );
  }
  if (name in SocialLinkEvents) {
    return new SocialLinkEvents[name as keyof typeof SocialLinkEvents](props as EventProps);
  }
  if (name in NaganakiShrineEvents) {
    return new NaganakiShrineEvents[name as keyof typeof NaganakiShrineEvents](props as EventProps);
  }
  if (name in EpisodesEventModels) {
    return new EpisodesEventModels[name as keyof typeof EpisodesEventModels](props as EventProps);
  }
  if (name in PCProgramEvents) {
    return new PCProgramEvents[name as keyof typeof PCProgramEvents](props as EventProps);
  }
  if (name === SpecialEventsNames.Empty) {
    return new EmptyEvent(props as EventProps);
  }
  if (name === SpecialEventsNames.Text) {
    return new TextEvent(props as TextEventProps);
  }
  if (name === SpecialEventsNames.Tartarus) {
    return new TartarusEvent(props as TextEventProps);
  }
  if (name === SpecialEventsNames.ExamResults) {
    return new ExamResultsEvent(props as EventProps);
  }
  if (name in SchoolQuestionsEvents) {
    return new SchoolQuestionsEvents[name as SchoolQuestionEventsNamesType](
      props as SchoolQuestionEventProps
    );
  }
  throw new Error(`Event ${name} not found`);
}
