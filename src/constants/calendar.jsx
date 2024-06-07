import { events, ChoicesEvent, Choice } from "./events";
import { stats } from "./stats";
import React from "react";

const startStats = {
  [stats.Academics.name]: 0,
  [stats.Charm.name]: 0,
  [stats.Courage.name]: 0,
};

export const calendar = [
  {
    date: new Date(2009, 3, 8),
    stats: startStats,
    activities: {
      morning: {
        ...events.schoolQuestionAcademics,
        label: () => (
          <ChoicesEvent
            head="School question"
            label={
              'Among these phrases, "a rain of flower", "mystical mirage" and "vivid carp streamers" which one symbolizes summer?'
            }
          >
            <Choice label="a rain of flower" />
            <Choice label="mystical mirage" />
            <Choice label="vivid carp streamers" correct />
          </ChoicesEvent>
        ),
      },
      day: events.empty,
      evening: events.empty,
    },
  },
  {
    date: new Date(2009, 3, 9),
    stats: startStats,
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.empty,
    },
  },
  {
    date: new Date(2009, 3, 10),
    stats: startStats,
    activities: {
      morning: events.special,
      day: events.special,
      evening: events.special,
    },
  },
];

export function initialCalculataion(calendar) {
  Object.values(calendar).map((c) => {
    const previousDay = calendar.find(
      (d) => d.date.getTime() === c.date.getTime() - 86400000
    );
    let currentStats = previousDay?.stats || { ...startStats };
    if (c.activities.morning !== null)
      currentStats = c.activities.morning.upgrade({
        currentStats: currentStats,
      }).stats;
    if (c.activities.day !== null)
      currentStats = c.activities.day.upgrade({
        currentStats: currentStats,
      }).stats;
    if (c.activities.evening !== null)
      currentStats = c.activities.evening.upgrade({
        currentStats: currentStats,
      }).stats;
    c.stats = currentStats;
  });

  return calendar;
}
