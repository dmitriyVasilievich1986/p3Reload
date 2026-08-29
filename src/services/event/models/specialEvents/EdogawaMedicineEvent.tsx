import { Card } from '@components/card';
import { LabelRow, ModifiersRow } from '@components/row';
import { Places, Districts } from '@constants/places';
import {
  AvailabilityBase,
  CharacterStatsAvailability,
  DayOffAvailability,
  TartarusAvailability,
  type IsAvailableProps,
} from '@services/availability';
import { BaseEvent } from '@services/event/base';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { modifiersFormatter } from '@utils/modifiersFormatter';

import { SpecialEventsNames, type SpecialEventsNamesType } from './types';

import type { EventProps } from '@services/event/types';
import type { Stats } from '@services/stats/stats';

export class EdogawaMedicineEvent extends BaseEvent {
  static readonly name: SpecialEventsNamesType = SpecialEventsNames.EdogawaMedicine;

  static readonly header: string = "Drink Mr. Edogawa's medicine";
  static readonly place: string = Places.NurseOffice;
  static readonly district: string = Districts.GekkoukanHighSchool;

  /** Rules that must pass before this event can be scheduled or selected. */
  static readonly availabilities: AvailabilityBase[] = [
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new TartarusAvailability(),
    new CharacterStatsAvailability({
      name: CharacterStatsNames.Courage,
      operator: 'lt',
      level: 6,
    }),
  ];

  constructor(props: EventProps) {
    super({ ...props, skipCheck: false, isChangeable: false });
  }

  calculateStats(this: EdogawaMedicineEvent, _props: IsAvailableProps): Stats {
    const characterStats = this.stats.characterStats.modify(
      (this.constructor as typeof EdogawaMedicineEvent).modifiers
    );
    return this.stats.updateCharacterStats(characterStats);
  }

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Courage, operator: '+', value: 2 },
  ];

  render(this: EdogawaMedicineEvent, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof EdogawaMedicineEvent;
    return (
      <Card
        key={`${constructor.name}-${props.time}`}
        isSelectable={this.isChangeable}
        time={props.time}
        body={
          <>
            <LabelRow key="place" label="Place:" text={constructor.place} />
            <LabelRow key="district" label="District:" text={constructor.district} />
            <ModifiersRow modifiers={modifiersFormatter(constructor.modifiers)} />
          </>
        }
        header={constructor.header}
      />
    );
  }
}
