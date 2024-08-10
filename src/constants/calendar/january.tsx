import { EventCard, WideEvent, Question, Answer } from "@/components";
import { events, Times } from "@/constants/events";
import { SingleDay } from "./SingleDay";

export const january: SingleDay[] = [
  new SingleDay({
    date: new Date(2010, 0, 1),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 2),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 3),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 4),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 5),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 6),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 7),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 8),
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
  }),
  new SingleDay({
    date: new Date(2010, 0, 9),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 10),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 11),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 12),
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 13),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 14),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 15),
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 16),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 17),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 18),
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
  }),
  new SingleDay({
    date: new Date(2010, 0, 19),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 20),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 21),
    activities: [{ ...events.DoNothing, time: Times.Evening }],
  }),
  new SingleDay({
    date: new Date(2010, 0, 22),
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 23),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 24),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 25),
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 26),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 27),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 28),
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 29),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 30),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2010, 0, 31),
    isDayOff: true,
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
  }),
  new SingleDay({
    date: new Date(2010, 2, 4),
    activities: [{ ...events.Special, time: Times.WholeDay }],
  }),
];
