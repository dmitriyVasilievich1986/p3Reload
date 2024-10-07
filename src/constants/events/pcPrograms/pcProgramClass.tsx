import { StatsRepresentation, StatsNames, stats } from "@/constants/stats";
import { SocialLinkAvailableProps } from "@/constants/socialLinks/types";

import { pcProgramsNames, Categories, Times, Event } from "../types";

import { EventCard } from "@/components";

export class pcProgram implements Event {
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

export class pcProgramSuspicious extends pcProgram {
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
