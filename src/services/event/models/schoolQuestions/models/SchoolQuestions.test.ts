import { describe, expect, it } from 'vite-plus/test';

import { Times } from '@constants/times';
import { createIsAvailablePropsFixture } from '@services/fixtures';
import { Stats } from '@services/stats';
import { CharacterStats } from '@services/stats/characterStats';
import { CharacterStatsNames } from '@services/stats/characterStats/types';

import { SchoolQuestionEventsNames } from '../types';
import { SchoolQuestionsEvent } from './SchoolQuestions';

const questions = [
  {
    text: 'What is the capital of Japan?',
    answers: [
      { text: 'Tokyo', points: 1 },
      { text: 'Osaka', points: 0 },
    ],
  },
];

const baseEventProps = {
  skipCheck: false,
  isChangeable: false,
};

describe('SchoolQuestionsEvent', () => {
  it('serializes name, time, skipCheck, isChangeable, and questions', () => {
    const event = new SchoolQuestionsEvent({
      ...baseEventProps,
      time: Times.Morning,
      questions,
    });
    const serialized = JSON.parse(JSON.stringify(event.serialize()));

    expect(serialized).toEqual({
      name: SchoolQuestionEventsNames.schoolQuestion,
      props: {
        ...baseEventProps,
        time: Times.Morning,
        questions,
      },
    });
  });

  it('creates a new instance from serialize output', () => {
    const event = new SchoolQuestionsEvent({
      ...baseEventProps,
      time: Times.Morning,
      questions,
    });
    const serialized = JSON.parse(JSON.stringify(event.serialize()));
    const restored = new SchoolQuestionsEvent(serialized.props);

    expect(restored).toBeInstanceOf(SchoolQuestionsEvent);
    expect(restored.time).toEqual(event.time);
    expect(restored.skipCheck).toEqual(event.skipCheck);
    expect(restored.isChangeable).toEqual(event.isChangeable);
    expect(restored.questions).toEqual(event.questions);
    expect(JSON.parse(JSON.stringify(restored.serialize()))).toEqual(serialized);
  });

  it('adds 2 Charm when calculating stats', () => {
    const event = new SchoolQuestionsEvent({
      ...baseEventProps,
      time: Times.Morning,
      questions,
      stats: new Stats({
        characterStats: new CharacterStats({
          [CharacterStatsNames.Charm]: 1,
        }),
      }),
    });

    const result = event.calculateStats(createIsAvailablePropsFixture());

    expect(result.characterStats[CharacterStatsNames.Charm]).toBe(3);
    expect(result.characterStats[CharacterStatsNames.Academics]).toBe(0);
    expect(result.characterStats[CharacterStatsNames.Courage]).toBe(0);
  });
});
