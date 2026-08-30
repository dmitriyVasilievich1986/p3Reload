import dayjs from 'dayjs';

import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { socialLinkFullNames } from '@constants/socialLinkNames';
import { Times } from '@constants/times';
import {
  type AvailabilityBase,
  TimeAvailability,
  IsLevelUpAvailable,
  ExamAvailability,
  DayOffAvailability,
  DayOfWeekAvailability,
  DateAvailability,
  CharacterStatsAvailability,
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';
import { CharacterStatsNames } from '@services/stats/characterStats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

export class LoversEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Lovers;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = socialLinkFullNames.Lovers;
  /** Location label shown in the event card. */
  static readonly place: string = Places.Classroom2F;
  /** District label shown in the event card. */
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new IsLevelUpAvailable({ name: Arcanas.Lovers, isLevelUpAvailable: true }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-07-25') }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new TimeAvailability({ times: [Times.Day] }),
    new CharacterStatsAvailability({
      level: 6,
      name: CharacterStatsNames.Charm,
      operator: 'ge',
    }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Saturday],
    }),
  ];
}
