import { Arcanas } from '@constants/arcanas';

export const NaganakiShrineEventsNames = {
  MagicianNaganakiShrineEvent: `${Arcanas.Magician}NaganakiShrineEvent`,
} as const;

export type NaganakiShrineEventsNamesType =
  (typeof NaganakiShrineEventsNames)[keyof typeof NaganakiShrineEventsNames];
