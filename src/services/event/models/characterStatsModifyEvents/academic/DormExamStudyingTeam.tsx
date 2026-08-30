import dayjs from 'dayjs';

import { Places, Districts } from '@constants/places';
/**
 * Dorm exam studying (Group) event at Iwatodai Dormitory.
 */
import { Times } from '@constants/times';
import {
  AvailabilityBase,
  TimeAvailability,
  DateAvailability,
  CharacterStatsAvailability,
} from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type AcademicStatModifyNamesType, AcademicStatModifyNames } from './types';

/**
 * Academics activity at Dorm exam studying (Team) in Iwatodai Dormitory.
 *
 * Grants +5 Academics. Available during the evening on
 * May 17, July 13, October 12, December 13.
 */
export class DormExamStudyingTeamEvent extends CharacterStatsModifyEventBase {
  static readonly name: AcademicStatModifyNamesType = AcademicStatModifyNames.dormExamStudyingTeam;

  static readonly header: string = 'Dorm exam studying[Team]';
  static readonly place: string = Places.Dorm;
  static readonly district: string = Districts.IwatodaiDormitory;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 5 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new CharacterStatsAvailability({
      name: CharacterStatsNames.Academics,
      operator: 'lt',
      level: 6,
    }),
    new TimeAvailability({ times: [Times.Evening] }),
    new DateAvailability({
      operator: 'in',
      value: [dayjs('2009-05-17'), dayjs('2009-07-13'), dayjs('2009-10-12'), dayjs('2009-12-13')],
    }),
  ];
}
