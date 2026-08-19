import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { Districts } from '@constants/places';
import { Times } from '@constants/times';
import {
  type AvailabilityBase,
  SocialLinkLevelAvailability,
  TimeAvailability,
  IsLevelUpAvailable,
  DayOffAvailability,
  OrAvailability,
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

export class MoonEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Moon;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Nozomi Suemitsu';
  /** District label shown in the event card. */
  static readonly district: string = Districts.PaulowniaMall;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new IsLevelUpAvailable({ name: Arcanas.Moon, isLevelUpAvailable: true }),
    new TimeAvailability({ times: [Times.Day] }),
    new OrAvailability({
      availabilities: [
        new DayOffAvailability({ isAvailableOnADayOff: false }),
        new SocialLinkLevelAvailability({ name: Arcanas.Moon, operator: 'ge', level: 1 }),
      ],
    }),
  ];
}
