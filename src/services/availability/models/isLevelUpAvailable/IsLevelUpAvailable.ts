/**
 * Is level up available availability rule for gating events to events that have already been completed.
 */
import { AvailabilityBase, type IsAvailableProps } from '@services/availability';

import type { ArcanasType } from '@constants/arcanas';

/**
 * Evaluates whether an event is available if it is a level up.
 */
export class IsLevelUpAvailable extends AvailabilityBase {
  readonly name: ArcanasType;
  readonly isLevelUpAvailable: boolean;

  /**
   * Create a new is level up available availability rule.
   *
   * @param {{ name: ArcanasType }} props - Configuration for exam availability.
   */
  constructor(props: { name: ArcanasType; isLevelUpAvailable?: boolean }) {
    super();
    this.name = props.name;
    this.isLevelUpAvailable =
      props.isLevelUpAvailable === undefined ? true : props.isLevelUpAvailable;
  }

  /**
   * Check whether the event is a level up.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when the event is a level up.
   */
  isAvailable(props: IsAvailableProps): boolean {
    const payload = props.socialLinkStats.getIsNewLevel({ arcana: this.name });
    return this.isLevelUpAvailable ? payload : !payload;
  }
}
