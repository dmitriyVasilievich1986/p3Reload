import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class ChariotNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.ChariotNaganakiShrineEvent;
  static readonly arcana = Arcanas.Chariot;
  static readonly socialLinkName = 'Kazushi Miyamoto';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Chariot, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Chariot, isLevelUpAvailable: false }),
  ];
}
