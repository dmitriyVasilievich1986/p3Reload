import { daysNames } from "./monthsNames";
import { stats } from "./stats";
import React from "react";

export function Choice({ label, correct = false }) {
  return (
    <div
      style={{
        backgroundColor: correct ? "green" : "inherit",
        textAlign: "center",
      }}
    >
      {label}
    </div>
  );
}

export function ChoicesEvent({ label, children, head = null }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        margin: "0 5px",
        padding: "0 5px 15px 5px",
      }}
    >
      {head && (
        <div
          style={{
            position: "relative",
            top: "-10px",
            backgroundColor: "white",
            width: "fit-content",
            left: "10px",
          }}
        >
          {head}
        </div>
      )}
      <h4>{label}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "250px" }}>{children}</div>
      </div>
    </div>
  );
}

export function SpecialEvent({ label }) {
  return <h2>{label}</h2>;
}

const initialUpgrade = {
  upgrade: function ({ currentStats }) {
    return { stats: currentStats };
  },
};

export const events = {
  doNothing: {
    ...initialUpgrade,
    name: "doNothing",
    category: "empty",
    available: ({ currentTime }) => currentTime !== "morning",
  },
  special: {
    ...initialUpgrade,
    name: "special",
    category: "special",
    available: () => false,
    label: () => <SpecialEvent label="Special Event" />,
  },
  schoolQuestionCharm: {
    name: "schoolQuestion",
    category: "special",
    available: () => false,
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 2,
        },
      };
    },
  },
  cinemaTheaterAcademics: {
    name: "cinema",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      return (
        ["day", "evening"].includes(currentTime) &&
        [daysNames.wednesday, daysNames.saturday].includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] + 4,
        },
      };
    },
  },
  cinemaTheaterCharm: {
    name: "cinema",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      return (
        [daysNames.tuesday, daysNames.friday].includes(currentDate.getDay()) &&
        ["day", "evening"].includes(currentTime)
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 4,
        },
      };
    },
  },
  cinemaTheaterCourage: {
    name: "cinema",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      return (
        currentDate.getDay() === daysNames.thursday &&
        ["day", "evening"].includes(currentTime)
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 4,
        },
      };
    },
  },
  hagakureRamen: {
    name: "Hagakure Ramen(Pork Ramen)",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      return (
        currentDate.getDay() !== daysNames.sunday &&
        ["day", "evening"].includes(currentTime)
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 3,
        },
      };
    },
  },
  hagakureRamenSpecial: {
    name: "Hagakure Ramen(Special Hagakure Bowl)",
    category: "stats",
    available: ({ currentDate, currentTime, currentStats }) => {
      const days = [daysNames.tuesday, daysNames.wednesday, daysNames.friday];
      return (
        currentStats[stats.Courage.name] >= stats.Courage.levels[2].value &&
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 4,
        },
      };
    },
  },
  chagallCafe: {
    name: "Chagall Cafe(Pheromone Coffee)",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.monday, daysNames.tuesday, daysNames.wednesday];
      return (
        (currentDate.getDay() === daysNames.friday && currentTime === "day") ||
        (currentTime === "evening" && days.includes(currentDate.getDay()))
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 2,
        },
      };
    },
  },
  chagallCafe: {
    name: "Chagall Cafe(Part-Time Work)",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
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
  gameParadeCharm: {
    name: "Game Parade(Play High School of Youth)",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.monday, daysNames.thursday];
      return (
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 4,
        },
      };
    },
  },
  mangaStarNetCafe: {
    name: "Manga Star Net Cafe",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.monday, daysNames.thursday];
      return (
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 4,
        },
      };
    },
  },
  beBlueV: {
    name: "Be Blue V(Work part-time)",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.friday,
      ];
      return currentTime === "day" && days.includes(currentDate.getDay());
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 4,
        },
      };
    },
  },
  Mandragora: {
    name: "Mandragora(Sing solo karaoke)",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      return (
        ["day", "evening"].includes(currentTime) &&
        currentDate.getDay() !== daysNames.sunday
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 2,
        },
      };
    },
  },
  gameParadeCourage: {
    name: "Game Parade(Play House of the Deceased)",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.tuesday, daysNames.friday];
      return currentTime === "day" && days.includes(currentDate.getDay());
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 4,
        },
      };
    },
  },
  drinkMedicine: {
    name: "Drink Mr. Edogawa’s medicine",
    category: "special",
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.tuesday, daysNames.friday];
      return currentTime === "day" && days.includes(currentDate.getDay());
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 2,
        },
      };
    },
  },
  sleepDuringClass: {
    name: "Sleep During Class",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      return currentTime === "morning";
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 2,
        },
      };
    },
  },
  stayAwakeInClass: {
    name: "Stay Awake in Class",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      return currentTime === "morning";
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] + 2,
        },
      };
    },
  },
  studyAtHome: {
    name: "studyAtHome",
    category: "stats",
    available: ({ currentDate, currentTime }) => {
      return currentTime === "evening";
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] + 10,
        },
      };
    },
  },
};
