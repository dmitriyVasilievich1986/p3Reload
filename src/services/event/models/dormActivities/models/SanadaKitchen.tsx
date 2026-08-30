import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

import type { CharacterStatsModifierType } from '@services/stats/characterStats';

export class SanadaKitchen extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.SanadaKitchen;
  static readonly socialLinkName: string = socialLinkFullNames.Akihiko;
  static readonly modifiers: CharacterStatsModifierType[] = [];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-06-17'),
        dayjs('2009-06-24'),
        dayjs('2009-07-01'),
        dayjs('2009-08-05'),
        dayjs('2009-08-19'),
        dayjs('2009-09-16'),
        dayjs('2009-09-23'),
        dayjs('2009-09-30'),
        dayjs('2009-10-17'),
        dayjs('2009-10-21'),
        dayjs('2009-10-28'),
        dayjs('2009-11-11'),
        dayjs('2009-12-23'),
        dayjs('2010-01-06'),
        dayjs('2010-01-13'),
        dayjs('2010-01-20'),
        dayjs('2010-01-27'),
      ],
    }),
  ];
}
