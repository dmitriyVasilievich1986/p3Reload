import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { socialLinkFullNames } from '@constants/socialLinkNames';
import { Times } from '@constants/times';
import {
  type AvailabilityBase,
  SocialLinkLevelAvailability,
  TimeAvailability,
  CharacterStatsAvailability,
  DayOfWeekAvailability,
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';
import { CharacterStatsNames } from '@services/stats/characterStats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

export class TowerEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Tower;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = socialLinkFullNames.Tower;
  /** Location label shown in the event card. */
  static readonly place: string = Places.ClubEscapade;
  /** Header label shown in the event card. */
  static readonly district: string = Districts.PaulowniaMall;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Strength, operator: 'ge', level: 4 }),
    new SocialLinkLevelAvailability({ name: Arcanas.Tower, operator: 'lt', level: 10 }),
    new TimeAvailability({ times: [Times.Evening] }),
    new CharacterStatsAvailability({
      level: 2,
      name: CharacterStatsNames.Courage,
      operator: 'ge',
    }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday, DayOfWeek.Sunday],
    }),
  ];
}
