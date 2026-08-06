import { BaseEvent } from '@services/event/base';

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

  render(_props: IsAvailableProps): React.ReactNode {
    return null;
  }
}
