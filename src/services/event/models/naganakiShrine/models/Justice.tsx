import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class JusticeNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.JusticeNaganakiShrineEvent;
  static readonly arcana = Arcanas.Justice;
  static readonly socialLinkName = 'Chihiro Fushimi';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Justice, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Justice, isLevelUpAvailable: false }),
  ];
}
