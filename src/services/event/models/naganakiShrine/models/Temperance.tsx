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

export class TemperanceNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.TemperanceNaganakiShrineEvent;
  static readonly arcana = Arcanas.Temperance;
  static readonly socialLinkName = 'André Laurent Jean "Bebe" Geraux';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Temperance, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Temperance, isLevelUpAvailable: false }),
    new TimeAvailability({ times: [Times.Day] }),
  ];
}
