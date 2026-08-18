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
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

export class HierophantEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Hierophant;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Bunkichi and Mitsuko';
  /** Location label shown in the event card. */
  static readonly place: string = Places.BookwormsUsedBooks;
  /** District label shown in the event card. */
  static readonly district: string = Districts.PortIslandStation;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Hierophant, operator: 'lt', level: 10 }),
    new DateAvailability({ operator: 'gt', value: dayjs('2009-04-25') }),
    new TimeAvailability({ times: [Times.Day] }),
    new IsLevelUpAvailable({ name: Arcanas.Hierophant, isLevelUpAvailable: true }),
    new DayOfWeekAvailability({
      daysOfWeek: [
        DayOfWeek.Tuesday,
        DayOfWeek.Wednesday,
        DayOfWeek.Thursday,
        DayOfWeek.Friday,
        DayOfWeek.Saturday,
        DayOfWeek.Sunday,
      ],
    }),
  ];
}
