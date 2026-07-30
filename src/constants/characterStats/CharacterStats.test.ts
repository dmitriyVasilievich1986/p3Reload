import { describe, expect, it } from 'vite-plus/test';

import { CharacterStats } from './CharacterStats';
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
});
