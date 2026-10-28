import { Card } from '@components/card';
import { LabelRow, CheckboxRow } from '@components/row';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Flags } from '@constants/flags';
import { Places, Districts } from '@constants/places';
import { socialLinkFullNames } from '@constants/socialLinkNames';
import {
  ExamAvailability,
  DayOffAvailability,
  DayOfWeekAvailability,
  IsEventInHistoryAvailability,
} from '@services/availability';
import { BaseEvent } from '@services/event/base';

import { FlagEventsNames, type FlagEventsNamesType } from './types';

import type { AvailabilityBase, IsAvailableProps } from '@services/availability';
import type { EventProps } from '@services/event/types';
import type { Stats } from '@services/stats/stats';

export class JusticeFlag2Event extends BaseEvent {
  static readonly name: FlagEventsNamesType = FlagEventsNames.JusticeFlag2;

  static readonly header: string = 'Justice [Prerequisites]';

  static readonly availabilities: AvailabilityBase[] = [
    new IsEventInHistoryAvailability({ name: Flags.JusticeFlag1, isInHistory: true }),
    new IsEventInHistoryAvailability({ name: Flags.JusticeFlag2, isInHistory: false }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Thursday, DayOfWeek.Saturday],
    }),
  ];

  constructor(props: EventProps) {
    super({ ...props, skipCheck: false, isChangeable: false });
  }

  calculateStats(this: JusticeFlag2Event, _props: IsAvailableProps): Stats {
    const additionalStats = this.stats.additionalStats.addEvent(Flags.JusticeFlag2);
    return this.stats.updateAdditionalStats(additionalStats);
  }

  render(this: JusticeFlag2Event, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof JusticeFlag2Event;
    return (
      <Card
        key={`${constructor.name}-${props.time}`}
        isSelectable={this.isChangeable}
        time={props.time}
        body={
          <>
            <LabelRow key="district" label="District:" text={Districts.GekkoukanHighSchool} />
            <LabelRow key="place" label="Place:" text={Places.Classroom2FHallway} />
            <CheckboxRow
              key="justiceFlag2"
              text={`Talk to "${socialLinkFullNames.Justice}" a second time`}
            />
          </>
        }
        header={constructor.header}
      />
    );
  }
}
