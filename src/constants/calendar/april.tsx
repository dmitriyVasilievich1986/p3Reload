import { Choices, Choice } from "../../components/choices";
import { EventCard } from "../../components/eventCard";
import { Categories, Times } from "../events/types";
import { baseCalendar } from "./baseFunctions";
import { singleDay } from "./types";
import { events } from "../events";

export const april: singleDay[] = [
  {
    date: new Date(2009, 3, 7),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 3, 8),
    ...baseCalendar,
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
    date: new Date(2009, 3, 9),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 3, 10),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 3, 11),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 3, 12),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 3, 13),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 3, 14),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 3, 15),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 3, 16),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 3, 17),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 3, 18),
    ...baseCalendar,
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
    date: new Date(2009, 3, 19),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: events.Special,
    },
  },
  {
    date: new Date(2009, 3, 20),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Special,
      [Times.Evening]: { ...events.Fool, category: Categories.Tartarus },
    },
  },
  {
    date: new Date(2009, 3, 21),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.stayAwakeInClass,
      [Times.Day]: events.gameParadeCourage,
      [Times.Evening]: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 3, 22),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: { ...events.Magician, special: true },
      [Times.Evening]: events.Tartarus,
    },
  },
  {
    date: new Date(2009, 3, 23),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Chariot,
      [Times.Evening]: events.gameParadeCharm,
    },
  },
  {
    date: new Date(2009, 3, 24),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Magician,
      [Times.Evening]: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 3, 25),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hierophant,
      [Times.Evening]: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 3, 26),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hierophant,
      [Times.Evening]: events.wilduckBurgeMysteryBurger,
    },
  },
  {
    date: new Date(2009, 3, 27),
    ...baseCalendar,
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
    date: new Date(2009, 3, 28),
    ...baseCalendar,
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
    date: new Date(2009, 3, 29),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      [Times.Morning]: events.Special,
      [Times.Day]: events.Hermit,
      [Times.Evening]: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 3, 30),
    ...baseCalendar,
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
