import type { EventProps } from '../../types';

export const SpecialEventsNames = {
  ExamResults: 'ExamResultsEvent',
  Tartarus: 'TartarusEvent',
  Empty: 'EmptyEvent',
  Text: 'TextEvent',
} as const;

export type SpecialEventsNamesType = (typeof SpecialEventsNames)[keyof typeof SpecialEventsNames];

export type SpecialEventRow = {
  name: string;
  props: Record<string, unknown>;
};

export type TextEventProps = EventProps & {
  isTall: boolean;
  header?: string;
  rows: SpecialEventRow[];
};
