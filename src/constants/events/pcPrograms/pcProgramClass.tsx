import { SocialLinkAvailableProps } from "@/constants/socialLinks/types";
import { StatsRepresentation, StatsNames } from "@/constants/stats";

import { AvailabilityType } from "@/constants/availability/types";
import {
  AvailableSingleTimeEventsIsIn,
  AvailableStatGreater,
  AvailableDateGreater,
  AvailableTimesIsIn,
  AvailableIsDayOff,
  And_,
  Or_,
} from "@/constants/availability/AvailableClass";

import { allEventsNames, Categories, Times } from "../types";
import { EventClass } from "../EventClass";

export class pcProgram extends EventClass {
  constructor(props: {
    name: allEventsNames;
    stats?: (StatsRepresentation | string)[];
    startDate?: Date;
    place?: string;
    price?: number;
  }) {
    const date = props.startDate ?? new Date(2009, 3, 29);

    const availability = new And_([
      new AvailableSingleTimeEventsIsIn({ name: props.name, reverse: true }),
      new AvailableDateGreater({ date }),
      new Or_([
        new AvailableTimesIsIn({ times: [Times.Evening] }),
        new And_([
          new AvailableIsDayOff(),
          new AvailableTimesIsIn({ times: [Times.Day] }),
        ]),
      ]),
    ]);

    super({
      ...props,
      category: Categories.Stats,
      stats: props.stats ?? [],
      time: Times.Evening,
      availability,
    });
  }

  upgrade(props: SocialLinkAvailableProps) {
    const payload = super.upgrade(props);

    return {
      ...payload,
      singleTimeEvents: [...props.currentDay.singleTimeEvents, this.name],
    };
  }
}

export class pcProgramSuspicious extends EventClass {
  constructor(props: {
    name: allEventsNames;
    stats?: (StatsRepresentation | string)[];
    availability?: AvailabilityType;
    startDate?: Date;
    place?: string;
    price?: number;
  }) {
    const date = props.startDate ?? new Date(2009, 3, 29);

    const availability =
      props.availability ??
      new And_([
        new AvailableSingleTimeEventsIsIn({ name: props.name, reverse: true }),
        new AvailableStatGreater({ name: StatsNames.Courage, level: 1 }),
        new AvailableDateGreater({ date }),
        new Or_([
          new AvailableTimesIsIn({ times: [Times.Evening] }),
          new And_([
            new AvailableIsDayOff(),
            new AvailableTimesIsIn({ times: [Times.Day] }),
          ]),
        ]),
      ]);

    super({
      ...props,
      category: Categories.Stats,
      stats: props.stats ?? [],
      time: Times.Evening,
      availability,
    });
  }

  upgrade(props: SocialLinkAvailableProps) {
    const payload = super.upgrade(props);

    const currentDay = props.currentDay;
    const singleTimeEvents = currentDay.singleTimeEvents.includes(this.name)
      ? props.currentDay.singleTimeEvents
      : [...props.currentDay.singleTimeEvents, this.name];

    return {
      ...payload,
      singleTimeEvents,
    };
  }
}
