import { MagicianNaganakiShrineEvent } from './models/Magician';
import { NaganakiShrineEventsNames } from './types';

export const NaganakiShrineEvents = {
  [NaganakiShrineEventsNames.MagicianNaganakiShrineEvent]: MagicianNaganakiShrineEvent,
} as const;

export type NaganakiShrineEventsType =
  (typeof NaganakiShrineEvents)[keyof typeof NaganakiShrineEvents];
