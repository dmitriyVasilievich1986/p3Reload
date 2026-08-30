import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

export class FuukaBook extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.FuukaBook;
  static readonly socialLinkName: string = socialLinkFullNames.Priestess;
  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 2 },
  ];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-06-18'),
        dayjs('2009-06-25'),
        dayjs('2009-07-30'),
        dayjs('2009-08-20'),
        dayjs('2009-08-25'),
        dayjs('2009-09-04'),
        dayjs('2009-09-10'),
        dayjs('2009-09-17'),
        dayjs('2009-09-24'),
        dayjs('2009-10-01'),
        dayjs('2009-10-22'),
        dayjs('2009-10-29'),
        dayjs('2009-11-12'),
        dayjs('2010-01-07'),
        dayjs('2010-01-14'),
        dayjs('2010-01-28'),
      ],
    }),
  ];
}
