import { pcProgramsNames, Categories, Times, Event } from "./types";
import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";

export const pcPrograms: { [key in pcProgramsNames]: Event } = {
  [pcProgramsNames.lobbyPCLanguageMadeEasy]: {
    name: pcProgramsNames.lobbyPCLanguageMadeEasy,
    category: Categories.Stats,
    label: () => (
      <EventCard
        head="Lobby PC(Language Made Easy)"
        stats="Academics +4"
        place="Dorm"
        price={1200}
      />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        currentDate.getTime() >= new Date(2009, 3, 29).getTime() &&
        [Times.Day, Times.Evening].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
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
  },
  [pcProgramsNames.lobbyPCDigitalCramSchool]: {
    name: pcProgramsNames.lobbyPCDigitalCramSchool,
    category: Categories.Stats,
    label: () => (
      <EventCard
        head="Lobby PC(Digital Cram School)"
        stats="Academics +4"
        place="Dorm"
      />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        currentDate.getTime() >= new Date(2009, 3, 29).getTime() &&
        [Times.Day, Times.Evening].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
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
  },
  [pcProgramsNames.lobbyPCAnimalOthello]: {
    name: pcProgramsNames.lobbyPCAnimalOthello,
    category: Categories.Stats,
    label: () => (
      <EventCard
        head="Lobby PC(Animal Othello)"
        stats="Courage +4"
        place="Dorm"
        price={1200}
      />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        currentDate.getTime() >= new Date(2009, 3, 29).getTime() &&
        [Times.Day, Times.Evening].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
      );
    },
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
    name: pcProgramsNames.lobbyPCTypinGhoul,
    category: Categories.Stats,
    label: () => (
      <EventCard
        head="Lobby PC(Typin Ghoul)"
        stats="Courage +4"
        place="Dorm"
        price={1200}
      />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        currentDate.getTime() >= new Date(2009, 3, 29).getTime() &&
        [Times.Day, Times.Evening].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
      );
    },
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
    name: pcProgramsNames.lobbyPCLessonsInEtiquette,
    category: Categories.Stats,
    label: () => (
      <EventCard
        head="Lobby PC(Lessons in Etiquette)"
        stats="Charm +4"
        place="Dorm"
        price={1200}
      />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        currentDate.getTime() >= new Date(2009, 3, 29).getTime() &&
        [Times.Day, Times.Evening].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
      );
    },
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
    name: pcProgramsNames.lobbyPCVirtualDiet,
    category: Categories.Stats,
    label: () => (
      <EventCard
        head="Lobby PC(Virtual Diet)"
        stats="Charm +4"
        place="Dorm"
        price={1200}
      />
    ),
    available: function ({ currentTime, currentDate, singleTimeEvents }) {
      return (
        currentDate.getTime() >= new Date(2009, 3, 29).getTime() &&
        [Times.Day, Times.Evening].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
      );
    },
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
