import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class PriestessNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.PriestessNaganakiShrineEvent;
  static readonly arcana = Arcanas.Priestess;
  static readonly socialLinkName = 'Fuuka Yamagishi';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Priestess, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Priestess, isLevelUpAvailable: false }),
  ];
}
