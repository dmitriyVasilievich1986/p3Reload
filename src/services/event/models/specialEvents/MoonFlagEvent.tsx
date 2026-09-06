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

import { SpecialEventsNames, type SpecialEventsNamesType } from './types';

import type { AvailabilityBase, IsAvailableProps } from '@services/availability';
import type { EventProps } from '@services/event/types';
import type { Stats } from '@services/stats/stats';

export class MoonFlagEvent extends BaseEvent {
  static readonly name: SpecialEventsNamesType = SpecialEventsNames.MoonFlag;

  static readonly header: string = 'Moon [Prerequisites]';

  static readonly availabilities: AvailabilityBase[] = [
    new IsEventInHistoryAvailability({ name: Flags.MoonFlag, isInHistory: false }),
    new SocialLinkLevelAvailability({ name: Arcanas.Magician, operator: 'ge', level: 3 }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Tuesday, DayOfWeek.Thursday, DayOfWeek.Friday],
    }),
  ];

  constructor(props: EventProps) {
    super({ ...props, skipCheck: false, isChangeable: false });
  }

  calculateStats(this: MoonFlagEvent, _props: IsAvailableProps): Stats {
    const additionalStats = this.stats.additionalStats.addEvent(Flags.MoonFlag);
    return this.stats.updateAdditionalStats(additionalStats);
  }

  render(this: MoonFlagEvent, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof MoonFlagEvent;
    return (
      <Card
        key={`${constructor.name}-${props.time}`}
        isSelectable={this.isChangeable}
        time={props.time}
        body={
          <>
            <LabelRow key="district" label="District:" text={Districts.GekkoukanHighSchool} />
            <LabelRow key="place" label="Place:" text={Places.Classroom2F} />
            <CheckboxRow
              key="moonFlag"
              text={`Talk to "${socialLinkFullNames.Magician}" about Gourmet King`}
            />
          </>
        }
        header={constructor.header}
      />
    );
  }
}
