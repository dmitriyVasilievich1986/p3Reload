import dayjs from 'dayjs';
import _ from 'lodash';

import { Card } from '@components/card';
import { LabelRow } from '@components/row';
import { rowFactory } from '@components/row/factory';
import { Places } from '@constants/places';
import { Times } from '@constants/times';
import {
  type AvailabilityBase,
  TimeAvailability,
  DateAvailability,
  type IsAvailableProps,
} from '@services/availability';
import { BaseEvent } from '@services/event/base';

import {
  SpecialEventsNames,
  type SpecialEventRow,
  type SpecialEventsNamesType,
  type TextEventProps,
} from './types';

import type { Stats } from '@services/stats';

export class TartarusEvent extends BaseEvent {
  static readonly name: SpecialEventsNamesType = SpecialEventsNames.Tartarus;

  readonly rows: SpecialEventRow[];
  readonly isTall: boolean;

  static readonly availabilities: AvailabilityBase[] = [
    new TimeAvailability({ times: [Times.Evening] }),
    new DateAvailability({
      operator: 'notIn',
      value: [
        dayjs('2009-04-29'),
        dayjs('2009-05-05'),
        dayjs('2009-05-16'),
        dayjs('2009-05-17'),
        dayjs('2009-05-25'),
        dayjs('2009-05-30'),
        dayjs('2009-06-01'),
        dayjs('2009-06-09'),
        dayjs('2009-06-10'),
        dayjs('2009-06-11'),
        dayjs('2009-06-12'),
        dayjs('2009-06-21'),
        dayjs('2009-06-28'),
        dayjs('2009-07-08'),
        dayjs('2009-07-09'),
        dayjs('2009-07-10'),
        dayjs('2009-07-11'),
        dayjs('2009-07-12'),
        dayjs('2009-07-13'),
        dayjs('2009-07-19'),
        dayjs('2009-07-23'),
        dayjs('2009-07-29'),
        dayjs('2009-08-02'),
        dayjs('2009-10-05'),
        dayjs('2009-10-06'),
        dayjs('2009-10-12'),
        dayjs('2009-11-05'),
        dayjs('2009-11-20'),
        dayjs('2009-11-22'),
        dayjs('2009-11-30'),
        dayjs('2009-12-02'),
        dayjs('2009-12-03'),
        dayjs('2009-12-04'),
        dayjs('2009-12-05'),
        dayjs('2009-12-06'),
        dayjs('2009-12-07'),
        dayjs('2009-12-08'),
        dayjs('2009-12-09'),
      ],
    }),
  ];

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
