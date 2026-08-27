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
 * Language Made Easy lobby PC program event at Iwatodai Dormitory.
 */
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { LobbyPCProgramsBase } from '../../../base';
import { LobbyPCProgramsAprilNames } from '../types';

/**
 * Lobby PC program that runs "Language Made Easy" at the Iwatodai Dormitory.
 *
 * Grants +4 Academics. Availability is inherited from {@link LobbyPCProgramsAprilBase}.
 */
export class LanguageMadeEasyPCEvent extends LobbyPCProgramsBase {
  /** Discriminator used to identify the event type during serialization. */
  static readonly name = LobbyPCProgramsAprilNames.languageMadeEasy;

  /** Rules that must pass before this event can be scheduled or selected. */
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

  /** Stat changes applied when this event is completed. */
  static readonly modifiers: CharacterStatsModifierType[] = [
    {
      name: CharacterStatsNames.Academics,
      operator: '+',
      value: 4,
    },
  ];
}
