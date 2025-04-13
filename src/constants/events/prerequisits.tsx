import { EventCard } from "@/components";

import availables from "@/constants/availability/AvailableClass";
import { DaysNames } from "@/constants/monthsNames";
import { StatsNames } from "@/constants/stats";

import { Magician } from "@/constants/socialLinks/Magician";
import {
  SocialLinkAvailableProps,
  SocialLinkNames,
} from "@/constants/socialLinks/types";

import { EventClass } from "@/constants/events/EventClass";
import {
  PrerequisitsEventsNames,
  eventProps,
  Categories,
  Times,
  Event,
} from "@/constants/events/types";

export class PrerequisitsEventClass extends EventClass {
  constructor(
    props: eventProps & {
      label?: (_props: SocialLinkAvailableProps) => React.ReactNode;
    }
  ) {
    super(props);

    const label = props.label ?? this.label;
    this.label = label.bind(this);
  }
  upgrade(props: SocialLinkAvailableProps) {
    const payload = super.upgrade(props);

    return {
      ...payload,
      singleTimeEvents: [...props.currentDay.singleTimeEvents, this.name],
    };
  }
}

export const prerequisitsEvents: { [key in PrerequisitsEventsNames]: Event } = {
  [PrerequisitsEventsNames.MoonPrerequisit]: new PrerequisitsEventClass({
    name: PrerequisitsEventsNames.MoonPrerequisit,
    category: Categories.Prerequisits,
    time: Times.Prerequisits,
    availability: new availables.And_([
      new availables.AvailableTimesIsIn({ times: [Times.Prerequisits] }),
      new availables.AvailableIsDayOff({ reverse: true, isExamIncluded: true }),
      new availables.AvailableFreeTime({ time: Times.Day }),
      new availables.AvailableDaysNamesIsIn({
        days: [DaysNames.tuesday, DaysNames.thursday, DaysNames.friday],
      }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: PrerequisitsEventsNames.MoonPrerequisit,
        reverse: true,
      }),
      new availables.AvailableLinkLevelGreater({
        name: SocialLinkNames.Magician,
        level: 3,
      }),
      new availables.AvailableStatGreater({
        name: StatsNames.Charm,
        level: 1,
      }),
    ]),
    label: () => (
      <EventCard head="Moon Prerequisits">
        <p style={{ textAlign: "center" }}>
          Talk to {Magician.linkDetails.name} to gain an inforamtion about
          "Gourmet King"
        </p>
      </EventCard>
    ),
  }),
};
