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

export class TowerFlagEvent extends BaseEvent {
  static readonly name: SpecialEventsNamesType = SpecialEventsNames.TowerFlag;

  static readonly header: string = 'Tower [Prerequisites]';

  static readonly availabilities: AvailabilityBase[] = [
    new IsEventInHistoryAvailability({ name: Flags.TowerFlag, isInHistory: false }),
    new SocialLinkLevelAvailability({ name: Arcanas.Strength, operator: 'ge', level: 4 }),
    new ExamAvailability({ isAvailableOnAnExamDay: false }),
    new DayOffAvailability({ isAvailableOnADayOff: false }),
    new DayOfWeekAvailability({
      daysOfWeek: [DayOfWeek.Wednesday, DayOfWeek.Saturday],
    }),
  ];

  constructor(props: EventProps) {
    super({ ...props, skipCheck: false, isChangeable: false });
  }

  calculateStats(this: TowerFlagEvent, _props: IsAvailableProps): Stats {
    const additionalStats = this.stats.additionalStats.addEvent(Flags.TowerFlag);
    return this.stats.updateAdditionalStats(additionalStats);
  }

  render(this: TowerFlagEvent, props: IsAvailableProps): React.ReactNode {
    const constructor = this.constructor as typeof TowerFlagEvent;
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
              key="towerFlag"
              text={`Talk to "${socialLinkFullNames.Strength}" about Strange Monk`}
            />
          </>
        }
        header={constructor.header}
      />
    );
  }
}
