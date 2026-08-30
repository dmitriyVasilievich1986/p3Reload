import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

export class KoromaruDVD extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.KoromaruDVD;
  static readonly socialLinkName: string = socialLinkFullNames.Koromaru;
  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 2 },
  ];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-08-17'),
        dayjs('2009-08-24'),
        dayjs('2009-08-31'),
        dayjs('2009-09-07'),
        dayjs('2009-09-14'),
        dayjs('2009-09-21'),
        dayjs('2009-09-24'),
        dayjs('2009-09-28'),
        dayjs('2009-10-19'),
        dayjs('2009-10-26'),
        dayjs('2009-11-09'),
        dayjs('2009-11-16'),
        dayjs('2009-12-28'),
        dayjs('2010-01-04'),
        dayjs('2010-01-11'),
        dayjs('2010-01-18'),
        dayjs('2010-01-25'),
      ],
    }),
  ];
}
