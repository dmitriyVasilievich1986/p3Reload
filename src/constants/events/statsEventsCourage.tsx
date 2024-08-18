import { statsEventsCourageNames, Categories, Times, Event } from "./types";
import { EventCard, Question, Answer } from "@/components";
import { SingleDay } from "../calendar/SingleDay";
import { StatsNames } from "../stats/types";
import { DaysNames } from "../monthsNames";

const getCourageUpgradeFunction = (value: number) => {
  return function (currentDay: SingleDay) {
    return {
      stats: {
        ...currentDay.stats,
        [StatsNames.Courage]: currentDay.stats[StatsNames.Courage] + value,
      },
    };
  };
};

export const statsEventsCourage: {
  [key in statsEventsCourageNames]: Event;
} = {
  [statsEventsCourageNames.drinkMedicine]: {
    name: statsEventsCourageNames.drinkMedicine,
    category: Categories.Special,
    time: Times.AfterSchool,
    special: true,
    label: function () {
      return (
        <EventCard head={this.name} place="Nurse's Office" stats="Courage +2" />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.friday];
      return time === Times.Day && days.includes(currentDay.date.getDay());
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  [statsEventsCourageNames.sleepDuringClass]: {
    name: statsEventsCourageNames.sleepDuringClass,
    category: Categories.Stats,
    time: Times.Morning,
    label: function () {
      return <EventCard head={this.name} stats="Courage +2" />;
    },
    available: function ({ time }) {
      return time === Times.Morning;
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  [statsEventsCourageNames.Mandragora]: {
    name: statsEventsCourageNames.Mandragora,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Paulownia Mall"
          stats="Courage +2"
          price={800}
        />
      );
    },
    available: function ({ currentDay, time }) {
      return (
        [Times.Day, Times.Evening].includes(time) &&
        currentDay.date.getDay() !== DaysNames.sunday
      );
    },
    upgrade: getCourageUpgradeFunction(2),
  },
  [statsEventsCourageNames.wilduckBurgeMysteryBurger]: {
    name: statsEventsCourageNames.wilduckBurgeMysteryBurger,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Iwatodai Strip Mall"
          stats="Courage +3"
          price={1000}
        />
      );
    },
    available: function ({ currentDay, time }) {
      return (
        [Times.Day, Times.Evening].includes(time) &&
        currentDay.date.getDay() !== DaysNames.thursday
      );
    },
    upgrade: getCourageUpgradeFunction(3),
  },
  [statsEventsCourageNames.gameParadeCourage]: {
    name: statsEventsCourageNames.gameParadeCourage,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Paulownia Mall"
          stats="Courage +4"
          price={3000}
        />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.friday];
      return (
        [Times.Day, Times.Evening].includes(time) &&
        days.includes(currentDay.date.getDay())
      );
    },
    upgrade: getCourageUpgradeFunction(4),
  },
  [statsEventsCourageNames.wilduckBurgeWeekendWilduckSet]: {
    name: statsEventsCourageNames.wilduckBurgeWeekendWilduckSet,
    category: Categories.Stats,
    time: Times.Evening,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Iwatodai Strip Mall"
          stats="Courage +4"
          price={1200}
        />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [DaysNames.saturday, DaysNames.sunday];
      return (
        currentDay.singleTimeEvents.includes(
          statsEventsCourageNames.wilduckBigEaterChallenge
        ) &&
        [Times.Day, Times.Evening].includes(time) &&
        days.includes(currentDay.date.getDay())
      );
    },
    upgrade: getCourageUpgradeFunction(4),
  },
  [statsEventsCourageNames.cinemaTheaterCourage]: {
    name: statsEventsCourageNames.cinemaTheaterCourage,
    category: Categories.Stats,
    time: Times.Day,
    label: function () {
      return (
        <EventCard
          head={this.name}
          place="Port Island Station"
          stats="Courage +4"
          price={1500}
        />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [DaysNames.monday, DaysNames.thursday];
      return days.includes(currentDay.date.getDay()) && time === Times.Day;
    },
    upgrade: getCourageUpgradeFunction(4),
  },
  [statsEventsCourageNames.wilduckBigEaterChallenge]: {
    name: statsEventsCourageNames.wilduckBigEaterChallenge,
    category: Categories.Stats,
    time: Times.Evening,
    label: function ({ fullCard }) {
      const RightAnswers = () => {
        if (!fullCard) {
          return null;
        }
        return (
          <div>
            <Question label="No matter how much I eat, the amount of burgers doesn't seem to decrease...">
              <Answer label="Focus on single burger" />
              <Answer label="Look away from the burgers" points={15} />
              <Answer label="Glance at the pile of burgers" />
            </Question>
            <Question label="I feel like I'm making progress, but I shouldn't get ahead of myself...">
              <Answer label="Eat without stopping" points={15} />
              <Answer label="Take breaks in between bites" />
              <Answer label="Wash it down with soda " />
            </Question>
            <Question label="It's the final stretch... How can I keep this up and complete the chalenge...?">
              <Answer label="Savor the flavors" />
              <Answer label="Imagine something sour" points={15} />
              <Answer label="Chew properly and slowly" />
            </Question>
          </div>
        );
      };
      return (
        <div>
          <EventCard
            head={this.name}
            stats="Academics +4 | Courage +4 | Charm +4"
            place="Iwatodai Strip Mall"
            price={1800}
          />
          <RightAnswers />
        </div>
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 10).getTime() &&
        !previousDay.singleTimeEvents.includes(this.name) &&
        previousDay.stats[StatsNames.Courage] >= 45 &&
        time === Times.Evening
      );
    },
    upgrade: function (currentDay: SingleDay) {
      return {
        singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
        stats: {
          [StatsNames.Academics]: currentDay.stats[StatsNames.Academics] + 4,
          [StatsNames.Courage]: currentDay.stats[StatsNames.Courage] + 4,
          [StatsNames.Charm]: currentDay.stats[StatsNames.Charm] + 4,
        },
      };
    },
  },
};
