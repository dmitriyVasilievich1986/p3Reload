import { Card } from '@components/card';
import { LabelRow } from '@components/row';
import { BaseEvent } from '@services/event/base';
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
            <LabelRow key="stats" label="Stats:" text={''} />
            <ul className="list-disc pl-5 text-sm text-slate-800 dark:text-slate-100">
              {this.modifiers.map((modifier) => (
                <li key={modifier.name}>
                  {`${modifier.name} ${modifier.operator}${modifier.value}`}
                </li>
              ))}
            </ul>
          </>
        }
        header={this.header}
      />
    );
  }

  render(props: IsAvailableProps): React.ReactNode {
    return (this.constructor as typeof CharacterStatsModifyEventBase).render(props);
  }
}
