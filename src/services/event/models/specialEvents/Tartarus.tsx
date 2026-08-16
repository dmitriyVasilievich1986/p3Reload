import _ from 'lodash';

import { Card } from '@components/card';
import { LabelRow } from '@components/row';
import { rowFactory } from '@components/row/factory';
import { Places } from '@constants/places';
import { BaseEvent } from '@services/event/base';

import {
  SpecialEventsNames,
  type SpecialEventRow,
  type SpecialEventsNamesType,
  type TextEventProps,
} from './types';

import type { IsAvailableProps } from '@services/availability/types';
import type { Stats } from '@services/stats';

export class TartarusEvent extends BaseEvent {
  static readonly name: SpecialEventsNamesType = SpecialEventsNames.Tartarus;

  readonly rows: SpecialEventRow[];
  readonly isTall: boolean;

  constructor(props: TextEventProps) {
    super(props);
    this.rows = props.rows;
    this.isTall = props.isTall;
  }

  render(this: TartarusEvent, _props: IsAvailableProps): React.ReactNode {
    const rows = _.map(this.rows, (row) => rowFactory(row.name, row.props));
    return (
      <Card
        isSelectable={this.isChangeable}
        isTall={this.isTall}
        header="Tartarus"
        body={
          <>
            <LabelRow label="Place:" text={Places.Tartarus} />
            {rows}
          </>
        }
        time={this.time}
      />
    );
  }

  static render(this: typeof TartarusEvent, _props: IsAvailableProps): React.ReactNode {
    return (
      <Card
        header={Places.Tartarus}
        body={
          <>
            <LabelRow label="Place:" text={Places.Tartarus} />
          </>
        }
      />
    );
  }

  calculateStats(this: TartarusEvent, _props: IsAvailableProps): Stats {
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
