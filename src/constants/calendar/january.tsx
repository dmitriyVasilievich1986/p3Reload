import { Question, Answer } from "../../components/choices";
import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
import { baseCalendar } from "./baseFunctions";
import { Times } from "../events/types";
import { singleDay } from "./types";
import { events } from "../events";

export const january: singleDay[] = [
  {
    ...baseCalendar,
    date: new Date(2010, 0, 1),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 2),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 3),
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
    date: new Date(2010, 0, 4),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 5),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 6),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 7),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 8),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={`"The new year is the index of a journey to a certain place." Where is this "certain place" he's referring to?`}
          >
            <Answer label="The underworld." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 9),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 10),
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
    date: new Date(2010, 0, 11),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 12),
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
    date: new Date(2010, 0, 13),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 14),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 15),
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
    date: new Date(2010, 0, 16),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 17),
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
    date: new Date(2010, 0, 18),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label="I've mentioned two Greek sorceresses. One was Medea. Who was the other?">
            <Answer label="Circe." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 19),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 20),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 21),
    singleTimeEvents: [],
    arcanes: [],
    activities: [{ ...events.DoNothing, time: Times.Evening }],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 22),
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
    date: new Date(2010, 0, 23),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 24),
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
    date: new Date(2010, 0, 25),
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
    date: new Date(2010, 0, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 28),
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
    date: new Date(2010, 0, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 0, 31),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard head="Nyx Boss Fight" place="Tartarus" />
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2010, 2, 4),
    singleTimeEvents: [],
    arcanes: [],
    activities: [{ ...events.Special, time: Times.WholeDay }],
  },
];
