import { cloneElement, isValidElement, type ReactElement } from 'react';

import { Card, type CardProps } from '@components/card';
import { LabelRow, ModifiersRow } from '@components/row';
import { Places, Districts } from '@constants/places';
import { BaseEvent } from '@services/event/base';
import { modifiersFormatter } from '@utils/modifiersFormatter';
import { priceFormatter } from '@utils/priceFormatter';

import type { PCProgramEventsNamesType } from './types';
import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';
import type { CharacterStatsModifierType } from '@services/stats/characterStats/types';

export abstract class LobbyPCProgramsBase extends BaseEvent {
  static readonly name: PCProgramEventsNamesType;
  static readonly modifiers: CharacterStatsModifierType[];

  static readonly header?: string;
  static readonly price?: number;

  calculateStats(this: LobbyPCProgramsBase, _props: IsAvailableProps): Stats {
    const characterStats = this.stats.characterStats.modify(
      (this.constructor as typeof LobbyPCProgramsBase).modifiers
    );
    return this.stats.updateCharacterStats(characterStats);
  }

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
            <ModifiersRow modifiers={modifiersFormatter(this.modifiers)} />
          </>
        }
        header={this.name}
      />
    );
  }

  render(props: IsAvailableProps): React.ReactNode {
    const node = (this.constructor as typeof LobbyPCProgramsBase).render(props);
    return isValidElement(node)
      ? cloneElement(node as ReactElement<CardProps>, {
          time: props.time,
          isSelectable: this.isChangeable,
        })
      : node;
  }
}
