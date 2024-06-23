import EventCard from "../../components/eventCard/EventCard";
import { daysNames } from "../monthsNames";
import { stats } from "../stats";
import React from "react";

const getAcademicsUpgradeFunction = (value) => {
  return function ({ currentStats }) {
    return {
      stats: {
        ...currentStats,
        [stats.Academics.name]: currentStats[stats.Academics.name] + value,
      },
    };
  };
};

export const statsEventsAcademics = {
  stayAwakeInClass: {
    name: "Stay Awake in Class",
    category: "stats",
    label: () => <EventCard head="Stay Awake in Class" stats="Academics +2" />,
    available: function ({ currentTime }) {
      return currentTime === "morning";
    },
    upgrade: getAcademicsUpgradeFunction(2),
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
    available: function ({ currentTime }) {
      return currentTime === "evening";
    },
    upgrade: getAcademicsUpgradeFunction(2),
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
    available: function ({ currentTime }) {
      return currentTime === "day";
    },
    upgrade: getAcademicsUpgradeFunction(2),
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
    available: function ({ currentDate, currentTime }) {
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
    upgrade: getAcademicsUpgradeFunction(3),
  },
  cinemaTheaterAcademics: {
    name: "cinema",
    category: "stats",
    label: () => (
      <EventCard
        head="Cinema('Unresolved Mysteries')"
        place="Port Island Station"
        stats="Academics +4"
        price={1500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.wednesday, daysNames.saturday];
      return currentTime === "day" && days.includes(currentDate.getDay());
    },
    upgrade: getAcademicsUpgradeFunction(4),
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
    available: function ({ currentDate, currentTime, previousDay }) {
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
    upgrade: getAcademicsUpgradeFunction(4),
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
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.wednesday, daysNames.saturday];
      return (
        ["day", "evening"].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  dormExamStudyingGroup: {
    name: "dormExamStudyingGroup",
    category: "stats",
    label: () => (
      <EventCard
        head="Dorm Exam Group Studying"
        stats="Academics +4"
        place="Dorm"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const dates = [
        new Date(2009, 4, 15).getTime(),
        new Date(2009, 4, 16).getTime(),
      ];
      return dates.includes(currentDate.getTime()) && currentTime === "evening";
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  dormExamStudyingTeam: {
    name: "dormExamStudyingTeam",
    category: "stats",
    label: () => (
      <EventCard
        head="Dorm Exam Study with the Team"
        stats="Academics +5"
        place="Dorm"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const dates = [new Date(2009, 4, 17).getTime()];
      return dates.includes(currentDate.getTime()) && currentTime === "evening";
    },
    upgrade: getAcademicsUpgradeFunction(5),
  },
};
