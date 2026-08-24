import { describe, expect, it } from 'vite-plus/test';

import { EpisodesStats } from './EpisodesStats';
import { EpisodeSocialLinkNames } from './types';

describe('EpisodesStats', () => {
  describe('constructor', () => {
    it('defaults every link to 0 when no props are given', () => {
      const stats = new EpisodesStats();

      expect(stats[EpisodeSocialLinkNames.Iori]).toBe(0);
      expect(stats[EpisodeSocialLinkNames.Amada]).toBe(0);
      expect(stats[EpisodeSocialLinkNames.Aragaki]).toBe(0);
      expect(stats[EpisodeSocialLinkNames.Koromaru]).toBe(0);
      expect(stats[EpisodeSocialLinkNames.Mochizuki]).toBe(0);
      expect(stats[EpisodeSocialLinkNames.Sanada]).toBe(0);
    });

    it('accepts initial values and defaults the rest to 0', () => {
      const stats = new EpisodesStats({
        [EpisodeSocialLinkNames.Iori]: 2,
        [EpisodeSocialLinkNames.Sanada]: 3,
      });

      expect(stats[EpisodeSocialLinkNames.Iori]).toBe(2);
      expect(stats[EpisodeSocialLinkNames.Sanada]).toBe(3);
      expect(stats[EpisodeSocialLinkNames.Amada]).toBe(0);
      expect(stats[EpisodeSocialLinkNames.Aragaki]).toBe(0);
      expect(stats[EpisodeSocialLinkNames.Koromaru]).toBe(0);
      expect(stats[EpisodeSocialLinkNames.Mochizuki]).toBe(0);
    });
  });

  describe('increaseLevel', () => {
    it('increases the given link by 1 when no amount is given', () => {
      const stats = new EpisodesStats();

      const next = stats.increaseLevel(EpisodeSocialLinkNames.Aragaki);

      expect(next[EpisodeSocialLinkNames.Aragaki]).toBe(1);
    });

    it('increases the given link by the provided amount', () => {
      const stats = new EpisodesStats();

      const next = stats.increaseLevel(EpisodeSocialLinkNames.Koromaru, 3);

      expect(next[EpisodeSocialLinkNames.Koromaru]).toBe(3);
    });

    it('returns a new instance and does not mutate the original', () => {
      const stats = new EpisodesStats();

      const next = stats.increaseLevel(EpisodeSocialLinkNames.Mochizuki);

      expect(next).not.toBe(stats);
      expect(stats[EpisodeSocialLinkNames.Mochizuki]).toBe(0);
      expect(next[EpisodeSocialLinkNames.Mochizuki]).toBe(1);
    });

    it('preserves the levels of the other links', () => {
      const stats = new EpisodesStats({
        [EpisodeSocialLinkNames.Iori]: 1,
        [EpisodeSocialLinkNames.Amada]: 2,
      });

      const next = stats.increaseLevel(EpisodeSocialLinkNames.Iori);

      expect(next[EpisodeSocialLinkNames.Iori]).toBe(2);
      expect(next[EpisodeSocialLinkNames.Amada]).toBe(2);
    });

    it('accumulates across repeated calls', () => {
      const stats = new EpisodesStats();

      const next = stats
        .increaseLevel(EpisodeSocialLinkNames.Sanada)
        .increaseLevel(EpisodeSocialLinkNames.Sanada)
        .increaseLevel(EpisodeSocialLinkNames.Sanada, 2);

      expect(next[EpisodeSocialLinkNames.Sanada]).toBe(4);
    });
  });
});
