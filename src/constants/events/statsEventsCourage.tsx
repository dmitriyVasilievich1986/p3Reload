import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";

import {
  statsEventsCourageNames,
  upgradeProps,
  Categories,
  Times,
  Event,
} from "./types";

const getCourageUpgradeFunction = (value: number) => {
  return function ({ currentStats }: upgradeProps) {
    return {
      stats: {
        ...currentStats,
        [StatsNames.Courage]: currentStats[StatsNames.Courage] + value,
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
    label: () => (
      <EventCard
        head="Drink Mr. Edogawa's medicine"
        place="Nurse's Office"
        stats="Courage +2"
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.tuesday, DaysNames.friday];
      return currentTime === Times.Day && days.includes(currentDate.getDay());
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  [statsEventsCourageNames.sleepDuringClass]: {
    name: statsEventsCourageNames.sleepDuringClass,
    category: Categories.Stats,
    time: Times.Morning,
    label: () => <EventCard head="Sleep During Class" stats="Courage +2" />,
    available: function ({ currentTime }) {
      return currentTime === Times.Morning;
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  [statsEventsCourageNames.Mandragora]: {
    name: statsEventsCourageNames.Mandragora,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Mandragora(Sing solo karaoke)"
        place="Paulownia Mall"
        stats="Courage +2"
        price={800}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      return (
        [Times.Day, Times.Evening].includes(currentTime) &&
        currentDate.getDay() !== DaysNames.sunday
      );
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  [statsEventsCourageNames.wilduckBurgeMysteryBurger]: {
    name: statsEventsCourageNames.wilduckBurgeMysteryBurger,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Wilduck Burger(Mystery Burger)"
        place="Iwatodai Strip Mall"
        stats="Courage +3"
        price={1000}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      return (
        [Times.Day, Times.Evening].includes(currentTime) &&
        currentDate.getDay() !== DaysNames.thursday
      );
    },
    upgrade: getCourageUpgradeFunction(3),
  },
  [statsEventsCourageNames.gameParadeCourage]: {
    name: statsEventsCourageNames.gameParadeCourage,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Game Parade(Play House of the Deceased)"
        place="Paulownia Mall"
        stats="Courage +4"
        price={3000}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.tuesday, DaysNames.friday];
      return (
        [Times.Day, Times.Evening].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getCourageUpgradeFunction(4),
  },
  [statsEventsCourageNames.wilduckBurgeWeekendWilduckSet]: {
    name: statsEventsCourageNames.wilduckBurgeWeekendWilduckSet,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        head="Wilduck Burger(Weekend Wilduck Set)"
        place="Iwatodai Strip Mall"
        stats="Courage +4"
        price={1200}
      />
    ),
    available: function ({ singleTimeEvents, currentDate, currentTime }) {
      const days = [DaysNames.saturday, DaysNames.sunday];
      return (
        singleTimeEvents.includes(
          statsEventsCourageNames.wilduckBigEaterChallenge
        ) &&
        [Times.Day, Times.Evening].includes(currentTime) &&
        days.includes(currentDate.getDay())
      );
    },
    upgrade: getCourageUpgradeFunction(4),
  },
  [statsEventsCourageNames.cinemaTheaterCourage]: {
    name: statsEventsCourageNames.cinemaTheaterCourage,
    category: Categories.Stats,
    time: Times.Day,
    label: () => (
      <EventCard
        head="Cinema('The School of No Wonder/The Way of Godson')"
        place="Port Island Station"
        stats="Courage +4"
        price={1500}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.monday, DaysNames.thursday];
      return days.includes(currentDate.getDay()) && currentTime === Times.Day;
    },
    upgrade: getCourageUpgradeFunction(4),
  },
  [statsEventsCourageNames.wilduckBigEaterChallenge]: {
    name: statsEventsCourageNames.wilduckBigEaterChallenge,
    category: Categories.Stats,
    time: Times.Evening,
    label: () => (
      <EventCard
        stats="Academics +4 | Courage +4 | Charm +4"
        head="Wilduck Burger(Big Eater Challenge)"
        place="Iwatodai Strip Mall"
        price={1800}
      />
    ),
    available: function ({
      singleTimeEvents,
      currentDate,
      currentStats,
      currentTime,
    }) {
      return (
        currentDate.getTime() >= new Date(2009, 4, 10).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        currentTime === Times.Evening &&
        currentStats.Courage >= 45
      );
    },
    upgrade: function ({ singleTimeEvents, currentStats }: upgradeProps) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          [StatsNames.Academics]: currentStats[StatsNames.Academics] + 4,
          [StatsNames.Courage]: currentStats[StatsNames.Courage] + 4,
          [StatsNames.Charm]: currentStats[StatsNames.Charm] + 4,
        },
      };
    },
  },
};
