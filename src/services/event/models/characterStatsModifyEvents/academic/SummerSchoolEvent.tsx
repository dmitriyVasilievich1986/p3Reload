import dayjs from 'dayjs';

import { Districts } from '@constants/places';
import { AvailabilityBase, DateAvailability } from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type AcademicStatModifyNamesType, AcademicStatModifyNames } from './types';

export class SummerSchoolEvent extends CharacterStatsModifyEventBase {
  static readonly name: AcademicStatModifyNamesType = AcademicStatModifyNames.summerSchool;

  readonly isChangeable: boolean = false;
  readonly skipCheck: boolean = true;

  static readonly header: string = 'Summer School';
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 3 },
  ];

  static readonly availabilities: AvailabilityBase[] = [
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-08-10'),
        dayjs('2009-08-11'),
        dayjs('2009-08-12'),
        dayjs('2009-08-13'),
        dayjs('2009-08-14'),
        dayjs('2009-08-15'),
      ],
    }),
  ];
}
