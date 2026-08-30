import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

import type { CharacterStatsModifierType } from '@services/stats/characterStats';

export class IoriGarden extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.IoriGarden;
  static readonly socialLinkName: string = socialLinkFullNames.Iori;
  static readonly modifiers: CharacterStatsModifierType[] = [];

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
        dayjs('2009-08-15'),
        dayjs('2009-08-22'),
        dayjs('2009-08-25'),
        dayjs('2009-09-26'),
        dayjs('2009-10-03'),
        dayjs('2009-10-17'),
        dayjs('2009-10-29'),
        dayjs('2009-10-31'),
        dayjs('2009-12-02'),
        dayjs('2010-01-16'),
        dayjs('2010-01-23'),
      ],
    }),
  ];
}
