import _ from 'lodash';

import { Card } from '@components/card';
import { rowFactory } from '@components/row/factory';
import { BaseEvent } from '@services/event/base';

import {
  SpecialEventsNames,
  type SpecialEventRow,
  type SpecialEventsNamesType,
  type TextEventProps,
} from './types';

import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';

export class TextEvent extends BaseEvent {
  static readonly name: SpecialEventsNamesType = SpecialEventsNames.Text;

  readonly rows: SpecialEventRow[];
  readonly isTall: boolean;
  readonly header?: string;

  constructor(props: TextEventProps) {
    super({ ...props, skipCheck: true, isChangeable: false });
    this.rows = props.rows;
    this.isTall = props.isTall;
    this.header = props.header;
  }

  render(this: TextEvent, _props: IsAvailableProps): React.ReactNode {
    const rows = _.map(this.rows, (row) => rowFactory(row.name, row.props));
    return (
      <Card
        isSelectable={this.isChangeable}
        isTall={this.isTall}
        header={this.header}
        body={rows}
        time={this.time}
      />
    );
  }

  calculateStats(this: TextEvent, _props: IsAvailableProps): Stats {
    return this.stats;
  }

  override serialize(): { name: SpecialEventsNamesType; props: TextEventProps } {
    const { props } = super.serialize();
    return {
      name: SpecialEventsNames.Text,
      props: {
        ...props,
        rows: this.rows,
        isTall: this.isTall,
      },
    };
  }
}
