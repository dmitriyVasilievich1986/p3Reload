import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";

import {
  statsEventsAcademicsNames,
  upgradeProps,
  Categories,
  Times,
  Event,
} from "./types";

const getAcademicsUpgradeFunction = (value: number) => {
  return function ({ currentStats }: upgradeProps) {
    return {
      stats: {
        ...currentStats,
        [StatsNames.Academics]: currentStats[StatsNames.Academics] + value,
      },
    };
  };
};

export const statsEventsAcademics: {
  [key in statsEventsAcademicsNames]: Event;
} = {
  [statsEventsAcademicsNames.stayAwakeInClass]: {
    name: statsEventsAcademicsNames.stayAwakeInClass,
    category: Categories.Stats,
    label: () => <EventCard head="Stay Awake in Class" stats="Academics +2" />,
    available: function ({ currentTime }) {
      return currentTime === Times.Morning;
    },
    upgrade: getAcademicsUpgradeFunction(2),
  },
  [statsEventsAcademicsNames.studyAtHome]: {
    name: statsEventsAcademicsNames.studyAtHome,
    category: Categories.Stats,
    label: () => (
      <EventCard
        head="Studying In Your Room"
        stats="Academics +2"
        place="Your Room"
      />
    ),
    available: function ({ currentTime }) {
      return currentTime === Times.Evening;
    },
    upgrade: getAcademicsUpgradeFunction(2),
  },
  [statsEventsAcademicsNames.studyAtLibrary]: {
    name: statsEventsAcademicsNames.studyAtLibrary,
    category: Categories.Stats,
    label: () => (
      <EventCard
        head="Studying At The Library"
        place="Gekkoukan High School"
        stats="Academics +2"
      />
    ),
    available: function ({ currentTime }) {
      return currentTime === Times.Day;
    },
    upgrade: getAcademicsUpgradeFunction(2),
  },
  [statsEventsAcademicsNames.wakatsuKitchen]: {
    name: statsEventsAcademicsNames.wakatsuKitchen,
    category: Categories.Stats,
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
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
        DaysNames.sunday,
      ];
      return (
        [Times.Day, Times.Evening].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getAcademicsUpgradeFunction(3),
  },
  [statsEventsAcademicsNames.cinemaTheaterAcademics]: {
    name: statsEventsAcademicsNames.cinemaTheaterAcademics,
    category: Categories.Stats,
    label: () => (
      <EventCard
        head="Cinema('Unresolved Mysteries')"
        place="Port Island Station"
        stats="Academics +4"
        price={1500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return currentTime === Times.Day && days.includes(currentDate.getDay());
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.wakatsuKitchenSpecial]: {
    name: statsEventsAcademicsNames.wakatsuKitchenSpecial,
    category: Categories.Stats,
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
        DaysNames.monday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.sunday,
      ];
      return (
        previousDay?.stats[StatsNames.Charm] >= 30 &&
        [Times.Day, Times.Evening].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.gameParadeAcademics]: {
    name: statsEventsAcademicsNames.gameParadeAcademics,
    category: Categories.Stats,
    label: () => (
      <EventCard
        head="Game Parade(Play You're the Answer)"
        place="Paulownia Mall"
        stats="Academics +4"
        price={3000}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return (
        [Times.Day, Times.Evening].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.dormExamStudyingGroup]: {
    name: statsEventsAcademicsNames.dormExamStudyingGroup,
    category: Categories.Stats,
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
      return (
        dates.includes(currentDate.getTime()) && currentTime === Times.Evening
      );
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.dormExamStudyingTeam]: {
    name: statsEventsAcademicsNames.dormExamStudyingTeam,
    category: Categories.Stats,
    label: () => (
      <EventCard
        head="Dorm Exam Study with the Team"
        stats="Academics +5"
        place="Dorm"
      />
    ),
    available: ({ currentDate, currentTime }) => {
      const dates = [new Date(2009, 4, 17).getTime()];
      return (
        dates.includes(currentDate.getTime()) && currentTime === Times.Evening
      );
    },
    upgrade: getAcademicsUpgradeFunction(5),
  },
};
