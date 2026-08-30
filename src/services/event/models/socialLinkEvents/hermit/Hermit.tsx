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
  DayOfWeekAvailability,
  DateAvailability,
  OrAvailability,
} from '@services/availability';
import { SocialLinkLevel } from '@services/stats';

import { SocialLinkEventBase } from '../base';
import data from './data.json';

export class HermitEvent extends SocialLinkEventBase {
  /** Arcana identifier for this social link. */
  static readonly name: ArcanasType = Arcanas.Hermit;
  /** Display name shown in the event card. */
  static readonly socialLinkName: string = socialLinkFullNames.Hermit;
  /** Location label shown in the event card. */
  static readonly place: string = Places.LaptopAtTheProtagonistsRoom;
  /** District label shown in the event card. */
  static readonly district: string = Districts.IwatodaiDormitory;

  static readonly levels = data.map((l) => new SocialLinkLevel(l));

  static readonly availabilities: AvailabilityBase[] = [
    new IsLevelUpAvailable({ name: Arcanas.Hermit, isLevelUpAvailable: true }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-04-29') }),
    new TimeAvailability({ times: [Times.Day] }),
    new OrAvailability({
      availabilities: [
        new DayOfWeekAvailability({ daysOfWeek: [DayOfWeek.Sunday] }),
        new DateAvailability({
          operator: 'in',
          value: [
            dayjs('2009-04-29'),
            dayjs('2009-05-04'),
            dayjs('2009-05-05'),
            dayjs('2009-09-21'),
            dayjs('2009-09-22'),
            dayjs('2009-09-23'),
            dayjs('2009-10-12'),
          ],
        }),
      ],
    }),
  ];
}
