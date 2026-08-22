import { Arcanas } from '@constants/arcanas';
import { Times } from '@constants/times';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  TimeAvailability,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class HierophantNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.HierophantNaganakiShrineEvent;
  static readonly arcana = Arcanas.Hierophant;
  static readonly socialLinkName = 'Bunkichi and Mitsuko';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Hierophant, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Hierophant, isLevelUpAvailable: false }),
    new TimeAvailability({ times: [Times.Day] }),
  ];
}
