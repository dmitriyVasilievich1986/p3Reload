import { pcProgramsNames, Categories, Times, Event } from "./types";
import { StatsNames, stats } from "../stats";
import { EventCard } from "@/components";

const pcProgramBase: Event = {
  name: pcProgramsNames.lobbyPCLanguageMadeEasy,
  category: Categories.Stats,
  time: Times.Evening,
  label: function () {
    return (
      <EventCard
        head={this.name}
        stats="Academics +4"
        place="Dorm"
        price={1200}
      />
    );
  },
  available: function ({ previousDay, currentDay, time }) {
    if (previousDay === undefined) return false;
    const timeAvailable =
      time === Times.Evening || (time === Times.Day && !!currentDay.isDayOff);
    return (
      currentDay.date.getTime() >= new Date(2009, 3, 29).getTime() &&
      !previousDay.singleTimeEvents.includes(this.name) &&
      timeAvailable
    );
  },
  upgrade: function ({ currentDay }) {
    return {
      singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      stats: {
        ...currentDay.stats,
        [StatsNames.Academics]: currentDay.stats[StatsNames.Academics] + 4,
      },
    };
  },
};

export const pcPrograms: { [key in pcProgramsNames]: Event } = {
  [pcProgramsNames.lobbyPCLanguageMadeEasy]: pcProgramBase,
  [pcProgramsNames.lobbyPCSchoolXSiteNote]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCSchoolXSiteNote,
    label: function () {
      return (
        <EventCard
          stats="Lukewarm Taiyaki available"
          head={this.name}
          place="Dorm"
          price={500}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const timeAvailable =
        time === Times.Evening || (time === Times.Day && !!currentDay.isDayOff);
      const isCourage =
        previousDay.stats[StatsNames.Courage] >=
        stats[StatsNames.Courage].levels[1].value;
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 29).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        timeAvailable &&
        isCourage
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      };
    },
  },
  [pcProgramsNames.lobbyPCIwatodaiForumNote]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCIwatodaiForumNote,
    label: function () {
      return (
        <EventCard
          stats="More drinks in Iwatodai vending machine"
          head={this.name}
          place="Dorm"
          price={500}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const timeAvailable =
        time === Times.Evening || (time === Times.Day && !!currentDay.isDayOff);
      const isCourage =
        previousDay.stats[StatsNames.Courage] >=
        stats[StatsNames.Courage].levels[1].value;
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 29).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        timeAvailable &&
        isCourage
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      };
    },
  },
  [pcProgramsNames.lobbyPCUmiushiFanBook]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCUmiushiFanBook,
    label: function () {
      return (
        <EventCard
          stats="Access to Umiushi Beef Bowls"
          head={this.name}
          place="Dorm"
          price={450}
        />
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      };
    },
  },
  [pcProgramsNames.lobbyPCMindfulBootCamp]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCMindfulBootCamp,
    label: function () {
      return (
        <EventCard
          stats="Max SP Boost"
          head={this.name}
          price={2_000}
          place="Dorm"
        />
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      };
    },
  },
  [pcProgramsNames.lobbyPCMuscleBootCamp]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCMuscleBootCamp,
    label: function () {
      return (
        <EventCard
          stats="Max HP Boost"
          head={this.name}
          price={2_000}
          place="Dorm"
        />
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      };
    },
  },
  [pcProgramsNames.lobbyPCDigitalCramSchool]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCDigitalCramSchool,
    label: function () {
      return <EventCard head={this.name} stats="Academics +4" place="Dorm" />;
    },
  },
  [pcProgramsNames.ninjaFansiteNote]: {
    ...pcProgramBase,
    name: pcProgramsNames.ninjaFansiteNote,
    label: function () {
      return <EventCard head={this.name} price={12_000} place="Dorm" />;
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const timeAvailable =
        time === Times.Evening || (time === Times.Day && !!currentDay.isDayOff);
      return (
        currentDay.date.getTime() >= new Date(2009, 10, 5).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        timeAvailable
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      };
    },
  },
  [pcProgramsNames.lobbyPCAnimalOthello]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCAnimalOthello,
    label: function () {
      return (
        <EventCard
          head={this.name}
          stats="Courage +4"
          place="Dorm"
          price={1200}
        />
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
        stats: {
          ...currentDay.stats,
          [StatsNames.Courage]: currentDay.stats[StatsNames.Courage] + 4,
        },
      };
    },
  },
  [pcProgramsNames.lobbyPCTypinGhoul]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCTypinGhoul,
    label: function () {
      return (
        <EventCard
          head={this.name}
          stats="Courage +4"
          place="Dorm"
          price={1200}
        />
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
        stats: {
          ...currentDay.stats,
          [StatsNames.Courage]: currentDay.stats[StatsNames.Courage] + 4,
        },
      };
    },
  },
  [pcProgramsNames.lobbyPCLessonsInEtiquette]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCLessonsInEtiquette,
    label: function () {
      return (
        <EventCard
          head={this.name}
          stats="Charm +4"
          place="Dorm"
          price={1200}
        />
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
        stats: {
          ...currentDay.stats,
          [StatsNames.Charm]: currentDay.stats[StatsNames.Charm] + 4,
        },
      };
    },
  },
  [pcProgramsNames.lobbyPCVirtualDiet]: {
    ...pcProgramBase,
    name: pcProgramsNames.lobbyPCVirtualDiet,
    label: function () {
      return (
        <EventCard
          head={this.name}
          stats="Charm +4"
          place="Dorm"
          price={1200}
        />
      );
    },
    upgrade: function ({ currentDay }) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
        stats: {
          ...currentDay.stats,
          [StatsNames.Charm]: currentDay.stats[StatsNames.Charm] + 4,
        },
      };
    },
  },
};
