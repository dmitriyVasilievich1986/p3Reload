import { socialLinks } from "./socialLinks";
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
    <div>
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

export function StatRaise(props) {
  return (
    <React.Fragment>
      <h4 style={{ textAlign: "center" }}>{props.label}</h4>
      <div>Stats: {props.stats}</div>
      {props.place && <div>Place: {props.place}</div>}
      {props.price && <div>Price: {props.price}</div>}
      {props.gain && <div>Gain: {props.gain}</div>}
    </React.Fragment>
  );
}

const initialUpgrade = {
  upgrade: function ({ currentStats, currentLinks }) {
    return { stats: currentStats, links: currentLinks };
  },
};

export const events = {
  doNothing: {
    ...initialUpgrade,
    name: "doNothing",
    category: "empty",
    available: ({ currentTime }) => currentTime !== "morning",
    label: () => <SpecialEvent label="Free time" />,
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
    label: () => <SpecialEvent label="Do nothing" />,
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
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
    label: () => (
      <StatRaise
        label="Cinema('Unresolved Mysteries')"
        place="Port Island Station"
        stats="Academics +4"
        price="¥5,000"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      return (
        ["day", "evening"].includes(currentTime) &&
        [daysNames.wednesday, daysNames.saturday].includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
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
    label: () => (
      <StatRaise
        label="Cinema('Thy Name')"
        place="Port Island Station"
        stats="Charm +4"
        price="¥5,000"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      return (
        [daysNames.tuesday, daysNames.friday].includes(currentDate.getDay()) &&
        ["day", "evening"].includes(currentTime)
      );
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
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
    label: () => (
      <StatRaise
        label="Cinema('The Way of the Godson')"
        place="Port Island Station"
        stats="Courage +4"
        price="¥5,000"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      return (
        currentDate.getDay() === daysNames.thursday &&
        ["day", "evening"].includes(currentTime)
      );
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
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
    label: () => (
      <StatRaise
        label="Hagakure Ramen(Pork Ramen)"
        place="Iwatodai Strip Mall"
        stats="Charm +3"
        price="¥900"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      return (
        currentDate.getDay() !== daysNames.sunday &&
        ["day", "evening"].includes(currentTime)
      );
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 3,
        },
      };
    },
  },
  hagakureRamenSpecial: {
    name: "Hagakure Ramen(Special Hagakure Bowl)",
    category: "stats",
    label: () => (
      <StatRaise
        label="Hagakure Ramen(Special Hagakure Bowl)"
        place="Iwatodai Strip Mall"
        stats="Charm +4"
        price="¥1,200"
      />
    ),
    available: ({ currentDate, currentTime, currentStats }) => {
      const days = [daysNames.tuesday, daysNames.wednesday, daysNames.friday];
      return (
        currentStats[stats.Courage.name] >= stats.Courage.levels[2].value &&
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 4,
        },
      };
    },
  },
  chagallCafeCharm: {
    name: "Chagall Cafe(Pheromone Coffee)",
    category: "stats",
    label: () => (
      <StatRaise
        label="Chagall Cafe(Pheromone Coffee)"
        place="Paulownia Mall"
        stats="Charm +2"
        price="¥500"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.monday, daysNames.tuesday, daysNames.wednesday];
      return (
        (currentDate.getDay() === daysNames.friday && currentTime === "day") ||
        (currentTime === "evening" && days.includes(currentDate.getDay()))
      );
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 2,
        },
      };
    },
  },
  chagallCafePartTimeWork: {
    name: "Chagall Cafe(Part-Time Work)",
    category: "stats",
    label: () => (
      <StatRaise
        label="Chagall Cafe(Part-Time Work)"
        stats="Courage +1 | Charm +1"
        place="Paulownia Mall"
        gain="¥2,500"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.monday, daysNames.tuesday, daysNames.wednesday];
      return currentTime === "evening" && days.includes(currentDate.getDay());
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
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
    label: () => (
      <StatRaise
        label="Game Parade(Play High School of Youth)"
        place="Paulownia Mall"
        stats="Charm +4"
        price="¥3,000"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.monday, daysNames.thursday];
      return (
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
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
    label: () => (
      <StatRaise
        label="Manga Star Net Cafe"
        place="Iwatodai Strip Mall"
        stats="Charm +4"
        price="¥1,200"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.monday, daysNames.thursday];
      return (
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
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
    label: () => (
      <StatRaise
        label="Be Blue V(Work part-time)"
        stats="Charm +1 | Academics +1"
        place="Paulownia Mall"
        gain="¥3,500"
      />
    ),
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
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] + 1,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 1,
        },
      };
    },
  },
  Mandragora: {
    name: "Mandragora(Sing solo karaoke)",
    category: "stats",
    label: () => (
      <StatRaise
        label="Mandragora(Sing solo karaoke)"
        place="Paulownia Mall"
        stats="Courage +2"
        price="¥800"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      return (
        ["day", "evening"].includes(currentTime) &&
        currentDate.getDay() !== daysNames.sunday
      );
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
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
    label: () => (
      <StatRaise
        label="Game Parade(Play House of the Deceased)"
        place="Paulownia Mall"
        stats="Courage +4"
        price="¥3,000"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.tuesday, daysNames.friday];
      return currentTime === "day" && days.includes(currentDate.getDay());
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 4,
        },
      };
    },
  },
  drinkMedicine: {
    name: "Drink Mr. Edogawa's medicine",
    category: "special",
    label: () => (
      <StatRaise
        label="Drink Mr. Edogawa's medicine"
        place="Nurse's Office"
        stats="Courage +2"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.tuesday, daysNames.friday];
      return currentTime === "day" && days.includes(currentDate.getDay());
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
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
    label: () => <StatRaise label="Sleep During Class" stats="Courage +2" />,
    available: ({ currentDate, currentTime }) => {
      return currentTime === "morning";
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
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
    label: () => <StatRaise label="Stay Awake in Class" stats="Academics +2" />,
    available: ({ currentDate, currentTime }) => {
      return currentTime === "morning";
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
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
    label: () => (
      <StatRaise
        label="Studying In Your Room"
        place="Your Room"
        stats="Academics +2"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      return currentTime === "evening";
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] + 2,
        },
      };
    },
  },
  Magician: {
    name: "Magician",
    category: "links",
    label: () => <h3 style={{ textAlign: "center" }}>Magician</h3>,
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.tuesday, daysNames.thursday, daysNames.friday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 22).getTime() &&
        currentTime === "day" &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Magician.name) ? 1.51 : 1;
      const newLinks = socialLinks.Magician.calculate({
        ...currentLinks[socialLinks.Magician.name],
        multiplier,
      });
      return {
        links: {
          ...currentLinks,
          ...newLinks,
        },
        stats: { ...currentStats },
      };
    },
  },
  Priestess: {
    name: "Priestess",
    category: "links",
    label: () => <h3 style={{ textAlign: "center" }}>Priestess</h3>,
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      const isFork =
        previousDay?.links &&
        previousDay.links[socialLinks.Priestess.name].level === 6;
      return !currentLinks[socialLinks.Priestess.name].romance || isFork;
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Priestess.name)
        ? 1.51
        : 1;
      const newLinks = socialLinks.Priestess.calculate({
        ...currentLinks[socialLinks.Priestess.name],
        multiplier,
      });
      return {
        links: {
          ...currentLinks,
          ...newLinks,
        },
        stats: { ...currentStats },
      };
    },
  },
  PriestessRomance: {
    name: "Priestess",
    category: "links",
    label: () => <h3 style={{ textAlign: "center" }}>Priestess</h3>,
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      const isFork =
        previousDay?.links &&
        previousDay.links[socialLinks.Priestess.name].level === 6;
      return currentLinks[socialLinks.Priestess.name].romance || isFork;
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Priestess.name)
        ? 1.51
        : 1;
      const newLinks = socialLinks.Priestess.calculate({
        ...currentLinks[socialLinks.Priestess.name],
        romance: true,
        multiplier,
      });
      return {
        links: {
          ...currentLinks,
          ...newLinks,
        },
        stats: { ...currentStats },
      };
    },
  },
  Emperor: {
    name: "Emperor",
    category: "links",
    label: () => <h3 style={{ textAlign: "center" }}>Emperor</h3>,
    available: () => {
      return true;
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Emperor.name) ? 1.51 : 1;
      const newLinks = socialLinks.Emperor.calculate({
        ...currentLinks[socialLinks.Emperor.name],
        multiplier,
      });
      return {
        links: {
          ...currentLinks,
          ...newLinks,
        },
        stats: { ...currentStats },
      };
    },
  },
  Hierophant: {
    name: "Hierophant",
    category: "links",
    label: () => <h3 style={{ textAlign: "center" }}>Hierophant</h3>,
    available: () => {
      return true;
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Hierophant.name)
        ? 1.51
        : 1;
      const newLinks = socialLinks.Hierophant.calculate({
        ...currentLinks[socialLinks.Hierophant.name],
        multiplier,
      });
      return {
        links: {
          ...currentLinks,
          ...newLinks,
        },
        stats: { ...currentStats },
      };
    },
  },
  Chariot: {
    name: "Chariot",
    category: "links",
    label: () => <h3 style={{ textAlign: "center" }}>Chariot</h3>,
    available: () => {
      return true;
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Chariot.name) ? 1.51 : 1;
      const newLinks = socialLinks.Chariot.calculate({
        ...currentLinks[socialLinks.Chariot.name],
        multiplier,
      });
      return {
        links: {
          ...currentLinks,
          ...newLinks,
        },
        stats: { ...currentStats },
      };
    },
  },
  Hermit: {
    name: "Hermit",
    category: "links",
    label: () => <h3 style={{ textAlign: "center" }}>Hermit</h3>,
    available: () => {
      return true;
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Hermit.name) ? 1.51 : 1;
      const newLinks = socialLinks.Hermit.calculate({
        ...currentLinks[socialLinks.Hermit.name],
        multiplier,
      });
      return {
        links: {
          ...currentLinks,
          ...newLinks,
        },
        stats: { ...currentStats },
      };
    },
  },
};
