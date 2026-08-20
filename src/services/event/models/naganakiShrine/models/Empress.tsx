import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class EmpressNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.EmpressNaganakiShrineEvent;
  static readonly arcana = Arcanas.Empress;
  static readonly socialLinkName = 'Mitsuru Kirijo';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Empress, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Empress, isLevelUpAvailable: false }),
  ];
}
