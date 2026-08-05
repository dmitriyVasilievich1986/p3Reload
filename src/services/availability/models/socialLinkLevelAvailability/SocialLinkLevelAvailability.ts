/**
 * Social link level-based availability rule for gating events by arcana rank.
 */
import { type ArcanasType } from '@constants/arcanas';

import { AvailabilityBase } from '../../base';

import type { IsAvailableProps } from '../../types';
import type { OperatorType } from './types';

/**
 * Evaluates whether an event is available based on a social link's current level.
 */
export class SocialLinkLevelAvailability extends AvailabilityBase {
  readonly name: ArcanasType;
  operator: OperatorType;
  readonly level: number | number[];

  /**
   * Create a new social link level availability rule.
   *
   * When `operator` is `'in'`, `level` must be an array of allowed ranks.
   * For all other operators, `level` must be a single rank threshold.
   *
   * @param props - Configuration for the social link level availability rule.
   */
  constructor(
    props:
      | { name: ArcanasType; operator: 'in'; level: number[] }
      | { name: ArcanasType; operator: Exclude<OperatorType, 'in'>; level: number }
  ) {
    super();
    this.name = props.name;
    this.operator = props.operator;
    this.level = props.level;
  }

  /**
   * Check whether the social link level satisfies this availability rule.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when the link level matches the configured operator and threshold(s).
   */
  isAvailable(props: IsAvailableProps): boolean {
    const level = props.socialLinkStats[this.name].level;
    switch (this.operator) {
      case 'gt':
        return level > (this.level as number);
      case 'ge':
        return level >= (this.level as number);
      case 'eq':
        return level === (this.level as number);
      case 'lt':
        return level < (this.level as number);
      case 'le':
        return level <= (this.level as number);
      case 'in':
        return (this.level as number[]).includes(level);
      default:
        console.warn(`Invalid operator: ${this.operator}`);
        return false;
    }
  }
}
