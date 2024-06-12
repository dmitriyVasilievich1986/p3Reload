import { events, ChoicesEvent, Choice } from "./events";
import { socialLinks } from "./socialLinks";
import { stats } from "./stats";
import React from "react";

const initialStats = {
  [stats.Academics.name]: 0,
  [stats.Charm.name]: 0,
  [stats.Courage.name]: 0,
};

const initialLinks = {
  [socialLinks.Magician.name]: { level: 0, points: 0, multiplier: 1 },
  [socialLinks.Emperor.name]: { level: 0, points: 0, multiplier: 1 },
  [socialLinks.Hierophant.name]: { level: 0, points: 0, multiplier: 1 },
  [socialLinks.Chariot.name]: { level: 0, points: 0, multiplier: 1 },
  [socialLinks.Hermit.name]: { level: 0, points: 0, multiplier: 1 },
  [socialLinks.Priestess.name]: {
    level: 0,
    points: 0,
    multiplier: 1,
    romance: false,
  },
};

export const calendar = [
  {
    date: new Date(2009, 3, 8),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: {
        ...events.schoolQuestionCharm,
        label: () => (
          <ChoicesEvent
            head="At school"
            label={
              'Among these phrases, "a rain of flower", "mystical mirage" and "vivid carp streamers" which one symbolizes summer?'
            }
          >
            <Choice label="a rain of flower" />
            <Choice label="mystical mirage" />
            <Choice label="vivid carp streamers +2" correct />
          </ChoicesEvent>
        ),
      },
      day: events.doNothing,
      evening: events.doNothing,
    },
  },
  {
    date: new Date(2009, 3, 9),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.doNothing,
    },
  },
  {
    date: new Date(2009, 3, 10),
    stats: initialStats,
    links: initialLinks,
    arcanes: [],
    activities: {
      morning: events.special,
      day: events.doNothing,
      evening: events.doNothing,
    },
  },
];

export function initialCalculataion(calendar) {
  Object.values(calendar).map((c) => {
    const previousDay = calendar.find(
      (d) => d.date.getTime() === c.date.getTime() - 86400000
    );
    let currentStats = previousDay?.stats || { ...initialStats };
    let currentLinks = previousDay?.links || { ...initialLinks };
    let response = null;

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
