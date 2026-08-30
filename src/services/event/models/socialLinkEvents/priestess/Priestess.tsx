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

export class PriestessEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Priestess;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = socialLinkFullNames.Priestess;
  /** Location label shown in the event card. */
  static readonly place: string = Places.Classroom2FHallway;
  /** District label shown in the event card. */
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Fortune, operator: 'ge', level: 2 }),
    new IsLevelUpAvailable({ name: Arcanas.Priestess, isLevelUpAvailable: true }),
    new DateAvailability({ operator: 'notIn', value: [dayjs('2009-11-06')] }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-06-19') }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new TimeAvailability({ times: [Times.Day] }),
    new CharacterStatsAvailability({
      level: 6,
      name: CharacterStatsNames.Courage,
      operator: 'ge',
    }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Friday, DayOfWeek.Saturday],
    }),
  ];
}
