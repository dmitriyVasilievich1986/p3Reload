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
import { LobbyPCProgramsJulyNames } from '@services/event/models/PCProgramEvents/models/july/types';
import { type CharacterStatsModifierType } from '@services/stats/characterStats/types';
import { priceFormatter } from '@utils/priceFormatter';

import { LobbyPCProgramsBase } from '../../../base';
import { LobbyPCProgramsSeptemberNames } from '../types';

import type { IsAvailableProps } from '@services/availability/types';

export class AssassinWebsiteNotePCEvent extends LobbyPCProgramsBase {
  static readonly name = LobbyPCProgramsSeptemberNames.assassinWebsiteNote;

  readonly price: number = 8_000;

  static readonly availabilities: AvailabilityBase[] = [
    new DateAvailability({ operator: 'ge', value: dayjs('2009-09-10') }),
    new IsEventInHistoryAvailability({
      name: LobbyPCProgramsSeptemberNames.assassinWebsiteNote,
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
            <ModifiersRow
              modifiers={[
                'Ambush is guaranteed to Distress at least one Shadow (when Distress is possible)',
              ]}
            />
          </>
        }
        header={this.name}
      />
    );
  }
}
