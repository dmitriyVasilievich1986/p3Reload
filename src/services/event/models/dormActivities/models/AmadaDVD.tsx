import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import {
  AvailabilityBase,
  TimeAvailability,
  DateAvailability,
  isDormActivitiesLevelUpAvailable,
} from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

export class AmadaDVD extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.AmadaDVD;
  static readonly socialLinkName: string = socialLinkFullNames.Amada;
  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Courage, operator: '+', value: 2 },
  ];

  static readonly availabilities: AvailabilityBase[] = [
    new isDormActivitiesLevelUpAvailable({
      name: DormActivitiesNames.AmadaDVD,
      isLevelUpAvailable: true,
    }),
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-09-04'),
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
