import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class MagicianNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.MagicianNaganakiShrineEvent;
  static readonly arcana = Arcanas.Magician;
  static readonly socialLinkName = 'Kenji Tomochika';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Magician, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Magician, isLevelUpAvailable: false }),
  ];
}
