import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

import type { CharacterStatsModifierType } from '@services/stats/characterStats';

export class AigisGarden extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.AigisGarden;
  static readonly socialLinkName: string = socialLinkFullNames.Aeon;
  static readonly modifiers: CharacterStatsModifierType[] = [];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-07-27'),
        dayjs('2009-08-02'),
        dayjs('2009-08-09'),
        dayjs('2009-08-23'),
        dayjs('2009-08-30'),
        dayjs('2009-10-20'),
        dayjs('2009-10-25'),
        dayjs('2009-11-01'),
        dayjs('2009-11-15'),
        dayjs('2009-11-22'),
        dayjs('2009-11-29'),
        dayjs('2010-01-09'),
        dayjs('2010-01-10'),
        dayjs('2010-01-17'),
        dayjs('2010-01-24'),
      ],
    }),
  ];
}
