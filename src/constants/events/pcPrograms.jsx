import EventCard from "../../components/eventCard/EventCard";
import { stats } from "../stats";
import React from "react";

export const pcPrograms = {
  lobbyPCLanguageMadeEasy: {
    name: "lobbyPCLanguageMadeEasy",
    category: "stats",
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
        ["day", "evening"].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
      );
    },
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] + 4,
        },
      };
    },
  },
  lobbyPCDigitalCramSchool: {
    name: "lobbyPCDigitalCramSchool",
    category: "stats",
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
        ["day", "evening"].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
      );
    },
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [stats.Academics.name]: currentStats[stats.Academics.name] + 4,
        },
      };
    },
  },
  lobbyPCAnimalOthello: {
    name: "lobbyPCAnimalOthello",
    category: "stats",
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
        ["day", "evening"].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
      );
    },
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 4,
        },
      };
    },
  },
  lobbyPCTypinGhoul: {
    name: "lobbyPCTypinGhoul",
    category: "stats",
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
        ["day", "evening"].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
      );
    },
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [stats.Courage.name]: currentStats[stats.Courage.name] + 4,
        },
      };
    },
  },
  lobbyPCLessonsInEtiquette: {
    name: "lobbyPCLessonsInEtiquette",
    category: "stats",
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
        ["day", "evening"].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
      );
    },
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 4,
        },
      };
    },
  },
  lobbyPCVirtualDiet: {
    name: "lobbyPCVirtualDiet",
    category: "stats",
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
        ["day", "evening"].includes(currentTime) &&
        !singleTimeEvents.includes(this.name)
      );
    },
    upgrade: function ({ currentStats, singleTimeEvents }) {
      return {
        singleTimeEvents: [...singleTimeEvents, this.name],
        stats: {
          ...currentStats,
          [stats.Charm.name]: currentStats[stats.Charm.name] + 4,
        },
      };
    },
  },
};
