/**
 * Level-up readiness availability rule for gating events by whether a social link can rank up.
 */
import { AvailabilityBase, type IsAvailableProps } from '@services/availability';

import type { ArcanasType } from '@constants/arcanas';

/**
 * Evaluates whether an event is available based on a social link's readiness to level up.
 *
 * When `isLevelUpAvailable` is `true` (the default), the rule passes if the link has enough
 * points for the next rank. When `false`, the rule passes only if the link cannot level up yet.
 */
export class IsLevelUpAvailable extends AvailabilityBase {
  readonly name: ArcanasType;
  readonly isLevelUpAvailable: boolean;

  /**
   * Create a new level-up readiness availability rule.
   *
   * @param props - Configuration for the level-up availability rule.
   * @param props.name - Arcana whose social link readiness is checked.
   * @param props.isLevelUpAvailable - When `true` or omitted, require readiness to level up;
   *   when `false`, require that a level-up is not yet available.
   */
  constructor(props: { name: ArcanasType; isLevelUpAvailable?: boolean }) {
    super();
    this.name = props.name;
    this.isLevelUpAvailable =
      props.isLevelUpAvailable === undefined ? true : props.isLevelUpAvailable;
  }

  /**
   * Check whether the social link's level-up readiness matches this rule.
   *
   * @param {IsAvailableProps} props - The properties to evaluate.
   * @returns {boolean} True when readiness matches `isLevelUpAvailable`.
   */
  isAvailable(props: IsAvailableProps): boolean {
    const level =
      props.stats.socialLinkStats[this.name as ArcanasType].currentSocialLinkLevel.level;
    const payload = props.stats.socialLinkStats.getIsNewLevel({ arcana: this.name });
    const isLevelUpAvailable = payload && level < 10;
    return this.isLevelUpAvailable ? isLevelUpAvailable : !isLevelUpAvailable;
  }
}
