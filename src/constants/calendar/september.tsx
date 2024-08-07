import { Question, Answer } from "../../components/choices";
import { mainCharName } from "../socialLinks/baseFunctions";
import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
import { baseCalendar } from "./baseFunctions";
import { Times } from "../events/types";
import { singleDay } from "./types";
import { events } from "../events";

export const september: singleDay[] = [
  {
    ...baseCalendar,
    date: new Date(2009, 8, 1),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label="Which property of electricity is relevant to superconductivity?">
            <Answer label="Voltage." />
            <Answer label="Resistance." points={15} />
            <Answer label="Current." />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 2),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Special, { ...events.DoNothing, time: Times.Evening }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 3),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 4),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 5),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Hermit Boss Fight" place="Tartarus" />
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 6),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 7),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 8),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 9),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 10),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
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
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 11),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
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
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 12),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
      events.Death,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 13),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 14),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
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
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 15),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 16),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 17),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 18),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Special, { ...events.DoNothing, time: Times.Evening }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 19),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => <WideEvent>{events.Special.label(props)}</WideEvent>,
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 20),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => <WideEvent>{events.Special.label(props)}</WideEvent>,
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 21),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 22),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 23),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 25),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label="What is the collective name for the four holy numbers in numerology?">
            <Answer label="Tetrodotoxin." />
            <Answer label="Tetrakarn." />
            <Answer label="Tetractys." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 27),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 28),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 8, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
];
