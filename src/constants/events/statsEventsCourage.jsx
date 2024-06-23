import EventCard from "../../components/eventCard/EventCard";
import { daysNames } from "../monthsNames";
import { stats } from "../stats";
import React from "react";

const getCourageUpgradeFunction = (value) => {
  return function ({ currentStats }) {
    return {
      stats: {
        ...currentStats,
        [stats.Courage.name]: currentStats[stats.Courage.name] + value,
      },
    };
  };
};

export const statsEventsCourage = {
  drinkMedicine: {
    name: "Drink Mr. Edogawa's medicine",
    category: "special",
    special: true,
    label: () => (
      <EventCard
        head="Drink Mr. Edogawa's medicine"
        place="Nurse's Office"
        stats="Courage +2"
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.tuesday, daysNames.friday];
      return currentTime === "day" && days.includes(currentDate.getDay());
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  sleepDuringClass: {
    name: "Sleep During Class",
    category: "stats",
    label: () => <EventCard head="Sleep During Class" stats="Courage +2" />,
    available: function ({ currentTime }) {
      return currentTime === "morning";
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  Mandragora: {
    name: "Mandragora(Sing solo karaoke)",
    category: "stats",
    label: () => (
      <EventCard
        head="Mandragora(Sing solo karaoke)"
        place="Paulownia Mall"
        stats="Courage +2"
        price={800}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      return (
        ["day", "evening"].includes(currentTime) &&
        currentDate.getDay() !== daysNames.sunday
      );
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  wilduckBurgeMysteryBurger: {
    name: "wilduckBurgeMysteryBurger",
    category: "stats",
    label: () => (
      <EventCard
        head="Wilduck Burger(Mystery Burger)"
        place="Iwatodai Strip Mall"
        stats="Courage +3"
        price={1000}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      return (
        ["day", "evening"].includes(currentTime) &&
        currentDate.getDay() !== daysNames.thursday
      );
    },
    upgrade: getCourageUpgradeFunction(3),
  },
  gameParadeCourage: {
    name: "Game Parade(Play House of the Deceased)",
    category: "stats",
    label: () => (
      <EventCard
        head="Game Parade(Play House of the Deceased)"
        place="Paulownia Mall"
        stats="Courage +4"
        price={3000}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.tuesday, daysNames.friday];
      return (
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getCourageUpgradeFunction(4),
  },
  wilduckBurgeWeekendWilduckSet: {
    name: "wilduckBurgeWeekendWilduckSet",
    category: "stats",
    label: () => (
      <EventCard
        head="Wilduck Burger(Weekend Wilduck Set)"
        place="Iwatodai Strip Mall"
        stats="Courage +4"
        price={1200}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.saturday, daysNames.sunday];
      return (
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getCourageUpgradeFunction(4),
  },
  cinemaTheaterCourage: {
    name: "cinema",
    category: "stats",
    label: () => (
      <EventCard
        head="Cinema('The School of No Wonder/The Way of Godson')"
        place="Port Island Station"
        stats="Courage +4"
        price={1500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.monday, daysNames.thursday];
      return days.includes(currentDate.getDay()) && currentTime === "day";
    },
    upgrade: getCourageUpgradeFunction(4),
  },
};
