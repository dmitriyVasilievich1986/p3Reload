import { CharacterStatsNames, type CharacterStatsNamesType } from '@services/stats/characterStats';

import type { BadgeColor } from '../badge';
import type { TabItem } from '../tabs';

export const LeftPanelTabNames = {
  Character: 'Character',
  SocialLinks: 'SLinks',
  Episodes: 'Episodes',
  DormActivities: 'Dorm',
} as const;

export const LEFT_PANEL_TABS: TabItem[] = [
  { name: LeftPanelTabNames.Character, color: 'green' },
  { name: LeftPanelTabNames.SocialLinks, color: 'gold' },
  { name: LeftPanelTabNames.Episodes, color: 'blue' },
  { name: LeftPanelTabNames.DormActivities, color: 'teal' },
];

export const CHARACTER_STAT_BADGE_COLORS: Record<CharacterStatsNamesType, BadgeColor> = {
  [CharacterStatsNames.Academics]: 'green',
  [CharacterStatsNames.Courage]: 'red',
  [CharacterStatsNames.Charm]: 'violet',
};
