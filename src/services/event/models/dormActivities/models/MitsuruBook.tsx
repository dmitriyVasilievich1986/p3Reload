import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

export class MitsuruBook extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.MitsuruBook;
  static readonly socialLinkName: string = socialLinkFullNames.Empress;
  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 2 },
  ];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-07-05'),
        dayjs('2009-07-26'),
        dayjs('2009-08-01'),
        dayjs('2009-08-23'),
        dayjs('2009-08-29'),
        dayjs('2009-09-13'),
        dayjs('2009-09-27'),
        dayjs('2009-10-19'),
        dayjs('2009-10-25'),
        dayjs('2009-11-29'),
        dayjs('2009-12-21'),
        dayjs('2009-12-27'),
        dayjs('2010-01-10'),
        dayjs('2010-01-24'),
      ],
    }),
  ];
}
