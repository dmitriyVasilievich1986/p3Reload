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
/**
 * Animal Othello lobby PC program event at Iwatodai Dormitory.
 */
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { LobbyPCProgramsBase } from '../../../base';
import { LobbyPCProgramsJuneNames } from '../types';

/**
 * Lobby PC program that plays "Revenge Site Note" at the Iwatodai Dormitory.
 *
 * Grants +4 Courage. Availability is inherited from {@link LobbyPCProgramsJuneBase}.
 */
export class RevengeSiteNotePCEvent extends LobbyPCProgramsBase {
  /** Discriminator used to identify the event type during serialization. */
  static readonly name = LobbyPCProgramsJuneNames.revengeSiteNote;

  readonly price: number = 500;

  /** Rules that must pass before this event can be scheduled or selected. */
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

  /** Stat changes applied when this event is completed. */
  static readonly modifiers: CharacterStatsModifierType[] = [
    {
      name: CharacterStatsNames.Courage,
      operator: '+',
      value: 4,
    },
  ];
}
