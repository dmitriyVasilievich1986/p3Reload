import { Question, Answer } from "../../components/choices";
import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
import { baseCalendar } from "./baseFunctions";
import { Times } from "../events/types";
import { singleDay } from "./types";
import { events } from "../events";

export const june: singleDay[] = [
  {
    ...baseCalendar,
    date: new Date(2009, 5, 1),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 2),
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
    date: new Date(2009, 5, 3),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 4),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 5),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 6),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 7),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 8),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => (
          <WideEvent>
            <EventCard
              head="Empress And Emperror Boss Fight"
              place="Tartarus"
            />
          </WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 9),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.drinkMedicine,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 10),
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
    date: new Date(2009, 5, 11),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 12),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 13),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      {
        ...events.Special,
        time: Times.Evening,
        label: () => <EventCard head="Theurgy Tutorial" place="Tartarus" />,
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 14),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 15),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={
              'Which phrase means, "able to see things for what they really are"?'
            }
          >
            <Answer label="Keen eye." points={15} />
            <Answer label="Mean eye." />
            <Answer label="Bright eyes." />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 16),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 17),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={"What early religious practice was the origin of magic?"}
          >
            <Answer label="Totemism." />
            <Answer label="Animism." />
            <Answer label="Shamanism." points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 18),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 19),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 20),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      {
        ...events.Special,
        label: () => <EventCard head="Koromaru Introduction" />,
      },
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 21),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 22),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question label={"What else do people call this curve?"}>
            <Answer label="Witch of Agnesi" points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 23),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 25),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={
              "What's it called when the air bubbles in a whirlpool bath hit you and make you vibrate?"
            }
          >
            <Answer label="The flutter effect" points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 28),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={"What form of natural magic is used to find water sources?"}
          >
            <Answer label="Dowsing" points={15} />
          </Question>
        ),
      },
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 5, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.NoControl,
      events.DoNothing,
      { ...events.DoNothing, time: Times.Evening },
    ],
  },
];
