import dayjs from 'dayjs';

import { Places, Districts } from '@constants/places';
import { Times } from '@constants/times';
import { AvailabilityBase, TimeAvailability, DateAvailability } from '@services/availability';
/**
 * Dorm exam studying (Group) event at Iwatodai Dormitory.
 */
import { CharacterStatsNames } from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type AcademicStatModifyNamesType, academicStatModifyNames } from './types';

import type { CharacterStatsModifierType } from '@services/stats/characterStats';

/**
 * Academics activity at Dorm exam studying (Group) in Iwatodai Dormitory.
 *
 * Grants +4 Academics. Available during the evening on
 * May 15, May 16, July 9, July 10, October 8, October 9, October 11, December 9, December 11, December 12.
 */
export class DormExamStudyingGroupEvent extends CharacterStatsModifyEventBase {
  static readonly name: AcademicStatModifyNamesType = academicStatModifyNames.dormExamStudyingGroup;

  static readonly header: string = 'Dorm exam studying[Group]';
  static readonly place: string = Places.Dorm;
  static readonly district: string = Districts.IwatodaiDormitory;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 4 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: [Times.Evening] }),
    new DateAvailability({
      operator: 'in',
      value: [
        dayjs('2009-05-15'),
        dayjs('2009-05-16'),
        dayjs('2009-07-09'),
        dayjs('2009-07-10'),
        dayjs('2009-10-08'),
        dayjs('2009-10-09'),
        dayjs('2009-10-11'),
        dayjs('2009-12-09'),
        dayjs('2009-12-11'),
        dayjs('2009-12-12'),
      ],
    }),
  ];
}
