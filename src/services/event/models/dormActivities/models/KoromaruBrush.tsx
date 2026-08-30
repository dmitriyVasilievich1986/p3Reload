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

export class KoromaruBrush extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.KoromaruBrush;
  static readonly socialLinkName: string = socialLinkFullNames.Koromaru;
  static readonly modifiers: CharacterStatsModifierType[] = [];

  static readonly availabilities: AvailabilityBase[] = [
    new isDormActivitiesLevelUpAvailable({
      name: DormActivitiesNames.KoromaruBrush,
      isLevelUpAvailable: true,
    }),
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-09-09'),
        dayjs('2009-09-17'),
        dayjs('2009-09-24'),
        dayjs('2009-10-01'),
        dayjs('2009-10-22'),
        dayjs('2009-10-29'),
        dayjs('2009-11-12'),
        dayjs('2009-11-27'),
        dayjs('2009-12-04'),
        dayjs('2009-12-06'),
        dayjs('2009-12-10'),
        dayjs('2009-12-24'),
        dayjs('2010-01-14'),
        dayjs('2010-01-28'),
        dayjs('2010-01-30'),
      ],
    }),
  ];
}
