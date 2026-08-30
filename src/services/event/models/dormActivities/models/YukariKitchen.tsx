import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import {
  AvailabilityBase,
  TimeAvailability,
  DateAvailability,
  isDormActivitiesLevelUpAvailable,
} from '@services/availability';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

import type { CharacterStatsModifierType } from '@services/stats/characterStats';

export class YukariKitchen extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.YukariKitchen;
  static readonly socialLinkName: string = socialLinkFullNames.Lovers;
  static readonly modifiers: CharacterStatsModifierType[] = [];

  static readonly availabilities: AvailabilityBase[] = [
    new isDormActivitiesLevelUpAvailable({
      name: DormActivitiesNames.YukariKitchen,
      isLevelUpAvailable: true,
    }),
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-06-19'),
        dayjs('2009-06-26'),
        dayjs('2009-07-03'),
        dayjs('2009-07-31'),
        dayjs('2009-08-07'),
        dayjs('2009-08-21'),
        dayjs('2009-09-11'),
        dayjs('2009-09-25'),
        dayjs('2009-10-02'),
        dayjs('2009-10-23'),
        dayjs('2009-10-30'),
        dayjs('2009-11-13'),
        dayjs('2009-12-25'),
        dayjs('2010-01-01'),
        dayjs('2010-01-08'),
        dayjs('2010-01-15'),
        dayjs('2010-01-22'),
        dayjs('2010-01-29'),
      ],
    }),
  ];
}
