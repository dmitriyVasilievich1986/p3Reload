import dayjs from 'dayjs';

import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Districts } from '@constants/places';
import { Times } from '@constants/times';
import {
  type AvailabilityBase,
  TimeAvailability,
  IsLevelUpAvailable,
  DayOfWeekAvailability,
  DateAvailability,
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

export class HangedManEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.HangedMan;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Maiko Oohashi';
  /** District label shown in the event card. */
  static readonly district: string = Districts.NaganakiShrine;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new IsLevelUpAvailable({ name: Arcanas.HangedMan, isLevelUpAvailable: true }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-05-06') }),
    new TimeAvailability({ times: [Times.Day] }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Wednesday, DayOfWeek.Saturday],
    }),
  ];
}
