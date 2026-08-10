import { Places, Districts } from '@constants/places';
/**
 * Drink Mr. Edogawa's medicine.
 */
import {
  AvailabilityBase,
  CharacterStatsAvailability,
  DayOffAvailability,
} from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { CharacterStatsModifyEventBase } from '../base';
import { type CourageStatModifyNamesType, CourageStatModifyNames } from './types';

/**
 * Drink Mr. Edogawa's medicine.
 */
export class EdogawaMedicineEvent extends CharacterStatsModifyEventBase {
  readonly isChangeable: boolean = false;
  readonly skipCheck: boolean = false;

  static readonly name: CourageStatModifyNamesType = CourageStatModifyNames.edogawaMedicine;

  static readonly header: string = "Drink Mr. Edogawa's medicine";
  static readonly place: string = Places.NurseOffice;
  static readonly district: string = Districts.GekkoukanHighSchool;

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new CharacterStatsAvailability({
      name: CharacterStatsNames.Courage,
      operator: 'lt',
      level: 6,
    }),
  ];

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Courage, operator: '+', value: 2 },
  ];
}
