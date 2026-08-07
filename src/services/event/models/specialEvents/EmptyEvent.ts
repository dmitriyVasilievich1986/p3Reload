import { BaseEvent } from '@services/event/base';

import { specialEventsNames, type specialEventsNamesType } from './types';

import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';

export class EmptyEvent extends BaseEvent {
  static readonly name: specialEventsNamesType = specialEventsNames.Empty;

  render(this: EmptyEvent, _props: IsAvailableProps): React.ReactNode {
    return null;
  }

  calculateStats(this: EmptyEvent, _props: IsAvailableProps): Stats {
    return this.stats;
  }
}
