import { Choices, Choice } from "../../components/choices";
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
        label: () => <WideEvent>{events.Special.label()}</WideEvent>,
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
          <Choices
            label={
              'Among these phrases, "a rain of flower", "mystical mirage" and "vivid carp streamers" which one symbolizes summer?'
            }
          >
            <Choice label="a rain of flower" />
            <Choice label="mystical mirage" />
            <Choice label="vivid carp streamers" points={15} />
          </Choices>
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
        label: () => <WideEvent>{events.Special.label()}</WideEvent>,
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
        label: () => <WideEvent>{events.Special.label()}</WideEvent>,
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
        label: () => <WideEvent>{events.Special.label()}</WideEvent>,
      },
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 12),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => <WideEvent>{events.Special.label()}</WideEvent>,
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
        label: () => <WideEvent>{events.Special.label()}</WideEvent>,
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
        label: () => <WideEvent>{events.Special.label()}</WideEvent>,
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
        label: () => <WideEvent>{events.Special.label()}</WideEvent>,
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
        label: () => <WideEvent>{events.Special.label()}</WideEvent>,
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
        label: () => <WideEvent>{events.Special.label()}</WideEvent>,
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
          <Choices
            label={
              "The places where people dumped their waste in the Jomon Period - What are they called nowadays?"
            }
          >
            <Choice label="Boneyards" />
            <Choice label="Middens" points={15} />
            <Choice label="Hovels" />
          </Choices>
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
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      {
        ...events.Special,
        time: Times.WholeDay,
        label: () => <WideEvent>{events.Special.label()}</WideEvent>,
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
        ...events.Fool,
        time: Times.DarkHour,
        category: Categories.Tartarus,
        label: () => <WideEvent>{events.Fool.label()}</WideEvent>,
      },
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
      { ...events.Special, time: Times.Morning },
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
    activities: [
      { ...events.Special, time: Times.Morning },
      events.drinkMedicine,
      events.Chariot,
      events.gameParadeCharm,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Magician,
      events.gameParadeCourage,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 25),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Hierophant,
      events.gameParadeAcademics,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Hierophant,
      events.wakatsuKitchen,
    ],
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
          <Choices
            label={
              "Do you know which one's not an algebraic spiral or whatever?"
            }
          >
            <Choice label="A." points={15} />
            <Choice label="B." />
            <Choice label="C." />
            <Choice label="D." />
          </Choices>
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
      { ...events.Special, time: Times.Morning },
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
      events.Chariot,
      events.gameParadeCourage,
    ],
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: [
      { ...events.Special, time: Times.Morning },
      events.Hermit,
      events.gameParadeAcademics,
    ],
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
