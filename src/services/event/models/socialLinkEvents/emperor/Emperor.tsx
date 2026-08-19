import dayjs from 'dayjs';

import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { Times } from '@constants/times';
import {
  type AvailabilityBase,
  TimeAvailability,
  IsLevelUpAvailable,
  ExamAvailability,
  DayOffAvailability,
  DayOfWeekAvailability,
  DateAvailability,
  OrAvailability,
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

export class EmperorEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Emperor;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Hidetoshi Odagiri';
  /** Location label shown in the event card. */
  static readonly place: string = Places.StudentCouncilRoom;
  /** District label shown in the event card. */
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new IsLevelUpAvailable({ name: Arcanas.Emperor, isLevelUpAvailable: true }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-04-27') }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new TimeAvailability({ times: [Times.Day] }),
    new OrAvailability({
      availabilities: [
        new DayOfWeekAvailability({
          daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Wednesday, DayOfWeek.Friday],
        }),
        new DateAvailability({ operator: 'gt', value: dayjs('2010-01-01') }),
      ],
    }),
  ];
}
