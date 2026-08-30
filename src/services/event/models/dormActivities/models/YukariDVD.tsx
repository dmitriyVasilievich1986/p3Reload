import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

export class YukariDVD extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.YukariDVD;
  static readonly socialLinkName: string = socialLinkFullNames.Lovers;
  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Charm, operator: '+', value: 2 },
  ];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-06-16'),
        dayjs('2009-06-23'),
        dayjs('2009-06-30'),
        dayjs('2009-07-28'),
        dayjs('2009-07-31'),
        dayjs('2009-08-04'),
        dayjs('2009-08-19'),
        dayjs('2009-08-25'),
        dayjs('2009-09-08'),
        dayjs('2009-09-15'),
        dayjs('2009-10-20'),
        dayjs('2009-10-27'),
        dayjs('2009-11-10'),
        dayjs('2009-12-01'),
        dayjs('2009-12-22'),
        dayjs('2009-12-29'),
        dayjs('2010-01-05'),
        dayjs('2010-01-09'),
        dayjs('2010-01-19'),
        dayjs('2010-01-27'),
      ],
    }),
  ];
}
