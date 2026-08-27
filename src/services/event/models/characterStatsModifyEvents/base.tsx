import { cloneElement, isValidElement, type ReactElement } from 'react';

import { Card, type CardProps } from '@components/card';
import { LabelRow, ModifiersRow } from '@components/row';
import { BaseEvent } from '@services/event/base';
import { modifiersFormatter } from '@utils/modifiersFormatter';
import { priceFormatter } from '@utils/priceFormatter';

import type { CharacterStatsModifyNamesType } from './types';
import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';
import type { CharacterStatsModifierType } from '@services/stats/characterStats/types';

export abstract class CharacterStatsModifyEventBase extends BaseEvent {
  static readonly name: CharacterStatsModifyNamesType;
  static readonly modifiers: CharacterStatsModifierType[];

  static readonly header?: string;
  static readonly place?: string;
  static readonly district?: string;
  static readonly price?: number;

  calculateStats(this: CharacterStatsModifyEventBase, _props: IsAvailableProps): Stats {
    const characterStats = this.stats.characterStats.modify(
      (this.constructor as typeof CharacterStatsModifyEventBase).modifiers
    );
    return this.stats.updateCharacterStats(characterStats);
  }

  static render(
    this: typeof CharacterStatsModifyEventBase,
    props: IsAvailableProps
  ): React.ReactNode {
    return (
      <Card
        key={`${this.name}-${props.time}`}
        body={
          <>
            {this.price && (
              <LabelRow key="price" label="Price:" text={priceFormatter(this.price)} />
            )}
            <LabelRow key="place" label="Place:" text={this.place} />
            <LabelRow key="district" label="District:" text={this.district} />
            <ModifiersRow modifiers={modifiersFormatter(this.modifiers)} />
          </>
        }
        header={this.header}
      />
    );
  }

  render(props: IsAvailableProps): React.ReactNode {
    const node = (this.constructor as typeof CharacterStatsModifyEventBase).render(props);
    return isValidElement(node)
      ? cloneElement(node as ReactElement<CardProps>, {
          time: props.time,
          isSelectable: this.isChangeable,
        })
      : node;
  }
}
