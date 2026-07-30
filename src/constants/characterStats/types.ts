/**
 * Canonical names for the three social stats tracked in Persona 3 Reload.
 */
export const CharacterStatsNames = {
  Academics: 'Academics',
  Courage: 'Courage',
  Charm: 'Charm',
} as const;

/** One of the string values in {@link CharacterStatsNames}. */
export type CharacterStatsNamesType =
  (typeof CharacterStatsNames)[keyof typeof CharacterStatsNames];

/**
 * Optional initial point totals used when constructing {@link CharacterStats}.
 * Omitted stats are treated as `0`.
 */
export type CharacterStatsProps = {
  [CharacterStatsNames.Academics]?: number;
  [CharacterStatsNames.Courage]?: number;
  [CharacterStatsNames.Charm]?: number;
};

/**
 * A single point adjustment to apply via {@link CharacterStats.modify}.
 */
export type CharacterStatsModifierType = {
  /** Which social stat to change. */
  name: CharacterStatsNamesType;
  /** How to apply `value` (`+` adds, `-` subtracts). */
  operator: '+' | '-';
  /** Magnitude of the change (non-negative expected). */
  value: number;
};

/**
 * A named rank on a social-stat progression table
 * (see {@link CharacterStatsLevels}).
 */
export type CharacterStatsLevelType = {
  /** Display name for this rank (e.g. `"Genius"`, `"Timid"`). */
  name: string;
  /** Numeric level, typically `1` (lowest) through `6` (highest). */
  level: number;
  /** Minimum points required to hold this rank. */
  points: number;
  /** Whether this is the highest rank for the stat. */
  maxLevel: boolean;
  /** Points needed for the next rank, or `null` at max level. */
  nextLevelPoints: number | null;
  /** Points threshold of the previous rank, or `null` at level 1. */
  previousLevelPoints: number | null;
};
