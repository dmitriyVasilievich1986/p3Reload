import { Arcanas } from '@constants/arcanas';

import { ChariotEvent } from './chariot';
import { MagicianEvent } from './magician';
import { StrengthEvent } from './strength';
import { TemperanceEvent } from './temperance';
import { HierophantEvent } from './hierophant';
import { EmperorEvent } from './emperor';
import { FortuneEvent } from './fortune';
import { HangedManEvent } from './hangedMan';

export { MagicianEvent, ChariotEvent, StrengthEvent, HierophantEvent, TemperanceEvent, EmperorEvent, FortuneEvent, HangedManEvent };

export const SocialLinkEvents = {
  [Arcanas.Strength]: StrengthEvent,
  [Arcanas.Magician]: MagicianEvent,
  [Arcanas.Chariot]: ChariotEvent,
  [Arcanas.Hierophant]: HierophantEvent,
  [Arcanas.Temperance]: TemperanceEvent,
  [Arcanas.Emperor]: EmperorEvent,
  [Arcanas.Fortune]: FortuneEvent,
  [Arcanas.HangedMan]: HangedManEvent,
} as const;
