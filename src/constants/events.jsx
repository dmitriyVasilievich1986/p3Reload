import EventCard from "../components/eventCard/EventCard";
import { socialLinks } from "./socialLinks";
import { daysNames } from "./monthsNames";
import { stats } from "./stats";
import React from "react";

const holidays = [
  new Date(2009, 3, 29).getTime(),
  new Date(2009, 4, 4).getTime(),
  new Date(2009, 4, 5).getTime(),
];

const initialUpgrade = {
  upgrade: function ({ currentStats, currentLinks }) {
    return { stats: currentStats, links: currentLinks };
  },
};

const linkBaseFunctions = {
  name: "",
  category: "links",
  upgrade: function ({ currentStats, currentLinks, arcanes }) {
    let multiplier = currentLinks[this.name].multiplier;
    if (arcanes.includes(this.name)) multiplier *= 1.51;
    if (currentStats[stats.Charm.name] >= 100) multiplier *= 1.51;

    const newLinks = socialLinks[this.name].calculate({
      ...currentLinks[this.name],
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
};

export const events = {
  doNothing: {
    ...initialUpgrade,
    name: "doNothing",
    category: "empty",
    available: ({ currentTime }) => currentTime !== "morning",
    label: () => <EventCard head="Free Time" />,
  },
  noControl: {
    ...initialUpgrade,
    name: "noControl",
    category: "empty",
    available: () => false,
    label: () => <EventCard head="Control Not Available" />,
  },
  special: {
    ...initialUpgrade,
    name: "special",
    category: "special",
    special: true,
    available: () => false,
    label: () => <EventCard head="Special Event" />,
  },
  tartarus: {
    ...initialUpgrade,
    name: "tartarus",
    category: "Tartarus",
    available: ({ currentTime }) => currentTime !== "morning",
    label: () => <EventCard head="Tartarus" />,
  },
  exams: {
    ...initialUpgrade,
    name: "exams",
    category: "exams",
    special: true,
    available: () => false,
    label: () => <EventCard head="Exam" />,
  },
  schoolQuestionCharm: {
    name: "schoolQuestion",
    category: "special",
    special: true,
    available: () => false,
    label: () => null,
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
      <EventCard
        head="Cinema('Unresolved Mysteries')"
        place="Port Island Station"
        stats="Academics +4"
        price={5000}
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
      <EventCard
        head="Cinema('Thy Name')"
        place="Port Island Station"
        stats="Charm +4"
        price={5000}
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
      <EventCard
        head="Cinema('The Way of the Godson')"
        place="Port Island Station"
        stats="Courage +4"
        price={5000}
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
      <EventCard
        head="Hagakure Ramen(Pork Ramen)"
        place="Iwatodai Strip Mall"
        stats="Charm +3"
        price={900}
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
      <EventCard
        head="Hagakure Ramen(Special Hagakure Bowl)"
        place="Iwatodai Strip Mall"
        stats="Charm +4"
        price={1200}
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
      <EventCard
        head="Chagall Cafe(Pheromone Coffee)"
        place="Paulownia Mall"
        stats="Charm +2"
        price={500}
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
      <EventCard
        head="Chagall Cafe(Part-Time Work)"
        stats="Courage +1 | Charm +1"
        place="Paulownia Mall"
        gain={2500}
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
      <EventCard
        head="Game Parade(Play High School of Youth)"
        place="Paulownia Mall"
        stats="Charm +4"
        price={3000}
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
      <EventCard
        head="Manga Star Net Cafe"
        place="Iwatodai Strip Mall"
        stats="Charm +4"
        price={1200}
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
      <EventCard
        head="Be Blue V(Work part-time)"
        stats="Charm +1 | Academics +1"
        place="Paulownia Mall"
        gain={3500}
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
      <EventCard
        head="Mandragora(Sing solo karaoke)"
        place="Paulownia Mall"
        stats="Courage +2"
        price={800}
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
      <EventCard
        head="Game Parade(Play House of the Deceased)"
        place="Paulownia Mall"
        stats="Courage +4"
        price={3000}
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
      <EventCard
        head="Wilduck Burger(Mystery Burger)"
        place="Iwatodai Strip Mall"
        stats="Courage +3"
        price={1000}
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
      <EventCard
        head="Wilduck Burger(Weekend Wilduck Set)"
        place="Iwatodai Strip Mall"
        stats="Courage +4"
        price={1200}
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
      <EventCard
        head="Drink Mr. Edogawa's medicine"
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
    label: () => <EventCard head="Sleep During Class" stats="Courage +2" />,
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
    label: () => <EventCard head="Stay Awake in Class" stats="Academics +2" />,
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
      <EventCard
        head="Studying In Your Room"
        stats="Academics +2"
        place="Your Room"
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
      <EventCard
        head="Studying At The Library"
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
      <EventCard
        head="Wakatsu Kitchen(Prodigy Platter)"
        place="Iwatodai Strip Mall"
        stats="Academics +3"
        price={680}
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
      <EventCard
        head="Wakatsu Kitchen(Seafood Full Course)"
        place="Iwatodai Strip Mall"
        stats="Academics +4"
        price={900}
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
      <EventCard
        head="Game Parade(Play You're the Answer)"
        place="Paulownia Mall"
        stats="Academics +4"
        price={3000}
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
  lobbyPCAcademics: {
    name: "lobbyPCAcademics",
    category: "stats",
    label: () => (
      <EventCard head="Lobby PC" place="Dorm" stats="Academics +4" />
    ),
    available: ({ currentTime, currentDate }) => {
      return (
        ["day", "evening"].includes(currentTime) &&
        currentDate.getTime() >= new Date(2009, 3, 29).getTime()
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
  lobbyPCCourage: {
    name: "lobbyPCCourage",
    category: "stats",
    label: () => <EventCard head="Lobby PC" place="Dorm" stats="Courage +4" />,
    available: ({ currentTime, currentDate }) => {
      return (
        ["day", "evening"].includes(currentTime) &&
        currentDate.getTime() >= new Date(2009, 3, 29).getTime()
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
  lobbyPCCharm: {
    name: "lobbyPCCharm",
    category: "stats",
    label: () => <EventCard head="Lobby PC" place="Dorm" stats="Charm +4" />,
    available: ({ currentTime, currentDate }) => {
      return (
        ["day", "evening"].includes(currentTime) &&
        currentDate.getTime() >= new Date(2009, 3, 29).getTime()
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
  Magician: {
    ...linkBaseFunctions,
    name: socialLinks.Magician.name,
    label: () => (
      <EventCard head="Magician" name="Kenji Tomochika" place="Classroom 2F" />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.tuesday, daysNames.thursday, daysNames.friday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 22).getTime() &&
        !holidays.includes(currentDate.getTime()) &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
  },
  Priestess: {
    ...linkBaseFunctions,
    name: socialLinks.Priestess.name,
    label: () => (
      <EventCard
        place="2nd Floor Hallway"
        name="Fuuka Yamagishi"
        head="Priestess"
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
        previousDay.links[socialLinks.Fortune.name].level > 0 &&
        previousDay.stats[stats.Courage.name] >= 80 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  PriestessRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Priestess.name,
    label: () => (
      <EventCard
        head="Priestess(Romance)"
        place="2nd Floor Hallway"
        name="Fuuka Yamagishi"
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
  },
  Empress: {
    ...linkBaseFunctions,
    name: socialLinks.Empress.name,
    label: () => (
      <EventCard
        place="Faculty Office Entrance"
        name="Mitsuru Kirijo"
        head="Empress"
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
  },
  EmpressRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Empress.name,
    label: () => (
      <EventCard
        place="Faculty Office Entrance"
        head="Empress(Romance)"
        name="Mitsuru Kirijo"
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
  },
  Emperor: {
    ...linkBaseFunctions,
    name: socialLinks.Emperor.name,
    label: () => (
      <EventCard
        place="Student Council Room"
        name="Hidetoshi Odagiri"
        head="Emperor"
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
  },
  Hierophant: {
    ...linkBaseFunctions,
    name: socialLinks.Hierophant.name,
    label: () => (
      <EventCard
        place="Bookworms Used Books"
        name="Bunkichi and Mitsuko"
        head="Hierophant"
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
  },
  Lovers: {
    ...linkBaseFunctions,
    name: socialLinks.Lovers.name,
    label: () => (
      <EventCard head="Lovers" name="Yukari Takeba" place="Classroom 2F" />
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
  },
  LoversRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Lovers.name,
    label: () => (
      <EventCard
        head="Lovers(Romance)"
        name="Yukari Takeba"
        place="Classroom 2F"
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
  },
  Chariot: {
    ...linkBaseFunctions,
    name: socialLinks.Chariot.name,
    label: () => (
      <EventCard name="Kazushi Miyamoto" place="Classroom 2F" head="Chariot" />
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
        !holidays.includes(currentDate.getTime()) &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
  },
  Justice: {
    ...linkBaseFunctions,
    name: socialLinks.Justice.name,
    label: () => (
      <EventCard
        place="2nd Floor Hallway"
        name="Chihiro Fushimi"
        head="Justice"
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
  },
  JusticeRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Justice.name,
    label: () => (
      <EventCard
        place="2nd Floor Hallway"
        name="Chihiro Fushimi"
        head="Justice"
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
  },
  Hermit: {
    ...linkBaseFunctions,
    name: socialLinks.Hermit.name,
    label: () => (
      <EventCard
        place="Laptop at the Protagonist's room"
        head="Hermit"
        name="Maya"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      return (
        currentDate.getTime() >= new Date(2009, 3, 29).getTime() &&
        currentDate.getDay() == daysNames.sunday &&
        currentTime === "day"
      );
    },
  },
  Fortune: {
    ...linkBaseFunctions,
    name: socialLinks.Fortune.name,
    label: () => (
      <EventCard name="Keisuke Hiraga" place="Art Club Room" head="Fortune" />
    ),
    available: ({ currentDate, currentTime }) => {
      const days = [daysNames.tuesday, daysNames.wednesday, daysNames.thursday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 17).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
  },
  Strength: {
    ...linkBaseFunctions,
    name: socialLinks.Strength.name,
    label: () => (
      <EventCard
        place="2F Classroom Hallway"
        name="Yuko Nishiwaki"
        head="Strength"
      />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Strength.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Strength.name].romance || isFork;
      const days = [daysNames.wednesday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[socialLinks.Chariot.name].level >= 2 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  StrengthRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Strength.name,
    label: () => (
      <EventCard
        place="2F Classroom Hallway"
        head="Strength(Romance)"
        name="Yuko Nishiwaki"
      />
    ),
    available: ({ currentDate, currentTime, currentLinks, previousDay }) => {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Strength.name].level === 6;
      const isRomance =
        currentLinks[socialLinks.Strength.name].romance || isFork;
      const days = [daysNames.wednesday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[socialLinks.Chariot.name].level >= 2 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  HangedMan: {
    ...linkBaseFunctions,
    name: socialLinks.HangedMan.name,
    label: () => (
      <EventCard
        place="Naganaki Shrine"
        name="Maiko Oohashi"
        head="Hanged Man"
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
  },
  Temperance: {
    ...linkBaseFunctions,
    name: socialLinks.Temperance.name,
    label: () => (
      <EventCard
        place="2F Classroom Hallway / 1F Laboratory Hallway (Home Economics Room)"
        name='André Laurent Jean "Bebe" Geraux'
        head="Temperance"
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
  },
  Devil: {
    ...linkBaseFunctions,
    name: socialLinks.Devil.name,
    label: () => (
      <EventCard name="President Tanaka" place="Paulownia Mall" head="Devil" />
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
  },
  Tower: {
    ...linkBaseFunctions,
    name: socialLinks.Tower.name,
    label: () => (
      <EventCard place="Club Escapade" name="Mutatsu" head="Tower" />
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
  },
  Star: {
    ...linkBaseFunctions,
    name: socialLinks.Star.name,
    label: () => (
      <EventCard
        place="Iwatodai Station Strip Mall 1F"
        name="Mamoru Hayase"
        head="Star"
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
  },
  Moon: {
    ...linkBaseFunctions,
    name: socialLinks.Moon.name,
    label: () => (
      <EventCard name="Nozomi Suemitsu" place="Paulownia Mall" head="Moon" />
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
  },
  Sun: {
    ...linkBaseFunctions,
    name: socialLinks.Sun.name,
    label: () => (
      <EventCard place="Naganaki Shrine" name="Akinari Kamiki" head="Sun" />
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
  },
  Aeon: {
    ...linkBaseFunctions,
    name: socialLinks.Aeon.name,
    label: () => <EventCard place="Classroom 2F" label="Aeon" head="Aigis" />,
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
  },
  AeonRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Aeon.name,
    label: () => (
      <EventCard head="Aeon(Romance)" place="Classroom 2F" name="Aigis" />
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
  },
  Fool: {
    ...linkBaseFunctions,
    name: socialLinks.Fool.name,
    special: true,
    label: () => <EventCard head="Fool" name="S.E.E.S." place="Tartarus" />,
    available: () => false,
  },
};
