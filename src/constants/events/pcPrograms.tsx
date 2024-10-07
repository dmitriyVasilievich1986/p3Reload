import { pcProgramsNames, Categories, Times, Event } from "./types";
import { StatsRepresentation, StatsNames, stats } from "../stats";
import { SocialLinkAvailableProps } from "../socialLinks/types";

import { EventCard } from "@/components";

class pcProgram implements Event {
  category: Categories = Categories.Stats;
  time: Times = Times.Evening;

  name: pcProgramsNames;
  date: Date;

  stats?: StatsRepresentation | string;
  price?: number;

  constructor(props: {
    name: pcProgramsNames;
    stats?: StatsRepresentation | string;
    price?: number;
    date?: Date;
  }) {
    this.date = props.date ?? new Date(2009, 3, 29);
    this.stats = props.stats;
    this.price = props.price;
    this.name = props.name;

    this.available = this.available.bind(this);
    this.upgrade = this.upgrade.bind(this);
    this.label = this.label.bind(this);
  }

  available({ previousDay, currentDay, time }: SocialLinkAvailableProps) {
    if (previousDay === undefined) return false;

    const timeAvailable =
      time === Times.Evening || (time === Times.Day && !!currentDay.isDayOff);

    return (
      !previousDay.singleTimeEvents.includes(this.name) &&
      currentDay.date.getTime() >= this.date.getTime() &&
      timeAvailable
    );
  }

  upgrade({ currentDay }: SocialLinkAvailableProps) {
    let newStats = {};
    if (
      this.stats !== undefined &&
      typeof this.stats !== "string" &&
      this.stats.value !== undefined
    ) {
      newStats = {
        [this.stats.name]: currentDay.stats[this.stats.name] + this.stats.value,
      };
    }

    return {
      singleTimeEvents: [...currentDay.singleTimeEvents, this.name],
      stats: {
        ...currentDay.stats,
        ...newStats,
      },
    };
  }

  label() {
    const statsRepr =
      typeof this.stats === "string"
        ? this.stats
        : this.stats?.representation();

    return (
      <EventCard
        price={this.price}
        stats={statsRepr}
        head={this.name}
        place="Dorm"
      />
    );
  }
}

class pcProgramSuspicious extends pcProgram {
  available({ previousDay, currentDay, time }: SocialLinkAvailableProps) {
    if (previousDay === undefined) return false;

    const timeAvailable =
      time === Times.Evening || (time === Times.Day && !!currentDay.isDayOff);
    const isCourage =
      previousDay.stats[StatsNames.Courage] >=
      stats[StatsNames.Courage].levels[1].value;

    return (
      !previousDay.singleTimeEvents.includes(this.name) &&
      currentDay.date.getTime() >= this.date.getTime() &&
      timeAvailable &&
      isCourage
    );
  }
}

export const pcPrograms: { [key in pcProgramsNames]: Event } = {
  [pcProgramsNames.lobbyPCDigitalCramSchool]: new pcProgram({
    stats: new StatsRepresentation(StatsNames.Academics, 4),
    name: pcProgramsNames.lobbyPCDigitalCramSchool,
  }),
  [pcProgramsNames.lobbyPCLanguageMadeEasy]: new pcProgram({
    stats: new StatsRepresentation(StatsNames.Academics, 4),
    name: pcProgramsNames.lobbyPCLanguageMadeEasy,
    price: 1_200,
  }),
  [pcProgramsNames.lobbyPCAnimalOthello]: new pcProgram({
    stats: new StatsRepresentation(StatsNames.Courage, 4),
    name: pcProgramsNames.lobbyPCAnimalOthello,
    price: 1_200,
  }),
  [pcProgramsNames.lobbyPCTypinGhoul]: new pcProgram({
    stats: new StatsRepresentation(StatsNames.Courage, 4),
    name: pcProgramsNames.lobbyPCTypinGhoul,
    price: 1_200,
  }),
  [pcProgramsNames.lobbyPCLessonsInEtiquette]: new pcProgram({
    stats: new StatsRepresentation(StatsNames.Charm, 4),
    name: pcProgramsNames.lobbyPCLessonsInEtiquette,
    price: 1_200,
  }),
  [pcProgramsNames.lobbyPCVirtualDiet]: new pcProgram({
    stats: new StatsRepresentation(StatsNames.Charm, 4),
    name: pcProgramsNames.lobbyPCVirtualDiet,
    price: 1_200,
  }),
  [pcProgramsNames.lobbyPCMindfulBootCamp]: new pcProgram({
    name: pcProgramsNames.lobbyPCMindfulBootCamp,
    stats: "Max SP Boost",
    price: 2_000,
  }),
  [pcProgramsNames.lobbyPCMuscleBootCamp]: new pcProgram({
    name: pcProgramsNames.lobbyPCMuscleBootCamp,
    stats: "Max HP Boost",
    price: 2_000,
  }),
  [pcProgramsNames.lobbyPCUmiushiFanBook]: new pcProgram({
    name: pcProgramsNames.lobbyPCUmiushiFanBook,
    stats: "Access to Umiushi Beef Bowls",
    price: 450,
  }),
  [pcProgramsNames.lobbyPCSchoolXSiteNote]: new pcProgramSuspicious({
    name: pcProgramsNames.lobbyPCSchoolXSiteNote,
    stats: "Lukewarm Taiyaki available",
    price: 500,
  }),
  [pcProgramsNames.lobbyPCIwatodaiForumNote]: new pcProgramSuspicious({
    stats: "More drinks in Iwatodai vending machine",
    name: pcProgramsNames.lobbyPCIwatodaiForumNote,
    price: 500,
  }),
  [pcProgramsNames.ninjaFansiteNote]: new pcProgramSuspicious({
    stats: "Ambush requires 1 second of dashing ",
    name: pcProgramsNames.ninjaFansiteNote,
    date: new Date(2009, 10, 5),
    price: 12_000,
  }),
};
