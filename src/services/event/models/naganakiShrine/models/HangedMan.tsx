import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class HangedManNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.HangedManNaganakiShrineEvent;
  static readonly arcana = Arcanas.HangedMan;
  static readonly socialLinkName = 'Maiko Oohashi';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.HangedMan, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.HangedMan, isLevelUpAvailable: false }),
  ];
}
