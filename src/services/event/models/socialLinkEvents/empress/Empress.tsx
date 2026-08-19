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
  AndAvailability,
  CharacterStatsAvailability,
  OrAvailability,
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';
import { CharacterStatsNames } from '@services/stats/characterStats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

export class EmpressEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Empress;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = 'Mitsuru Kirijo';
  /** Location label shown in the event card. */
  static readonly place: string = Places.FacultyOfficeEntrance;
  /** District label shown in the event card. */
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new IsLevelUpAvailable({ name: Arcanas.Empress, isLevelUpAvailable: true }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-11-21') }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new TimeAvailability({ times: [Times.Day] }),
    new CharacterStatsAvailability({
      level: 6,
      name: CharacterStatsNames.Academics,
      operator: 'ge',
    }),
    new OrAvailability({
      availabilities: [
        new DayOfWeekAvailability({
          daysOfWeek: [
            DayOfWeek.Tuesday,
            DayOfWeek.Wednesday,
            DayOfWeek.Thursday,
            DayOfWeek.Saturday,
          ],
        }),
        new AndAvailability({
          availabilities: [
            new DateAvailability({ operator: 'ge', value: dayjs('2009-12-24') }),
            new DayOfWeekAvailability({
              daysOfWeek: [
                DayOfWeek.Monday,
                DayOfWeek.Tuesday,
                DayOfWeek.Wednesday,
                DayOfWeek.Thursday,
                DayOfWeek.Friday,
                DayOfWeek.Saturday,
              ],
            }),
          ],
        }),
      ],
    }),
  ];
}
