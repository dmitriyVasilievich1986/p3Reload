import { KenAmadaEpisodesNames, Categories, Times, Event } from "./types";
import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";

const ji1: Event = {
  name: KenAmadaEpisodesNames.KenAmada1,
  category: Categories.Stats,
  time: Times.Evening,
  label: () => (
    <EventCard head="Ken Amada Episode" name="Ken Amada" stats="Academics +2" />
  ),
  available: function ({ currentTime, currentDate, singleTimeEvents }) {
    const days = [DaysNames.tuesday, DaysNames.wednesday];
    return (
      currentDate.getTime() >= new Date(2009, 8, 8).getTime() &&
      currentDate.getTime() <= new Date(2009, 8, 30).getTime() &&
      !singleTimeEvents.includes(this.name) &&
      days.includes(currentDate.getDay()) &&
      currentTime === Times.Evening
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
};

export const KenAmadaEpisodes: {
  [key in KenAmadaEpisodesNames]: Event;
} = {
  [KenAmadaEpisodesNames.KenAmada1]: ji1,
  [KenAmadaEpisodesNames.KenAmada2]: {
    ...ji1,
    name: KenAmadaEpisodesNames.KenAmada2,
    label: () => (
      <EventCard head="Ken Amada Episode" name="Ken Amada" stats="Courage +2" />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday];
      return (
        singleTimeEvents.includes(KenAmadaEpisodesNames.KenAmada1) &&
        currentDate.getTime() >= new Date(2009, 8, 8).getTime() &&
        currentDate.getTime() <= new Date(2009, 8, 30).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Evening
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
  [KenAmadaEpisodesNames.KenAmada3]: {
    ...ji1,
    name: KenAmadaEpisodesNames.KenAmada3,
    label: () => (
      <EventCard head="Ken Amada Episode" name="Ken Amada" stats="Charm +2" />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday];
      return (
        singleTimeEvents.includes(KenAmadaEpisodesNames.KenAmada2) &&
        currentDate.getTime() >= new Date(2009, 10, 10).getTime() &&
        currentDate.getTime() <= new Date(2009, 11, 2).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Evening
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
  [KenAmadaEpisodesNames.KenAmada4]: {
    ...ji1,
    name: KenAmadaEpisodesNames.KenAmada4,
    label: () => <EventCard head="Ken Amada Episode" name="Ken Amada" />,
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.friday,
        DaysNames.saturday,
      ];
      return (
        singleTimeEvents.includes(KenAmadaEpisodesNames.KenAmada3) &&
        currentDate.getTime() >= new Date(2009, 11, 22).getTime() &&
        currentDate.getTime() <= new Date(2009, 11, 30).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Evening
      );
    },
  },
  [KenAmadaEpisodesNames.KenAmada5]: {
    ...ji1,
    name: KenAmadaEpisodesNames.KenAmada5,
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday];
      return (
        singleTimeEvents.includes(KenAmadaEpisodesNames.KenAmada4) &&
        currentDate.getTime() >= new Date(2010, 0, 19).getTime() &&
        currentDate.getTime() <= new Date(2010, 0, 27).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Evening
      );
    },
  },
};
