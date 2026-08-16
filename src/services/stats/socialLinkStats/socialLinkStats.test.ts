import { describe, expect, it } from 'vite-plus/test';

import { Arcanas } from '@constants/arcanas';
import { SocialLinkLevel } from '@services/stats/socialLinkLevel/socialLinkLevel';

import { SocialLinkStats } from './socialLinkStats';

import type { SocialLinkStatsType } from './types';

function createLevel(
  overrides: Partial<ConstructorParameters<typeof SocialLinkLevel>[0]> = {}
): SocialLinkLevel {
  return new SocialLinkLevel({
    level: 1,
    pointsToNextLevel: 20,
    nextLevelPointsToNextLevel: 0,
    previousLevelPointsToNextLevel: 0,
    isRomantic: false,
    isFork: false,
    questions: [],
    ...overrides,
  });
}

function createArcanaStats(overrides: Partial<SocialLinkStatsType> = {}): SocialLinkStatsType {
  return {
    level: 1,
    isRomantic: false,
    currentPoints: 5,
    currentSocialLinkLevel: createLevel(),
    ...overrides,
  };
}

describe('SocialLinkStats', () => {
  describe('constructor', () => {
    it('defaults every arcana to level 0 with empty points and a level-0 social link', () => {
      const stats = new SocialLinkStats();

      for (const arcana of Object.values(Arcanas)) {
        expect(stats[arcana].level).toBe(0);
        expect(stats[arcana].isRomantic).toBe(false);
        expect(stats[arcana].currentPoints).toBe(0);
        expect(stats[arcana].currentSocialLinkLevel.level).toBe(0);
        expect(stats[arcana].currentSocialLinkLevel.pointsToNextLevel).toBe(0);
      }
    });

    it('accepts initial stats for specific arcanas and defaults the rest', () => {
      const magicianLevel = createLevel({ level: 2, pointsToNextLevel: 30 });
      const magician = createArcanaStats({
        level: 2,
        isRomantic: true,
        currentPoints: 12,
        currentSocialLinkLevel: magicianLevel,
      });

      const stats = new SocialLinkStats({
        [Arcanas.Magician]: magician,
      });

      expect(stats[Arcanas.Magician]).toEqual(magician);
      expect(stats[Arcanas.Fool].level).toBe(0);
      expect(stats[Arcanas.Fool].currentPoints).toBe(0);
    });
  });

  describe('increaseLevel', () => {
    it('returns a new instance with level increased by 1, points reset, and the provided social link level', () => {
      const nextLevel = createLevel({ level: 2, pointsToNextLevel: 25 });
      const loversBefore = createArcanaStats({
        level: 1,
        currentPoints: 18,
        isRomantic: false,
      });
      const stats = new SocialLinkStats({
        [Arcanas.Lovers]: loversBefore,
      });

      const result = stats.increaseLevel({
        arcana: Arcanas.Lovers,
        level: nextLevel,
      });

      expect(result).not.toBe(stats);
      expect(stats[Arcanas.Lovers]).toEqual(loversBefore);
      expect(result[Arcanas.Lovers]).toEqual({
        level: 2,
        currentPoints: 0,
        isRomantic: false,
        currentSocialLinkLevel: nextLevel,
      });
    });

    it('uses optional amountOfLevels, currentPoints, and isRomantic when provided', () => {
      const nextLevel = createLevel({ level: 4, isRomantic: true });
      const loversBefore = createArcanaStats({
        level: 1,
        currentPoints: 8,
        isRomantic: false,
      });
      const stats = new SocialLinkStats({
        [Arcanas.Lovers]: loversBefore,
      });

      const result = stats.increaseLevel({
        arcana: Arcanas.Lovers,
        level: nextLevel,
        amountOfLevels: 3,
        currentPoints: 4,
        isRomantic: true,
      });

      expect(result).not.toBe(stats);
      expect(stats[Arcanas.Lovers]).toEqual(loversBefore);
      expect(result[Arcanas.Lovers]).toEqual({
        level: 4,
        currentPoints: 4,
        isRomantic: true,
        currentSocialLinkLevel: nextLevel,
      });
    });

    it('does not change other arcanas', () => {
      const stats = new SocialLinkStats({
        [Arcanas.Magician]: createArcanaStats({ level: 3, currentPoints: 7 }),
      });
      const magicianBefore = { ...stats[Arcanas.Magician] };

      const result = stats.increaseLevel({
        arcana: Arcanas.Fool,
        level: createLevel({ level: 1 }),
      });

      expect(result).not.toBe(stats);
      expect(result[Arcanas.Magician]).toEqual(magicianBefore);
      expect(result[Arcanas.Fool].level).toBe(1);
      expect(stats[Arcanas.Fool].level).toBe(0);
    });
  });

  describe('increasePoints', () => {
    it('returns a new instance with points added and other fields preserved', () => {
      const level = createLevel({ level: 2, pointsToNextLevel: 40 });
      const emperorBefore = createArcanaStats({
        level: 2,
        currentPoints: 10,
        isRomantic: true,
        currentSocialLinkLevel: level,
      });
      const stats = new SocialLinkStats({
        [Arcanas.Emperor]: emperorBefore,
      });

      const result = stats.increasePoints({ arcana: Arcanas.Emperor, points: 5 });

      expect(result).not.toBe(stats);
      expect(stats[Arcanas.Emperor]).toEqual(emperorBefore);
      expect(result[Arcanas.Emperor]).toEqual({
        level: 2,
        currentPoints: 15,
        isRomantic: true,
        currentSocialLinkLevel: level,
      });
    });

    it('does not change other arcanas', () => {
      const stats = new SocialLinkStats({
        [Arcanas.Sun]: createArcanaStats({ currentPoints: 3 }),
      });
      const sunBefore = { ...stats[Arcanas.Sun] };

      const result = stats.increasePoints({ arcana: Arcanas.Moon, points: 10 });

      expect(result).not.toBe(stats);
      expect(result[Arcanas.Sun]).toEqual(sunBefore);
      expect(result[Arcanas.Moon].currentPoints).toBe(10);
      expect(stats[Arcanas.Moon].currentPoints).toBe(0);
    });
  });

  describe('updateIsRomantic', () => {
    it('updates isRomantic and preserves other fields', () => {
      const level = createLevel({ level: 3 });
      const stats = new SocialLinkStats({
        [Arcanas.Priestess]: createArcanaStats({
          level: 3,
          currentPoints: 9,
          isRomantic: false,
          currentSocialLinkLevel: level,
        }),
      });

      stats.updateIsRomantic({ arcana: Arcanas.Priestess, isRomantic: true });

      expect(stats[Arcanas.Priestess]).toEqual({
        level: 3,
        currentPoints: 9,
        isRomantic: true,
        currentSocialLinkLevel: level,
      });
    });
  });

  describe('getIsNewLevel', () => {
    it('returns true when current points meet points needed for the next level', () => {
      const stats = new SocialLinkStats({
        [Arcanas.Chariot]: createArcanaStats({
          currentPoints: 20,
          currentSocialLinkLevel: createLevel({ pointsToNextLevel: 20 }),
        }),
      });

      expect(stats.getIsNewLevel({ arcana: Arcanas.Chariot })).toBe(true);
    });

    it('returns true when current points exceed points needed for the next level', () => {
      const stats = new SocialLinkStats({
        [Arcanas.Chariot]: createArcanaStats({
          currentPoints: 25,
          currentSocialLinkLevel: createLevel({ pointsToNextLevel: 20 }),
        }),
      });

      expect(stats.getIsNewLevel({ arcana: Arcanas.Chariot })).toBe(true);
    });

    it('returns false when current points are below points needed for the next level', () => {
      const stats = new SocialLinkStats({
        [Arcanas.Chariot]: createArcanaStats({
          currentPoints: 19,
          currentSocialLinkLevel: createLevel({ pointsToNextLevel: 20 }),
        }),
      });

      expect(stats.getIsNewLevel({ arcana: Arcanas.Chariot })).toBe(false);
    });
  });
});
