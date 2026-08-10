import { describe, expect, it } from 'vite-plus/test';

import { Times } from '@constants/times';

import { eventFactory } from './factory';
import { StayAwakeAcademicsEvent } from './models/characterStatsModifyEvents/academic';
import { AcademicStatModifyNames } from './models/characterStatsModifyEvents/academic/types';
import { ChagalCafeCharmEvent } from './models/characterStatsModifyEvents/charm';
import { CharmStatModifyNames } from './models/characterStatsModifyEvents/charm/types';
import { SleepDuringClassCourageEvent } from './models/characterStatsModifyEvents/courage';
import { CourageStatModifyNames } from './models/characterStatsModifyEvents/courage/types';
import { SchoolQuestionsEvent } from './models/schoolQuestions';
import { SchoolQuestionEventsNames } from './models/schoolQuestions/types';

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
  isChangeable: true,
};

describe('eventFactory', () => {
  it('creates a SchoolQuestionEventsNamesType event', () => {
    const event = eventFactory(SchoolQuestionEventsNames.schoolQuestion, {
      skipCheck: false,
      isChangeable: false,
      time: Times.Morning,
      questions,
    });

    expect(event).toBeInstanceOf(SchoolQuestionsEvent);
    expect(event.serialize()).toEqual({
      name: SchoolQuestionEventsNames.schoolQuestion,
      props: {
        skipCheck: false,
        isChangeable: false,
        time: Times.Morning,
        questions,
      },
    });
  });

  it('creates an AcademicStatModifyNamesType event', () => {
    const event = eventFactory(AcademicStatModifyNames.stayAwake, {
      ...baseEventProps,
      time: Times.Morning,
    });

    expect(event).toBeInstanceOf(StayAwakeAcademicsEvent);
    expect(event.serialize()).toEqual({
      name: AcademicStatModifyNames.stayAwake,
      props: {
        ...baseEventProps,
        time: Times.Morning,
      },
    });
  });

  it('creates a CharmStatModifyNamesType event', () => {
    const event = eventFactory(CharmStatModifyNames.chagallCafeCharm, {
      ...baseEventProps,
      time: Times.Evening,
    });

    expect(event).toBeInstanceOf(ChagalCafeCharmEvent);
    expect(event.serialize()).toEqual({
      name: CharmStatModifyNames.chagallCafeCharm,
      props: {
        ...baseEventProps,
        time: Times.Evening,
      },
    });
  });

  it('creates a CourageStatModifyNamesType event', () => {
    const event = eventFactory(CourageStatModifyNames.sleepDuringClass, {
      ...baseEventProps,
      time: Times.Morning,
    });

    expect(event).toBeInstanceOf(SleepDuringClassCourageEvent);
    expect(event.serialize()).toEqual({
      name: CourageStatModifyNames.sleepDuringClass,
      props: {
        ...baseEventProps,
        time: Times.Morning,
      },
    });
  });

  it('throws when the event name is unknown', () => {
    expect(() =>
      eventFactory('UnknownEvent' as never, {
        ...baseEventProps,
        time: Times.Morning,
      })
    ).toThrow('Event UnknownEvent not found');
  });
});
