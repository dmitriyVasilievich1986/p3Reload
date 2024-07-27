import { Question, Answer } from "../../components/choices";
import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
import { baseCalendar } from "./baseFunctions";
import { Times } from "../events/types";
import { singleDay } from "./types";
import { events } from "../events";

export const november: singleDay[] = [
  {
    ...baseCalendar,
    date: new Date(2009, 10, 1),
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
    date: new Date(2009, 10, 2),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.DoNothing, { ...events.Fool, time: Times.Evening }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 3),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard
              head="Hierophant and Lovers Boss Fight"
              place="Tartarus"
            />
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 4),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Death, time: Times.Day },
      { ...events.Fool, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 5),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 6),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 7),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label="What is the ancient Indian magical text I mentioned today?">
            <Answer label="The Upanishads." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 8),
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
    date: new Date(2009, 10, 9),
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
    date: new Date(2009, 10, 10),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 11),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 12),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label="What was she describing with such a sparse line?">
            <Answer label="Her favorite time in winter." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 13),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 14),
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
    date: new Date(2009, 10, 15),
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
    date: new Date(2009, 10, 16),
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
    date: new Date(2009, 10, 17),
    singleTimeEvents: [],
    arcanes: [],
    activities: [{ ...events.Special, time: Times.WholeDay }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 18),
    singleTimeEvents: [],
    arcanes: [],
    activities: [{ ...events.Special, time: Times.WholeDay }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 19),
    singleTimeEvents: [],
    arcanes: [],
    activities: [{ ...events.Special, time: Times.WholeDay }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 20),
    singleTimeEvents: [],
    arcanes: [],
    activities: [{ ...events.DoNothing, time: Times.Evening }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 21),
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
    date: new Date(2009, 10, 22),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
      {
        ...events.Special,
        time: Times.DarkHour,
        label: () => <EventCard head="Chidori Boss Fight" place="Tartarus" />,
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 23),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: [{ ...events.Special, time: Times.WholeDay }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 25),
    singleTimeEvents: [],
    arcanes: [],
    activities: [{ ...events.Special, time: Times.WholeDay }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: [{ ...events.Special, time: Times.WholeDay }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: [{ ...events.DoNothing, time: Times.Evening }],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 28),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
      events.Fool,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 10, 29),
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
    date: new Date(2009, 10, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label="In the poem that Genji, the protagonist, sends to her, what did he compare her to?">
            <Answer label="The cherry blossom." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
];
