import { academicStatModifyEvents } from './academic';
import { charmStatModifyEvents } from './charm';
import { courageStatModifyEvents } from './courage';

export const characterStatsModifyEvents = {
  ...academicStatModifyEvents,
  ...courageStatModifyEvents,
  ...charmStatModifyEvents,
} as const;
