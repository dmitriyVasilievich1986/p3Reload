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
import { LobbyPCProgramsJuneNames } from '../types';

export class RevengeSiteNotePCEvent extends LobbyPCProgramsBase {
  static readonly name = LobbyPCProgramsJuneNames.revengeSiteNote;

  readonly price: number = 500;

  static readonly availabilities: AvailabilityBase[] = [
    new DateAvailability({ operator: 'ge', value: dayjs('2009-06-23') }),
    new IsEventInHistoryAvailability({
      name: LobbyPCProgramsJuneNames.revengeSiteNote,
      isInHistory: false,
    }),
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
      name: CharacterStatsNames.Courage,
      operator: '+',
      value: 4,
    },
  ];
}
