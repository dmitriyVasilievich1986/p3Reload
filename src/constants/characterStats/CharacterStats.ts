import _ from 'lodash';

import { CharacterStatsLevels } from './const';
import {
  CharacterStatsNames,
  type CharacterStatsProps,
  type CharacterStatsModifierType,
  type CharacterStatsNamesType,
  type CharacterStatsLevelType,
} from './types';

/**
 * Immutable container for a character's Academics, Courage, and Charm point totals.
 *
 * Use {@link CharacterStats.modify} to apply point changes, and the static helpers
 * to resolve a points total or level number into a named rank from
 * {@link CharacterStatsLevels}.
 */
export class CharacterStats {
  [CharacterStatsNames.Academics]!: number;
  [CharacterStatsNames.Courage]!: number;
  [CharacterStatsNames.Charm]!: number;

  /**
   * Creates a stats instance. Omitted stats default to `0`.
   *
   * @param props - Optional initial point totals for each stat.
   */
  constructor(props?: CharacterStatsProps) {
    this[CharacterStatsNames.Academics] = props?.[CharacterStatsNames.Academics] ?? 0;
    this[CharacterStatsNames.Courage] = props?.[CharacterStatsNames.Courage] ?? 0;
    this[CharacterStatsNames.Charm] = props?.[CharacterStatsNames.Charm] ?? 0;
  }

  /**
   * Returns a new instance with a single modifier applied to `currentStats`.
   * Unsupported operators leave the stat unchanged and log a warning.
   *
   * @param currentStats - Stats to modify.
   * @param modifier - Stat name, operator (`+` or `-`), and value.
   * @returns A new {@link CharacterStats} with the updated value.
   */
  private applyModifier(
    currentStats: CharacterStats,
    modifier: CharacterStatsModifierType
  ): CharacterStats {
    let newValue = 0;
    switch (modifier.operator) {
      case '+':
        newValue = currentStats[modifier.name] + modifier.value;
        break;
      case '-':
        newValue = currentStats[modifier.name] - modifier.value;
        break;
      default:
        console.warn(`Invalid operator: ${modifier.operator}`);
        throw new Error(`Invalid operator: ${modifier.operator}`);
    }
    if (newValue < 0) {
      throw new Error(`Invalid value: ${newValue}`);
    }
    return new CharacterStats({
      ...currentStats,
      [modifier.name]: newValue,
    });
  }

  /**
   * Applies modifiers in order and returns a new instance (does not mutate `this`).
   *
   * @param modifiers - Ordered list of `+`/`-` adjustments to apply.
   * @returns A new {@link CharacterStats} after all modifiers.
   */
  modify(this: CharacterStats, modifiers: CharacterStatsModifierType[]): CharacterStats {
    return _.reduce(modifiers, (acc, modifier) => this.applyModifier(acc, modifier), this);
  }

  /**
   * Returns the charm modifier for the character.
   * @param this - The character stats instance.
   * @returns The charm modifier.
   */
  getCharmModifier(this: CharacterStats): number {
    const level = (this.constructor as typeof CharacterStats).getCharacterStatsLevelFromPoints(
      CharacterStatsNames.Charm,
      this[CharacterStatsNames.Charm]
    );
    return level.maxLevel ? 1.51 : 1;
  }

  /**
   * Resolves the rank for a stat given its current point total.
   * Levels are matched by the highest threshold the points meet
   * (tables are ordered highest-first).
   *
   * @param statName - Which social stat to look up.
   * @param points - Current point total for that stat.
   * @returns The matching level entry from {@link CharacterStatsLevels}.
   * @throws If no level exists for the given points (should not occur for valid tables).
   */
  static getCharacterStatsLevelFromPoints(
    statName: CharacterStatsNamesType,
    points: number
  ): CharacterStatsLevelType {
    const level = CharacterStatsLevels[statName].find((entry) => points >= entry.points);
    if (level === undefined) {
      // should never happen
      throw new Error(`No level found for ${statName} with ${points} points`);
    }
    return level;
  }

  /**
   * Looks up a rank by its numeric level (1–6) for the given stat.
   *
   * @param statName - Which social stat to look up.
   * @param levelNumber - Level number to find.
   * @returns The matching level entry from {@link CharacterStatsLevels}.
   * @throws If no entry exists for that level number.
   */
  static getCharacterStatsLevelByLevel(
    statName: CharacterStatsNamesType,
    levelNumber: number
  ): CharacterStatsLevelType {
    const payload = CharacterStatsLevels[statName].find((level) => level.level === levelNumber);
    if (payload === undefined) {
      // should never happen
      throw new Error(`No level found for ${statName} with level ${levelNumber}`);
    }
    return payload;
  }
}
