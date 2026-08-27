import dayjs from 'dayjs';

import { Card } from '@components/card';
import { LabelRow, ModifiersRow } from '@components/row';
import { Places, Districts } from '@constants/places';
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
import { LobbyPCProgramsJulyNames } from '@services/event/models/PCProgrammEvents/models/july/types';
/**
 * Animal Othello lobby PC program event at Iwatodai Dormitory.
 */
import { type CharacterStatsModifierType } from '@services/stats/characterStats/types';
import { priceFormatter } from '@utils/priceFormatter';

import { LobbyPCProgramsBase } from '../../../base';
import { LobbyPCProgramsSeptemberNames } from '../types';

import type { IsAvailableProps } from '@services/availability/types';

/**
 * Lobby PC program that plays "History Website Note" at the Iwatodai Dormitory.
 *
 * Grants "Ambushes add to Theurgy Gauge". Availability is inherited from {@link LobbyPCProgramsSeptemberBase}.
 */
export class HistoryWebsiteNotePCEvent extends LobbyPCProgramsBase {
  /** Discriminator used to identify the event type during serialization. */
  static readonly name = LobbyPCProgramsSeptemberNames.historyWebsiteNote;

  readonly price: number = 8_000;

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new DateAvailability({ operator: 'ge', value: dayjs('2009-09-10') }),
    new IsEventInHistoryAvailability({
      name: LobbyPCProgramsSeptemberNames.historyWebsiteNote,
      isInHistory: false,
    }),
    new IsEventInHistoryAvailability({
      name: LobbyPCProgramsJulyNames.securitySiteNote,
      isInHistory: true,
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

  static readonly modifiers: CharacterStatsModifierType[] = [];

  static render(this: typeof LobbyPCProgramsBase, props: IsAvailableProps): React.ReactNode {
    return (
      <Card
        key={`${this.name}-${props.time}`}
        body={
          <>
            {this.price && (
              <LabelRow key="price" label="Price:" text={priceFormatter(this.price)} />
            )}
            <LabelRow key="place" label="Place:" text={Places.LobbyPC} />
            <LabelRow key="district" label="District:" text={Districts.IwatodaiDormitory} />
            <ModifiersRow modifiers={['Ambushes add to Theurgy Gauge']} />
          </>
        }
        header={this.name}
      />
    );
  }
}
