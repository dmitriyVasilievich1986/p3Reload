import { Question, Answer } from "../../components/choices";
import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
import { Categories, Times } from "../events/types";
import { baseCalendar } from "./baseFunctions";
import { singleDay } from "./types";
import { events } from "../events";

export const april: singleDay[] = [
  {
    ...baseCalendar,
    date: new Date(2009, 3, 7),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 8),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        time: Times.Morning,
        label: () => (
          <Question
            label={
              'Among these phrases, "a rain of flower", "mystical mirage" and "vivid carp streamers" which one symbolizes summer?'
            }
          >
            <Answer label="a rain of flower" />
            <Answer label="mystical mirage" />
            <Answer label="vivid carp streamers" points={15} />
          </Question>
        ),
      },
      events.Special,
      { ...events.Special, time: Times.Evening },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 9),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 10),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 11),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 12),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 13),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 14),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 15),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 16),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 17),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 18),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        label: () => (
          <Question
            label={
              "The places where people dumped their waste in the Jomon Period - What are they called nowadays?"
            }
          >
            <Answer label="Boneyards" />
            <Answer label="Middens" points={15} />
            <Answer label="Hovels" />
          </Question>
        ),
      },
      events.Special,
      { ...events.Special, time: Times.Evening },
      { ...events.Fool, time: Times.DarkHour },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 19),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 20),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        category: Categories.Tartarus,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
      { ...events.Fool, time: Times.DarkHour },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 21),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      events.drinkMedicine,
      { ...events.gameParadeCourage, time: Times.Day },
      events.gameParadeCourage,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 22),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Magician, special: true },
      {
        ...events.Tartarus,
        time: Times.Evening,
        label: () => (
          <EventCard head="Tartarus">
            <ul>
              <li>
                <p>Gain at least ¥27,100</p>
              </li>
            </ul>
          </EventCard>
        ),
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 23),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.drinkMedicine, events.Chariot, events.gameParadeCharm],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Chariot, events.gameParadeCourage],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 25),
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Strength, events.gameParadeAcademics],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 26),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Hierophant, events.wakatsuKitchen],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.schoolQuestionCharm,
        time: Times.Morning,
        special: true,
        label: () => (
          <Question
            label={
              "Do you know which one's not an algebraic spiral or whatever?"
            }
          >
            <Answer label="A." points={15} />
            <Answer label="B." />
            <Answer label="C." />
            <Answer label="D." />
          </Question>
        ),
      },
      events.Emperor,
      events.gameParadeCharm,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 28),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.AfterSchool,
        label: () => (
          <EventCard
            prerequisite={`Talk to Chihiro and say "Let's hang out."`}
            place="2nd Floor Hallway"
            name="Chihiro Fushimi"
            head="Justice"
          />
        ),
      },
      events.Magician,
      events.gameParadeCourage,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 29),
    isDayOff: true,
    singleTimeEvents: [],
    arcanes: [],
    activities: [events.Hermit, events.gameParadeAcademics],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      events.stayAwakeInClass,
      {
        ...events.Special,
        time: Times.AfterSchool,
        label: () => (
          <EventCard
            prerequisite="Talk to Chihiro"
            place="2nd Floor Hallway"
            name="Chihiro Fushimi"
            head="Justice"
          />
        ),
      },
      events.Magician,
      events.gameParadeCharm,
    ],
  },
];
