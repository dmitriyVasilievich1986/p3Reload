import { describe, expect, it } from 'vite-plus/test';

import { Arcanas } from '@constants/arcanas';

import { AdditionalStats } from './additionalStats';

const arcanasUsingModifier = [
  Arcanas.Aeon,
  Arcanas.Chariot,
  Arcanas.Emperor,
  Arcanas.Empress,
  Arcanas.Fortune,
  Arcanas.Justice,
  Arcanas.Lovers,
  Arcanas.Magician,
  Arcanas.Moon,
  Arcanas.Priestess,
  Arcanas.Strength,
  Arcanas.Temperance,
] as const;

const arcanasIgnoringModifier = [
  Arcanas.Devil,
  Arcanas.Fool,
  Arcanas.HangedMan,
  Arcanas.Hermit,
  Arcanas.Hierophant,
  Arcanas.Star,
  Arcanas.Sun,
  Arcanas.Tower,
  Arcanas.Death,
] as const;

describe('AdditionalStats', () => {
  describe('constructor', () => {
    it('defaults to an empty events set and afterExamModifier of 1', () => {
      const stats = new AdditionalStats();

      expect(stats.singleTimeEvents).toEqual(new Set());
      expect(stats.afterExamModifier).toBe(1);
    });

    it('accepts initial singleTimeEvents and afterExamModifier', () => {
      const events = new Set(['event-a', 'event-b']);
      const stats = new AdditionalStats({
        singleTimeEvents: events,
        afterExamModifier: 1.5,
      });

      expect(stats.singleTimeEvents).toEqual(events);
      expect(stats.afterExamModifier).toBe(1.5);
    });
  });

  describe('isEventHappened', () => {
    it('returns true when the event is in the set', () => {
      const stats = new AdditionalStats({
        singleTimeEvents: new Set(['school-festival']),
      });

      expect(stats.isEventHappened('school-festival')).toBe(true);
    });

    it('returns false when the event is not in the set', () => {
      const stats = new AdditionalStats({
        singleTimeEvents: new Set(['school-festival']),
      });

      expect(stats.isEventHappened('summer-festival')).toBe(false);
    });

    it('returns false for an empty events set', () => {
      const stats = new AdditionalStats();

      expect(stats.isEventHappened('any-event')).toBe(false);
    });
  });

  describe('addEvent', () => {
    it('returns a new instance with the event added', () => {
      const stats = new AdditionalStats();

      const next = stats.addEvent('school-festival');

      expect(next).not.toBe(stats);
      expect(next.isEventHappened('school-festival')).toBe(true);
      expect(stats.isEventHappened('school-festival')).toBe(false);
    });

    it('preserves existing events and afterExamModifier', () => {
      const stats = new AdditionalStats({
        singleTimeEvents: new Set(['event-a']),
        afterExamModifier: 2,
      });

      const next = stats.addEvent('event-b');

      expect(next.singleTimeEvents).toEqual(new Set(['event-a', 'event-b']));
      expect(next.afterExamModifier).toBe(2);
    });

    it('does not duplicate an event that already exists', () => {
      const stats = new AdditionalStats({
        singleTimeEvents: new Set(['event-a']),
      });

      const next = stats.addEvent('event-a');

      expect(next.singleTimeEvents).toEqual(new Set(['event-a']));
      expect(next.singleTimeEvents.size).toBe(1);
    });
  });

  describe('updateAfterExamModifier', () => {
    it('returns a new instance with the updated modifier', () => {
      const stats = new AdditionalStats({ afterExamModifier: 1 });

      const next = stats.updateAfterExamModifier(1.5);

      expect(next).not.toBe(stats);
      expect(next.afterExamModifier).toBe(1.5);
      expect(stats.afterExamModifier).toBe(1);
    });

    it('preserves singleTimeEvents', () => {
      const events = new Set(['event-a', 'event-b']);
      const stats = new AdditionalStats({
        singleTimeEvents: events,
        afterExamModifier: 1,
      });

      const next = stats.updateAfterExamModifier(2);

      expect(next.singleTimeEvents).toEqual(events);
      expect(next.afterExamModifier).toBe(2);
    });
  });

  describe('getAfterExamModifier', () => {
    it('returns the stored modifier for school-related arcanas', () => {
      const stats = new AdditionalStats({ afterExamModifier: 1.5 });

      for (const arcana of arcanasUsingModifier) {
        expect(stats.getAfterExamModifier(arcana)).toBe(1.5);
      }
    });

    it('returns 1 for arcanas that do not use the after-exam modifier', () => {
      const stats = new AdditionalStats({ afterExamModifier: 1.5 });

      for (const arcana of arcanasIgnoringModifier) {
        expect(stats.getAfterExamModifier(arcana)).toBe(1);
      }
    });

    it('returns 1 for school-related arcanas when the stored modifier is the default', () => {
      const stats = new AdditionalStats();

      expect(stats.getAfterExamModifier(Arcanas.Magician)).toBe(1);
    });
  });
});
