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

export class AragakiGarden extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.AragakiGarden;
  static readonly socialLinkName: string = socialLinkFullNames.Aragaki;
  static readonly modifiers: CharacterStatsModifierType[] = [];

  static readonly availabilities: AvailabilityBase[] = [
    new isDormActivitiesLevelUpAvailable({
      name: DormActivitiesNames.AragakiGarden,
      isLevelUpAvailable: true,
    }),
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-09-07'),
        dayjs('2009-09-10'),
        dayjs('2009-09-14'),
        dayjs('2009-09-17'),
        dayjs('2009-09-21'),
        dayjs('2009-09-24'),
        dayjs('2009-09-28'),
        dayjs('2009-10-01'),
      ],
    }),
  ];
}
