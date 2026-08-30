import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

export class AigisBook extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.AigisBook;
  static readonly socialLinkName: string = socialLinkFullNames.Aeon;
  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Charm, operator: '+', value: 2 },
  ];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-09-02'),
        dayjs('2009-09-07'),
        dayjs('2009-09-09'),
        dayjs('2009-09-16'),
        dayjs('2009-09-25'),
        dayjs('2009-09-30'),
        dayjs('2009-10-02'),
        dayjs('2009-10-21'),
        dayjs('2009-10-24'),
        dayjs('2009-10-28'),
        dayjs('2009-11-11'),
        dayjs('2010-01-06'),
        dayjs('2010-01-13'),
        dayjs('2010-01-20'),
        dayjs('2010-01-27'),
      ],
    }),
  ];
}
