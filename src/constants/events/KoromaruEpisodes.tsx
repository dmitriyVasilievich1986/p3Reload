import { KoromaruEpisodesNames, Categories, Times, Event } from "./types";
import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";

const ji1: Event = {
  name: KoromaruEpisodesNames.Koromaru1,
  category: Categories.Stats,
  time: Times.Day,
  label: () => (
    <EventCard head="Koromaru Episode" name="Koromaru" stats="Charm +2" />
  ),
  available: function ({ currentDay, time }) {
    const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
    const additionalDays = [
      new Date(2010, 0, 23).getTime(),
      new Date(2010, 0, 28).getTime(),
      new Date(2010, 0, 30).getTime(),
    ];
    const isDay =
      (currentDay.date.getTime() >= new Date(2009, 7, 22).getTime() &&
        currentDay.date.getTime() <= new Date(2010, 0, 30).getTime() &&
        days.includes(currentDay.date.getDay())) ||
      additionalDays.includes(currentDay.date.getTime());
    return (
      !currentDay.singleTimeEvents.includes(this.name) &&
      time === Times.Day &&
      isDay
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
};

export const KoromaruEpisodes: {
  [key in KoromaruEpisodesNames]: Event;
} = {
  [KoromaruEpisodesNames.Koromaru1]: ji1,
  [KoromaruEpisodesNames.Koromaru2]: {
    ...ji1,
    name: KoromaruEpisodesNames.Koromaru2,
    label: () => (
      <EventCard head="Koromaru Episode" name="Koromaru" stats="Courage +2" />
    ),
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
      const additionalDays = [
        new Date(2010, 0, 28).getTime(),
        new Date(2010, 0, 30).getTime(),
      ];
      const isDay =
        (currentDay.date.getTime() >= new Date(2009, 8, 4).getTime() &&
          currentDay.date.getTime() <= new Date(2010, 0, 30).getTime() &&
          days.includes(currentDay.date.getDay())) ||
        additionalDays.includes(currentDay.date.getTime());
      return (
        currentDay.singleTimeEvents.includes(KoromaruEpisodesNames.Koromaru1) &&
        !currentDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day &&
        isDay
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
  [KoromaruEpisodesNames.Koromaru3]: {
    ...ji1,
    name: KoromaruEpisodesNames.Koromaru3,
    label: () => <EventCard head="Koromaru Episode" name="Koromaru" />,
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
      const additionalDays = [
        new Date(2010, 0, 28).getTime(),
        new Date(2010, 0, 30).getTime(),
      ];
      const isDay =
        (currentDay.date.getTime() >= new Date(2009, 8, 15).getTime() &&
          currentDay.date.getTime() <= new Date(2010, 0, 30).getTime() &&
          days.includes(currentDay.date.getDay())) ||
        additionalDays.includes(currentDay.date.getTime());
      return (
        currentDay.singleTimeEvents.includes(KoromaruEpisodesNames.Koromaru2) &&
        !currentDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day &&
        isDay
      );
    },
    upgrade: function ({ singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
      };
    },
  },
  [KoromaruEpisodesNames.Koromaru4]: {
    ...ji1,
    name: KoromaruEpisodesNames.Koromaru4,
    label: () => (
      <EventCard head="Koromaru Episode" name="Koromaru" stats="Courage +2" />
    ),
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
      const additionalDays = [
        new Date(2010, 0, 28).getTime(),
        new Date(2010, 0, 30).getTime(),
      ];
      const isDay =
        (currentDay.date.getTime() >= new Date(2009, 8, 16).getTime() &&
          currentDay.date.getTime() <= new Date(2010, 0, 30).getTime() &&
          days.includes(currentDay.date.getDay())) ||
        additionalDays.includes(currentDay.date.getTime());
      return (
        currentDay.singleTimeEvents.includes(KoromaruEpisodesNames.Koromaru3) &&
        !currentDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day &&
        isDay
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
  [KoromaruEpisodesNames.Koromaru5]: {
    ...ji1,
    name: KoromaruEpisodesNames.Koromaru5,
    label: () => <EventCard head="Koromaru Episode" name="Koromaru" />,
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday];
      const additionalDays = [
        new Date(2010, 0, 28).getTime(),
        new Date(2010, 0, 29).getTime(),
        new Date(2010, 0, 30).getTime(),
      ];
      const isDay =
        (currentDay.date.getTime() >= new Date(2010, 0, 5).getTime() &&
          currentDay.date.getTime() <= new Date(2010, 0, 30).getTime() &&
          days.includes(currentDay.date.getDay())) ||
        additionalDays.includes(currentDay.date.getTime());
      return (
        currentDay.singleTimeEvents.includes(KoromaruEpisodesNames.Koromaru4) &&
        !currentDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day &&
        isDay
      );
    },
    upgrade: function ({ singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
      };
    },
  },
};
