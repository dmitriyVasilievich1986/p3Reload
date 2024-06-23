import EventCard from "../../components/eventCard/EventCard";
import { daysNames } from "../monthsNames";
import { stats } from "../stats";
import React from "react";

const getCharmUpgradeFunction = (value) => {
  return function ({ currentStats }) {
    return {
      stats: {
        ...currentStats,
        [stats.Charm.name]: currentStats[stats.Charm.name] + value,
      },
    };
  };
};

export const statsEventsCharm = {
  beBlueV: {
    name: "Be Blue V(Work part-time)",
    category: "stats",
    label: () => (
      <EventCard
        head="Be Blue V(Work part-time)"
        stats="Charm +1 | Academics +1"
        place="Paulownia Mall"
        gain={3500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.friday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 6, 22) &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] + 1,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 1,
        },
      };
    },
  },
  chagallCafePartTimeWork: {
    name: "Chagall Cafe(Part-Time Work)",
    category: "stats",
    label: () => (
      <EventCard
        head="Chagall Cafe(Part-Time Work)"
        stats="Courage +1 | Charm +1"
        place="Paulownia Mall"
        gain={2500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.monday, daysNames.tuesday, daysNames.wednesday];
      return currentTime === "evening" && days.includes(currentDate.getDay());
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 1,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 1,
        },
      };
    },
  },
  chagallCafeCharm: {
    name: "Chagall Cafe(Pheromone Coffee)",
    category: "stats",
    label: () => (
      <EventCard
        head="Chagall Cafe(Pheromone Coffee)"
        place="Paulownia Mall"
        stats="Charm +2"
        price={500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.monday, daysNames.tuesday, daysNames.wednesday];
      return (
        (currentDate.getDay() === daysNames.friday && currentTime === "day") ||
        (currentTime === "evening" && days.includes(currentDate.getDay()))
      );
    },
    upgrade: getCharmUpgradeFunction(2),
  },
  schoolQuestionCharm: {
    name: "schoolQuestion",
    category: "special",
    special: true,
    available: () => false,
    label: () => null,
    upgrade: getCharmUpgradeFunction(2),
  },

  hagakureRamen: {
    name: "Hagakure Ramen(Pork Ramen)",
    category: "stats",
    label: () => (
      <EventCard
        head="Hagakure Ramen(Pork Ramen)"
        place="Iwatodai Strip Mall"
        stats="Charm +3"
        price={900}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      return (
        currentDate.getDay() !== daysNames.sunday &&
        ["day", "evening"].includes(currentTime)
      );
    },
    upgrade: getCharmUpgradeFunction(3),
  },
  cinemaTheaterCharm: {
    name: "cinema",
    category: "stats",
    label: () => (
      <EventCard
        head="Cinema('Thy Name')"
        place="Port Island Station"
        stats="Charm +4"
        price={1500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.tuesday, daysNames.friday];
      return days.includes(currentDate.getDay()) && currentTime === "day";
    },
    upgrade: getCharmUpgradeFunction(4),
  },
  hagakureRamenSpecial: {
    name: "Hagakure Ramen(Special Hagakure Bowl)",
    category: "stats",
    label: () => (
      <EventCard
        head="Hagakure Ramen(Special Hagakure Bowl)"
        place="Iwatodai Strip Mall"
        stats="Charm +4"
        price={1200}
      />
    ),
    available: function ({ currentDate, currentTime, currentStats }) {
      const days = [daysNames.tuesday, daysNames.wednesday, daysNames.friday];
      return (
        currentStats[stats.Courage.name] >= stats.Courage.levels[2].value &&
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getCharmUpgradeFunction(4),
  },
  gameParadeCharm: {
    name: "Game Parade(Play High School of Youth)",
    category: "stats",
    label: () => (
      <EventCard
        head="Game Parade(Play High School of Youth)"
        place="Paulownia Mall"
        stats="Charm +4"
        price={1500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.monday, daysNames.thursday];
      return (
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getCharmUpgradeFunction(4),
  },
};
