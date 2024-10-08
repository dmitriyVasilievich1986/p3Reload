import { AvailabilityType } from "@/constants/availability/types";
import { StatsRepresentation } from "@/constants/stats";
import { Question, Answer } from "@/components";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
} from "@/constants/socialLinks/types";

import {
  AvailableStatLess,
  And_,
} from "@/constants/availability/AvailableClass";

import { allEventsNames, Categories, Times } from "../types";
import { EventClass } from "../EventClass";

export class StatsEvents extends EventClass {
  constructor(props: {
    stats: (StatsRepresentation | string)[];
    availability: AvailabilityType;
    name: allEventsNames;
    special?: boolean;
    place?: string;
    price?: number;
    wide?: boolean;
    time?: Times;
  }) {
    const maxStat = props.stats[0] as StatsRepresentation;
    const availability = new And_([
      props.availability,
      new AvailableStatLess({ level: 5, name: maxStat.name }),
    ]);

    super({
      ...props,
      time: props.time ?? Times.Day,
      category: Categories.Stats,
      availability,
    });
  }
}

export class StatsEveningSingleEvent extends StatsEvents {
  upgrade(props: SocialLinkAvailableProps) {
    const payload = super.upgrade(props);

    const isFirstTime =
      !props.currentDay.singleTimeEvents.includes(this.name) &&
      props.time === Times.Evening;
    const singleTimeEvents = isFirstTime
      ? props.currentDay.singleTimeEvents
      : [...props.currentDay.singleTimeEvents, this.name];

    return {
      ...payload,
      singleTimeEvents,
    };
  }
}

export class wilduckBigEaterChallengeEvent extends StatsEvents {
  label(props: SocialLinkElementProps) {
    return (
      <div>
        {super.label(props)}
        {props.fullCard && (
          <div
            style={{
              flexDirection: "column",
              margin: "1rem 0",
              display: "flex",
              width: "100%",
              gap: "10px",
            }}
          >
            <Question label="No matter how much I eat, the amount of burgers doesn't seem to decrease...">
              <Answer label="Focus on single burger" />
              <Answer label="Look away from the burgers" points={15} />
              <Answer label="Glance at the pile of burgers" />
            </Question>
            <Question label="I feel like I'm making progress, but I shouldn't get ahead of myself...">
              <Answer label="Eat without stopping" points={15} />
              <Answer label="Take breaks in between bites" />
              <Answer label="Wash it down with soda " />
            </Question>
            <Question label="It's the final stretch... How can I keep this up and complete the chalenge...?">
              <Answer label="Savor the flavors" />
              <Answer label="Imagine something sour" points={15} />
              <Answer label="Chew properly and slowly" />
            </Question>
          </div>
        )}
      </div>
    );
  }
  upgrade(props: SocialLinkAvailableProps) {
    const payload = super.upgrade(props);

    return {
      ...payload,
      singleTimeEvents: [...props.currentDay.singleTimeEvents, this.name],
    };
  }
}
