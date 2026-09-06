import { Card } from '@components/card';
import { LabelRow, CheckboxRow } from '@components/row';
import { Arcanas } from '@constants/arcanas';
import { DayOfWeek } from '@constants/dayOfWeek';
import { Flags } from '@constants/flags';
import { Places, Districts } from '@constants/places';
import { socialLinkFullNames } from '@constants/socialLinkNames';
import {
  ExamAvailability,
  DayOffAvailability,
  DayOfWeekAvailability,
  IsEventInHistoryAvailability,
  SocialLinkLevelAvailability,
} from '@services/availability';
import { BaseEvent } from '@services/event/base';

import { FlagEventsNames, type FlagEventsNamesType } from './types';

import type { AvailabilityBase, IsAvailableProps } from '@services/availability';
import type { EventProps } from '@services/event/types';
import type { Stats } from '@services/stats/stats';

export class JusticeFlag1Event extends BaseEvent {
  static readonly name: FlagEventsNamesType = FlagEventsNames.JusticeFlag1;

  static readonly header: string = 'Justice [Prerequisites]';

  static readonly availabilities: AvailabilityBase[] = [
    new IsEventInHistoryAvailability({ name: Flags.JusticeFlag1, isInHistory: false }),
    new SocialLinkLevelAvailability({ name: Arcanas.Emperor, operator: 'ge', level: 1 }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Thursday, DayOfWeek.Saturday],
    }),
  ];

  constructor(props: EventProps) {
    super({ ...props, skipCheck: false, isChangeable: false });
  }

  calculateStats(this: JusticeFlag1Event, _props: IsAvailableProps): Stats {
    const additionalStats = this.stats.additionalStats.addEvent(Flags.JusticeFlag1);
    return this.stats.updateAdditionalStats(additionalStats);
  }

  render(this: JusticeFlag1Event, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof JusticeFlag1Event;
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
              key="justiceFlag11"
              text={`Talk to "${socialLinkFullNames.Justice}" for the first time`}
            />
            <CheckboxRow key="justiceFlag12" text={'Choose "I just wanted to talk..."'} />
          </>
        }
        header={constructor.header}
      />
    );
  }
}
