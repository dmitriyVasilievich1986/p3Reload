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
 * Lessons in Etiquette lobby PC program event at Iwatodai Dormitory.
 */
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';

import { LobbyPCProgramsBase } from '../../../base';
import { LobbyPCProgramsAprilNames } from '../types';

/**
 * Lobby PC program that runs "Lessons in Etiquette" at the Iwatodai Dormitory.
 *
 * Grants +4 Charm. Availability is inherited from {@link LobbyPCProgramsAprilBase}.
 */
export class LessonsInEtiquettePCEvent extends LobbyPCProgramsBase {
  /** Discriminator used to identify the event type during serialization. */
  static readonly name = LobbyPCProgramsAprilNames.lessonsInEtiquette;

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
      name: CharacterStatsNames.Charm,
      operator: '+',
      value: 4,
    },
  ];
}
