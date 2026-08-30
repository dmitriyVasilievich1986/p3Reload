import dayjs from 'dayjs';

import { Card } from '@components/card';
import { TextRow, ModifiersRow } from '@components/row';
import { DatesFormat } from '@constants/dates';
import { CharacterStatsAvailability } from '@services/availability';
import { BaseEvent } from '@services/event/base';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { modifiersFormatter } from '@utils/modifiersFormatter';

import { SpecialEventsNames, type SpecialEventsNamesType } from './types';

import type { EventProps } from '../../types';
import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';

export class ExamResultsEvent extends BaseEvent {
  static readonly name: SpecialEventsNamesType = SpecialEventsNames.ExamResults;

  constructor(props: EventProps) {
    super({ ...props, skipCheck: false, isChangeable: false });
  }

  getModifiers(
    this: ExamResultsEvent,
    props: IsAvailableProps
  ): {
    characterStatsModifier: CharacterStatsModifierType[];
    examResultsModifier: number;
    label: string;
  } {
    const evaluations = {
      [dayjs('2009-05-25').format(DatesFormat)]: {
        max: new CharacterStatsAvailability({
          name: CharacterStatsNames.Academics,
          operator: 'ge',
          level: 3,
        }),
        min: new CharacterStatsAvailability({
          name: CharacterStatsNames.Academics,
          operator: 'ge',
          level: 2,
        }),
      },
      [dayjs('2009-07-24').format(DatesFormat)]: {
        max: new CharacterStatsAvailability({
          name: CharacterStatsNames.Academics,
          operator: 'ge',
          level: 4,
        }),
        min: new CharacterStatsAvailability({
          name: CharacterStatsNames.Academics,
          operator: 'ge',
          level: 3,
        }),
      },
      [dayjs('2009-10-19').format(DatesFormat)]: {
        max: new CharacterStatsAvailability({
          name: CharacterStatsNames.Academics,
          operator: 'ge',
          level: 5,
        }),
        min: new CharacterStatsAvailability({
          name: CharacterStatsNames.Academics,
          operator: 'ge',
          level: 4,
        }),
      },
      [dayjs('2009-12-21').format(DatesFormat)]: {
        max: new CharacterStatsAvailability({
          name: CharacterStatsNames.Academics,
          operator: 'ge',
          level: 6,
        }),
        min: new CharacterStatsAvailability({
          name: CharacterStatsNames.Academics,
          operator: 'ge',
          level: 5,
        }),
      },
    };
    const examDate = props.currentDay.date.format(DatesFormat);
    const currentEvaluation = evaluations[examDate];
    if (!currentEvaluation) {
      throw new Error(`ExamResultsEvent: unsupported exam date ${examDate}`);
    }
    if (
      currentEvaluation.max.isAvailable({ ...props, stats: props.dayWeekBefore.statsAtEndOfDay })
    ) {
      return {
        characterStatsModifier: [{ name: CharacterStatsNames.Charm, operator: '+', value: 4 }],
        examResultsModifier: 1.51,
        label: 'Top class',
      };
    } else if (
      currentEvaluation.min.isAvailable({ ...props, stats: props.dayWeekBefore.statsAtEndOfDay })
    ) {
      return {
        characterStatsModifier: [{ name: CharacterStatsNames.Charm, operator: '+', value: 3 }],
        examResultsModifier: 1.21,
        label: 'Top 10',
      };
    }
    return {
      characterStatsModifier: [{ name: CharacterStatsNames.Charm, operator: '+', value: 2 }],
      examResultsModifier: 1,
      label: 'Average result',
    };
  }

  render(props: IsAvailableProps): React.ReactNode {
    const result = this.getModifiers(props);
    return (
      <Card
        header="Exam Results"
        isSelectable={this.isChangeable}
        time={this.time}
        body={
          <>
            <TextRow text={result.label} isBold={true} textAlign="center" />
            <ModifiersRow modifiers={modifiersFormatter(result.characterStatsModifier)} />
          </>
        }
      />
    );
  }

  calculateStats(this: ExamResultsEvent, props: IsAvailableProps): Stats {
    const result = this.getModifiers(props);
    const characterStats = this.stats.characterStats.modify(result.characterStatsModifier);
    const additionalStats = this.stats.additionalStats.updateAfterExamModifier(
      result.examResultsModifier
    );
    return this.stats.updateAdditionalStats(additionalStats).updateCharacterStats(characterStats);
  }
}
