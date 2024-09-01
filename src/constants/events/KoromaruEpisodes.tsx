import { KoromaruEpisodesNames, Categories, Times, Event } from "./types";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";
import { EventCard } from "@/components";

const ji1: Event = {
  name: KoromaruEpisodesNames.Koromaru1,
  category: Categories.Stats,
  time: Times.Day,
  label: function () {
    return <EventCard head={this.name} name="Koromaru" stats="Charm +2" />;
  },
  available: function ({ previousDay, currentDay, time }) {
    if (!previousDay) return false;
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
      !previousDay.singleTimeEvents.includes(this.name) &&
      time === Times.Day &&
      isDay
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
};

export const KoromaruEpisodes: {
  [key in KoromaruEpisodesNames]: Event;
} = {
  [KoromaruEpisodesNames.Koromaru1]: ji1,
  [KoromaruEpisodesNames.Koromaru2]: {
    ...ji1,
    name: KoromaruEpisodesNames.Koromaru2,
    label: function () {
      return <EventCard head={this.name} name="Koromaru" stats="Courage +2" />;
    },
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
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
        previousDay.singleTimeEvents.includes(
          KoromaruEpisodesNames.Koromaru1
        ) &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day &&
        isDay
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
  [KoromaruEpisodesNames.Koromaru3]: {
    ...ji1,
    name: KoromaruEpisodesNames.Koromaru3,
    label: function () {
      return <EventCard head={this.name} name="Koromaru" />;
    },
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
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
        previousDay.singleTimeEvents.includes(
          KoromaruEpisodesNames.Koromaru2
        ) &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day &&
        isDay
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      };
    },
  },
  [KoromaruEpisodesNames.Koromaru4]: {
    ...ji1,
    name: KoromaruEpisodesNames.Koromaru4,
    label: function () {
      return <EventCard head={this.name} name="Koromaru" stats="Courage +2" />;
    },
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
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
        previousDay.singleTimeEvents.includes(
          KoromaruEpisodesNames.Koromaru3
        ) &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day &&
        isDay
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
  [KoromaruEpisodesNames.Koromaru5]: {
    ...ji1,
    name: KoromaruEpisodesNames.Koromaru5,
    label: function () {
      return <EventCard head={this.name} name="Koromaru" />;
    },
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
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
        previousDay.singleTimeEvents.includes(
          KoromaruEpisodesNames.Koromaru4
        ) &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day &&
        isDay
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      };
    },
  },
};
