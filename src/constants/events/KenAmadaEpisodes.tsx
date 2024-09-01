import { KenAmadaEpisodesNames, Categories, Times, Event } from "./types";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";
import { EventCard } from "@/components";

const ji1: Event = {
  name: KenAmadaEpisodesNames.KenAmada1,
  category: Categories.Stats,
  time: Times.Evening,
  label: function () {
    return <EventCard head={this.name} name="Ken Amada" stats="Academics +2" />;
  },
  available: function ({ previousDay, currentDay, time }) {
    if (!previousDay) return false;
    const days = [DaysNames.tuesday, DaysNames.wednesday];
    return (
      currentDay.date.getTime() >= new Date(2009, 8, 8).getTime() &&
      currentDay.date.getTime() <= new Date(2009, 8, 30).getTime() &&
      !previousDay.singleTimeEvents.includes(this.name) &&
      days.includes(currentDay.date.getDay()) &&
      time === Times.Evening
    );
  },
  upgrade: function ({ currentDay }) {
    return {
      singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      stats: {
        ...currentDay.stats,
        [StatsNames.Academics]: currentDay.stats[StatsNames.Academics] + 2,
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
    label: function () {
      return <EventCard head={this.name} name="Ken Amada" stats="Courage +2" />;
    },
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      const days = [DaysNames.tuesday, DaysNames.wednesday];
      return (
        previousDay.singleTimeEvents.includes(
          KenAmadaEpisodesNames.KenAmada1
        ) &&
        currentDay.date.getTime() >= new Date(2009, 8, 8).getTime() &&
        currentDay.date.getTime() <= new Date(2009, 8, 30).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
        stats: {
          ...currentDay.stats,
          [StatsNames.Courage]: currentDay.stats[StatsNames.Courage] + 2,
        },
      };
    },
  },
  [KenAmadaEpisodesNames.KenAmada3]: {
    ...ji1,
    name: KenAmadaEpisodesNames.KenAmada3,
    label: function () {
      return <EventCard head={this.name} name="Ken Amada" stats="Charm +2" />;
    },
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      const days = [DaysNames.tuesday, DaysNames.wednesday];
      return (
        previousDay.singleTimeEvents.includes(
          KenAmadaEpisodesNames.KenAmada2
        ) &&
        currentDay.date.getTime() >= new Date(2009, 10, 10).getTime() &&
        currentDay.date.getTime() <= new Date(2009, 11, 2).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
        stats: {
          ...currentDay.stats,
          [StatsNames.Charm]: currentDay.stats[StatsNames.Charm] + 2,
        },
      };
    },
  },
  [KenAmadaEpisodesNames.KenAmada4]: {
    ...ji1,
    name: KenAmadaEpisodesNames.KenAmada4,
    label: function () {
      return <EventCard head={this.name} name="Ken Amada" />;
    },
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.friday,
        DaysNames.saturday,
      ];
      return (
        previousDay.singleTimeEvents.includes(
          KenAmadaEpisodesNames.KenAmada3
        ) &&
        currentDay.date.getTime() >= new Date(2009, 11, 22).getTime() &&
        currentDay.date.getTime() <= new Date(2009, 11, 30).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening
      );
    },
  },
  [KenAmadaEpisodesNames.KenAmada5]: {
    ...ji1,
    name: KenAmadaEpisodesNames.KenAmada5,
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      const days = [DaysNames.tuesday, DaysNames.wednesday];
      return (
        previousDay.singleTimeEvents.includes(
          KenAmadaEpisodesNames.KenAmada4
        ) &&
        currentDay.date.getTime() >= new Date(2010, 0, 19).getTime() &&
        currentDay.date.getTime() <= new Date(2010, 0, 27).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening
      );
    },
  },
};
