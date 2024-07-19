import { AkihikoSanadaEpisodesNames, Categories, Times, Event } from "./types";
import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";

const ji1: Event = {
  name: AkihikoSanadaEpisodesNames.AkihikoSanada1,
  category: Categories.Stats,
  time: Times.Evening,
  label: () => (
    <EventCard head="Akihiko Sanada Episode" name="Akihiko Sanada" />
  ),
  available: function ({ currentTime, currentDate, singleTimeEvents }) {
    const days = [DaysNames.monday, DaysNames.friday];
    return (
      currentDate.getTime() >= new Date(2009, 4, 29).getTime() &&
      currentDate.getTime() <= new Date(2009, 6, 10).getTime() &&
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

export const AkihikoSanadaEpisodes: {
  [key in AkihikoSanadaEpisodesNames]: Event;
} = {
  [AkihikoSanadaEpisodesNames.AkihikoSanada1]: ji1,
  [AkihikoSanadaEpisodesNames.AkihikoSanada2]: {
    ...ji1,
    name: AkihikoSanadaEpisodesNames.AkihikoSanada2,
    label: () => (
      <EventCard
        head="Akihiko Sanada Episode"
        name="Akihiko Sanada"
        stats="Charm +2"
      />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [DaysNames.monday, DaysNames.friday];
      return (
        singleTimeEvents.includes(AkihikoSanadaEpisodesNames.AkihikoSanada1) &&
        currentDate.getTime() >= new Date(2009, 6, 24).getTime() &&
        currentDate.getTime() <= new Date(2009, 7, 31).getTime() &&
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
  [AkihikoSanadaEpisodesNames.AkihikoSanada3]: {
    ...ji1,
    name: AkihikoSanadaEpisodesNames.AkihikoSanada3,
    label: () => (
      <EventCard
        head="Akihiko Sanada Episode"
        name="Akihiko Sanada"
        stats="Charm +2"
      />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [DaysNames.monday, DaysNames.friday];
      return (
        singleTimeEvents.includes(AkihikoSanadaEpisodesNames.AkihikoSanada2) &&
        currentDate.getTime() <= new Date(2009, 10, 2).getTime() &&
        currentDate.getTime() >= new Date(2009, 9, 9).getTime() &&
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
  [AkihikoSanadaEpisodesNames.AkihikoSanada4]: {
    ...ji1,
    name: AkihikoSanadaEpisodesNames.AkihikoSanada4,
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [DaysNames.monday, DaysNames.tuesday, DaysNames.saturday];
      return (
        singleTimeEvents.includes(AkihikoSanadaEpisodesNames.AkihikoSanada3) &&
        currentDate.getTime() >= new Date(2009, 11, 12).getTime() &&
        currentDate.getTime() <= new Date(2009, 11, 26).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
  },
  [AkihikoSanadaEpisodesNames.AkihikoSanada5]: {
    ...ji1,
    name: AkihikoSanadaEpisodesNames.AkihikoSanada5,
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      const days = [DaysNames.monday, DaysNames.friday];
      return (
        singleTimeEvents.includes(AkihikoSanadaEpisodesNames.AkihikoSanada4) &&
        currentDate.getTime() <= new Date(2010, 0, 29).getTime() &&
        currentDate.getTime() >= new Date(2010, 0, 4).getTime() &&
        !singleTimeEvents.includes(this.name) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
  },
};
