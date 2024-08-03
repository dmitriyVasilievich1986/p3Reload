import { EventCard } from "../../components/eventCard";
import { WideEvent } from "../../components/wideEvent";
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
    time: Times.Morning,
    label: () => <EventCard head="Stay Awake in Class" stats="Academics +2" />,
    available: function ({ time }) {
      return time === Times.Morning;
    },
    upgrade: getAcademicsUpgradeFunction(2),
  },
  [statsEventsAcademicsNames.studyAtHome]: {
    name: statsEventsAcademicsNames.studyAtHome,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Studying In Your Room"
        stats="Academics +2"
        place="Your Room"
      />
    ),
    available: function ({ time }) {
      return time === Times.Evening;
    },
    upgrade: getAcademicsUpgradeFunction(2),
  },
  [statsEventsAcademicsNames.studyAtLibrary]: {
    name: statsEventsAcademicsNames.studyAtLibrary,
    category: Categories.Stats,
    time: Times.Day,
    label: () => (
      <EventCard
        head="Studying At The Library"
        place="Gekkoukan High School"
        stats="Academics +2"
      />
    ),
    available: function ({ time }) {
      return time === Times.Day;
    },
    upgrade: getAcademicsUpgradeFunction(2),
  },
  [statsEventsAcademicsNames.summerSchool]: {
    name: statsEventsAcademicsNames.summerSchool,
    category: Categories.Stats,
    time: Times.WholeDay,
    label: () => (
      <WideEvent>
        <EventCard
          place="Gekkoukan High School"
          head="Summer School"
          stats="Academics +3"
        />
      </WideEvent>
    ),
    available: function () {
      return false;
    },
    upgrade: getAcademicsUpgradeFunction(3),
  },
  [statsEventsAcademicsNames.wakatsuKitchenDay]: {
    name: statsEventsAcademicsNames.wakatsuKitchenDay,
    category: Categories.Stats,
    time: Times.Day,
    label: () => (
      <EventCard
        head="Wakatsu Kitchen(Prodigy Platter)"
        place="Iwatodai Strip Mall"
        stats="Academics +3"
        price={680}
      />
    ),
    available: function ({ currentDay, time }) {
      const days = [
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
        DaysNames.sunday,
      ];
      return days.includes(currentDay.date.getDay()) && time == Times.Day;
    },
    upgrade: getAcademicsUpgradeFunction(3),
  },
  [statsEventsAcademicsNames.wakatsuKitchen]: {
    name: statsEventsAcademicsNames.wakatsuKitchen,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Wakatsu Kitchen(Prodigy Platter)"
        place="Iwatodai Strip Mall"
        stats="Academics +3"
        price={680}
      />
    ),
    available: function ({ currentDay, time }) {
      const days = [
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
        DaysNames.sunday,
      ];
      return days.includes(currentDay.date.getDay()) && time == Times.Evening;
    },
    upgrade: function ({ currentStats, singleTimeEvents }: upgradeProps) {
      if (
        !singleTimeEvents.includes(statsEventsAcademicsNames.wakatsuKitchen)
      ) {
      }
      return {
        singleTimeEvents: singleTimeEvents.includes(
          statsEventsAcademicsNames.wakatsuKitchen
        )
          ? singleTimeEvents
          : [...singleTimeEvents, statsEventsAcademicsNames.wakatsuKitchen],
        stats: {
          ...currentStats,
          [StatsNames.Academics]: currentStats[StatsNames.Academics] + 3,
        },
      };
    },
  },
  [statsEventsAcademicsNames.cinemaTheaterAcademics]: {
    name: statsEventsAcademicsNames.cinemaTheaterAcademics,
    category: Categories.Stats,
    time: Times.Day,
    label: () => (
      <EventCard
        head="Cinema('Unresolved Mysteries')"
        place="Port Island Station"
        stats="Academics +4"
        price={1500}
      />
    ),
    available: function ({ currentDay, time }) {
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return time === Times.Day && days.includes(currentDay.date.getDay());
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.wakatsuKitchenSpecial]: {
    name: statsEventsAcademicsNames.wakatsuKitchenSpecial,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Wakatsu Kitchen(Seafood Full Course)"
        place="Iwatodai Strip Mall"
        stats="Academics +4"
        price={900}
      />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      const days = [
        DaysNames.monday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.sunday,
      ];
      return (
        currentDay.singleTimeEvents.includes(
          statsEventsAcademicsNames.wakatsuKitchen
        ) &&
        previousDay.stats[StatsNames.Charm] >= 30 &&
        days.includes(currentDay.date.getDay()) &&
        time == Times.Evening
      );
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.gameParadeAcademics]: {
    name: statsEventsAcademicsNames.gameParadeAcademics,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Game Parade(Play You're the Answer)"
        place="Paulownia Mall"
        stats="Academics +4"
        price={3000}
      />
    ),
    available: function ({ currentDay, time }) {
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return (
        [Times.Day, Times.Evening].includes(time) &&
        days.includes(currentDay.date.getDay())
      );
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.dormExamStudyingGroup]: {
    name: statsEventsAcademicsNames.dormExamStudyingGroup,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Dorm Exam Group Studying"
        stats="Academics +4"
        place="Dorm"
      />
    ),
    available: function ({ currentDay, time }) {
      const dates = [
        new Date(2009, 4, 15).getTime(),
        new Date(2009, 4, 16).getTime(),
        new Date(2009, 6, 9).getTime(),
        new Date(2009, 6, 10).getTime(),
      ];
      return (
        dates.includes(currentDay.date.getTime()) && time === Times.Evening
      );
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.dormExamStudyingTeam]: {
    name: statsEventsAcademicsNames.dormExamStudyingTeam,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Dorm Exam Study with the Team"
        stats="Academics +5"
        place="Dorm"
      />
    ),
    available: function ({ currentDay, time }) {
      const dates = [
        new Date(2009, 4, 17).getTime(),
        new Date(2009, 6, 13).getTime(),
      ];
      return (
        dates.includes(currentDay.date.getTime()) && time === Times.Evening
      );
    },
    upgrade: getAcademicsUpgradeFunction(5),
  },
};
