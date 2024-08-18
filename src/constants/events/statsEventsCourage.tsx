import { statsEventsCourageNames, Categories, Times, Event } from "./types";
import { EventCard } from "../../components/eventCard";
import { SingleDay } from "../calendar/SingleDay";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";

const getCourageUpgradeFunction = (value: number) => {
  return function (currentDay: SingleDay) {
    return {
      stats: {
        ...currentDay.stats,
        [StatsNames.Courage]: currentDay.stats[StatsNames.Courage] + value,
      },
    };
  };
};

export const statsEventsCourage: {
  [key in statsEventsCourageNames]: Event;
} = {
  [statsEventsCourageNames.drinkMedicine]: {
    name: statsEventsCourageNames.drinkMedicine,
    category: Categories.Special,
    time: Times.AfterSchool,
    special: true,
    label: function () {
      return (
        <EventCard head={this.name} place="Nurse's Office" stats="Courage +2" />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.friday];
      return time === Times.Day && days.includes(currentDay.date.getDay());
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  [statsEventsCourageNames.sleepDuringClass]: {
    name: statsEventsCourageNames.sleepDuringClass,
    category: Categories.Stats,
    time: Times.Morning,
    label: function () {
      return <EventCard head={this.name} stats="Courage +2" />;
    },
    available: function ({ time }) {
      return time === Times.Morning;
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  [statsEventsCourageNames.Mandragora]: {
    name: statsEventsCourageNames.Mandragora,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Paulownia Mall"
          stats="Courage +2"
          price={800}
        />
      );
    },
    available: function ({ currentDay, time }) {
      return (
        [Times.Day, Times.Evening].includes(time) &&
        currentDay.date.getDay() !== DaysNames.sunday
      );
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  [statsEventsCourageNames.wilduckBurgeMysteryBurger]: {
    name: statsEventsCourageNames.wilduckBurgeMysteryBurger,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Iwatodai Strip Mall"
          stats="Courage +3"
          price={1000}
        />
      );
    },
    available: function ({ currentDay, time }) {
      return (
        [Times.Day, Times.Evening].includes(time) &&
        currentDay.date.getDay() !== DaysNames.thursday
      );
    },
    upgrade: getCourageUpgradeFunction(3),
  },
  [statsEventsCourageNames.gameParadeCourage]: {
    name: statsEventsCourageNames.gameParadeCourage,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Paulownia Mall"
          stats="Courage +4"
          price={3000}
        />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.friday];
      return (
        [Times.Day, Times.Evening].includes(time) &&
        days.includes(currentDay.date.getDay())
      );
    },
    upgrade: getCourageUpgradeFunction(4),
  },
  [statsEventsCourageNames.wilduckBurgeWeekendWilduckSet]: {
    name: statsEventsCourageNames.wilduckBurgeWeekendWilduckSet,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Iwatodai Strip Mall"
          stats="Courage +4"
          price={1200}
        />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [DaysNames.saturday, DaysNames.sunday];
      return (
        currentDay.singleTimeEvents.includes(
          statsEventsCourageNames.wilduckBigEaterChallenge
        ) &&
        [Times.Day, Times.Evening].includes(time) &&
        days.includes(currentDay.date.getDay())
      );
    },
    upgrade: getCourageUpgradeFunction(4),
  },
  [statsEventsCourageNames.cinemaTheaterCourage]: {
    name: statsEventsCourageNames.cinemaTheaterCourage,
    category: Categories.Stats,
    time: Times.Day,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Port Island Station"
          stats="Courage +4"
          price={1500}
        />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [DaysNames.monday, DaysNames.thursday];
      return days.includes(currentDay.date.getDay()) && time === Times.Day;
    },
    upgrade: getCourageUpgradeFunction(4),
  },
  [statsEventsCourageNames.wilduckBigEaterChallenge]: {
    name: statsEventsCourageNames.wilduckBigEaterChallenge,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          stats="Academics +4 | Courage +4 | Charm +4"
          place="Iwatodai Strip Mall"
          price={1800}
        />
      );
    },
    available: function ({ currentDay, time }) {
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 10).getTime() &&
        !currentDay.singleTimeEvents.includes(this.name) &&
        currentDay.stats[StatsNames.Courage] >= 45 &&
        time === Times.Evening
      );
    },
    upgrade: function (currentDay: SingleDay) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
        stats: {
          [StatsNames.Academics]: currentDay.stats[StatsNames.Academics] + 4,
          [StatsNames.Courage]: currentDay.stats[StatsNames.Courage] + 4,
          [StatsNames.Charm]: currentDay.stats[StatsNames.Charm] + 4,
        },
      };
    },
  },
};
