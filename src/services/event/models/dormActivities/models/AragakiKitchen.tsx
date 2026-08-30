import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

import type { CharacterStatsModifierType } from '@services/stats/characterStats';

export class AragakiKitchen extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.AragakiKitchen;
  static readonly socialLinkName: string = socialLinkFullNames.Aragaki;
  static readonly modifiers: CharacterStatsModifierType[] = [];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-09-08'),
        dayjs('2009-09-12'),
        dayjs('2009-09-15'),
        dayjs('2009-09-22'),
        dayjs('2009-09-26'),
        dayjs('2009-09-29'),
        dayjs('2009-10-03'),
      ],
    }),
  ];
}
