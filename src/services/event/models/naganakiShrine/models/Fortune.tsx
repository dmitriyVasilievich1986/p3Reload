import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class FortuneNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.FortuneNaganakiShrineEvent;
  static readonly arcana = Arcanas.Fortune;
  static readonly socialLinkName = 'Keisuke Hiraga';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Fortune, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Fortune, isLevelUpAvailable: false }),
  ];
}
