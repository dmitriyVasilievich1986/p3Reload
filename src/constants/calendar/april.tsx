import { Question, Answer } from "../../components/choices";
import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
import { Categories, Times } from "../events/types";
import { SingleDay } from "./SingleDay";
import { events } from "../events";

export const april: SingleDay[] = [
  new SingleDay({
    date: new Date(2009, 3, 7),
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 8),
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
  }),
  new SingleDay({
    date: new Date(2009, 3, 9),
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 10),
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 11),
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 12),
    isDayOff: true,
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 13),
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 14),
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 15),
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 16),
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 17),
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 18),
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
  }),
  new SingleDay({
    date: new Date(2009, 3, 19),
    isDayOff: true,
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: (props) => (
          <WideEvent>{events.Special.label({ ...props })}</WideEvent>
        ),
      },
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 20),
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
  }),
  new SingleDay({
    date: new Date(2009, 3, 21),
    activities: [
      events.stayAwakeInClass,
      events.drinkMedicine,
      { ...events.gameParadeCourage, time: Times.Day },
      events.gameParadeCourage,
    ],
  }),
  new SingleDay({
    date: new Date(2009, 3, 22),
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
  }),
  new SingleDay({
    date: new Date(2009, 3, 23),
    activities: [events.drinkMedicine, events.Chariot, events.gameParadeCharm],
  }),
  new SingleDay({
    date: new Date(2009, 3, 24),
    activities: [events.Chariot, events.gameParadeCourage],
  }),
  new SingleDay({
    date: new Date(2009, 3, 25),
    activities: [events.Strength, events.gameParadeAcademics],
  }),
  new SingleDay({
    date: new Date(2009, 3, 26),
    isDayOff: true,
    activities: [events.Hierophant, events.wakatsuKitchen],
  }),
  new SingleDay({
    date: new Date(2009, 3, 27),
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
  }),
  new SingleDay({
    date: new Date(2009, 3, 28),
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
  }),
  new SingleDay({
    date: new Date(2009, 3, 29),
    activities: [events.Hermit, events.gameParadeAcademics],
  }),
  new SingleDay({
    date: new Date(2009, 3, 30),
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
  }),
];
