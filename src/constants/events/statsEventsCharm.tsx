import { statsEventsCharmNames, Categories, Times, Event } from "./types";
import { EventCard } from "../../components/eventCard";
import { SingleDay } from "../calendar/SingleDay";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";
import { stats } from "../stats/stats";

const getCharmUpgradeFunction = (value: number) => {
  return function (currentDay: SingleDay) {
    return {
      stats: {
        ...currentDay.stats,
        [StatsNames.Charm]: currentDay.stats[StatsNames.Charm] + value,
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
    available: function ({ currentDay, time }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2009, 6, 22).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day
      );
    },
    upgrade: function (currentDay: SingleDay) {
      return {
        stats: {
          ...currentDay.stats,
          [StatsNames.Academics]: currentDay.stats[StatsNames.Academics] + 1,
          [StatsNames.Charm]: currentDay.stats[StatsNames.Charm] + 1,
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
    available: function ({ currentDay, time }) {
      const days = [DaysNames.monday, DaysNames.tuesday, DaysNames.wednesday];
      return time === Times.Evening && days.includes(currentDay.date.getDay());
    },
    upgrade: function (currentDay: SingleDay) {
      return {
        stats: {
          ...currentDay.stats,
          [StatsNames.Courage]: currentDay.stats[StatsNames.Courage] + 1,
          [StatsNames.Charm]: currentDay.stats[StatsNames.Charm] + 1,
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
    available: function ({ currentDay, time }) {
      const days = [DaysNames.monday, DaysNames.tuesday];
      return (
        time === Times.Evening ||
        (time === Times.Day && !days.includes(currentDay.date.getDay()))
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
    available: function ({ currentDay, time }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
      ];
      return (
        [Times.Day, Times.Evening].includes(time) &&
        days.includes(currentDay.date.getDay())
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
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.friday];
      return days.includes(currentDay.date.getDay()) && time === Times.Day;
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
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
      return (
        currentDay.stats[StatsNames.Courage] >= stats.Courage.levels[2].value &&
        [Times.Day, Times.Evening].includes(time) &&
        days.includes(currentDay.date.getDay())
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
    available: function ({ currentDay, time }) {
      const days = [DaysNames.monday, DaysNames.thursday];
      return (
        [Times.Day, Times.Evening].includes(time) &&
        days.includes(currentDay.date.getDay())
      );
    },
    upgrade: getCharmUpgradeFunction(4),
  },
};
