import { statsEventsAcademicsNames, Categories, Times, Event } from "./types";
import { EventCard, WideEvent } from "@/components";
import { SingleDay } from "../calendar/SingleDay";
import { StatsNames, stats } from "../stats";
import { DaysNames } from "../monthsNames";

const getAcademicsUpgradeFunction = (value: number) => {
  return function ({ currentDay }: { currentDay: SingleDay }) {
    return {
      stats: {
        ...currentDay.stats,
        [StatsNames.Academics]: currentDay.stats[StatsNames.Academics] + value,
      },
    };
  };
};

export const statsEventsAcademics: {
  [key in statsEventsAcademicsNames]: Event;
} = {
  [statsEventsAcademicsNames.stayAwakeInClass]: {
    name: statsEventsAcademicsNames.stayAwakeInClass,
    category: Categories.Stats,
    time: Times.Morning,
    label: function () {
      return <EventCard head={this.name} stats="Academics +2" />;
    },
    available: function ({ previousDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Academics] >=
          stats[StatsNames.Academics].levels[5].value
      )
        return false;
      return time === Times.Morning;
    },
    upgrade: getAcademicsUpgradeFunction(2),
  },
  [statsEventsAcademicsNames.studyAtHome]: {
    name: statsEventsAcademicsNames.studyAtHome,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard head={this.name} stats="Academics +2" place="Your Room" />
      );
    },
    available: function ({ previousDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Academics] >=
          stats[StatsNames.Academics].levels[5].value
      )
        return false;
      return time === Times.Evening;
    },
    upgrade: getAcademicsUpgradeFunction(2),
  },
  [statsEventsAcademicsNames.studyAtLibrary]: {
    name: statsEventsAcademicsNames.studyAtLibrary,
    category: Categories.Stats,
    time: Times.Day,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Gekkoukan High School"
          stats="Academics +2"
        />
      );
    },
    available: function ({ previousDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Academics] >=
          stats[StatsNames.Academics].levels[5].value
      )
        return false;
      return time === Times.Day;
    },
    upgrade: getAcademicsUpgradeFunction(2),
  },
  [statsEventsAcademicsNames.summerSchool]: {
    name: statsEventsAcademicsNames.summerSchool,
    category: Categories.Stats,
    time: Times.WholeDay,
    special: true,
    label: function () {
      return (
        <WideEvent>
          <EventCard
            head={this.name}
            place="Gekkoukan High School"
            stats="Academics +3"
          />
        </WideEvent>
      );
    },
    available: function () {
      return false;
    },
    upgrade: getAcademicsUpgradeFunction(3),
  },
  [statsEventsAcademicsNames.wakatsuKitchen]: {
    name: statsEventsAcademicsNames.wakatsuKitchen,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Iwatodai Strip Mall"
          stats="Academics +3"
          price={680}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Academics] >=
          stats[StatsNames.Academics].levels[5].value
      )
        return false;
      const days = [
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
        DaysNames.sunday,
      ];
      return (
        [Times.Day, Times.Evening].includes(time) &&
        days.includes(currentDay.date.getDay())
      );
    },
    upgrade: function ({ currentDay, time }) {
      const singleTimeEvents =
        !currentDay.singleTimeEvents.includes(
          statsEventsAcademicsNames.wakatsuKitchen
        ) && time === Times.Evening
          ? [
              ...currentDay.singleTimeEvents,
              statsEventsAcademicsNames.wakatsuKitchen,
            ]
          : currentDay.singleTimeEvents;

      return {
        singleTimeEvents,
        stats: {
          ...currentDay.stats,
          [StatsNames.Academics]: currentDay.stats[StatsNames.Academics] + 3,
        },
      };
    },
  },
  [statsEventsAcademicsNames.cinemaTheaterAcademics]: {
    name: statsEventsAcademicsNames.cinemaTheaterAcademics,
    category: Categories.Stats,
    time: Times.Day,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Port Island Station"
          stats="Academics +4"
          price={1500}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Academics] >=
          stats[StatsNames.Academics].levels[5].value
      )
        return false;
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return time === Times.Day && days.includes(currentDay.date.getDay());
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.wakatsuKitchenSpecial]: {
    name: statsEventsAcademicsNames.wakatsuKitchenSpecial,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Iwatodai Strip Mall"
          stats="Academics +4"
          price={900}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Academics] >=
          stats[StatsNames.Academics].levels[5].value
      )
        return false;
      const days = [
        DaysNames.monday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.sunday,
      ];
      const charmLevel = stats[StatsNames.Charm].levels[2].value;
      return (
        previousDay.singleTimeEvents.includes(
          statsEventsAcademicsNames.wakatsuKitchen
        ) &&
        previousDay.stats[StatsNames.Charm] >= charmLevel &&
        days.includes(currentDay.date.getDay()) &&
        time == Times.Evening
      );
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.gameParadeAcademics]: {
    name: statsEventsAcademicsNames.gameParadeAcademics,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Paulownia Mall"
          stats="Academics +4"
          price={3000}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Academics] >=
          stats[StatsNames.Academics].levels[5].value
      )
        return false;
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return (
        [Times.Day, Times.Evening].includes(time) &&
        days.includes(currentDay.date.getDay())
      );
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.dormExamStudyingGroup]: {
    name: statsEventsAcademicsNames.dormExamStudyingGroup,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return <EventCard head={this.name} stats="Academics +4" place="Dorm" />;
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Academics] >=
          stats[StatsNames.Academics].levels[5].value
      )
        return false;
      const dates = [
        new Date(2009, 4, 15).getTime(),
        new Date(2009, 4, 16).getTime(),
        new Date(2009, 6, 9).getTime(),
        new Date(2009, 6, 10).getTime(),
        new Date(2009, 9, 8).getTime(),
        new Date(2009, 9, 9).getTime(),
        new Date(2009, 9, 11).getTime(),
      ];
      return (
        dates.includes(currentDay.date.getTime()) && time === Times.Evening
      );
    },
    upgrade: getAcademicsUpgradeFunction(4),
  },
  [statsEventsAcademicsNames.dormExamStudyingTeam]: {
    name: statsEventsAcademicsNames.dormExamStudyingTeam,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return <EventCard head={this.name} stats="Academics +5" place="Dorm" />;
    },
    available: function ({ previousDay, currentDay, time }) {
      if (
        !previousDay ||
        previousDay.stats[StatsNames.Academics] >=
          stats[StatsNames.Academics].levels[5].value
      )
        return false;
      const dates = [
        new Date(2009, 4, 17).getTime(),
        new Date(2009, 6, 13).getTime(),
        new Date(2009, 9, 12).getTime(),
      ];
      return (
        dates.includes(currentDay.date.getTime()) && time === Times.Evening
      );
    },
    upgrade: getAcademicsUpgradeFunction(5),
  },
};
