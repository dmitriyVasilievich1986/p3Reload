import { Arcanas } from '@constants/arcanas';
import {
  SocialLinkLevelAvailability,
  IsLevelUpAvailable,
  AvailabilityBase,
} from '@services/availability';

import { NaganakiShrineEventBase } from '../base';
import { NaganakiShrineEventsNames, type NaganakiShrineEventsNamesType } from '../types';

export class MoonNaganakiShrineEvent extends NaganakiShrineEventBase {
  static readonly name: NaganakiShrineEventsNamesType =
    NaganakiShrineEventsNames.MoonNaganakiShrineEvent;
  static readonly arcana = Arcanas.Moon;
  static readonly socialLinkName = 'Nozomi Suemitsu';

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Moon, level: 10, operator: 'lt' }),
    new IsLevelUpAvailable({ name: Arcanas.Moon, isLevelUpAvailable: false }),
  ];
}
