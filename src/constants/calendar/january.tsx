import { EventCard, WideEvent, Question, Answer } from "@/components";
import { events, Times } from "@/constants/events";
import { SingleDay } from "./SingleDay";

import {
  statsEventsAcademicsNames,
  statsEventsCharmNames,
  SpecialEventsNames,
} from "@/constants/events/types";
import { SocialLinkNames } from "../socialLinks";

export const january: SingleDay[] = [
  new SingleDay({
    date: new Date(2010, 0, 1),
    isDayOff: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.Day,
        label: () => <EventCard head="New Year Shrine visit" />,
      },
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 2),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 3),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 4),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      events[SocialLinkNames.Sanada],
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 5),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 6),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 7),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 8),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question
            label={`"The new year is the index of a journey to a certain place." Where is this "certain place" he's referring to?`}
          >
            <Answer label="One's hometown." />
            <Answer label="One's second life." />
            <Answer label="The underworld." points={15} />
          </Question>
        ),
      },
      events[SocialLinkNames.Priestess],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 9),
    activities: [
      events[SocialLinkNames.Aeon],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 10),
    isDayOff: true,
    activities: [
      events[SocialLinkNames.Priestess],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 11),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 12),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Magician],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 13),
    activities: [
      events[SocialLinkNames.Fortune],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 14),
    activities: [
      events[SocialLinkNames.Magician],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 15),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Iori],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 16),
    activities: [
      events[SocialLinkNames.Aeon],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 17),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 18),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="I've mentioned two Greek sorceresses. One was Medea. Who was the other?">
            <Answer label="Poleis." />
            <Answer label="Circe." points={15} />
            <Answer label="Hecate." />
          </Question>
        ),
      },
      events[SocialLinkNames.Aeon],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 19),
    activities: [
      events[SocialLinkNames.Fortune],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 20),
    activities: [events[SocialLinkNames.Aeon], events[SocialLinkNames.Amada]],
  }),
  new SingleDay({
    date: new Date(2010, 0, 21),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        label: () => <EventCard head="Hospital visit" />,
      },
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 22),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Aeon],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 23),
    activities: [
      events[SocialLinkNames.Aeon],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 24),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 25),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Priestess],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 26),
    activities: [
      events[SocialLinkNames.Aeon],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 27),
    activities: [
      events[SocialLinkNames.Aeon],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 28),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SocialLinkNames.Aeon],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 29),
    activities: [
      events[SocialLinkNames.Aeon],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 30),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 31),
    isDayOff: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Nyx Boss Fight" place="Tartarus" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 2, 4),
    activities: [
      { ...events[SpecialEventsNames.Special], time: Times.WholeDay },
    ],
  }),
];
