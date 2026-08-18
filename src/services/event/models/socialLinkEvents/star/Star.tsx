import dayjs from 'dayjs';

import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { Times } from '@constants/times';
import {
  type AvailabilityBase,
  SocialLinkLevelAvailability,
  TimeAvailability,
  IsLevelUpAvailable,
  DayOfWeekAvailability,
  DateAvailability,
  CharacterStatsAvailability,
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';
import { CharacterStatsNames } from '@services/stats/characterStats';


export class StarEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Star;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Mamoru Hayase';
  /** Location label shown in the event card. */
  static readonly place: string = Places.IwatodaiStationStripMall1F;
  /** District label shown in the event card. */
  static readonly district: string = Districts.IwatodaiStation;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Star, operator: 'lt', level: 10 }),
    new CharacterStatsAvailability({
      level: 2,
      name: CharacterStatsNames.Courage,
      operator: 'ge',
    }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-08-05') }),
    new TimeAvailability({ times: [Times.Day] }),
    new IsLevelUpAvailable({ name: Arcanas.Star, isLevelUpAvailable: true }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Wednesday, DayOfWeek.Friday, DayOfWeek.Sunday],
    }),
  ];
}
