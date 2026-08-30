import { Card } from '@components/card';
import { LabelRow, ModifiersRow } from '@components/row';
import { Districts } from '@constants/places';
import { BaseEvent } from '@services/event/base';
import {
  type CharacterStatsModifierType,
  CharacterStatsNames,
} from '@services/stats/characterStats/types';
import { modifiersFormatter } from '@utils/modifiersFormatter';

import { SpecialEventsNames, type SpecialEventsNamesType } from './types';

import type { IsAvailableProps } from '@services/availability';
import type { EventProps } from '@services/event/types';
import type { Stats } from '@services/stats/stats';

export class ElizabethRequest75Event extends BaseEvent {
  static readonly name: SpecialEventsNamesType = SpecialEventsNames.ElizabethRequest75;

  static readonly header: string = "Elizabeth's Request #75";

  static readonly modifiers: CharacterStatsModifierType[] = [
    { name: CharacterStatsNames.Academics, operator: '+', value: 2 },
  ];

  constructor(props: EventProps) {
    super({ ...props, skipCheck: true, isChangeable: false });
  }

  calculateStats(this: ElizabethRequest75Event, _props: IsAvailableProps): Stats {
    const characterStats = this.stats.characterStats.modify(
      (this.constructor as typeof ElizabethRequest75Event).modifiers
    );
    return this.stats.updateCharacterStats(characterStats);
  }

  render(this: ElizabethRequest75Event, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof ElizabethRequest75Event;
    return (
      <Card
        key={`${constructor.name}-${props.time}`}
        isSelectable={this.isChangeable}
        time={props.time}
        body={
          <>
            <LabelRow key="district" label="District:" text={Districts.GekkoukanHighSchool} />
            <ModifiersRow modifiers={modifiersFormatter(constructor.modifiers)} />
          </>
        }
        header={constructor.header}
      />
    );
  }
}
