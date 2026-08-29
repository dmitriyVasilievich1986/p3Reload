import { describe, expect, it } from 'vite-plus/test';

import { DormActivitesStats } from './DormActivitiesStats';
import { DormActivitesNames } from './types';

describe('DormActivitesStats', () => {
  describe('constructor', () => {
    it('defaults every activity to 0 when no props are given', () => {
      const stats = new DormActivitesStats();

      expect(stats[DormActivitesNames.IoriGarden]).toBe(0);
      expect(stats[DormActivitesNames.IoriBook]).toBe(0);
      expect(stats[DormActivitesNames.SanadaKitchen]).toBe(0);
      expect(stats[DormActivitesNames.SanadaDVD]).toBe(0);
      expect(stats[DormActivitesNames.AmadaKitchen]).toBe(0);
      expect(stats[DormActivitesNames.AmadaDVD]).toBe(0);
      expect(stats[DormActivitesNames.KoromaruDVD]).toBe(0);
      expect(stats[DormActivitesNames.KoromaruBrush]).toBe(0);
      expect(stats[DormActivitesNames.AragakiKitchen]).toBe(0);
      expect(stats[DormActivitesNames.AragakiGarden]).toBe(0);
    });

    it('accepts initial values and defaults the rest to 0', () => {
      const stats = new DormActivitesStats({
        [DormActivitesNames.IoriGarden]: 2,
        [DormActivitesNames.AragakiKitchen]: 3,
      });

      expect(stats[DormActivitesNames.IoriGarden]).toBe(2);
      expect(stats[DormActivitesNames.AragakiKitchen]).toBe(3);
      expect(stats[DormActivitesNames.IoriBook]).toBe(0);
      expect(stats[DormActivitesNames.SanadaKitchen]).toBe(0);
      expect(stats[DormActivitesNames.SanadaDVD]).toBe(0);
      expect(stats[DormActivitesNames.AmadaKitchen]).toBe(0);
      expect(stats[DormActivitesNames.AmadaDVD]).toBe(0);
      expect(stats[DormActivitesNames.KoromaruDVD]).toBe(0);
      expect(stats[DormActivitesNames.KoromaruBrush]).toBe(0);
      expect(stats[DormActivitesNames.AragakiGarden]).toBe(0);
    });
  });

  describe('increaseLevel', () => {
    it('increases the given activity by 1 when no amount is given', () => {
      const stats = new DormActivitesStats();

      const next = stats.increaseLevel(DormActivitesNames.IoriGarden);

      expect(next[DormActivitesNames.IoriGarden]).toBe(1);
    });

    it('increases the given activity by the provided amount', () => {
      const stats = new DormActivitesStats();

      const next = stats.increaseLevel(DormActivitesNames.KoromaruBrush, 3);

      expect(next[DormActivitesNames.KoromaruBrush]).toBe(3);
    });

    it('returns a new instance and does not mutate the original', () => {
      const stats = new DormActivitesStats();

      const next = stats.increaseLevel(DormActivitesNames.SanadaDVD);

      expect(next).not.toBe(stats);
      expect(stats[DormActivitesNames.SanadaDVD]).toBe(0);
      expect(next[DormActivitesNames.SanadaDVD]).toBe(1);
    });

    it('preserves the levels of the other activities', () => {
      const stats = new DormActivitesStats({
        [DormActivitesNames.IoriGarden]: 1,
        [DormActivitesNames.AmadaDVD]: 2,
      });

      const next = stats.increaseLevel(DormActivitesNames.IoriGarden);

      expect(next[DormActivitesNames.IoriGarden]).toBe(2);
      expect(next[DormActivitesNames.AmadaDVD]).toBe(2);
    });

    it('accumulates across repeated calls', () => {
      const stats = new DormActivitesStats();

      const next = stats
        .increaseLevel(DormActivitesNames.AragakiGarden)
        .increaseLevel(DormActivitesNames.AragakiGarden)
        .increaseLevel(DormActivitesNames.AragakiGarden, 2);

      expect(next[DormActivitesNames.AragakiGarden]).toBe(4);
    });
  });
});
