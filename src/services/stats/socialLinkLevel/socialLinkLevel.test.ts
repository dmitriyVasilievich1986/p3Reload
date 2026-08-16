import { describe, expect, it } from 'vite-plus/test';

import { SocialLinkLevel } from './socialLinkLevel';

import type { AnswerProps, QuestionProps, SocialLinkLevelProps } from './types';

function answer(points: number, isFork = false): AnswerProps {
  return {
    text: `Answer (${points})`,
    points,
    isFork,
  };
}

function question(answers: AnswerProps[], text = 'Sample question'): QuestionProps {
  return { text, answers };
}

function createLevel(
  overrides: Partial<SocialLinkLevelProps> &
    Pick<SocialLinkLevelProps, 'pointsToNextLevel' | 'questions'>
): SocialLinkLevel {
  return new SocialLinkLevel({
    level: 1,
    nextLevelPointsToNextLevel: 0,
    previousLevelPointsToNextLevel: 0,
    isRomantic: false,
    isFork: false,
    ...overrides,
  });
}

describe('SocialLinkLevel', () => {
  describe('constructor', () => {
    it('stores level props and maps questions', () => {
      const level = createLevel({
        level: 3,
        pointsToNextLevel: 20,
        nextLevelPointsToNextLevel: 30,
        previousLevelPointsToNextLevel: 10,
        isRomantic: true,
        isFork: true,
        questions: [question([answer(15), answer(5)])],
      });

      expect(level.level).toBe(3);
      expect(level.pointsToNextLevel).toBe(20);
      expect(level.nextLevelPointsToNextLevel).toBe(30);
      expect(level.previousLevelPointsToNextLevel).toBe(10);
      expect(level.isRomantic).toBe(true);
      expect(level.isFork).toBe(true);
      expect(level.questions).toHaveLength(1);
      expect(level.questions[0]?.maxPoints).toBe(15);
    });
  });

  describe('getIsCardNeeded', () => {
    // One question with maxPoints 15:
    // pointsWithoutCard (modifier 1) = floor(15 * 1) = 15
    // pointsWithCard (modifier 1) = floor(15 * 1.51) = 22
    const questions = [question([answer(15), answer(5), answer(0)])];

    it('returns false when points without a card are enough to reach the next level', () => {
      const level = createLevel({
        pointsToNextLevel: 15,
        questions,
      });

      expect(level.getIsCardNeeded({ modifier: 1 })).toEqual({
        isCardNeeded: false,
        pointsWithoutCard: 15,
        pointsWithCard: 22,
      });
    });

    it('returns false when points without a card exceed points needed for the next level', () => {
      const level = createLevel({
        pointsToNextLevel: 10,
        questions,
      });

      expect(level.getIsCardNeeded({ modifier: 1 })).toEqual({
        isCardNeeded: false,
        pointsWithoutCard: 15,
        pointsWithCard: 22,
      });
    });

    it('returns true when only points with a card are enough to reach the next level', () => {
      const level = createLevel({
        pointsToNextLevel: 20,
        questions,
      });

      expect(level.getIsCardNeeded({ modifier: 1 })).toEqual({
        isCardNeeded: true,
        pointsWithoutCard: 15,
        pointsWithCard: 22,
      });
    });

    it('returns true when neither hangout reaches the next level but a card reduces remaining hangouts', () => {
      const level = createLevel({
        pointsToNextLevel: 100,
        questions,
      });

      expect(level.getIsCardNeeded({ modifier: 1 })).toEqual({
        isCardNeeded: true,
        pointsWithoutCard: 15,
        pointsWithCard: 22,
      });
    });

    it('sums max points across multiple questions when applying the modifier', () => {
      // without card: floor(15*1) + floor(10*1) = 25
      // with card: floor(15*1.51) + floor(10*1.51) = 22 + 15 = 37
      const questionsForSum = [question([answer(15)]), question([answer(10)])];

      expect(
        createLevel({
          pointsToNextLevel: 30,
          questions: questionsForSum,
        }).getIsCardNeeded({ modifier: 1 })
      ).toEqual({
        isCardNeeded: true,
        pointsWithoutCard: 25,
        pointsWithCard: 37,
      });
      expect(
        createLevel({
          pointsToNextLevel: 25,
          questions: questionsForSum,
        }).getIsCardNeeded({ modifier: 1 })
      ).toEqual({
        isCardNeeded: false,
        pointsWithoutCard: 25,
        pointsWithCard: 37,
      });
    });

    it('floors each question contribution when applying the modifier', () => {
      // without card: floor(15 * 1.51) = 22
      // with card: floor(15 * 1.51 * 1.51) = floor(34.2765) = 34
      const singleQuestion = [question([answer(15)])];

      expect(
        createLevel({
          pointsToNextLevel: 30,
          questions: singleQuestion,
        }).getIsCardNeeded({ modifier: 1.51 })
      ).toEqual({
        isCardNeeded: true,
        pointsWithoutCard: 22,
        pointsWithCard: 34,
      });
      expect(
        createLevel({
          pointsToNextLevel: 22,
          questions: singleQuestion,
        }).getIsCardNeeded({ modifier: 1.51 })
      ).toEqual({
        isCardNeeded: false,
        pointsWithoutCard: 22,
        pointsWithCard: 34,
      });
    });

    it('uses optional arguments when provided instead of defaults', () => {
      // Defaults from questions would yield without=15 / with=22 and currentPoints=0,
      // so pointsToNextLevel 20 would return true. Overrides force the third branch
      // and make the card strategy worse, so the method returns false.
      const level = createLevel({
        pointsToNextLevel: 30,
        questions,
      });

      expect(
        level.getIsCardNeeded({
          modifier: 1,
          currentPoints: 5,
          pointsWithoutCard: 20,
          pointsWithCard: 5,
          pointsForCalculation: 10,
        })
      ).toEqual({
        isCardNeeded: false,
        pointsWithoutCard: 20,
        pointsWithCard: 5,
      });
    });
  });
});
