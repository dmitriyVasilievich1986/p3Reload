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
  available: function ({ currentTime, currentDate, singleTimeEvents }) {
    const days = [
      DaysNames.monday,
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.friday,
      DaysNames.sunday,
    ];
    return (
      currentDate.getTime() >= new Date(2009, 8, 4).getTime() &&
      currentDate.getTime() <= new Date(2009, 9, 2).getTime() &&
      !singleTimeEvents.includes(this.name) &&
      days.includes(currentDate.getDay()) &&
      currentTime === Times.Day
    );
  },
  upgrade: function ({ currentStats, singleTimeEvents }) {
    return {
      singleTimeEvents: [...singleTimeEvents, this.name],
      stats: {
        ...currentStats,
        [StatsNames.Courage]: currentStats[StatsNames.Courage] + 2,
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
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.sunday,
      ];
      return (
        singleTimeEvents.includes(
          ShinjiroAragakiEpisodesNames.ShinjiroAragaki1
        ) &&
        currentDate.getTime() >= new Date(2009, 8, 11).getTime() &&
        currentDate.getTime() <= new Date(2009, 9, 2).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [StatsNames.Charm]: currentStats[StatsNames.Charm] + 2,
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
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.sunday,
      ];
      return (
        singleTimeEvents.includes(
          ShinjiroAragakiEpisodesNames.ShinjiroAragaki2
        ) &&
        currentDate.getTime() >= new Date(2009, 8, 13).getTime() &&
        currentDate.getTime() <= new Date(2009, 9, 2).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [StatsNames.Academics]: currentStats[StatsNames.Academics] + 2,
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
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        singleTimeEvents.includes(
          ShinjiroAragakiEpisodesNames.ShinjiroAragaki3
        ) &&
        currentDate.getTime() >= new Date(2009, 8, 14).getTime() &&
        currentDate.getTime() <= new Date(2009, 9, 2).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        currentTime === Times.Day
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
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.friday,
        DaysNames.saturday,
      ];
      return (
        singleTimeEvents.includes(
          ShinjiroAragakiEpisodesNames.ShinjiroAragaki35
        ) &&
        currentDate.getTime() >= new Date(2009, 8, 14).getTime() &&
        currentDate.getTime() <= new Date(2009, 9, 2).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [StatsNames.Courage]: currentStats[StatsNames.Courage] + 2,
        },
      };
    },
  },
  [ShinjiroAragakiEpisodesNames.ShinjiroAragaki5]: {
    ...ji1,
    name: ShinjiroAragakiEpisodesNames.ShinjiroAragaki5,
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        singleTimeEvents.includes(
          ShinjiroAragakiEpisodesNames.ShinjiroAragaki4
        ) &&
        currentDate.getTime() >= new Date(2009, 9, 5).getTime() &&
        currentDate.getTime() <= new Date(2009, 9, 31).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        currentTime === Times.Day
      );
    },
  },
};
