import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

export class SanadaDVD extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.SanadaDVD;
  static readonly socialLinkName: string = socialLinkFullNames.Akihiko;
  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Courage, operator: '+', value: 2 },
  ];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-06-20'),
        dayjs('2009-06-27'),
        dayjs('2009-07-04'),
        dayjs('2009-07-18'),
        dayjs('2009-08-01'),
        dayjs('2009-08-08'),
        dayjs('2009-08-22'),
        dayjs('2009-09-12'),
        dayjs('2009-09-26'),
        dayjs('2009-10-03'),
        dayjs('2009-10-24'),
        dayjs('2009-10-31'),
        dayjs('2009-11-14'),
        dayjs('2009-11-21'),
        dayjs('2009-12-26'),
        dayjs('2010-01-02'),
        dayjs('2010-01-23'),
      ],
    }),
  ];
}
