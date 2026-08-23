import { cloneElement, isValidElement, type ReactElement } from 'react';

import { Card, type CardProps } from '@components/card';
import { TextRow } from '@components/row';
import { BaseEvent } from '@services/event/base';

import { SpecialEventsNames, type SpecialEventsNamesType } from './types';

import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';

export class EmptyEvent extends BaseEvent {
  static readonly name: SpecialEventsNamesType = SpecialEventsNames.Empty;

  static render(this: typeof EmptyEvent, props: IsAvailableProps): React.ReactNode {
    return (
      <Card
        header="Blank event"
        body={<TextRow key={`empty-event-${props.time}`} text="Do nothing" />}
      />
    );
  }

  render(props: IsAvailableProps): React.ReactNode {
    const node = (this.constructor as typeof EmptyEvent).render(props);
    return isValidElement(node)
      ? cloneElement(node as ReactElement<CardProps>, { time: props.time })
      : node;
  }

  calculateStats(this: EmptyEvent, _props: IsAvailableProps): Stats {
    return this.stats;
  }
}
