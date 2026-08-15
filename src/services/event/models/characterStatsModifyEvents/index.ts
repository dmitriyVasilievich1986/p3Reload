import { AcademicStatModifyEvents } from './academic';
import { CharmStatModifyEvents } from './charm';
import { CourageStatModifyEvents } from './courage';

export const CharacterStatsModifyEvents = {
  ...AcademicStatModifyEvents,
  ...CourageStatModifyEvents,
  ...CharmStatModifyEvents,
} as const;
