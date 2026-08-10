import { Districts } from '@constants/places';
/**
 * Summer School academics event at Gekkoukan High School.
 */
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type AcademicStatModifyNamesType, AcademicStatModifyNames } from './types';

/**
 * Academics activity at Summer School in Gekkoukan High School.
 *
 * Grants +3 Academics.
 */
export class SummerSchoolEvent extends CharacterStatsModifyEventBase {
  static readonly name: AcademicStatModifyNamesType = AcademicStatModifyNames.summerSchool;

  readonly isChangeable: boolean = false;
  readonly skipCheck: boolean = true;

  static readonly header: string = 'Summer School';
  static readonly district: string = Districts.GekkoukanHighSchool;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 3 },
  ];
}
