import { Arcanas } from '@constants/arcanas';

export const NaganakiShrineEventsNames = {
  MagicianNaganakiShrineEvent: `${Arcanas.Magician}NaganakiShrineEvent`,
  AeonNaganakiShrineEvent: `${Arcanas.Aeon}NaganakiShrineEvent`,
  ChariotNaganakiShrineEvent: `${Arcanas.Chariot}NaganakiShrineEvent`,
  EmperorNaganakiShrineEvent: `${Arcanas.Emperor}NaganakiShrineEvent`,
  EmpressNaganakiShrineEvent: `${Arcanas.Empress}NaganakiShrineEvent`,
  FortuneNaganakiShrineEvent: `${Arcanas.Fortune}NaganakiShrineEvent`,
  HangedManNaganakiShrineEvent: `${Arcanas.HangedMan}NaganakiShrineEvent`,
  HermitNaganakiShrineEvent: `${Arcanas.Hermit}NaganakiShrineEvent`,
  HierophantNaganakiShrineEvent: `${Arcanas.Hierophant}NaganakiShrineEvent`,
  JusticeNaganakiShrineEvent: `${Arcanas.Justice}NaganakiShrineEvent`,
  LoversNaganakiShrineEvent: `${Arcanas.Lovers}NaganakiShrineEvent`,
  MoonNaganakiShrineEvent: `${Arcanas.Moon}NaganakiShrineEvent`,
  PriestessNaganakiShrineEvent: `${Arcanas.Priestess}NaganakiShrineEvent`,
  StarNaganakiShrineEvent: `${Arcanas.Star}NaganakiShrineEvent`,
  StrengthNaganakiShrineEvent: `${Arcanas.Strength}NaganakiShrineEvent`,
  TemperanceNaganakiShrineEvent: `${Arcanas.Temperance}NaganakiShrineEvent`,
  TowerNaganakiShrineEvent: `${Arcanas.Tower}NaganakiShrineEvent`,
} as const;

export type NaganakiShrineEventsNamesType =
  (typeof NaganakiShrineEventsNames)[keyof typeof NaganakiShrineEventsNames];
