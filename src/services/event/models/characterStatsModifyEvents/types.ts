import { academicStatModifyNames } from './academic/types';
import { charmStatModifyNames } from './charm/types';
import { courageStatModifyNames } from './courage/types';

export const characterStatsModifyNames = {
  ...academicStatModifyNames,
  ...courageStatModifyNames,
  ...charmStatModifyNames,
} as const;

export type CharacterStatsModifyNamesType =
  (typeof characterStatsModifyNames)[keyof typeof characterStatsModifyNames];
