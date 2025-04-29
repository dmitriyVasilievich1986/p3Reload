import { EventCard } from "@/components";

import availables from "@/constants/availability/AvailableClass";
import { DaysNames } from "@/constants/monthsNames";
import { StatsNames } from "@/constants/stats";

import { Hierophant } from "@/constants/socialLinks/Hierophant";
import { HangedMan } from "@/constants/socialLinks/HangedMan";
import { Magician } from "@/constants/socialLinks/Magician";
import { Strength } from "@/constants/socialLinks/Strength";
import { Justice } from "@/constants/socialLinks/Justice";
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
  special?: boolean = true;

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
      new availables.AvailableIsDayOff({ reverse: true, isExamIncluded: true }),
      new availables.AvailableTimesIsIn({ times: [Times.Prerequisits] }),
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
      <EventCard
        head={`${SocialLinkNames.Moon} (Prerequisite)`}
        {...Magician.linkDetails}
      >
        <p style={{ textAlign: "center" }}>
          Talk to {Magician.linkDetails.name} to gain an inforamtion about
          "Gourmet King"
        </p>
      </EventCard>
    ),
  }),
  [PrerequisitsEventsNames.TowerPrerequisit]: new PrerequisitsEventClass({
    name: PrerequisitsEventsNames.TowerPrerequisit,
    category: Categories.Prerequisits,
    time: Times.Prerequisits,
    availability: new availables.And_([
      new availables.AvailableIsDayOff({ reverse: true, isExamIncluded: true }),
      new availables.AvailableTimesIsIn({ times: [Times.Prerequisits] }),
      new availables.AvailableFreeTime({ time: Times.Day }),
      new availables.AvailableDaysNamesIsIn({
        days: [DaysNames.wednesday, DaysNames.saturday],
      }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: PrerequisitsEventsNames.TowerPrerequisit,
        reverse: true,
      }),
      new availables.AvailableLinkLevelGreater({
        name: SocialLinkNames.Strength,
        level: 4,
      }),
      new availables.AvailableStatGreater({
        name: StatsNames.Courage,
        level: 2,
      }),
    ]),
    label: () => (
      <EventCard
        head={`${SocialLinkNames.Tower} (Prerequisite)`}
        {...Strength.linkDetails}
      >
        <p style={{ textAlign: "center" }}>
          Talk to {Strength.linkDetails.name} to gain an inforamtion about
          "Unconventional Monk"
        </p>
      </EventCard>
    ),
  }),
  [PrerequisitsEventsNames.HierophantPrerequisit]: new PrerequisitsEventClass({
    name: PrerequisitsEventsNames.HierophantPrerequisit,
    category: Categories.Prerequisits,
    time: Times.Prerequisits,
    availability: new availables.And_([
      new availables.AvailableDateGreater({ date: new Date(2009, 3, 25) }),
      new availables.AvailableTimesIsIn({ times: [Times.Prerequisits] }),
      new availables.AvailableFreeTime({ time: Times.Day }),
      new availables.AvailableIsDayOff({ reverse: true }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: PrerequisitsEventsNames.HierophantPrerequisit,
        reverse: true,
      }),
    ]),
    label: () => (
      <EventCard
        head={`${SocialLinkNames.Hierophant} (Prerequisite)`}
        {...Hierophant.linkDetails}
      >
        <ul>
          <li>
            <p>Enter Bookworms bookstore to talk to them.</p>
          </li>
          <li>
            <p>
              Retrieve a Persimmon Leaf from Gekkoukan High School, Corridor.
            </p>
          </li>
        </ul>
      </EventCard>
    ),
  }),
  [PrerequisitsEventsNames.HangedManPrerequisit]: new PrerequisitsEventClass({
    name: PrerequisitsEventsNames.HangedManPrerequisit,
    category: Categories.Prerequisits,
    time: Times.Prerequisits,
    availability: new availables.And_([
      new availables.AvailableDateIsIn({ date: [new Date(2009, 4, 6)] }),
      new availables.AvailableTimesIsIn({ times: [Times.Prerequisits] }),
    ]),
    label: () => (
      <EventCard
        head={`${SocialLinkNames.HangedMan} (Prerequisite)`}
        {...HangedMan.linkDetails}
      >
        <ul>
          <li>
            <p>
              Buy Weird Takoyaki from Octopia at Iwatodai Station Strip Mall 1F.
            </p>
          </li>
          <li>
            <p>Buy Mad Bull from the vending machine at Iwatodai Station.</p>
          </li>
          <li>
            <p>Give them to Maiko at Naganaki Shrine.</p>
          </li>
          <li>
            <p>Promise to play with her.</p>
          </li>
        </ul>
      </EventCard>
    ),
  }),
  [PrerequisitsEventsNames.JusticePrerequisit1]: new PrerequisitsEventClass({
    name: PrerequisitsEventsNames.JusticePrerequisit1,
    category: Categories.Prerequisits,
    time: Times.Prerequisits,
    availability: new availables.And_([
      new availables.AvailableIsDayOff({ reverse: true, isExamIncluded: true }),
      new availables.AvailableTimesIsIn({ times: [Times.Prerequisits] }),
      new availables.AvailableFreeTime({ time: Times.Day }),
      new availables.AvailableDaysNamesIsIn({
        days: [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday],
      }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: PrerequisitsEventsNames.JusticePrerequisit1,
        reverse: true,
      }),
      new availables.AvailableLinkLevelGreater({
        name: SocialLinkNames.Emperor,
        level: 1,
      }),
    ]),
    label: () => (
      <EventCard
        head={`${SocialLinkNames.Justice} (Prerequisite)`}
        {...Justice.linkDetails}
      >
        <ul>
          <li>
            <p>Talk to Chihiro.</p>
          </li>
          <li>
            <p>Choose "I just wanted to talk..."</p>
          </li>
        </ul>
      </EventCard>
    ),
  }),
  [PrerequisitsEventsNames.JusticePrerequisit2]: new PrerequisitsEventClass({
    name: PrerequisitsEventsNames.JusticePrerequisit2,
    category: Categories.Prerequisits,
    time: Times.Prerequisits,
    availability: new availables.And_([
      new availables.AvailableIsDayOff({ reverse: true, isExamIncluded: true }),
      new availables.AvailableTimesIsIn({ times: [Times.Prerequisits] }),
      new availables.AvailableFreeTime({ time: Times.Day }),
      new availables.AvailableDaysNamesIsIn({
        days: [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday],
      }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: PrerequisitsEventsNames.JusticePrerequisit1,
      }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: PrerequisitsEventsNames.JusticePrerequisit2,
        reverse: true,
      }),
    ]),
    label: () => (
      <EventCard
        head={`${SocialLinkNames.Justice} (Prerequisite)`}
        {...Justice.linkDetails}
      >
        <ul>
          <li>
            <p>Talk to Chihiro.</p>
          </li>
        </ul>
      </EventCard>
    ),
  }),
  [PrerequisitsEventsNames.JusticePrerequisit3]: new PrerequisitsEventClass({
    name: PrerequisitsEventsNames.JusticePrerequisit3,
    category: Categories.Prerequisits,
    time: Times.Prerequisits,
    availability: new availables.And_([
      new availables.AvailableIsDayOff({ reverse: true, isExamIncluded: true }),
      new availables.AvailableTimesIsIn({ times: [Times.Prerequisits] }),
      new availables.AvailableFreeTime({ time: Times.Day }),
      new availables.AvailableDaysNamesIsIn({
        days: [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday],
      }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: PrerequisitsEventsNames.JusticePrerequisit2,
      }),
      new availables.AvailableSingleTimeEventsIsIn({
        name: PrerequisitsEventsNames.JusticePrerequisit3,
        reverse: true,
      }),
    ]),
    label: () => (
      <EventCard
        head={`${SocialLinkNames.Justice} (Prerequisite)`}
        {...Justice.linkDetails}
      >
        <ul>
          <li>
            <p>Talk to Chihiro.</p>
          </li>
          <li>
            <p>Choose "Let's hang out."</p>
          </li>
        </ul>
      </EventCard>
    ),
  }),
};
