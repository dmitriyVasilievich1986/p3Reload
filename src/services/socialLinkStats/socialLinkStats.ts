import { Arcanas, type ArcanasType } from '@constants/arcanas';
import { SocialLinkLevel } from '@services/socialLinkLevel/socialLinkLevel';

import type { SocialLinkStatsProps, SocialLinkStatsType } from './types';

/**
 * Mutable container for the player's Social Link progress across every arcana.
 *
 * Each arcana entry tracks the current rank, affinity points toward the next rank,
 * whether the link is on a romantic path, and the active {@link SocialLinkLevel}
 * definition used for thresholds and hangout questions.
 */
export class SocialLinkStats {
  [Arcanas.Aeon]!: SocialLinkStatsType;
  [Arcanas.Chariot]!: SocialLinkStatsType;
  [Arcanas.Devil]!: SocialLinkStatsType;
  [Arcanas.Emperor]!: SocialLinkStatsType;
  [Arcanas.Empress]!: SocialLinkStatsType;
  [Arcanas.Fool]!: SocialLinkStatsType;
  [Arcanas.Fortune]!: SocialLinkStatsType;
  [Arcanas.HangedMan]!: SocialLinkStatsType;
  [Arcanas.Hermit]!: SocialLinkStatsType;
  [Arcanas.Hierophant]!: SocialLinkStatsType;
  [Arcanas.Justice]!: SocialLinkStatsType;
  [Arcanas.Lovers]!: SocialLinkStatsType;
  [Arcanas.Magician]!: SocialLinkStatsType;
  [Arcanas.Moon]!: SocialLinkStatsType;
  [Arcanas.Priestess]!: SocialLinkStatsType;
  [Arcanas.Star]!: SocialLinkStatsType;
  [Arcanas.Strength]!: SocialLinkStatsType;
  [Arcanas.Sun]!: SocialLinkStatsType;
  [Arcanas.Temperance]!: SocialLinkStatsType;
  [Arcanas.Tower]!: SocialLinkStatsType;
  [Arcanas.Death]!: SocialLinkStatsType;

  /**
   * Creates a stats instance for all arcanas. Omitted arcanas default to level `0`,
   * `0` points, non-romantic, and an empty level-`0` {@link SocialLinkLevel}.
   *
   * @param props - Optional initial stats keyed by arcana name.
   */
  constructor(props?: SocialLinkStatsProps) {
    Object.values(Arcanas).forEach((arcanaName) => {
      this[arcanaName] = props?.[arcanaName] ?? {
        level: 0,
        isRomantic: false,
        currentPoints: 0,
        currentSocialLinkLevel: new SocialLinkLevel({
          level: 0,
          pointsToNextLevel: 0,
          nextLevelPointsToNextLevel: 0,
          previousLevelPointsToNextLevel: 0,
          isRomantic: false,
          isFork: false,
          questions: [],
        }),
      };
    });
  }

  /**
   * Advances the given arcana's Social Link rank and replaces its active level definition.
   * Mutates this instance.
   *
   * Defaults: `amountOfLevels` is `1`, `currentPoints` resets to `0`, and `isRomantic`
   * keeps its existing value unless overridden.
   *
   * @param props.arcana - Arcana to advance.
   * @param props.level - {@link SocialLinkLevel} that becomes the new current level.
   * @param props.amountOfLevels - How many ranks to add (default `1`).
   * @param props.currentPoints - Points to carry into the new rank (default `0`).
   * @param props.isRomantic - Romantic-path flag; omitted keeps the current value.
   */
  increaseLevel(
    this: SocialLinkStats,
    props: {
      arcana: ArcanasType;
      level: SocialLinkLevel;
      amountOfLevels?: number;
      currentPoints?: number;
      isRomantic?: boolean;
    }
  ) {
    this[props.arcana] = {
      level: this[props.arcana].level + (props.amountOfLevels ?? 1),
      currentPoints: props.currentPoints ?? 0,
      isRomantic: props.isRomantic ?? this[props.arcana].isRomantic,
      currentSocialLinkLevel: props.level,
    };
  }

  /**
   * Adds affinity points to the given arcana without changing its rank or level definition.
   * Mutates this instance.
   *
   * @param props.arcana - Arcana to update.
   * @param props.points - Points to add to `currentPoints`.
   */
  increasePoints(this: SocialLinkStats, props: { arcana: ArcanasType; points: number }) {
    this[props.arcana] = {
      level: this[props.arcana].level,
      currentPoints: this[props.arcana].currentPoints + props.points,
      isRomantic: this[props.arcana].isRomantic,
      currentSocialLinkLevel: this[props.arcana].currentSocialLinkLevel,
    };
  }

  /**
   * Sets whether the given arcana is on the romantic path.
   * Mutates this instance.
   *
   * @param props.arcana - Arcana to update.
   * @param props.isRomantic - New romantic-path value.
   */
  updateIsRomantic(this: SocialLinkStats, props: { arcana: ArcanasType; isRomantic: boolean }) {
    this[props.arcana] = {
      level: this[props.arcana].level,
      currentPoints: this[props.arcana].currentPoints,
      isRomantic: props.isRomantic,
      currentSocialLinkLevel: this[props.arcana].currentSocialLinkLevel,
    };
  }

  /**
   * Whether the given arcana has enough `currentPoints` to rank up, based on
   * `currentSocialLinkLevel.pointsToNextLevel`.
   *
   * @param props.arcana - Arcana to check.
   * @returns `true` when current points meet or exceed the points needed for the next level.
   */
  getIsNewLevel(this: SocialLinkStats, props: { arcana: ArcanasType }) {
    return (
      this[props.arcana].currentPoints >=
      this[props.arcana].currentSocialLinkLevel.pointsToNextLevel
    );
  }
}
