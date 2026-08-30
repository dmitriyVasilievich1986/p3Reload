import dayjs from 'dayjs';

import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { socialLinkFullNames } from '@constants/socialLinkNames';
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
import { CharacterStatsNames } from '@services/stats/characterStats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

export class TemperanceEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Temperance;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = socialLinkFullNames.Temperance;
  /** Location label shown in the event card. */
  static readonly place: string = Places.Classroom2FHallway;
  /** District label shown in the event card. */
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Hierophant, operator: 'ge', level: 3 }),
    new IsLevelUpAvailable({ name: Arcanas.Temperance, isLevelUpAvailable: true }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-05-08') }),
    new TimeAvailability({ times: [Times.Day] }),
    new CharacterStatsAvailability({
      level: 2,
      name: CharacterStatsNames.Academics,
      operator: 'ge',
    }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Friday],
    }),
  ];
}
