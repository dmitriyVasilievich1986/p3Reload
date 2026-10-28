import dayjs from 'dayjs';

import { Card } from '@components/card';
import { LabelRow, CheckboxRow } from '@components/row';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Flags } from '@constants/flags';
import { Districts } from '@constants/places';
import { socialLinkFullNames } from '@constants/socialLinkNames';
import {
  DateAvailability,
  DayOfWeekAvailability,
  IsEventInHistoryAvailability,
} from '@services/availability';
import { BaseEvent } from '@services/event/base';

import { FlagEventsNames, type FlagEventsNamesType } from './types';

import type { AvailabilityBase, IsAvailableProps } from '@services/availability';
import type { EventProps } from '@services/event/types';
import type { Stats } from '@services/stats/stats';

export class HangedManFlagEvent extends BaseEvent {
  static readonly name: FlagEventsNamesType = FlagEventsNames.HangedManFlag;

  static readonly header: string = 'Hanged Man [Prerequisites]';

  static readonly availabilities: AvailabilityBase[] = [
    new IsEventInHistoryAvailability({ name: Flags.HangedManFlag, isInHistory: false }),
    new DateAvailability({ operator: 'ge', value: dayjs('2009-05-06') }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Monday, DayOfWeek.Wednesday, DayOfWeek.Saturday],
    }),
  ];

  constructor(props: EventProps) {
    super({ ...props, skipCheck: false, isChangeable: false });
  }

  calculateStats(this: HangedManFlagEvent, _props: IsAvailableProps): Stats {
    const additionalStats = this.stats.additionalStats.addEvent(Flags.HangedManFlag);
    return this.stats.updateAdditionalStats(additionalStats);
  }

  render(this: HangedManFlagEvent, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof HangedManFlagEvent;
    return (
      <Card
        key={`${constructor.name}-${props.time}`}
        isSelectable={this.isChangeable}
        time={props.time}
        body={
          <>
            <LabelRow key="district" label="District:" text={Districts.NaganakiShrine} />
            <LabelRow key="name" label="Name:" text={socialLinkFullNames.HangedMan} />
            <CheckboxRow text="Buy Weird Takoyaki from Octopia at Iwatodai Station Strip Mall 1F." />
            <CheckboxRow text="Buy Mad Bull from the vending machine at Iwatodai Station." />
            <CheckboxRow
              text={`Give them to ${socialLinkFullNames.HangedMan} at ${Districts.NaganakiShrine}."`}
            />
            <CheckboxRow text="Promise to play with her." />
          </>
        }
        header={constructor.header}
      />
    );
  }
}
