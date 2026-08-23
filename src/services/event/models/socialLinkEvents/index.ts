import { Arcanas } from '@constants/arcanas';

import { AeonEvent } from './aeon';
import { ChariotEvent } from './chariot';
import { DeathEvent } from './Death';
import { DevilEvent } from './Devil';
import { EmperorEvent } from './emperor';
import { EmpressEvent } from './empress';
import { FoolEvent } from './Fool';
import { FortuneEvent } from './fortune';
import { HangedManEvent } from './hangedMan';
import { HermitEvent } from './hermit';
import { HierophantEvent } from './hierophant';
import { JusticeEvent } from './justice';
import { LoversEvent } from './lovers';
import { MagicianEvent } from './magician';
import { MoonEvent } from './moon';
import { PriestessEvent } from './priestess';
import { StarEvent } from './star';
import { StrengthEvent } from './strength';
import { SunEvent } from './Sun';
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
  LoversEvent,
  PriestessEvent,
  DeathEvent,
  DevilEvent,
  FoolEvent,
  SunEvent,
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
  [Arcanas.Lovers]: LoversEvent,
  [Arcanas.Priestess]: PriestessEvent,
  [Arcanas.Death]: DeathEvent,
  [Arcanas.Devil]: DevilEvent,
  [Arcanas.Fool]: FoolEvent,
  [Arcanas.Sun]: SunEvent,
} as const;
