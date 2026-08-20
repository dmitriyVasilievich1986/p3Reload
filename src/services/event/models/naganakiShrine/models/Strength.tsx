import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class StrengthNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.StrengthNaganakiShrineEvent;
  static readonly arcana = Arcanas.Strength;
  static readonly socialLinkName = 'Yuko Nishiwaki';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Strength, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Strength, isLevelUpAvailable: false }),
  ];
}
