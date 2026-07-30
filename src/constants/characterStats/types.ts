export const CharacterStatsNames = {
  Academics: 'Academics',
  Courage: 'Courage',
  Charm: 'Charm',
} as const;

export type CharacterStatsNamesType =
  (typeof CharacterStatsNames)[keyof typeof CharacterStatsNames];

export type CharacterStatsProps = {
  [CharacterStatsNames.Academics]?: number;
  [CharacterStatsNames.Courage]?: number;
  [CharacterStatsNames.Charm]?: number;
};

export type CharacterStatsModifierType = {
  name: CharacterStatsNamesType;
  operator: '+' | '-';
  value: number;
};
