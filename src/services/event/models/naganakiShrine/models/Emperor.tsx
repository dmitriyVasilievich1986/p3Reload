import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class EmperorNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.EmperorNaganakiShrineEvent;
  static readonly arcana = Arcanas.Emperor;
  static readonly socialLinkName = 'Hidetoshi Odagiri';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Emperor, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Emperor, isLevelUpAvailable: false }),
  ];
}
