import { EventCard, WideEvent, Question, Answer } from "@/components";
import { SocialLinkNames } from "@/constants/socialLinks";
import { mainCharName } from "@/constants/socialLinks";
import { events, Times } from "@/constants/events";
import { SingleDay } from "./SingleDay";

import {
  statsEventsAcademicsNames,
  statsEventsCourageNames,
  statsEventsCharmNames,
  SpecialEventsNames,
} from "@/constants/events/types";

export const september: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 8, 1),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="Which property of electricity is relevant to superconductivity?">
            <Answer label="Voltage." />
            <Answer label="Resistance." points={15} />
            <Answer label="Current." />
          </Question>
        ),
      },
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 2),
    activities: [
      events[SpecialEventsNames.Special],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 3),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 4),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 5),
    foolMoon: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Hermit Boss Fight" place="Tartarus" />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 6),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 7),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 8),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 9),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 10),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question
            label={`H-Hey, ${mainCharName}, do you know what it means to "spill the beans"?`}
          >
            <Answer label="To drop money." />
            <Answer label="To break into a smile." />
            <Answer label="To reveal a secret." points={15} />
          </Question>
        ),
      },
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 11),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question
            label={
              "Which book helped further the art of magic during the Renaissance"
            }
          >
            <Answer label="The Book of Enoch." />
            <Answer label="The Book of Thoth." />
            <Answer label="The Hermetica." points={15} />
          </Question>
        ),
      },
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 12),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
      events[SocialLinkNames.Death],
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 13),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 14),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question
            label={
              'Who is one referring to when speaking of their "better half"?'
            }
          >
            <Answer label="Their soulmate." points={15} />
            <Answer label="Their rival." />
            <Answer label="Their mentor." />
          </Question>
        ),
      },
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 15),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 16),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 17),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 18),
    activities: [
      events[SpecialEventsNames.Special],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 19),
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>
            {events[SpecialEventsNames.Special].label(props)}
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 20),
    isDayOff: true,
    activities: [
      {
        ...events[SpecialEventsNames.Special],
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>
            {events[SpecialEventsNames.Special].label(props)}
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 21),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 22),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 23),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 24),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 25),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 26),
    activities: [
      {
        ...events[statsEventsCharmNames.schoolQuestionCharm],
        label: () => (
          <Question label="What is the collective name for the four holy numbers in numerology?">
            <Answer label="Tetrodotoxin." />
            <Answer label="Tetrakarn." />
            <Answer label="Tetractys." points={15} />
          </Question>
        ),
      },
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 27),
    isDayOff: true,
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 28),
    activities: [
      events[statsEventsAcademicsNames.stayAwakeInClass],
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 29),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 8, 30),
    activities: [
      events[SpecialEventsNames.DoNothing],
      { ...events[SpecialEventsNames.DoNothing], time: Times.Evening },
    ],
  }),
];
