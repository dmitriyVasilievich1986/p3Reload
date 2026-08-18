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
  ExamAvailability,
  DayOffAvailability,
  DayOfWeekAvailability,
  DateAvailability,
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

export class FortuneEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Fortune;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Keisuke Hiraga';
  /** Location label shown in the event card. */
  static readonly place: string = Places.ArtClubRoom;
  /** District label shown in the event card. */
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Fortune, operator: 'lt', level: 10 }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-06-17') }),
    new TimeAvailability({ times: [Times.Day] }),
    new IsLevelUpAvailable({ name: Arcanas.Fortune, isLevelUpAvailable: true }),
    new DateAvailability({ operator: 'notIn', value: [dayjs('2009-09-08')] }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday],
    }),
  ];
}
