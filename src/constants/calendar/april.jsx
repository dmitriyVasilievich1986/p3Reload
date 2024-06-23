import EventCard, { Item } from "../../components/eventCard/EventCard.jsx";
import { Choices, Choice } from "../../components/choices/Choices.jsx";
import { baseCalendar } from "./baseFunctions.jsx";
import { events } from "../events";
import React from "react";

export const april = [
  {
    date: new Date(2009, 3, 7),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 8),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: {
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
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 9),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.stayAwakeInClass,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 10),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 11),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 12),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 13),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 14),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 15),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 16),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 17),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 18),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: {
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
      day: events.special,
      evening: events.Fool,
    },
  },
  {
    date: new Date(2009, 3, 19),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 20),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: { ...events.Fool, category: "Tartarus" },
    },
  },
  {
    date: new Date(2009, 3, 21),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.stayAwakeInClass,
      day: events.gameParadeCourage,
      evening: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 3, 22),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: { ...events.Magician, special: true },
      evening: events.tartarus,
    },
  },
  {
    date: new Date(2009, 3, 23),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Chariot,
      evening: events.gameParadeCharm,
    },
  },
  {
    date: new Date(2009, 3, 24),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Magician,
      evening: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 3, 25),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Hierophant,
      evening: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 3, 26),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Hierophant,
      evening: events.wilduckBurgeMysteryBurger,
    },
  },
  {
    date: new Date(2009, 3, 27),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: {
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
      day: events.Emperor,
      evening: events.gameParadeCharm,
    },
  },
  {
    date: new Date(2009, 3, 28),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      afterSchool: {
        ...events.special,
        label: () => (
          <EventCard
            place="2nd Floor Hallway"
            name="Chihiro Fushimi"
            head="Justice"
          >
            <Item
              label="Key"
              value={`Talk to Chihiro and say "Let's hang out."`}
            />
          </EventCard>
        ),
      },
      day: events.Chariot,
      evening: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 3, 29),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Hermit,
      evening: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 3, 30),
    ...baseCalendar,
    singleTimeEvents: [],
    arcanes: [],
    activities: {
      morning: events.stayAwakeInClass,
      afterSchool: {
        ...events.special,
        label: () => (
          <EventCard
            place="2nd Floor Hallway"
            name="Chihiro Fushimi"
            head="Justice"
          >
            <Item label="Key" value="Talk to Chihiro" />
          </EventCard>
        ),
      },
      day: events.Magician,
      evening: events.gameParadeCharm,
    },
  },
];
