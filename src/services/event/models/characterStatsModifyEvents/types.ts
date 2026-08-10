import { AcademicStatModifyNames } from './academic/types';
import { CharmStatModifyNames } from './charm/types';
import { CourageStatModifyNames } from './courage/types';

export const CharacterStatsModifyNames = {
  ...AcademicStatModifyNames,
  ...CourageStatModifyNames,
  ...CharmStatModifyNames,
} as const;

export type CharacterStatsModifyNamesType =
  (typeof CharacterStatsModifyNames)[keyof typeof CharacterStatsModifyNames];
