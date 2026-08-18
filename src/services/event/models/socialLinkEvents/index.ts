import { Arcanas } from '@constants/arcanas';

import { ChariotEvent } from './chariot';
import { EmperorEvent } from './emperor';
import { FortuneEvent } from './fortune';
import { HangedManEvent } from './hangedMan';
import { HermitEvent } from './hermit';
import { HierophantEvent } from './hierophant';
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
} as const;
