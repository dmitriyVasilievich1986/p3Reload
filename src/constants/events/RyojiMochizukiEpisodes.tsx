import { RyojiMochizukiEpisodesNames, Categories, Times, Event } from "./types";
import { EventCard } from "@/components";

const ji1: Event = {
  name: RyojiMochizukiEpisodesNames.RyojiMochizuki1,
  category: Categories.Stats,
  time: Times.Day,
  label: function () {
    return <EventCard head={this.name} name="Ryoji Mochizuki" />;
  },
  available: function () {
    return false;
  },
  upgrade: function ({ currentDay }) {
    return { singleTimeEvents: [...currentDay.singleTimeEvents, this.name] };
  },
};

export const RyojiMochizukiEpisodes: {
  [key in RyojiMochizukiEpisodesNames]: Event;
} = {
  [RyojiMochizukiEpisodesNames.RyojiMochizuki1]: ji1,
  [RyojiMochizukiEpisodesNames.RyojiMochizuki2]: {
    ...ji1,
    name: RyojiMochizukiEpisodesNames.RyojiMochizuki2,
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      const days = [
        new Date(2009, 10, 12).getTime(),
        new Date(2009, 10, 14).getTime(),
        new Date(2009, 10, 16).getTime(),
      ];
      return (
        !previousDay.singleTimeEvents.includes(this.name) &&
        days.includes(currentDay.date.getTime()) &&
        time === Times.Day
      );
    },
  },
  [RyojiMochizukiEpisodesNames.RyojiMochizuki3]: {
    ...ji1,
    name: RyojiMochizukiEpisodesNames.RyojiMochizuki3,
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      return (
        previousDay.singleTimeEvents.includes(
          RyojiMochizukiEpisodesNames.RyojiMochizuki2
        ) &&
        currentDay.date.getTime() === new Date(2009, 10, 18).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day
      );
    },
  },
  [RyojiMochizukiEpisodesNames.RyojiMochizuki4]: {
    ...ji1,
    name: RyojiMochizukiEpisodesNames.RyojiMochizuki4,
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      return (
        previousDay.singleTimeEvents.includes(
          RyojiMochizukiEpisodesNames.RyojiMochizuki3
        ) &&
        currentDay.date.getTime() === new Date(2009, 11, 1).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day
      );
    },
  },
  [RyojiMochizukiEpisodesNames.RyojiMochizuki5]: {
    ...ji1,
    name: RyojiMochizukiEpisodesNames.RyojiMochizuki5,
    available: function ({ previousDay, currentDay, time }) {
      if (!previousDay) return false;
      return (
        previousDay.singleTimeEvents.includes(
          RyojiMochizukiEpisodesNames.RyojiMochizuki4
        ) &&
        currentDay.date.getTime() === new Date(2009, 11, 31).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        time === Times.Day
      );
    },
  },
};
