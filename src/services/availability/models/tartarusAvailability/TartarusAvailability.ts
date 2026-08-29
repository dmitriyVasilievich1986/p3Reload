import { AvailabilityBase, type IsAvailableProps } from '@services/availability';
import { SpecialEventsNames } from '@services/event/models/specialEvents/types';

export class TartarusAvailability extends AvailabilityBase {
  isAvailable(props: IsAvailableProps): boolean {
    return props.previousDay.getEventByName(SpecialEventsNames.Tartarus) !== undefined;
  }
}
