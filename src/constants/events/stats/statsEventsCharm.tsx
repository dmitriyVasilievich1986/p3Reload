import { SingleDay } from "@/constants/calendar/SingleDay";
import { StatsNames } from "@/constants/stats/types";
import { DaysNames } from "@/constants/monthsNames";
import { stats } from "@/constants/stats";

import { EventCard } from "@/components";

import { statsEventsCharmNames, Categories, Times, Event } from "../types";

const getCharmUpgradeFunction = (value: number) => {
  return function ({ currentDay }: { currentDay: SingleDay }) {
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
    label: function () {
      return (
        <EventCard
          head={this.name}
          stats="Charm +1 | Academics +1"
          place="Paulownia Mall"
          receive={3500}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Charm] >=
          stats[StatsNames.Charm].levels[5].value
      )
        return false;
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
    upgrade: function ({ currentDay }) {
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
    label: function () {
      return (
        <EventCard
          head={this.name}
          stats="Courage +1 | Charm +1"
          place="Paulownia Mall"
          receive={2500}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Charm] >=
          stats[StatsNames.Charm].levels[5].value
      )
        return false;
      const days = [DaysNames.monday, DaysNames.tuesday, DaysNames.wednesday];
      return time === Times.Evening && days.includes(currentDay.date.getDay());
    },
    upgrade: function ({ currentDay }) {
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
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Paulownia Mall"
          stats="Charm +2"
          price={500}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Charm] >=
          stats[StatsNames.Charm].levels[5].value
      )
        return false;
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
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Iwatodai Strip Mall"
          stats="Charm +3"
          price={900}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Charm] >=
          stats[StatsNames.Charm].levels[5].value
      )
        return false;
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
    upgrade: function ({ currentDay }) {
      const singleTimeEvents = currentDay.singleTimeEvents.includes(
        statsEventsCharmNames.hagakureRamen
      )
        ? currentDay.singleTimeEvents
        : [...currentDay.singleTimeEvents, statsEventsCharmNames.hagakureRamen];
      return {
        singleTimeEvents,
        stats: {
          ...currentDay.stats,
          [StatsNames.Charm]: currentDay.stats[StatsNames.Charm] + 3,
        },
      };
    },
  },
  [statsEventsCharmNames.cinemaTheaterCharm]: {
    name: statsEventsCharmNames.cinemaTheaterCharm,
    category: Categories.Stats,
    time: Times.Day,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Port Island Station"
          stats="Charm +4"
          price={1500}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Charm] >=
          stats[StatsNames.Charm].levels[5].value
      )
        return false;
      const days = [DaysNames.tuesday, DaysNames.friday];
      return days.includes(currentDay.date.getDay()) && time === Times.Day;
    },
    upgrade: getCharmUpgradeFunction(4),
  },
  [statsEventsCharmNames.hagakureRamenSpecial]: {
    name: statsEventsCharmNames.hagakureRamenSpecial,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Iwatodai Strip Mall"
          stats="Charm +4"
          price={1200}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Charm] >=
          stats[StatsNames.Charm].levels[5].value
      )
        return false;
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
      const courageLevel = stats[StatsNames.Courage].levels[2].value;
      const isSecondTime = previousDay.singleTimeEvents.includes(
        statsEventsCharmNames.hagakureRamen
      );
      return (
        previousDay.stats[StatsNames.Courage] >= courageLevel &&
        days.includes(currentDay.date.getDay()) &&
        [Times.Evening].includes(time) &&
        isSecondTime
      );
    },
    upgrade: getCharmUpgradeFunction(4),
  },
  [statsEventsCharmNames.gameParadeCharm]: {
    name: statsEventsCharmNames.gameParadeCharm,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Paulownia Mall"
          stats="Charm +4"
          price={1500}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Charm] >=
          stats[StatsNames.Charm].levels[5].value
      )
        return false;
      const days = [DaysNames.monday, DaysNames.thursday];
      return (
        [Times.Day, Times.Evening].includes(time) &&
        days.includes(currentDay.date.getDay())
      );
    },
    upgrade: getCharmUpgradeFunction(4),
  },
};
