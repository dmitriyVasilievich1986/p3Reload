import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";
import { stats } from "../stats/stats";

import {
  statsEventsCharmNames,
  upgradeProps,
  Categories,
  Times,
  Event,
} from "./types";

const getCharmUpgradeFunction = (value: number) => {
  return function ({ currentStats }: upgradeProps) {
    return {
      stats: {
        ...currentStats,
        [StatsNames.Charm]: currentStats[StatsNames.Charm] + value,
      },
    };
  };
};

export const statsEventsCharm: {
  [key in statsEventsCharmNames]: Event;
} = {
  [statsEventsCharmNames.beBlueV]: {
    name: statsEventsCharmNames.beBlueV,
    category: Categories.Stats,
    time: Times.Day,
    label: () => (
      <EventCard
        head="Be Blue V(Work part-time)"
        stats="Charm +1 | Academics +1"
        place="Paulownia Mall"
        receive={3500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 6, 22).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [StatsNames.Academics]: currentStats[StatsNames.Academics] + 1,
          [StatsNames.Charm]: currentStats[StatsNames.Charm] + 1,
        },
      };
    },
  },
  [statsEventsCharmNames.chagallCafePartTimeWork]: {
    name: statsEventsCharmNames.chagallCafePartTimeWork,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Chagall Cafe(Part-Time Work)"
        stats="Courage +1 | Charm +1"
        place="Paulownia Mall"
        receive={2500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.monday, DaysNames.tuesday, DaysNames.wednesday];
      return (
        currentTime === Times.Evening && days.includes(currentDate.getDay())
      );
    },
    upgrade: function ({ currentStats }) {
      return {
        stats: {
          ...currentStats,
          [StatsNames.Courage]: currentStats[StatsNames.Courage] + 1,
          [StatsNames.Charm]: currentStats[StatsNames.Charm] + 1,
        },
      };
    },
  },
  [statsEventsCharmNames.chagallCafeCharm]: {
    name: statsEventsCharmNames.chagallCafeCharm,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Chagall Cafe(Pheromone Coffee)"
        place="Paulownia Mall"
        stats="Charm +2"
        price={500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.monday, DaysNames.tuesday];
      return (
        currentTime === Times.Evening ||
        (currentTime === Times.Day && !days.includes(currentDate.getDay()))
      );
    },
    upgrade: getCharmUpgradeFunction(2),
  },
  [statsEventsCharmNames.schoolQuestionCharm]: {
    name: statsEventsCharmNames.schoolQuestionCharm,
    category: Categories.Special,
    time: Times.Morning,
    special: true,
    available: () => false,
    label: () => null,
    upgrade: getCharmUpgradeFunction(2),
  },
  [statsEventsCharmNames.hagakureRamen]: {
    name: statsEventsCharmNames.hagakureRamen,
    category: Categories.Stats,
    time: Times.Evening,
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
        currentDate.getDay() !== DaysNames.sunday &&
        [Times.Day, Times.Evening].includes(currentTime)
      );
    },
    upgrade: getCharmUpgradeFunction(3),
  },
  [statsEventsCharmNames.cinemaTheaterCharm]: {
    name: statsEventsCharmNames.cinemaTheaterCharm,
    category: Categories.Stats,
    time: Times.Day,
    label: () => (
      <EventCard
        head="Cinema('Thy Name')"
        place="Port Island Station"
        stats="Charm +4"
        price={1500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.tuesday, DaysNames.friday];
      return days.includes(currentDate.getDay()) && currentTime === Times.Day;
    },
    upgrade: getCharmUpgradeFunction(4),
  },
  [statsEventsCharmNames.hagakureRamenSpecial]: {
    name: statsEventsCharmNames.hagakureRamenSpecial,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Hagakure Ramen(Special Hagakure Bowl)"
        place="Iwatodai Strip Mall"
        stats="Charm +4"
        price={1200}
      />
    ),
    available: function ({ currentDate, currentTime, currentStats }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
      return (
        currentStats[StatsNames.Courage] >= stats.Courage.levels[2].value &&
        [Times.Day, Times.Evening].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getCharmUpgradeFunction(4),
  },
  [statsEventsCharmNames.gameParadeCharm]: {
    name: statsEventsCharmNames.gameParadeCharm,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Game Parade(Play High School of Youth)"
        place="Paulownia Mall"
        stats="Charm +4"
        price={1500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.monday, DaysNames.thursday];
      return (
        [Times.Day, Times.Evening].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getCharmUpgradeFunction(4),
  },
};
