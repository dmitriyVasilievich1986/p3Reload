import { Arcanas } from '@constants/arcanas';

import { AeonEvent } from './aeon';
import { ChariotEvent } from './chariot';
import { EmperorEvent } from './emperor';
import { EmpressEvent } from './empress';
import { FortuneEvent } from './fortune';
import { HangedManEvent } from './hangedMan';
import { HermitEvent } from './hermit';
import { HierophantEvent } from './hierophant';
import { JusticeEvent } from './justice';
import { MagicianEvent } from './magician';
import { MoonEvent } from './moon';
import { StarEvent } from './star';
import { StrengthEvent } from './strength';
import { TemperanceEvent } from './temperance';
import { TowerEvent } from './tower';

export {
  MagicianEvent,
  ChariotEvent,
  StrengthEvent,
  HierophantEvent,
  TemperanceEvent,
  EmperorEvent,
  FortuneEvent,
  HangedManEvent,
  TowerEvent,
  StarEvent,
  MoonEvent,
  HermitEvent,
  AeonEvent,
  EmpressEvent,
  JusticeEvent,
};

export const SocialLinkEvents = {
  [Arcanas.Strength]: StrengthEvent,
  [Arcanas.Magician]: MagicianEvent,
  [Arcanas.Chariot]: ChariotEvent,
  [Arcanas.Hierophant]: HierophantEvent,
  [Arcanas.Temperance]: TemperanceEvent,
  [Arcanas.Emperor]: EmperorEvent,
  [Arcanas.Fortune]: FortuneEvent,
  [Arcanas.HangedMan]: HangedManEvent,
  [Arcanas.Tower]: TowerEvent,
  [Arcanas.Star]: StarEvent,
  [Arcanas.Moon]: MoonEvent,
  [Arcanas.Hermit]: HermitEvent,
  [Arcanas.Aeon]: AeonEvent,
  [Arcanas.Empress]: EmpressEvent,
  [Arcanas.Justice]: JusticeEvent,
} as const;
