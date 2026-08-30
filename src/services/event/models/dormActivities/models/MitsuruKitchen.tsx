import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

import type { CharacterStatsModifierType } from '@services/stats/characterStats';

export class MitsuruKitchen extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.MitsuruKitchen;
  static readonly socialLinkName: string = socialLinkFullNames.Empress;
  static readonly modifiers: CharacterStatsModifierType[] = [];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-06-16'),
        dayjs('2009-06-22'),
        dayjs('2009-06-29'),
        dayjs('2009-07-06'),
        dayjs('2009-07-27'),
        dayjs('2009-08-03'),
        dayjs('2009-08-17'),
        dayjs('2009-08-24'),
        dayjs('2009-08-31'),
        dayjs('2009-09-14'),
        dayjs('2009-09-21'),
        dayjs('2009-09-28'),
        dayjs('2009-10-26'),
        dayjs('2009-11-30'),
        dayjs('2009-12-28'),
        dayjs('2010-01-04'),
        dayjs('2010-01-11'),
        dayjs('2010-01-18'),
        dayjs('2010-01-25'),
      ],
    }),
  ];
}
