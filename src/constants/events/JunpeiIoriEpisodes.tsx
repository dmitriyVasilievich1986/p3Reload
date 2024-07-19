import { JunpeiIoriEpisodesNames, Categories, Times, Event } from "./types";
import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";

const ji1: Event = {
  name: JunpeiIoriEpisodesNames.JunpeiIori1,
  category: Categories.Stats,
  time: Times.Evening,
  label: () => <EventCard head="Junpei Iori Episode" name="Junpei Iori" />,
  available: function ({ currentTime, currentDate, singleTimeEvents }) {
    const days = [DaysNames.tuesday, DaysNames.friday];
    return (
      currentDate.getTime() >= new Date(2009, 4, 12).getTime() &&
      currentDate.getTime() <= new Date(2009, 6, 3).getTime() &&
      !singleTimeEvents.includes(this.name) &&
      days.includes(currentDate.getDay()) &&
      currentTime === Times.Day
    );
  },
  upgrade: function ({ singleTimeEvents }) {
    return {
      singleTimeEvents: [...singleTimeEvents, this.name],
    };
  },
};

export const JunpeiIoriEpisodes: { [key in JunpeiIoriEpisodesNames]: Event } = {
  [JunpeiIoriEpisodesNames.JunpeiIori1]: ji1,
  [JunpeiIoriEpisodesNames.JunpeiIori2]: {
    ...ji1,
    name: JunpeiIoriEpisodesNames.JunpeiIori2,
    label: () => (
      <EventCard
        head="Junpei Iori Episode"
        name="Junpei Iori"
        stats="Charm +2"
      />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [
        new Date(2009, 7, 9).getTime(),
        new Date(2009, 7, 11).getTime(),
        new Date(2009, 7, 14).getTime(),
        new Date(2009, 7, 18).getTime(),
        new Date(2009, 7, 21).getTime(),
        new Date(2009, 7, 25).getTime(),
        new Date(2009, 7, 28).getTime(),
      ];
      return (
        singleTimeEvents.includes(JunpeiIoriEpisodesNames.JunpeiIori1) &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getTime()) &&
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
  [JunpeiIoriEpisodesNames.JunpeiIori3]: {
    ...ji1,
    name: JunpeiIoriEpisodesNames.JunpeiIori3,
    label: () => (
      <EventCard
        head="Junpei Iori Episode"
        stats="Academics +2"
        name="Junpei Iori"
      />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [
        new Date(2009, 10, 7).getTime(),
        new Date(2009, 10, 10).getTime(),
        new Date(2009, 10, 11).getTime(),
        new Date(2009, 10, 13).getTime(),
      ];
      return (
        singleTimeEvents.includes(JunpeiIoriEpisodesNames.JunpeiIori2) &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getTime()) &&
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
  [JunpeiIoriEpisodesNames.JunpeiIori35]: {
    ...ji1,
    name: JunpeiIoriEpisodesNames.JunpeiIori35,
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        singleTimeEvents.includes(JunpeiIoriEpisodesNames.JunpeiIori3) &&
        currentDate.getTime() <= new Date(2009, 10, 20).getTime() &&
        currentDate.getTime() >= new Date(2009, 10, 8).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        currentTime === Times.Day
      );
    },
  },
  [JunpeiIoriEpisodesNames.JunpeiIori4]: {
    ...ji1,
    name: JunpeiIoriEpisodesNames.JunpeiIori4,
    label: () => (
      <EventCard
        head="Junpei Iori Episode"
        name="Junpei Iori"
        stats="Courage +2"
      />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [
        new Date(2009, 11, 19).getTime(),
        new Date(2009, 11, 22).getTime(),
        new Date(2009, 11, 25).getTime(),
        new Date(2009, 11, 26).getTime(),
      ];
      return (
        singleTimeEvents.includes(JunpeiIoriEpisodesNames.JunpeiIori3) &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getTime()) &&
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
  [JunpeiIoriEpisodesNames.JunpeiIori5]: {
    ...ji1,
    name: JunpeiIoriEpisodesNames.JunpeiIori5,
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [
        new Date(2010, 0, 15).getTime(),
        new Date(2010, 0, 18).getTime(),
        new Date(2010, 0, 22).getTime(),
        new Date(2010, 0, 23).getTime(),
        new Date(2010, 0, 25).getTime(),
        new Date(2010, 0, 26).getTime(),
        new Date(2010, 0, 28).getTime(),
        new Date(2010, 0, 29).getTime(),
      ];
      return (
        singleTimeEvents.includes(JunpeiIoriEpisodesNames.JunpeiIori4) &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getTime()) &&
        currentTime === Times.Day
      );
    },
  },
};
