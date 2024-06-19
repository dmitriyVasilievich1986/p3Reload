import { socialLinks } from "./socialLinks";
import { daysNames } from "./monthsNames";
import { stats } from "./stats";
import React from "react";



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

export function SocialLink(props) {
  return (
    <React.Fragment>
      <h4 style={{ textAlign: "center" }}>{props.label}</h4>
      {props.name && <div>name: {props.name}</div>}
      {props.place && <div>Place: {props.place}</div>}
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
    special: true,
    available: () => false,
    label: () => <SpecialEvent label="Special Event" />,
  },
  tartarus: {
    ...initialUpgrade,
    name: "Tartarus",
    category: "Tartarus",
    available: ({ currentTime }) => currentTime !== "morning",
    label: () => {
      return (
        <div>
          <h3>Tartarus</h3>
        </div>
      );
    },
  },
  schoolQuestionCharm: {
    name: "schoolQuestion",
    category: "special",
    special: true,
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
      const days = [daysNames.wednesday, daysNames.saturday];
      return (currentTime = "day" && days.includes(currentDate.getDay()));
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
      const days = [daysNames.tuesday, daysNames.friday];
      return days.includes(currentDate.getDay()) && currentTime === "day";
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
        currentDate.getDay() === daysNames.thursday && currentTime === "day"
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
      return (
        currentDate.getTime() >= new Date(2009, 6, 22) &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
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
          [stats.Courage.name]: currentStats[stats.Courage.name] + 4,
        },
      };
    },
  },
  wilduckBurgeMysteryBurger: {
    name: "wilduckBurgeMysteryBurger",
    category: "stats",
    label: () => (
      <StatRaise
        label="Wilduck Burger(Mystery Burger)"
        place="Iwatodai Strip Mall"
        stats="Courage +3"
        price="¥1,000"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      return (
        ["day", "evening"].includes(currentTime) &&
        currentDate.getDay() !== daysNames.thursday
      );
    },
    upgrade: function ({ currentStats, currentLinks }) {
      return {
        links: { ...currentLinks },
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 3,
        },
      };
    },
  },
  wilduckBurgeWeekendWilduckSet: {
    name: "wilduckBurgeWeekendWilduckSet",
    category: "stats",
    label: () => (
      <StatRaise
        label="Wilduck Burger(Weekend Wilduck Set)"
        place="Iwatodai Strip Mall"
        stats="Courage +4"
        price="¥1,200"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.saturday, daysNames.sunday];
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
          [stats.Courage.name]: currentStats[stats.Courage.name] + 4,
        },
      };
    },
  },
  drinkMedicine: {
    name: "Drink Mr. Edogawa's medicine",
    category: "special",
    special: true,
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
  studyAtLibrary: {
    name: "studyAtLibrary",
    category: "stats",
    label: () => (
      <StatRaise
        label="Studying At The Library"
        place="Gekkoukan High School"
        stats="Academics +2"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      return currentTime === "day";
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
  wakatsuKitchen: {
    name: "wakatsuKitchen",
    category: "stats",
    label: () => (
      <StatRaise
        label="Wakatsu Kitchen(Prodigy Platter)"
        place="Iwatodai Strip Mall"
        stats="Academics +3"
        price="¥680"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [
        daysNames.thursday,
        daysNames.friday,
        daysNames.saturday,
        daysNames.sunday,
      ];
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
          [stats.Academics.name]: currentStats[stats.Academics.name] + 3,
        },
      };
    },
  },
  wakatsuKitchenSpecial: {
    name: "wakatsuKitchenSpecial",
    category: "stats",
    label: () => (
      <StatRaise
        label="Wakatsu Kitchen(Seafood Full Course)"
        place="Iwatodai Strip Mall"
        stats="Academics +4"
        price="¥900"
      />
    ),
    available: ({ currentDate, currentTime, previousDay }) => {
      const days = [
        daysNames.monday,
        daysNames.thursday,
        daysNames.friday,
        daysNames.sunday,
      ];
      return (
        previousDay?.stats[stats.Charm.name] >= 30 &&
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
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
  gameParadeAcademics: {
    name: "Game Parade(Play You're the Answer)",
    category: "stats",
    label: () => (
      <StatRaise
        label="Game Parade(Play You're the Answer)"
        place="Paulownia Mall"
        stats="Academics +4"
        price="¥3,000"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.wednesday, daysNames.saturday];
      return currentTime === "day" && days.includes(currentDate.getDay());
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
  Magician: {
    name: "Magician",
    category: "links",
    label: () => (
      <SocialLink
        label="Magician"
        name="Kenji Tomochika"
        place="Classroom 2F"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.tuesday, daysNames.thursday, daysNames.friday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 22).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
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
    label: () => (
      <SocialLink
        label="Priestess"
        name="Fuuka Yamagishi"
        place="2nd Floor Hallway"
      />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Priestess.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Priestess.name].romance || isFork;
      const days = [daysNames.monday, daysNames.friday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 19).getTime() &&
        previousDay.stats[stats.Courage.name] >= 80 &&
        previousDay.links[socialLinks.Fortune.name].level > 0 &&
        isRomance &&
        currentTime === "day" &&
        days.includes(currentDate.getDay())
      );
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
    label: () => (
      <SocialLink
        label="Priestess"
        name="Fuuka Yamagishi"
        place="2nd Floor Hallway"
      />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Priestess.name].level === 6;
      const isRomance =
        currentLinks[socialLinks.Priestess.name].romance || isFork;
      const days = [daysNames.monday, daysNames.friday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 19).getTime() &&
        previousDay.stats[stats.Courage.name] >= 80 &&
        previousDay.links[socialLinks.Fortune.name].level > 0 &&
        isRomance &&
        currentTime === "day" &&
        days.includes(currentDate.getDay())
      );
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
  Empress: {
    name: "Empress",
    category: "links",
    label: () => (
      <SocialLink
        label="Empress"
        name="Mitsuru Kirijo"
        place="Faculty Office Entrance"
      />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 10, 21).getTime() &&
        previousDay.stats[stats.Academics.name] >= 230 &&
        isRomance &&
        currentTime === "day" &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Empress.name) ? 1.51 : 1;
      const newLinks = socialLinks.Empress.calculate({
        ...currentLinks[socialLinks.Empress.name],
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
  EmpressRomance: {
    name: "Empress",
    category: "links",
    label: () => (
      <SocialLink
        label="Empress"
        name="Mitsuru Kirijo"
        place="Faculty Office Entrance"
      />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 10, 21).getTime() &&
        previousDay.stats[stats.Academics.name] >= 230 &&
        isRomance &&
        currentTime === "day" &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Empress.name) ? 1.51 : 1;
      const newLinks = socialLinks.Empress.calculate({
        ...currentLinks[socialLinks.Empress.name],
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
    label: () => (
      <SocialLink
        label="Emperor"
        name="Hidetoshi Odagiri"
        place="Student Council Room"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.monday, daysNames.wednesday, daysNames.friday];
      const isToday =
        currentDate.getTime() >= new Date(2010, 0, 1).getTime() ||
        days.includes(currentDate.getDay());
      return (
        currentDate.getTime() >= new Date(2009, 3, 27).getTime() &&
        currentTime === "day" &&
        isToday
      );
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
    label: () => (
      <SocialLink
        label="Hierophant"
        name="Bunkichi and Mitsuko"
        place="Bookworms Used Books"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.friday,
        daysNames.saturday,
        daysNames.sunday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 3, 25).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
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
  Lovers: {
    name: "Lovers",
    category: "links",
    label: () => (
      <SocialLink label="Lovers" name="Yukari Takeba" place="Classroom 2F" />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 6, 25).getTime() &&
        previousDay.stats[stats.Charm.name] >= 100 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Lovers.name) ? 1.51 : 1;
      const newLinks = socialLinks.Lovers.calculate({
        ...currentLinks[socialLinks.Lovers.name],
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
  LoversRomance: {
    name: "Lovers",
    category: "links",
    label: () => (
      <SocialLink label="Lovers" name="Yukari Takeba" place="Classroom 2F" />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 6, 25).getTime() &&
        previousDay.stats[stats.Charm.name] >= 100 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Lovers.name) ? 1.51 : 1;
      const newLinks = socialLinks.Lovers.calculate({
        ...currentLinks[socialLinks.Lovers.name],
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
  Chariot: {
    name: "Chariot",
    category: "links",
    label: () => (
      <SocialLink
        label="Chariot"
        name="Kazushi Miyamoto"
        place="Classroom 2F"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.thursday,
        daysNames.friday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 3, 23).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
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
  Justice: {
    name: "Justice",
    category: "links",
    label: () => (
      <SocialLink
        label="Justice"
        name="Chihiro Fushimi"
        place="2nd Floor Hallway"
      />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [daysNames.tuesday, daysNames.thursday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 7).getTime() &&
        previousDay.links[socialLinks.Emperor.name].level > 0 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Justice.name) ? 1.51 : 1;
      const newLinks = socialLinks.Justice.calculate({
        ...currentLinks[socialLinks.Justice.name],
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
  JusticeRomance: {
    name: "Justice",
    category: "links",
    label: () => (
      <SocialLink
        label="Justice"
        name="Chihiro Fushimi"
        place="2nd Floor Hallway"
      />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [daysNames.tuesday, daysNames.thursday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 7).getTime() &&
        previousDay.links[socialLinks.Emperor.name].level > 0 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Justice.name) ? 1.51 : 1;
      const newLinks = socialLinks.Justice.calculate({
        ...currentLinks[socialLinks.Justice.name],
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
  Hermit: {
    name: "Hermit",
    category: "links",
    label: () => (
      <SocialLink
        label="Hermit"
        name="Maya"
        place="Laptop at the Protagonist's room"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      return (
        currentDate.getTime() >= new Date(2009, 3, 29).getTime() &&
        currentDate.getDay() == daysNames.sunday &&
        currentTime === "day"
      );
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
  Fortune: {
    name: "Fortune",
    category: "links",
    label: () => (
      <SocialLink label="Fortune" name="Keisuke Hiraga" place="Art Club Room" />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.tuesday, daysNames.wednesday, daysNames.thursday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 17).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Fortune.name) ? 1.51 : 1;
      const newLinks = socialLinks.Fortune.calculate({
        ...currentLinks[socialLinks.Fortune.name],
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
  Strength: {
    name: "Strength",
    category: "links",
    label: () => (
      <SocialLink
        label="Strength"
        name="Yuko Nishiwaki"
        place="2F Classroom Hallway"
      />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [daysNames.wednesday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[socialLinks.Chariot.name].level >= 2 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Strength.name) ? 1.51 : 1;
      const newLinks = socialLinks.Strength.calculate({
        ...currentLinks[socialLinks.Strength.name],
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
  StrengthRomance: {
    name: "Strength",
    category: "links",
    label: () => (
      <SocialLink
        label="Strength"
        name="Yuko Nishiwaki"
        place="2F Classroom Hallway"
      />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [daysNames.wednesday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[socialLinks.Chariot.name].level >= 2 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Strength.name) ? 1.51 : 1;
      const newLinks = socialLinks.Strength.calculate({
        ...currentLinks[socialLinks.Strength.name],
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
  HangedMan: {
    name: "HangedMan",
    category: "links",
    label: () => (
      <SocialLink
        label="Hanged Man"
        name="Maiko Oohashi"
        place="Naganaki Shrine"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.monday, daysNames.wednesday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 6).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.HangedMan.name)
        ? 1.51
        : 1;
      const newLinks = socialLinks.HangedMan.calculate({
        ...currentLinks[socialLinks.HangedMan.name],
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
  Temperance: {
    name: "Temperance",
    category: "links",
    label: () => (
      <SocialLink
        label="Temperance"
        name='André Laurent Jean "Bebe" Geraux'
        place="2F Classroom Hallway / 1F Laboratory Hallway (Home Economics Room)"
      />
    ),
    available: ({ currentDate, currentTime, previousDay }) => {
      if (previousDay === undefined) return false;
      const days = [daysNames.tuesday, daysNames.wednesday, daysNames.friday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 8).getTime() &&
        previousDay.links[socialLinks.Hierophant.name].level >= 3 &&
        previousDay.stats[stats.Academics.name] >= 20 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Temperance.name)
        ? 1.51
        : 1;
      const newLinks = socialLinks.Temperance.calculate({
        ...currentLinks[socialLinks.Temperance.name],
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
  Devil: {
    name: "Devil",
    category: "links",
    label: () => (
      <SocialLink
        label="Devil"
        name="President Tanaka"
        place="Paulownia Mall"
      />
    ),
    available: ({ currentDate, currentTime, previousDay }) => {
      if (previousDay === undefined) return false;
      const days = [daysNames.tuesday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 16).getTime() &&
        previousDay.links[socialLinks.Hermit.name].level >= 4 &&
        previousDay.stats[stats.Charm.name] >= 45 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "evening"
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Devil.name) ? 1.51 : 1;
      const newLinks = socialLinks.Devil.calculate({
        ...currentLinks[socialLinks.Devil.name],
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
  Tower: {
    name: "Tower",
    category: "links",
    label: () => (
      <SocialLink label="Tower" name="Mutatsu" place="Club Escapade" />
    ),
    available: ({ currentDate, currentTime, previousDay }) => {
      if (previousDay === undefined) return false;
      const days = [
        daysNames.thursday,
        daysNames.friday,
        daysNames.saturday,
        daysNames.sunday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 4, 23).getTime() &&
        previousDay.links[socialLinks.Strength.name].level >= 4 &&
        previousDay.stats[stats.Courage.name] >= 15 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "evening"
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Tower.name) ? 1.51 : 1;
      const newLinks = socialLinks.Tower.calculate({
        ...currentLinks[socialLinks.Tower.name],
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
  Star: {
    name: "Star",
    category: "links",
    label: () => (
      <SocialLink
        label="Star"
        name="Mamoru Hayase"
        place="Iwatodai Station Strip Mall 1F"
      />
    ),
    available: ({ currentDate, currentTime, previousDay }) => {
      if (previousDay === undefined) return false;
      const days = [daysNames.wednesday, daysNames.friday, daysNames.sunday];
      return (
        currentDate.getTime() >= new Date(2009, 7, 5).getTime() &&
        previousDay.stats[stats.Courage.name] >= 45 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Star.name) ? 1.51 : 1;
      const newLinks = socialLinks.Star.calculate({
        ...currentLinks[socialLinks.Star.name],
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
  Moon: {
    name: "Moon",
    category: "links",
    label: () => (
      <SocialLink label="Moon" name="Nozomi Suemitsu" place="Paulownia Mall" />
    ),
    available: ({ currentDate, currentTime, previousDay }) => {
      if (previousDay === undefined) return false;
      return (
        currentDate.getTime() >= new Date(2009, 3, 28).getTime() &&
        previousDay.links[socialLinks.Magician.name].level >= 3 &&
        previousDay.stats[stats.Charm.name] >= 15 &&
        currentTime === "day"
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Moon.name) ? 1.51 : 1;
      const newLinks = socialLinks.Moon.calculate({
        ...currentLinks[socialLinks.Moon.name],
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
  Sun: {
    name: "Sun",
    category: "links",
    label: () => (
      <SocialLink label="Sun" name="Akinari Kamiki" place="Naganaki Shrine" />
    ),
    available: ({ currentDate, currentTime, previousDay }) => {
      if (previousDay === undefined) return false;
      return (
        currentDate.getTime() >= new Date(2009, 7, 9).getTime() &&
        previousDay.links[socialLinks.HangedMan.name].level >= 3 &&
        previousDay.stats[stats.Academics.name] >= 100 &&
        currentDate.getDay() == daysNames.sunday &&
        currentTime === "day"
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Sun.name) ? 1.51 : 1;
      const newLinks = socialLinks.Sun.calculate({
        ...currentLinks[socialLinks.Sun.name],
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
  Aeon: {
    name: "Aeon",
    category: "links",
    label: () => <SocialLink label="Aeon" name="Aigis" place="Classroom 2F" />,
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.friday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2010, 0, 8).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Aeon.name) ? 1.51 : 1;
      const newLinks = socialLinks.Aeon.calculate({
        ...currentLinks[socialLinks.Aeon.name],
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
  AeonRomance: {
    name: "Aeon",
    category: "links",
    label: () => <SocialLink label="Aeon" name="Aigis" place="Classroom 2F" />,
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.friday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2010, 0, 8).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const multiplier = arcanes.includes(socialLinks.Aeon.name) ? 1.51 : 1;
      const newLinks = socialLinks.Aeon.calculate({
        ...currentLinks[socialLinks.Aeon.name],
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
  Fool: {
    name: "Fool",
    category: "links",
    special: true,
    label: () => <SocialLink label="Fool" name="S.E.E.S." place="Tartarus" />,
    available: () => false,
    upgrade: function ({ currentStats, currentLinks, arcanes }) {
      const newLinks = socialLinks.Fool.calculate({
        ...currentLinks[socialLinks.Fool.name],
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
