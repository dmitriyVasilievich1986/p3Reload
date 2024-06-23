import { socialLinks } from "../socialLinks";
import { events } from "../events";
import { stats } from "../stats";

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

export const baseCalendar = {
  links: initialLinks,
  stats: initialStats,
};

export const classmates = [
  socialLinks.Magician.name,
  socialLinks.Chariot.name,
  socialLinks.Lovers.name,
];

export function initialCalculataion(calendar) {
  Object.values(calendar).map((c) => {
    const previousDay = calendar.find(
      (d) => d.date.getTime() === c.date.getTime() - 86400000
    );
    const weekAgoStats = calendar.find(
      (d) => d.date.getTime() === c.date.getTime() - 86400000 * 7
    )?.stats || { ...initialStats };
    let currentStats = previousDay?.stats || { ...initialStats };
    let currentLinks = previousDay?.links || { ...initialLinks };
    let singleTimeEvents = previousDay?.singleTimeEvents || [];
    let response = null;

    if (
      [
        previousDay?.activities.day.category,
        previousDay?.activities.evening.category,
      ].includes(events.tartarus.category)
    ) {
      response = events.drinkMedicine.upgrade({
        currentStats: currentStats,
      });
      currentStats = response.stats;
    }
    if (c.activities.morning !== null) {
      response = c.activities.morning.upgrade({
        singleTimeEvents: singleTimeEvents,
        weekAgoStats: weekAgoStats,
        currentStats: currentStats,
        currentLinks: currentLinks,
        arcanes: c.arcanes,
      });
      singleTimeEvents = response?.singleTimeEvents || singleTimeEvents;
      currentStats = response?.stats || currentStats;
      currentLinks = response?.links || currentLinks;
    }
    if (c.activities.day !== null) {
      response = c.activities.day.upgrade({
        singleTimeEvents: singleTimeEvents,
        weekAgoStats: weekAgoStats,
        currentStats: currentStats,
        currentLinks: currentLinks,
        arcanes: c.arcanes,
      });
      singleTimeEvents = response?.singleTimeEvents || singleTimeEvents;
      currentStats = response?.stats || currentStats;
      currentLinks = response?.links || currentLinks;
    }
    if (c.activities.evening !== null) {
      response = c.activities.evening.upgrade({
        singleTimeEvents: singleTimeEvents,
        weekAgoStats: weekAgoStats,
        currentStats: currentStats,
        currentLinks: currentLinks,
        arcanes: c.arcanes,
      });
      singleTimeEvents = response?.singleTimeEvents || singleTimeEvents;
      currentStats = response?.stats || currentStats;
      currentLinks = response?.links || currentLinks;
    }

    c.singleTimeEvents = [...singleTimeEvents];
    c.stats = currentStats;
    c.links = currentLinks;
  });

  return calendar;
}
