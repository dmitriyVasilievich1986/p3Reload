import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

export class IoriBook extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.IoriBook;
  static readonly socialLinkName: string = socialLinkFullNames.Iori;
  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Courage, operator: '+', value: 2 },
  ];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-06-16'),
        dayjs('2009-06-22'),
        dayjs('2009-06-29'),
        dayjs('2009-08-03'),
        dayjs('2009-08-17'),
        dayjs('2009-08-24'),
        dayjs('2009-09-14'),
        dayjs('2009-09-21'),
        dayjs('2009-09-28'),
        dayjs('2009-10-20'),
        dayjs('2009-10-26'),
        dayjs('2009-11-14'),
        dayjs('2009-12-26'),
        dayjs('2009-12-28'),
        dayjs('2010-01-04'),
        dayjs('2010-01-18'),
        dayjs('2010-01-26'),
      ],
    }),
  ];
}
