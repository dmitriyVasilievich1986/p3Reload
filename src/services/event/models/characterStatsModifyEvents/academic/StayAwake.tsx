import { Districts } from '@constants/places';
/**
 * Stay awake academics event at Gekkoukan High School.
 */
import { Times } from '@constants/times';
import { AvailabilityBase, TimeAvailability } from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type AcademicStatModifyNamesType, AcademicStatModifyNames } from './types';

/**
 * Stay awake academics event at Gekkoukan High School.
 *
 * Grants +2 Academics.
 */
export class StayAwakeAcademicsEvent extends CharacterStatsModifyEventBase {
  static readonly name: AcademicStatModifyNamesType = AcademicStatModifyNames.stayAwake;

  static readonly header: string = 'Stay awake';
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 2 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: [Times.Morning] }),
  ];
}
