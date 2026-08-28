import dayjs from 'dayjs';

import { Times } from '@constants/times';
import {
  DateAvailability,
  IsEventInHistoryAvailability,
  TimeAvailability,
  AndAvailability,
  OrAvailability,
  DayOffAvailability,
  AvailabilityBase,
} from '@services/availability';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { LobbyPCProgramsBase } from '../../../base';
import { LobbyPCProgramsAprilNames } from '../types';

export class LessonsInEtiquettePCEvent extends LobbyPCProgramsBase {
  static readonly name = LobbyPCProgramsAprilNames.lessonsInEtiquette;

  static readonly availabilities: AvailabilityBase[] = [
    new DateAvailability({ operator: 'ge', value: dayjs('2009-04-29') }),
    new IsEventInHistoryAvailability({ name: this.name, isInHistory: false }),
    new OrAvailability({
      availabilities: [
        new TimeAvailability({ times: [Times.Evening] }),
        new AndAvailability({
          availabilities: [
            new TimeAvailability({ times: [Times.Day] }),
            new DayOffAvailability({ isAvailableOnADayOff: true }),
          ],
        }),
      ],
    }),
  ];

  static readonly modifiers: CharacterStatsModifierType[] = [
    {
      name: CharacterStatsNames.Charm,
      operator: '+',
      value: 4,
    },
  ];
}
