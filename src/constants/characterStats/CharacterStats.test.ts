import { describe, expect, it } from 'vite-plus/test';

import { CharacterStats } from './CharacterStats';
import { CharacterStatsLevels } from './const';
import { CharacterStatsNames } from './types';

describe('CharacterStats', () => {
  it('defaults all stats to 0', () => {
    const stats = new CharacterStats();

    expect(stats[CharacterStatsNames.Academics]).toBe(0);
    expect(stats[CharacterStatsNames.Courage]).toBe(0);
    expect(stats[CharacterStatsNames.Charm]).toBe(0);
  });

  it('accepts initial stats', () => {
    const stats = new CharacterStats({
      [CharacterStatsNames.Academics]: 2,
      [CharacterStatsNames.Courage]: 3,
      [CharacterStatsNames.Charm]: 1,
    });

    expect(stats[CharacterStatsNames.Academics]).toBe(2);
    expect(stats[CharacterStatsNames.Courage]).toBe(3);
    expect(stats[CharacterStatsNames.Charm]).toBe(1);
  });

  it('increases a single stat', () => {
    const stats = new CharacterStats({
      [CharacterStatsNames.Academics]: 1,
    });

    const next = stats.modify([{ name: CharacterStatsNames.Academics, operator: '+', value: 2 }]);

    expect(next[CharacterStatsNames.Academics]).toBe(3);
    expect(stats[CharacterStatsNames.Academics]).toBe(1);
  });

  it('decreases a single stat', () => {
    const stats = new CharacterStats({
      [CharacterStatsNames.Courage]: 5,
    });

    const next = stats.modify([{ name: CharacterStatsNames.Courage, operator: '-', value: 3 }]);

    expect(next[CharacterStatsNames.Courage]).toBe(2);
    expect(stats[CharacterStatsNames.Courage]).toBe(5);
  });

  it('applies multiple modifiers across different stats', () => {
    const stats = new CharacterStats({
      [CharacterStatsNames.Academics]: 1,
      [CharacterStatsNames.Courage]: 2,
      [CharacterStatsNames.Charm]: 3,
    });

    const next = stats.modify([
      { name: CharacterStatsNames.Academics, operator: '+', value: 2 },
      { name: CharacterStatsNames.Courage, operator: '-', value: 1 },
      { name: CharacterStatsNames.Charm, operator: '+', value: 4 },
    ]);

    expect(next[CharacterStatsNames.Academics]).toBe(3);
    expect(next[CharacterStatsNames.Courage]).toBe(1);
    expect(next[CharacterStatsNames.Charm]).toBe(7);
  });

  it('stacks multiple modifiers on the same stat', () => {
    const stats = new CharacterStats({
      [CharacterStatsNames.Academics]: 1,
    });

    const next = stats.modify([
      { name: CharacterStatsNames.Academics, operator: '+', value: 2 },
      { name: CharacterStatsNames.Academics, operator: '+', value: 3 },
      { name: CharacterStatsNames.Academics, operator: '-', value: 1 },
    ]);

    expect(next[CharacterStatsNames.Academics]).toBe(5);
  });

  it('throws when a modifier would reduce a stat below 0', () => {
    const stats = new CharacterStats({
      [CharacterStatsNames.Courage]: 2,
    });

    expect(() =>
      stats.modify([{ name: CharacterStatsNames.Courage, operator: '-', value: 3 }])
    ).toThrow('Invalid value: -1');
  });

  describe('getCharacterStatsLevelFromPoints', () => {
    it('returns the lowest level for 0 points', () => {
      const level = CharacterStats.getCharacterStatsLevelFromPoints(
        CharacterStatsNames.Academics,
        0
      );

      expect(level).toEqual(
        CharacterStatsLevels[CharacterStatsNames.Academics].find((entry) => entry.level === 1)
      );
    });

    it('returns the highest level whose threshold is met', () => {
      const level = CharacterStats.getCharacterStatsLevelFromPoints(
        CharacterStatsNames.Academics,
        100
      );

      expect(level).toEqual(
        CharacterStatsLevels[CharacterStatsNames.Academics].find((entry) => entry.level === 4)
      );
    });

    it('returns the previous level when points are below the next threshold', () => {
      const level = CharacterStats.getCharacterStatsLevelFromPoints(
        CharacterStatsNames.Courage,
        59
      );

      expect(level).toEqual(
        CharacterStatsLevels[CharacterStatsNames.Courage].find((entry) => entry.level === 4)
      );
    });

    it('returns max level when points meet or exceed the top threshold', () => {
      const level = CharacterStats.getCharacterStatsLevelFromPoints(CharacterStatsNames.Charm, 100);

      expect(level).toEqual(
        CharacterStatsLevels[CharacterStatsNames.Charm].find((entry) => entry.maxLevel)
      );
    });

    it('returns max level for points above the top threshold', () => {
      const level = CharacterStats.getCharacterStatsLevelFromPoints(
        CharacterStatsNames.Academics,
        999
      );

      expect(level.level).toBe(6);
      expect(level.maxLevel).toBe(true);
    });
  });

  describe('getCharacterStatsLevelByLevel', () => {
    it('returns the level matching the given level number', () => {
      const level = CharacterStats.getCharacterStatsLevelByLevel(CharacterStatsNames.Courage, 3);

      expect(level.level).toBe(3);
      expect(level.name).toBe('Determined');
    });
  });

  describe('getCharmModifier', () => {
    it('returns 1 when Charm is below max level', () => {
      const stats = new CharacterStats({
        [CharacterStatsNames.Charm]: 99,
      });

      expect(stats.getCharmModifier()).toBe(1);
    });

    it('returns 1.51 when Charm is at max level', () => {
      const stats = new CharacterStats({
        [CharacterStatsNames.Charm]: 100,
      });

      expect(stats.getCharmModifier()).toBe(1.51);
    });

    it('returns 1.51 when Charm exceeds the max threshold', () => {
      const stats = new CharacterStats({
        [CharacterStatsNames.Charm]: 150,
      });

      expect(stats.getCharmModifier()).toBe(1.51);
    });
  });
});
