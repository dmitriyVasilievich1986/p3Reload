import dayjs from 'dayjs';

import { Card } from '@components/card';
import { QuestionCard } from '@components/questionCard';
import { LabelRow, ModifiersRow } from '@components/row';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Places, Districts } from '@constants/places';
import { Times } from '@constants/times';
import {
  AvailabilityBase,
  TimeAvailability,
  DayOfWeekAvailability,
  DateAvailability,
  IsEventInHistoryAvailability,
  CharacterStatsAvailability,
} from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { modifiersFormatter } from '@utils/modifiersFormatter';
import { priceFormatter } from '@utils/priceFormatter';

import { CharacterStatsModifyEventBase } from '../base';
import { type CourageStatModifyNamesType, CourageStatModifyNames } from './types';

import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';

/**
 * Wilduck Burger big eater challenge event at Iwatodai Strip Mall.
 *
 * Costs 1,800 yen and grants +4 Academics, +4 Courage, and +4 Charm.
 * Available during the evening on Mondays, Tuesdays, Wednesdays, Fridays, Saturdays, and Sundays.
 *
 * This event is only available if the Big Eater Challenge event has not been completed at least once.
 */
export class WilduckBigEaterChallengeEvent extends CharacterStatsModifyEventBase {
  static readonly name: CourageStatModifyNamesType =
    CourageStatModifyNames.wilduckBigEaterChallenge;

  static readonly header: string = 'Big Eater Challenge';
  static readonly place: string = Places.WilduckBurger;
  static readonly district: string = Districts.IwatodaiStripMall;
  static readonly price: number = 1_800;

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 4 },
    { name: CharacterStatsNames.Courage, operator: '+', value: 4 },
    { name: CharacterStatsNames.Charm, operator: '+', value: 4 },
  ];

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new CharacterStatsAvailability({ name: CharacterStatsNames.Courage, operator: 'lt', level: 6 }),
    new TimeAvailability({ times: [Times.Evening] }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-05-10') }),
    new IsEventInHistoryAvailability({
      name: CourageStatModifyNames.wilduckBigEaterChallenge,
      isInHistory: false,
    }),
    new CharacterStatsAvailability({
      name: CharacterStatsNames.Courage,
      operator: 'ge',
      level: 4,
    }),
    new DayOfWeekAvailability({
      daysOfWeek: [
        DayOfWeek.Monday,
        DayOfWeek.Tuesday,
        DayOfWeek.Wednesday,
        DayOfWeek.Friday,
        DayOfWeek.Saturday,
        DayOfWeek.Sunday,
      ],
    }),
  ];

  override calculateStats(this: CharacterStatsModifyEventBase, _props: IsAvailableProps): Stats {
    const additionalStats = this.stats.additionalStats.addEvent(
      CourageStatModifyNames.wilduckBigEaterChallenge
    );
    const characterStats = this.stats.characterStats.modify(
      (this.constructor as typeof CharacterStatsModifyEventBase).modifiers
    );
    return this.stats.updateAdditionalStats(additionalStats).updateCharacterStats(characterStats);
  }

  override render(this: WilduckBigEaterChallengeEvent, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof WilduckBigEaterChallengeEvent;
    return (
      <Card
        key={`${constructor.name}-${props.time}`}
        body={
          <>
            <LabelRow key="price" label="Price:" text={priceFormatter(constructor.price)} />
            <LabelRow key="place" label="Place:" text={constructor.place} />
            <LabelRow key="district" label="District:" text={constructor.district} />
            <ModifiersRow modifiers={modifiersFormatter(constructor.modifiers)} />
            <QuestionCard
              question="No matter how much I eat, the amount of burgers doesn't seem to decrease..."
              answers={[
                { text: 'Focus on a single burger', points: 0, isFork: false },
                { text: 'Look away from the burgers', points: 15, isFork: false },
                { text: 'Glance at the pile of burgers', points: 0, isFork: false },
              ]}
            />
            <QuestionCard
              question="I feel like I'm making progress, but I shouldn't get ahead of myself..."
              answers={[
                { text: 'Eat without stopping', points: 15, isFork: false },
                { text: 'Take breaks in between bites', points: 0, isFork: false },
                { text: 'Wash it down with soda', points: 0, isFork: false },
              ]}
            />
            <QuestionCard
              question="It's the final stretch... How can I keep this up and complete the challenge...?"
              answers={[
                { text: 'Savor the flavors', points: 0, isFork: false },
                { text: 'Imagine something sour', points: 15, isFork: false },
                { text: 'Chew properly and slowly', points: 0, isFork: false },
              ]}
            />
          </>
        }
        header={constructor.header}
      />
    );
  }
}
