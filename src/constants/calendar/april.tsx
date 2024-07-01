import { Choices, Choice } from "../../components/choices";
import { EventCard } from "../../components/eventCard";
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
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 8),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: {
        ...events.schoolQuestionCharm,
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
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 9),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 10),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 11),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 12),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 13),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 14),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 15),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 16),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 17),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 18),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: {
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
      [Times.Day]: events.Special,
      [Times.Evening]: events.Fool,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 19),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 20),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: { ...events.Fool, category: Categories.Tartarus },
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 21),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.gameParadeCourage,
      [Times.Evening]: events.gameParadeCourage,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 22),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: { ...events.Magician, special: true },
      [Times.Evening]: events.Tartarus,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 23),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Chariot,
      [Times.Evening]: events.gameParadeCharm,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 24),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Magician,
      [Times.Evening]: events.gameParadeCourage,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 25),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hierophant,
      [Times.Evening]: events.gameParadeAcademics,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 26),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hierophant,
      [Times.Evening]: events.wilduckBurgeMysteryBurger,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 27),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: {
        ...events.schoolQuestionCharm,
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
      [Times.Day]: events.Emperor,
      [Times.Evening]: events.gameParadeCharm,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 28),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.AfterSchool]: {
        ...events.Special,
        label: () => (
          <EventCard
            prerequisite={`Talk to Chihiro and say "Let's hang out."`}
            place="2nd Floor Hallway"
            name="Chihiro Fushimi"
            head="Justice"
          />
        ),
      },
      [Times.Day]: events.Chariot,
      [Times.Evening]: events.gameParadeCourage,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 29),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hermit,
      [Times.Evening]: events.gameParadeAcademics,
    },
  },
  {
    ...baseCalendar,
    date: new Date(2009, 3, 30),
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.AfterSchool]: {
        ...events.Special,
        label: () => (
          <EventCard
            prerequisite="Talk to Chihiro"
            place="2nd Floor Hallway"
            name="Chihiro Fushimi"
            head="Justice"
          />
        ),
      },
      [Times.Day]: events.Magician,
      [Times.Evening]: events.gameParadeCharm,
    },
  },
];
