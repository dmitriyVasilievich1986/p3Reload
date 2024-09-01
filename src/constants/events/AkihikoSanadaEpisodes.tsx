import { AkihikoSanadaEpisodesNames, Categories, Times, Event } from "./types";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";
import { EventCard } from "@/components";

const ji1: Event = {
  name: AkihikoSanadaEpisodesNames.AkihikoSanada1,
  category: Categories.Stats,
  time: Times.Evening,
  label: function () {
    return <EventCard head={this.name} name="Akihiko Sanada" />;
  },
  available: function ({ previousDay, currentDay, time }) {
    if (!previousDay) return false;
    const days = [DaysNames.monday, DaysNames.friday];
    return (
      currentDay.date.getTime() >= new Date(2009, 4, 29).getTime() &&
      currentDay.date.getTime() <= new Date(2009, 6, 10).getTime() &&
      !previousDay.singleTimeEvents.includes(this.name) &&
      days.includes(currentDay.date.getDay()) &&
      time === Times.Evening
    );
  },
  upgrade: function ({ currentDay }) {
    return {
      singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
    };
  },
};

export const AkihikoSanadaEpisodes: {
  [key in AkihikoSanadaEpisodesNames]: Event;
} = {
  [AkihikoSanadaEpisodesNames.AkihikoSanada1]: ji1,
  [AkihikoSanadaEpisodesNames.AkihikoSanada2]: {
    ...ji1,
    name: AkihikoSanadaEpisodesNames.AkihikoSanada2,
    label: function () {
      return (
        <EventCard head={this.name} name="Akihiko Sanada" stats="Charm +2" />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      const days = [DaysNames.monday, DaysNames.friday];
      return (
        previousDay.singleTimeEvents.includes(
          AkihikoSanadaEpisodesNames.AkihikoSanada1
        ) &&
        currentDay.date.getTime() >= new Date(2009, 6, 24).getTime() &&
        currentDay.date.getTime() <= new Date(2009, 7, 31).getTime() &&
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
  [AkihikoSanadaEpisodesNames.AkihikoSanada3]: {
    ...ji1,
    name: AkihikoSanadaEpisodesNames.AkihikoSanada3,
    label: function () {
      return (
        <EventCard head={this.name} name="Akihiko Sanada" stats="Charm +2" />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      const days = [DaysNames.monday, DaysNames.friday];
      return (
        previousDay.singleTimeEvents.includes(
          AkihikoSanadaEpisodesNames.AkihikoSanada2
        ) &&
        currentDay.date.getTime() <= new Date(2009, 10, 2).getTime() &&
        currentDay.date.getTime() >= new Date(2009, 9, 9).getTime() &&
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
  [AkihikoSanadaEpisodesNames.AkihikoSanada4]: {
    ...ji1,
    name: AkihikoSanadaEpisodesNames.AkihikoSanada4,
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      const days = [DaysNames.monday, DaysNames.tuesday, DaysNames.saturday];
      return (
        previousDay.singleTimeEvents.includes(
          AkihikoSanadaEpisodesNames.AkihikoSanada3
        ) &&
        currentDay.date.getTime() >= new Date(2009, 11, 12).getTime() &&
        currentDay.date.getTime() <= new Date(2009, 11, 26).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening
      );
    },
  },
  [AkihikoSanadaEpisodesNames.AkihikoSanada5]: {
    ...ji1,
    name: AkihikoSanadaEpisodesNames.AkihikoSanada5,
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      const days = [DaysNames.monday, DaysNames.friday];
      return (
        previousDay.singleTimeEvents.includes(
          AkihikoSanadaEpisodesNames.AkihikoSanada4
        ) &&
        currentDay.date.getTime() <= new Date(2010, 0, 29).getTime() &&
        currentDay.date.getTime() >= new Date(2010, 0, 4).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening
      );
    },
  },
};
