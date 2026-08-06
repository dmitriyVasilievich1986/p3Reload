import { CharacterStats } from '@services/stats/characterStats';

import { AvailabilityBase } from '../../base';

import type { IsAvailableProps } from '../../types';
import type { Operators } from './types';
import type { CharacterStatsNamesType } from '@services/stats/characterStats/types';

/**
 * Evaluates whether an event is available based on one of the three social stats.
 */
export class CharacterStatsAvailability extends AvailabilityBase {
  readonly name: CharacterStatsNamesType;
  readonly operator: Operators;
  readonly level: number;

  /**
   * Create a new stats-based availability rule.
   *
   * @param {{ name: CharacterStatsNamesType; operator: Operators; level: number }} props - Configuration for the stats availability rule.
   */
  constructor(props: { name: CharacterStatsNamesType; operator: Operators; level: number }) {
    super();
    this.name = props.name;
    this.operator = props.operator;
    this.level = props.level;
  }

  /**
   * Check whether the event's stats satisfy this availability rule.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when the stat meets the operator and threshold.
   */
  isAvailable(props: IsAvailableProps): boolean {
    const level = CharacterStats.getCharacterStatsLevelFromPoints(
      this.name,
      props.stats.characterStats[this.name]
    ).level;
    switch (this.operator) {
      case 'gt':
        return level > this.level;
      case 'ge':
        return level >= this.level;
      case 'eq':
        return level === this.level;
      case 'lt':
        return level < this.level;
      case 'le':
        return level <= this.level;
      default:
        console.warn(`Invalid operator: ${this.operator}`);
        return false;
    }
  }
}
