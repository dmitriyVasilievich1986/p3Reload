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
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

/**
 * Social link event for the Strength Arcana.
 *
 * This event has no dialogue choices and tracks bond milestones at rank 0,
 * intermediate ranks, and rank 9.
 */
export class StrengthEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Strength;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = socialLinkFullNames.Strength;
  /** Location label shown in the event card. */
  static readonly place: string = Places.Classroom2FHallway;
  /** District label shown in the event card. */
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new SocialLinkLevelAvailability({ name: Arcanas.Chariot, operator: 'gt', level: 1 }),
    new IsLevelUpAvailable({ name: Arcanas.Strength, isLevelUpAvailable: true }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new TimeAvailability({ times: [Times.Day] }),
    new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Wednesday, DayOfWeek.Saturday] }),
  ];
}
