import { SocialLinkAvailableProps } from "@/constants/socialLinks/types";
import { StatsRepresentation, StatsNames } from "@/constants/stats";
import { AvailabilityType } from "@/constants/availability/types";
import availables from "@/constants/availability/AvailableClass";

import { allEventsNames, Categories, Times } from "@/constants/events/types";
import { EventClass } from "@/constants/events/EventClass";

export class pcProgram extends EventClass {
  constructor(props: {
    name: allEventsNames;
    stats?: (StatsRepresentation | string)[];
    startDate?: Date;
    place?: string;
    price?: number;
  }) {
    const date = props.startDate ?? new Date(2009, 3, 29);

    const availability = new availables.And_([
      new availables.AvailableSingleTimeEventsIsIn({
        name: props.name,
        reverse: true,
      }),
      new availables.And_([
        new availables.AvailableDateGreater({ date }),
        new availables.AvailableDateIsIn({
          date: [new Date(2009, 5, 1)],
          reverse: true,
        }),
      ]),
      new availables.Or_([
        new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
        new availables.And_([
          new availables.AvailableIsDayOff(),
          new availables.AvailableTimesIsIn({ times: [Times.Day] }),
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
      new availables.And_([
        new availables.AvailableSingleTimeEventsIsIn({
          name: props.name,
          reverse: true,
        }),
        new availables.AvailableStatGreater({
          name: StatsNames.Courage,
          level: 1,
        }),
        new availables.And_([
          new availables.AvailableDateGreater({ date }),
          new availables.AvailableDateIsIn({
            date: [new Date(2009, 5, 1)],
            reverse: true,
          }),
        ]),
        new availables.Or_([
          new availables.AvailableTimesIsIn({ times: [Times.Evening] }),
          new availables.And_([
            new availables.AvailableIsDayOff(),
            new availables.AvailableTimesIsIn({ times: [Times.Day] }),
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
