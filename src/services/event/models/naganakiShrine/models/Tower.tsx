import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class TowerNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.TowerNaganakiShrineEvent;
  static readonly arcana = Arcanas.Tower;
  static readonly socialLinkName = 'Mutatsu';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Tower, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Tower, isLevelUpAvailable: false }),
  ];
}
