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

export class FuukaGarden extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.FuukaGarden;
  static readonly socialLinkName: string = socialLinkFullNames.Priestess;
  static readonly modifiers: CharacterStatsModifierType[] = [];

  static readonly availabilities: AvailabilityBase[] = [
    new isDormActivitiesLevelUpAvailable({
      name: DormActivitiesNames.FuukaGarden,
      isLevelUpAvailable: true,
    }),
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-06-16'),
        dayjs('2009-06-23'),
        dayjs('2009-06-30'),
        dayjs('2009-08-27'),
        dayjs('2009-09-09'),
        dayjs('2009-09-15'),
        dayjs('2009-09-29'),
        dayjs('2009-10-27'),
        dayjs('2009-11-10'),
        dayjs('2009-11-21'),
        dayjs('2009-12-01'),
        dayjs('2009-12-22'),
        dayjs('2009-12-29'),
        dayjs('2010-01-05'),
        dayjs('2010-01-12'),
        dayjs('2010-01-22'),
        dayjs('2010-01-26'),
      ],
    }),
  ];
}
