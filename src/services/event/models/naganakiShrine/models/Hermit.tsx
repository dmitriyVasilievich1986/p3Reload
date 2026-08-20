import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class HermitNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.HermitNaganakiShrineEvent;
  static readonly arcana = Arcanas.Hermit;
  static readonly socialLinkName = 'Maya';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Hermit, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Hermit, isLevelUpAvailable: false }),
  ];
}
