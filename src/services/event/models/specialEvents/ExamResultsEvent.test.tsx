import { cleanup, render, screen } from '@testing-library/react';
import dayjs from 'dayjs';
import { afterEach, describe, expect, it } from 'vite-plus/test';

import { Times } from '@constants/times';
import {
  createCharacterStatsFixture,
  createDayFixture,
  createIsAvailablePropsFixture,
  createStatsFixture,
} from '@services/fixtures';
import { CharacterStatsNames } from '@services/stats/characterStats/types';

import { ExamResultsEvent } from './ExamResultsEvent';
import { SpecialEventsNames } from './types';

import type { IsAvailableProps } from '@services/availability';

const baseEventProps = {
  time: Times.ExamResults,
  skipCheck: true,
  isChangeable: true,
};

/**
 * Builds {@link IsAvailableProps} whose exam day and week-before Academics total
 * are the two inputs {@link ExamResultsEvent.getModifiers} reads.
 *
 * `getModifiers` looks the reward up by `currentDay.date` and grades it against
 * `dayWeekBefore.statsAtEndOfDay`, so only those fields need shaping here.
 */
function createExamProps({
  examDate = '2009-05-25',
  academicsWeekBefore = 0,
}: { examDate?: string; academicsWeekBefore?: number } = {}): IsAvailableProps {
  const date = dayjs(examDate);
  const weekBeforeStats = createStatsFixture({
    characterStats: createCharacterStatsFixture({
      [CharacterStatsNames.Academics]: academicsWeekBefore,
    }),
  });

  return createIsAvailablePropsFixture({
    date,
    currentDay: createDayFixture({ date }),
    dayWeekBefore: createDayFixture({
      date: date.subtract(7, 'day'),
      statsAtStartOfDay: weekBeforeStats,
    }),
  });
}

/** Builds an event whose own stats hold `charmPoints` Charm (Academics/Courage stay at 10). */
function createEvent(charmPoints = 10): ExamResultsEvent {
  return new ExamResultsEvent({
    ...baseEventProps,
    stats: createStatsFixture({
      characterStats: createCharacterStatsFixture({
        [CharacterStatsNames.Charm]: charmPoints,
      }),
    }),
  });
}

describe('ExamResultsEvent', () => {
  describe('constructor', () => {
    it('forces skipCheck and isChangeable off regardless of the props passed', () => {
      const event = new ExamResultsEvent({
        time: Times.ExamResults,
        skipCheck: true,
        isChangeable: true,
      });

      expect(event.skipCheck).toBe(false);
      expect(event.isChangeable).toBe(false);
      expect(event.time).toBe(Times.ExamResults);
    });

    it('defaults its stats to an empty Stats instance when none are provided', () => {
      const event = new ExamResultsEvent({
        time: Times.ExamResults,
        skipCheck: true,
        isChangeable: true,
      });

      expect(event.stats.characterStats[CharacterStatsNames.Charm]).toBe(0);
    });
  });

  describe('serialize', () => {
    it('reports the special-event name and the forced skipCheck / isChangeable values', () => {
      const event = new ExamResultsEvent({
        time: Times.ExamResults,
        skipCheck: true,
        isChangeable: true,
      });

      expect(event.serialize()).toEqual({
        name: SpecialEventsNames.ExamResults,
        props: {
          time: Times.ExamResults,
          skipCheck: false,
          isChangeable: false,
        },
      });
    });
  });

  describe('getModifiers', () => {
    it('returns the "Top class" reward when week-before Academics meets the max threshold', () => {
      // 2009-05-25 max threshold is Academics level 3 (>= 55 points).
      const result = createEvent().getModifiers(createExamProps({ academicsWeekBefore: 55 }));

      expect(result).toEqual({
        characterStatsModifier: [{ name: CharacterStatsNames.Charm, operator: '+', value: 4 }],
        examResultsModifier: 1.51,
        label: 'Top class',
      });
    });

    it('returns the "Top 10" reward when Academics clears only the min threshold', () => {
      // level 2 (>= 20 points) clears min but falls short of the level-3 max.
      const result = createEvent().getModifiers(createExamProps({ academicsWeekBefore: 20 }));

      expect(result).toEqual({
        characterStatsModifier: [{ name: CharacterStatsNames.Charm, operator: '+', value: 3 }],
        examResultsModifier: 1.21,
        label: 'Top 10',
      });
    });

    it('returns the "Average result" reward when Academics is below the min threshold', () => {
      // level 1 (19 points) misses the level-2 min.
      const result = createEvent().getModifiers(createExamProps({ academicsWeekBefore: 19 }));

      expect(result).toEqual({
        characterStatsModifier: [{ name: CharacterStatsNames.Charm, operator: '+', value: 2 }],
        examResultsModifier: 1,
        label: 'Average result',
      });
    });

    it('grades a later exam date against its higher thresholds', () => {
      const event = createEvent();
      // 2009-12-21: min is Academics level 5 (>= 155), max is level 6 (>= 230).
      const topClass = event.getModifiers(
        createExamProps({ examDate: '2009-12-21', academicsWeekBefore: 230 })
      );
      const topTen = event.getModifiers(
        createExamProps({ examDate: '2009-12-21', academicsWeekBefore: 155 })
      );
      const average = event.getModifiers(
        createExamProps({ examDate: '2009-12-21', academicsWeekBefore: 154 })
      );

      expect(topClass.label).toBe('Top class');
      expect(topTen.label).toBe('Top 10');
      expect(average.label).toBe('Average result');
    });

    it('ignores current-day Academics and grades the week-before total', () => {
      const date = dayjs('2009-05-25');
      const highStats = createStatsFixture({
        characterStats: createCharacterStatsFixture({ [CharacterStatsNames.Academics]: 230 }),
      });
      const props = createIsAvailablePropsFixture({
        date,
        stats: highStats,
        currentDay: createDayFixture({ date, statsAtStartOfDay: highStats }),
        dayWeekBefore: createDayFixture({
          date: date.subtract(7, 'day'),
          statsAtStartOfDay: createStatsFixture({
            characterStats: createCharacterStatsFixture({ [CharacterStatsNames.Academics]: 0 }),
          }),
        }),
      });

      expect(createEvent().getModifiers(props).label).toBe('Average result');
    });

    it('throws when the current day is not a scheduled exam-results date', () => {
      expect(() =>
        createEvent().getModifiers(createExamProps({ examDate: '2009-06-01' }))
      ).toThrow();
    });
  });

  describe('render', () => {
    afterEach(() => {
      cleanup();
    });

    it('shows the exam-results header, the result label, and the Charm modifier', () => {
      render(<>{createEvent().render(createExamProps({ academicsWeekBefore: 55 }))}</>);

      expect(screen.getByRole('heading', { name: 'Exam Results' })).toBeInTheDocument();
      expect(screen.getByText('Top class')).toBeInTheDocument();
      expect(screen.getByText('Charm +4')).toBeInTheDocument();
    });

    it('renders a non-selectable card', () => {
      render(<>{createEvent().render(createExamProps({ academicsWeekBefore: 0 }))}</>);

      expect(screen.getByText('Average result')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('calculateStats', () => {
    it('adds the Charm reward and sets the after-exam modifier for a top-class result', () => {
      const result = createEvent(10).calculateStats(createExamProps({ academicsWeekBefore: 55 }));

      expect(result.characterStats[CharacterStatsNames.Charm]).toBe(14);
      expect(result.additionalStats.afterExamModifier).toBe(1.51);
    });

    it('adds +2 Charm and leaves the after-exam modifier at 1 for an average result', () => {
      const result = createEvent(10).calculateStats(createExamProps({ academicsWeekBefore: 0 }));

      expect(result.characterStats[CharacterStatsNames.Charm]).toBe(12);
      expect(result.additionalStats.afterExamModifier).toBe(1);
    });

    it('preserves the untouched character stats', () => {
      const result = createEvent(10).calculateStats(createExamProps({ academicsWeekBefore: 55 }));

      expect(result.characterStats[CharacterStatsNames.Academics]).toBe(10);
      expect(result.characterStats[CharacterStatsNames.Courage]).toBe(10);
    });

    it('returns a new Stats instance without mutating the event stats', () => {
      const event = createEvent(10);

      const result = event.calculateStats(createExamProps({ academicsWeekBefore: 20 }));

      expect(result).not.toBe(event.stats);
      expect(event.stats.characterStats[CharacterStatsNames.Charm]).toBe(10);
      expect(event.stats.additionalStats.afterExamModifier).toBe(1);
      expect(result.characterStats[CharacterStatsNames.Charm]).toBe(13);
      expect(result.additionalStats.afterExamModifier).toBe(1.21);
    });
  });
});
