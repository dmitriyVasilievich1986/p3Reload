import { AvailabilityBase, type IsAvailableProps } from '@services/availability';

import type { DormActivitiesNamesTypes } from '@services/stats/dormActivities';

export class isDormActivitiesLevelUpAvailable extends AvailabilityBase {
  readonly name: DormActivitiesNamesTypes;
  readonly isLevelUpAvailable: boolean;

  constructor(props: { name: DormActivitiesNamesTypes; isLevelUpAvailable?: boolean }) {
    super();
    this.name = props.name;
    this.isLevelUpAvailable =
      props.isLevelUpAvailable === undefined ? true : props.isLevelUpAvailable;
  }

  isAvailable(props: IsAvailableProps): boolean {
    const level = props.stats.DormActivitiesStats[this.name as DormActivitiesNamesTypes];
    const isLevelUpAvailable = level < 3;
    return this.isLevelUpAvailable ? isLevelUpAvailable : !isLevelUpAvailable;
  }
}
