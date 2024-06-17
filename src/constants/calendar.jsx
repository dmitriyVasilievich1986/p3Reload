import { Choices, Choice } from "../components/choices/Choices.jsx";
import { socialLinks } from "./socialLinks";
import { events } from "./events";
import { stats } from "./stats";
import React from "react";

const initialStats = {
  [stats.Academics.name]: 0,
  [stats.Charm.name]: 0,
  [stats.Courage.name]: 0,
};

const initialLinks = Object.fromEntries(
  Object.keys(socialLinks).map((k) => [
    k,
    { level: 0, points: 0, multiplier: 1, romance: false },
  ])
);

const april = [
  {
    date: new Date(2009, 3, 7),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 8),
    stats: initialStats,
    links: initialLinks,
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
            <Choice label="vivid carp streamers" correct />
          </Choices>
        ),
      },
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 9),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.stayAwakeInClass,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 10),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 11),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 12),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 13),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 14),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 15),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 16),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 17),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 18),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: {
        ...events.schoolQuestionCharm,
        label: () => (
          <Choices
            head="At school"
            label={
              "The places where people dumped their waste in the Jomon Period - What are they called nowadays?"
            }
          >
            <Choice label="Boneyards" />
            <Choice label="Middens" correct />
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
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
  {
    date: new Date(2009, 3, 20),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: { ...events.Fool, category: "Tartarus" },
    },
  },
  {
    date: new Date(2009, 3, 21),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.stayAwakeInClass,
      day: events.gameParadeCourage,
      evening: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 3, 22),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: { ...events.Magician, special: true },
      evening: { ...events.tartarus, special: true },
    },
  },
  {
    date: new Date(2009, 3, 23),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Chariot,
      evening: events.gameParadeCharm,
    },
  },
  {
    date: new Date(2009, 3, 24),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Magician,
      evening: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 3, 25),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Hierophant,
      evening: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 3, 26),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Hierophant,
      evening: events.wilduckBurgeMysteryBurger,
    },
  },
  {
    date: new Date(2009, 3, 27),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: {
        ...events.schoolQuestionCharm,
        special: true,
        label: () => (
          <Choices
            head="At school"
            label={
              "Do you know which one's not an algebraic spiral or whatever?"
            }
          >
            <Choice label="A." correct />
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
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Chariot,
      evening: events.gameParadeCourage,
    },
  },
  {
    date: new Date(2009, 3, 29),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.Hermit,
      evening: events.gameParadeAcademics,
    },
  },
  {
    date: new Date(2009, 3, 30),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.stayAwakeInClass,
      day: events.Magician,
      evening: events.gameParadeCharm,
    },
  },
];

export const calendar = [...april];

export function initialCalculataion(calendar) {
  Object.values(calendar).map((c) => {
    const previousDay = calendar.find(
      (d) => d.date.getTime() === c.date.getTime() - 86400000
    );
    let currentStats = previousDay?.stats || { ...initialStats };
    let currentLinks = previousDay?.links || { ...initialLinks };
    let response = null;

    if (
      [
        previousDay?.activities.day.category,
        previousDay?.activities.evening.category,
      ].includes(events.tartarus.category)
    ) {
      response = events.drinkMedicine.upgrade({
        currentStats: currentStats,
        currentLinks: currentLinks,
        arcanes: c.arcanes,
      });
      currentStats = response.stats;
      currentLinks = response.links;
    }
    if (c.activities.morning !== null) {
      response = c.activities.morning.upgrade({
        currentStats: currentStats,
        currentLinks: currentLinks,
        arcanes: c.arcanes,
      });
      currentStats = response.stats;
      currentLinks = response.links;
    }
    if (c.activities.day !== null) {
      response = c.activities.day.upgrade({
        currentStats: currentStats,
        currentLinks: currentLinks,
        arcanes: c.arcanes,
      });
      currentStats = response.stats;
      currentLinks = response.links;
    }
    if (c.activities.evening !== null) {
      response = c.activities.evening.upgrade({
        currentStats: currentStats,
        currentLinks: currentLinks,
        arcanes: c.arcanes,
      });
      currentStats = response.stats;
      currentLinks = response.links;
    }

    c.stats = currentStats;
    c.links = currentLinks;
  });

  return calendar;
}
