import { Question, Answer } from "../../components/choices";
import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
import { Times } from "../events/types";
import { SingleDay } from "./SingleDay";
import { events } from "../events";

export const november: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 10, 1),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 2),
    activities: [events.DoNothing, { ...events.Fool, time: Times.Evening }],
  }),
  new SingleDay({
    date: new Date(2009, 10, 3),
    foolMoon: true,
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard
              head="Strega and Hanged Man Boss Fight"
              place="Tartarus"
            />
          </WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 4),
    activities: [
      { ...events.Death, time: Times.Day },
      { ...events.Fool, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 5),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 6),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 7),
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
  }),
  new SingleDay({
    date: new Date(2009, 10, 8),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 9),
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 10),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 11),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 12),
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
  }),
  new SingleDay({
    date: new Date(2009, 10, 13),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 14),
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 15),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 16),
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 17),
    activities: [{ ...events.Special, time: Times.WholeDay }],
  }),
  new SingleDay({
    date: new Date(2009, 10, 18),
    activities: [{ ...events.Special, time: Times.WholeDay }],
  }),
  new SingleDay({
    date: new Date(2009, 10, 19),
    activities: [{ ...events.Special, time: Times.WholeDay }],
  }),
  new SingleDay({
    date: new Date(2009, 10, 20),
    activities: [{ ...events.DoNothing, time: Times.Evening }],
  }),
  new SingleDay({
    date: new Date(2009, 10, 21),
    activities: [
      events.stayAwakeInClass,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 22),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
      {
        ...events.Special,
        time: Times.DarkHour,
        label: () => <EventCard head="Chidori Boss Fight" place="Tartarus" />,
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 23),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 24),
    activities: [{ ...events.Special, time: Times.WholeDay }],
  }),
  new SingleDay({
    date: new Date(2009, 10, 25),
    activities: [{ ...events.Special, time: Times.WholeDay }],
  }),
  new SingleDay({
    date: new Date(2009, 10, 26),
    activities: [{ ...events.Special, time: Times.WholeDay }],
  }),
  new SingleDay({
    date: new Date(2009, 10, 27),
    activities: [{ ...events.DoNothing, time: Times.Evening }],
  }),
  new SingleDay({
    date: new Date(2009, 10, 28),
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
      events.Fool,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 29),
    isDayOff: true,
    activities: [
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 10, 30),
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
  }),
];
