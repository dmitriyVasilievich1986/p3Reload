import { pcProgramsNames, Categories, Times, Event } from "./types";
import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";

const pcProgramBase: Event = {
  name: pcProgramsNames.lobbyPCLanguageMadeEasy,
  category: Categories.Stats,
  time: Times.Evening,
  label: () => (
    <EventCard
      head="Lobby PC(Language Made Easy)"
      stats="Academics +4"
      place="Dorm"
      price={1200}
    />
  ),
  available: function ({ currentDay, time }) {
    return (
      currentDay.date.getTime() >= new Date(2009, 3, 29).getTime() &&
      !currentDay.singleTimeEvents.includes(this.name) &&
      [Times.Day, Times.Evening].includes(time)
    );
  },
  upgrade: function ({ currentStats, singleTimeEvents }) {
    return {
      singleTimeEvents: [...singleTimeEvents, this.name],
      stats: {
        ...currentStats,
        [StatsNames.Academics]: currentStats[StatsNames.Academics] + 4,
      },
    };
  },
};

export const pcPrograms: { [key in pcProgramsNames]: Event } = {
  [pcProgramsNames.lobbyPCLanguageMadeEasy]: pcProgramBase,
  [pcProgramsNames.lobbyPCDigitalCramSchool]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCDigitalCramSchool,
    label: () => (
      <EventCard
        head="Lobby PC(Digital Cram School)"
        stats="Academics +4"
        place="Dorm"
      />
    ),
  },
  [pcProgramsNames.lobbyPCAnimalOthello]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCAnimalOthello,
    label: () => (
      <EventCard
        head="Lobby PC(Animal Othello)"
        stats="Courage +4"
        place="Dorm"
        price={1200}
      />
    ),
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [StatsNames.Courage]: currentStats[StatsNames.Courage] + 4,
        },
      };
    },
  },
  [pcProgramsNames.lobbyPCTypinGhoul]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCTypinGhoul,
    label: () => (
      <EventCard
        head="Lobby PC(Typin Ghoul)"
        stats="Courage +4"
        place="Dorm"
        price={1200}
      />
    ),
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [StatsNames.Courage]: currentStats[StatsNames.Courage] + 4,
        },
      };
    },
  },
  [pcProgramsNames.lobbyPCLessonsInEtiquette]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCLessonsInEtiquette,
    label: () => (
      <EventCard
        head="Lobby PC(Lessons in Etiquette)"
        stats="Charm +4"
        place="Dorm"
        price={1200}
      />
    ),
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [StatsNames.Charm]: currentStats[StatsNames.Charm] + 4,
        },
      };
    },
  },
  [pcProgramsNames.lobbyPCVirtualDiet]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCVirtualDiet,
    label: () => (
      <EventCard
        head="Lobby PC(Virtual Diet)"
        stats="Charm +4"
        place="Dorm"
        price={1200}
      />
    ),
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [StatsNames.Charm]: currentStats[StatsNames.Charm] + 4,
        },
      };
    },
  },
};
