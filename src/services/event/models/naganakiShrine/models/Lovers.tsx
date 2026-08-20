import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class LoversNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.LoversNaganakiShrineEvent;
  static readonly arcana = Arcanas.Lovers;
  static readonly socialLinkName = 'Yukari Takeba';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Lovers, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Lovers, isLevelUpAvailable: false }),
  ];
}
