import { describe, expect, it } from 'vite-plus/test';

import { DormActivitiesStats } from './DormActivitiesStats';
import { DormActivitiesNames } from './types';

describe('DormActivitiesStats', () => {
  describe('constructor', () => {
    it('defaults every activity to 0 when no props are given', () => {
      const stats = new DormActivitiesStats();

      expect(stats[DormActivitiesNames.IoriGarden]).toBe(0);
      expect(stats[DormActivitiesNames.IoriBook]).toBe(0);
      expect(stats[DormActivitiesNames.SanadaKitchen]).toBe(0);
      expect(stats[DormActivitiesNames.SanadaDVD]).toBe(0);
      expect(stats[DormActivitiesNames.AmadaKitchen]).toBe(0);
      expect(stats[DormActivitiesNames.AmadaDVD]).toBe(0);
      expect(stats[DormActivitiesNames.KoromaruDVD]).toBe(0);
      expect(stats[DormActivitiesNames.KoromaruBrush]).toBe(0);
      expect(stats[DormActivitiesNames.AragakiKitchen]).toBe(0);
      expect(stats[DormActivitiesNames.AragakiGarden]).toBe(0);
    });

    it('accepts initial values and defaults the rest to 0', () => {
      const stats = new DormActivitiesStats({
        [DormActivitiesNames.IoriGarden]: 2,
        [DormActivitiesNames.AragakiKitchen]: 3,
      });

      expect(stats[DormActivitiesNames.IoriGarden]).toBe(2);
      expect(stats[DormActivitiesNames.AragakiKitchen]).toBe(3);
      expect(stats[DormActivitiesNames.IoriBook]).toBe(0);
      expect(stats[DormActivitiesNames.SanadaKitchen]).toBe(0);
      expect(stats[DormActivitiesNames.SanadaDVD]).toBe(0);
      expect(stats[DormActivitiesNames.AmadaKitchen]).toBe(0);
      expect(stats[DormActivitiesNames.AmadaDVD]).toBe(0);
      expect(stats[DormActivitiesNames.KoromaruDVD]).toBe(0);
      expect(stats[DormActivitiesNames.KoromaruBrush]).toBe(0);
      expect(stats[DormActivitiesNames.AragakiGarden]).toBe(0);
    });
  });

  describe('increaseLevel', () => {
    it('increases the given activity by 1 when no amount is given', () => {
      const stats = new DormActivitiesStats();

      const next = stats.increaseLevel(DormActivitiesNames.IoriGarden);

      expect(next[DormActivitiesNames.IoriGarden]).toBe(1);
    });

    it('increases the given activity by the provided amount', () => {
      const stats = new DormActivitiesStats();

      const next = stats.increaseLevel(DormActivitiesNames.KoromaruBrush, 3);

      expect(next[DormActivitiesNames.KoromaruBrush]).toBe(3);
    });

    it('returns a new instance and does not mutate the original', () => {
      const stats = new DormActivitiesStats();

      const next = stats.increaseLevel(DormActivitiesNames.SanadaDVD);

      expect(next).not.toBe(stats);
      expect(stats[DormActivitiesNames.SanadaDVD]).toBe(0);
      expect(next[DormActivitiesNames.SanadaDVD]).toBe(1);
    });

    it('preserves the levels of the other activities', () => {
      const stats = new DormActivitiesStats({
        [DormActivitiesNames.IoriGarden]: 1,
        [DormActivitiesNames.AmadaDVD]: 2,
      });

      const next = stats.increaseLevel(DormActivitiesNames.IoriGarden);

      expect(next[DormActivitiesNames.IoriGarden]).toBe(2);
      expect(next[DormActivitiesNames.AmadaDVD]).toBe(2);
    });

    it('accumulates across repeated calls', () => {
      const stats = new DormActivitiesStats();

      const next = stats
        .increaseLevel(DormActivitiesNames.AragakiGarden)
        .increaseLevel(DormActivitiesNames.AragakiGarden)
        .increaseLevel(DormActivitiesNames.AragakiGarden, 2);

      expect(next[DormActivitiesNames.AragakiGarden]).toBe(4);
    });
  });
});
