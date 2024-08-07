import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";

import {
  ShinjiroAragakiEpisodesNames,
  Categories,
  Times,
  Event,
} from "./types";

const ji1: Event = {
  name: ShinjiroAragakiEpisodesNames.ShinjiroAragaki1,
  category: Categories.Stats,
  time: Times.Day,
  label: () => (
    <EventCard
      head="Shinjiro Aragaki Episode"
      name="Shinjiro Aragaki"
      stats="Courage +2"
    />
  ),
  available: function ({ currentDay, time }) {
    const days = [
      DaysNames.monday,
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.friday,
      DaysNames.sunday,
    ];
    return (
      currentDay.date.getTime() >= new Date(2009, 8, 4).getTime() &&
      currentDay.date.getTime() <= new Date(2009, 9, 2).getTime() &&
      !currentDay.singleTimeEvents.includes(this.name) &&
      days.includes(currentDay.date.getDay()) &&
      time === Times.Day
    );
  },
  upgrade: function (currentDay) {
    return {
      singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      stats: {
        ...currentDay.stats,
        [StatsNames.Courage]: currentDay.stats[StatsNames.Courage] + 2,
      },
    };
  },
};

export const ShinjiroAragakiEpisodes: {
  [key in ShinjiroAragakiEpisodesNames]: Event;
} = {
  [ShinjiroAragakiEpisodesNames.ShinjiroAragaki1]: ji1,
  [ShinjiroAragakiEpisodesNames.ShinjiroAragaki2]: {
    ...ji1,
    name: ShinjiroAragakiEpisodesNames.ShinjiroAragaki2,
    label: () => (
      <EventCard
        head="Shinjiro Aragaki Episode"
        name="Shinjiro Aragaki"
        stats="Charm +2"
      />
    ),
    available: function ({ currentDay, time }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.sunday,
      ];
      return (
        currentDay.singleTimeEvents.includes(
          ShinjiroAragakiEpisodesNames.ShinjiroAragaki1
        ) &&
        currentDay.date.getTime() >= new Date(2009, 8, 11).getTime() &&
        currentDay.date.getTime() <= new Date(2009, 9, 2).getTime() &&
        !currentDay.singleTimeEvents.includes(this.name) &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day
      );
    },
    upgrade: function (currentDay) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
        stats: {
          ...currentDay.stats,
          [StatsNames.Charm]: currentDay.stats[StatsNames.Charm] + 2,
        },
      };
    },
  },
  [ShinjiroAragakiEpisodesNames.ShinjiroAragaki3]: {
    ...ji1,
    name: ShinjiroAragakiEpisodesNames.ShinjiroAragaki3,
    label: () => (
      <EventCard
        head="Shinjiro Aragaki Episode"
        name="Shinjiro Aragaki"
        stats="Academics +2"
      />
    ),
    available: function ({ currentDay, time }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.sunday,
      ];
      return (
        currentDay.singleTimeEvents.includes(
          ShinjiroAragakiEpisodesNames.ShinjiroAragaki2
        ) &&
        currentDay.date.getTime() >= new Date(2009, 8, 13).getTime() &&
        currentDay.date.getTime() <= new Date(2009, 9, 2).getTime() &&
        !currentDay.singleTimeEvents.includes(this.name) &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day
      );
    },
    upgrade: function (currentDay) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
        stats: {
          ...currentDay.stats,
          [StatsNames.Academics]: currentDay.stats[StatsNames.Academics] + 2,
        },
      };
    },
  },
  [ShinjiroAragakiEpisodesNames.ShinjiroAragaki35]: {
    ...ji1,
    name: ShinjiroAragakiEpisodesNames.ShinjiroAragaki35,
    label: () => (
      <EventCard head="Shinjiro Aragaki Episode" name="Shinjiro Aragaki" />
    ),
    available: function ({ currentDay, time }) {
      return (
        currentDay.singleTimeEvents.includes(
          ShinjiroAragakiEpisodesNames.ShinjiroAragaki3
        ) &&
        currentDay.date.getTime() >= new Date(2009, 8, 14).getTime() &&
        currentDay.date.getTime() <= new Date(2009, 9, 2).getTime() &&
        !currentDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day
      );
    },
    upgrade: function ({ singleTimeEvents }) {
      return { singleTimeEvents: [...singleTimeEvents, this.name] };
    },
  },
  [ShinjiroAragakiEpisodesNames.ShinjiroAragaki4]: {
    ...ji1,
    name: ShinjiroAragakiEpisodesNames.ShinjiroAragaki4,
    label: () => (
      <EventCard
        head="Shinjiro Aragaki Episode"
        name="Shinjiro Aragaki"
        stats="Courage +2"
      />
    ),
    available: function ({ currentDay, time }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.friday,
        DaysNames.saturday,
      ];
      return (
        currentDay.singleTimeEvents.includes(
          ShinjiroAragakiEpisodesNames.ShinjiroAragaki35
        ) &&
        currentDay.date.getTime() >= new Date(2009, 8, 14).getTime() &&
        currentDay.date.getTime() <= new Date(2009, 9, 2).getTime() &&
        !currentDay.singleTimeEvents.includes(this.name) &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day
      );
    },
    upgrade: function (currentDay) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
        stats: {
          ...currentDay.stats,
          [StatsNames.Courage]: currentDay.stats[StatsNames.Courage] + 2,
        },
      };
    },
  },
  [ShinjiroAragakiEpisodesNames.ShinjiroAragaki5]: {
    ...ji1,
    name: ShinjiroAragakiEpisodesNames.ShinjiroAragaki5,
    available: function ({ currentDay, time }) {
      return (
        currentDay.singleTimeEvents.includes(
          ShinjiroAragakiEpisodesNames.ShinjiroAragaki4
        ) &&
        currentDay.date.getTime() >= new Date(2009, 9, 5).getTime() &&
        currentDay.date.getTime() <= new Date(2009, 9, 31).getTime() &&
        !currentDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day
      );
    },
  },
};
