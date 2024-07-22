import { RyojiMochizukiEpisodesNames, Categories, Times, Event } from "./types";
import { EventCard } from "../../components/eventCard";

const ji1: Event = {
  name: RyojiMochizukiEpisodesNames.RyojiMochizuki1,
  category: Categories.Stats,
  time: Times.Day,
  label: () => (
    <EventCard head="Ryoji Mochizuki Episode" name="Ryoji Mochizuki" />
  ),
  available: function () {
    return false;
  },
  upgrade: function ({ singleTimeEvents }) {
    return { singleTimeEvents: [...singleTimeEvents, this.name] };
  },
};

export const RyojiMochizukiEpisodes: {
  [key in RyojiMochizukiEpisodesNames]: Event;
} = {
  [RyojiMochizukiEpisodesNames.RyojiMochizuki1]: ji1,
  [RyojiMochizukiEpisodesNames.RyojiMochizuki2]: {
    ...ji1,
    name: RyojiMochizukiEpisodesNames.RyojiMochizuki2,
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [
        new Date(2009, 10, 12).getTime(),
        new Date(2009, 10, 14).getTime(),
        new Date(2009, 10, 16).getTime(),
      ];
      return (
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getTime()) &&
        currentTime === Times.Day
      );
    },
  },
  [RyojiMochizukiEpisodesNames.RyojiMochizuki3]: {
    ...ji1,
    name: RyojiMochizukiEpisodesNames.RyojiMochizuki3,
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        singleTimeEvents.includes(
          RyojiMochizukiEpisodesNames.RyojiMochizuki2
        ) &&
        currentDate.getTime() === new Date(2009, 10, 18).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        currentTime === Times.Day
      );
    },
  },
  [RyojiMochizukiEpisodesNames.RyojiMochizuki4]: {
    ...ji1,
    name: RyojiMochizukiEpisodesNames.RyojiMochizuki4,
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        singleTimeEvents.includes(
          RyojiMochizukiEpisodesNames.RyojiMochizuki3
        ) &&
        currentDate.getTime() === new Date(2009, 11, 1).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        currentTime === Times.Day
      );
    },
  },
  [RyojiMochizukiEpisodesNames.RyojiMochizuki5]: {
    ...ji1,
    name: RyojiMochizukiEpisodesNames.RyojiMochizuki5,
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        singleTimeEvents.includes(
          RyojiMochizukiEpisodesNames.RyojiMochizuki4
        ) &&
        currentDate.getTime() === new Date(2009, 11, 31).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        currentTime === Times.Day
      );
    },
  },
};
