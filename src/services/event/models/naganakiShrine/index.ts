import { AeonNaganakiShrineEvent } from './models/Aeon';
import { ChariotNaganakiShrineEvent } from './models/Chariot';
import { EmperorNaganakiShrineEvent } from './models/Emperor';
import { EmpressNaganakiShrineEvent } from './models/Empress';
import { FortuneNaganakiShrineEvent } from './models/Fortune';
import { HangedManNaganakiShrineEvent } from './models/HangedMan';
import { HermitNaganakiShrineEvent } from './models/Hermit';
import { HierophantNaganakiShrineEvent } from './models/Hierophant';
import { JusticeNaganakiShrineEvent } from './models/Justice';
import { LoversNaganakiShrineEvent } from './models/Lovers';
import { MagicianNaganakiShrineEvent } from './models/Magician';
import { MoonNaganakiShrineEvent } from './models/Moon';
import { PriestessNaganakiShrineEvent } from './models/Priestess';
import { StarNaganakiShrineEvent } from './models/Star';
import { StrengthNaganakiShrineEvent } from './models/Strength';
import { TemperanceNaganakiShrineEvent } from './models/Temperance';
import { TowerNaganakiShrineEvent } from './models/Tower';
import { NaganakiShrineEventsNames } from './types';

export const NaganakiShrineEvents = {
  [NaganakiShrineEventsNames.MagicianNaganakiShrineEvent]: MagicianNaganakiShrineEvent,
  [NaganakiShrineEventsNames.AeonNaganakiShrineEvent]: AeonNaganakiShrineEvent,
  [NaganakiShrineEventsNames.ChariotNaganakiShrineEvent]: ChariotNaganakiShrineEvent,
  [NaganakiShrineEventsNames.EmperorNaganakiShrineEvent]: EmperorNaganakiShrineEvent,
  [NaganakiShrineEventsNames.EmpressNaganakiShrineEvent]: EmpressNaganakiShrineEvent,
  [NaganakiShrineEventsNames.FortuneNaganakiShrineEvent]: FortuneNaganakiShrineEvent,
  [NaganakiShrineEventsNames.HangedManNaganakiShrineEvent]: HangedManNaganakiShrineEvent,
  [NaganakiShrineEventsNames.HermitNaganakiShrineEvent]: HermitNaganakiShrineEvent,
  [NaganakiShrineEventsNames.HierophantNaganakiShrineEvent]: HierophantNaganakiShrineEvent,
  [NaganakiShrineEventsNames.JusticeNaganakiShrineEvent]: JusticeNaganakiShrineEvent,
  [NaganakiShrineEventsNames.LoversNaganakiShrineEvent]: LoversNaganakiShrineEvent,
  [NaganakiShrineEventsNames.MoonNaganakiShrineEvent]: MoonNaganakiShrineEvent,
  [NaganakiShrineEventsNames.PriestessNaganakiShrineEvent]: PriestessNaganakiShrineEvent,
  [NaganakiShrineEventsNames.StarNaganakiShrineEvent]: StarNaganakiShrineEvent,
  [NaganakiShrineEventsNames.StrengthNaganakiShrineEvent]: StrengthNaganakiShrineEvent,
  [NaganakiShrineEventsNames.TemperanceNaganakiShrineEvent]: TemperanceNaganakiShrineEvent,
  [NaganakiShrineEventsNames.TowerNaganakiShrineEvent]: TowerNaganakiShrineEvent,
} as const;

export type NaganakiShrineEventsType =
  (typeof NaganakiShrineEvents)[keyof typeof NaganakiShrineEvents];
