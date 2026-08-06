import { describe, expect, it } from 'vite-plus/test';

import { Answer, Question } from './question';

import type { AnswerProps } from './types';

const POINTS = [0, 5, 10, 15] as const;

function answer(props: Partial<AnswerProps> & Pick<AnswerProps, 'points'>): Answer {
  return new Answer({
    text: props.text ?? `Answer (${props.points})`,
    points: props.points,
    isFork: props.isFork ?? false,
  });
}

function question(answers: Answer[]): Question {
  return new Question({
    text: 'Sample question',
    answers,
  });
}

describe('Question', () => {
  describe('maxPoints', () => {
    it('is 0 when there are no answers', () => {
      expect(question([]).maxPoints).toBe(0);
    });

    it('equals the only answer points when there is a single answer', () => {
      for (const points of POINTS) {
        expect(question([answer({ points })]).maxPoints).toBe(points);
      }
    });

    it('is always the highest value among available answer points', () => {
      expect(question([answer({ points: 0 }), answer({ points: 5 })]).maxPoints).toBe(5);
      expect(question([answer({ points: 10 }), answer({ points: 5 })]).maxPoints).toBe(10);
      expect(
        question([
          answer({ points: 0 }),
          answer({ points: 15 }),
          answer({ points: 5 }),
          answer({ points: 10 }),
        ]).maxPoints
      ).toBe(15);
    });

    it('uses fork answer points as top priority even when lower than other answers', () => {
      expect(
        question([
          answer({ points: 15 }),
          answer({ points: 5, isFork: true }),
          answer({ points: 10 }),
        ]).maxPoints
      ).toBe(5);
    });

    it('uses fork answer points when they are the highest', () => {
      expect(
        question([
          answer({ points: 0 }),
          answer({ points: 15, isFork: true }),
          answer({ points: 10 }),
        ]).maxPoints
      ).toBe(15);
    });

    it('uses fork answer points of 0 when a fork is present', () => {
      expect(
        question([answer({ points: 15 }), answer({ points: 0, isFork: true })]).maxPoints
      ).toBe(0);
    });

    it('falls back to the highest non-fork points when no answer is a fork', () => {
      expect(
        question([answer({ points: 5 }), answer({ points: 10 }), answer({ points: 0 })]).maxPoints
      ).toBe(10);
    });
  });
});
