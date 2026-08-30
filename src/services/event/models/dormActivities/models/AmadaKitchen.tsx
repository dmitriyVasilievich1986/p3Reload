import dayjs from 'dayjs';

import { socialLinkFullNames } from '@constants/socialLinkNames';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
import { DormActivitiesNames } from '@services/stats/dormActivities/types';

import { DormActivitiesEventBase } from '../base';

import type { CharacterStatsModifierType } from '@services/stats/characterStats';

export class AmadaKitchen extends DormActivitiesEventBase {
  static readonly name = DormActivitiesNames.AmadaKitchen;
  static readonly socialLinkName: string = socialLinkFullNames.Amada;
  static readonly modifiers: CharacterStatsModifierType[] = [];

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: ['Evening'] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-09-06'),
        dayjs('2009-09-13'),
        dayjs('2009-09-27'),
        dayjs('2009-10-18'),
        dayjs('2009-10-25'),
        dayjs('2009-11-01'),
        dayjs('2009-11-22'),
        dayjs('2009-11-29'),
        dayjs('2009-12-27'),
        dayjs('2010-01-03'),
        dayjs('2010-01-10'),
        dayjs('2010-01-21'),
        dayjs('2010-01-24'),
      ],
    }),
  ];
}
