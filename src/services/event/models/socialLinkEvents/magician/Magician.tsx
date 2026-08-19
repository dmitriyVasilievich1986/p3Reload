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
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

export class MagicianEvent extends SocialLinkEventBase {
  static readonly name: ArcanasType = Arcanas.Magician;
  static readonly socialLinkName: string = 'Kenji Tomochika';
  static readonly district: string = Districts.GekkoukanHighSchool;
  static readonly place: string = Places.Classroom2F;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new IsLevelUpAvailable({ name: Arcanas.Magician, isLevelUpAvailable: true }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new TimeAvailability({ times: [Times.Day] }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Thursday, DayOfWeek.Friday],
    }),
  ];
}
