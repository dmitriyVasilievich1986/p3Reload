import { Arcanas } from '@constants/arcanas';
import { socialLinkFullNames } from '@constants/socialLinkNames';
import { Times } from '@constants/times';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  TimeAvailability,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class HermitNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.HermitNaganakiShrineEvent;
  static readonly arcana = Arcanas.Hermit;
  static readonly socialLinkName = socialLinkFullNames.Hermit;

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Hermit, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Hermit, isLevelUpAvailable: false }),
    new TimeAvailability({ times: [Times.Day] }),
  ];
}
