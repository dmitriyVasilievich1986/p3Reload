import { StatsRepresentation, StatsNames } from "@/constants/stats";
import { AvailabilityType } from "@/constants/availability/types";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
} from "@/constants/socialLinks/types";

import { EventCard, WideEvent } from "@/components";

import {
  upgradeResponse,
  allEventsNames,
  Categories,
  eventProps,
  Times,
  Event,
} from "./types";
import React from "react";

export class EventClass implements Event {
  availability: AvailabilityType;
  category: Categories;
  name: allEventsNames;
  time: Times;

  stats: (StatsRepresentation | string)[];
  special?: boolean;
  place?: string;
  price?: number;
  wide?: boolean;

  constructor(props: eventProps) {
    this.availability = props.availability;
    this.stats = props.stats ?? [];
    this.category = props.category;
    this.special = props.special;
    this.place = props.place;
    this.price = props.price;
    this.time = props.time;
    this.name = props.name;
    this.wide = props.wide;

    this.available = this.available.bind(this);
    this.upgrade = this.upgrade.bind(this);
    this.label = this.label.bind(this);
  }

  available(props: SocialLinkAvailableProps): boolean {
    return this.availability.available.bind(this.availability)(props);
  }

  upgrade(props: SocialLinkAvailableProps): upgradeResponse {
    const newStats: { [key in StatsNames]?: number } = {};

    this.stats
      .filter((s) => s instanceof StatsRepresentation)
      .forEach((s) => {
        newStats[s.name] = props.currentDay.stats[s.name] + s.value;
      });

    return {
      stats: {
        ...props.currentDay.stats,
        ...newStats,
      },
    };
  }

  label(_props: SocialLinkElementProps) {
    const statsRepresentation = this.stats
      .map((s) => (typeof s === "string" ? s : s.toString()))
      .join(" | ");

    const Wrapper = this.wide ? WideEvent : React.Fragment;

    return (
      <Wrapper>
        <EventCard
          stats={statsRepresentation}
          price={this.price}
          place={this.place}
          head={this.name}
        />
      </Wrapper>
    );
  }
}
