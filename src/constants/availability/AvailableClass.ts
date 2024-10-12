import { allEventsNames, Times } from "@/constants/events/types";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";

import {
  SocialLinkAvailableProps,
  SocialLinkType,
  Routes,
} from "@/constants/socialLinks/types";

import {
  AvailabilityProps,
  AvailableType,
  AvailabilityType,
  Operations,
} from "./types";

export abstract class Available<K> implements AvailableType<K> {
  abstract operation: Operations;
  reverse: boolean = false;

  constructor(props?: { reverse?: boolean }) {
    this.reverse = props?.reverse ?? false;
  }

  abstract getRight(props: AvailabilityProps, route?: Routes): K | K[];
  abstract getLeft(props: AvailabilityProps, route?: Routes): K;

  available(props: AvailabilityProps, route?: Routes): boolean {
    const right = this.getRight(props, route);
    const left = this.getLeft(props, route);
    let payload: boolean;

    switch (this.operation) {
      case Operations.Equal:
        payload = left === right;
        break;
      case Operations.Less:
        payload = left < right;
        break;
      case Operations.LessOrEqueal:
        payload = left <= right;
        break;
      case Operations.Greater:
        payload = left > right;
        break;
      case Operations.GreaterOrEqueal:
        payload = left >= right;
        break;
      case Operations.IsIn:
        payload = (right as Array<K>).includes(left);
        break;
    }

    return payload !== this.reverse;
  }
}

export class AvailableDateGreater extends Available<number> {
  operation: Operations = Operations.GreaterOrEqueal;
  date: Date;

  constructor(props: { date: Date; reverse?: boolean }) {
    super(props);
    this.date = props.date;
  }

  getLeft(props: AvailabilityProps) {
    return props.currentDay.date.getTime();
  }

  getRight() {
    return this.date.getTime();
  }
}

export class AvailableDateIsIn extends Available<number> {
  operation: Operations = Operations.IsIn;
  date: Date[];

  constructor(props: { date: Date[]; reverse?: boolean }) {
    super(props);
    this.date = props.date;

    this.getRight = this.getRight.bind(this);
  }

  getLeft(props: AvailabilityProps) {
    return props.currentDay.date.getTime();
  }

  getRight() {
    return this.date.map((date) => date.getTime());
  }
}

export class AvailableSingleTimeEventsIsIn extends Available<allEventsNames> {
  operation: Operations = Operations.IsIn;
  name: allEventsNames;

  constructor(props: { name: allEventsNames; reverse?: boolean }) {
    super(props);
    this.name = props.name;

    this.getLeft = this.getLeft.bind(this);
  }

  getLeft() {
    return this.name;
  }

  getRight(props: AvailabilityProps) {
    return props.previousDay.singleTimeEvents.map((name) => name);
  }
}

export class AvailableTimesIsIn extends Available<Times> {
  operation: Operations = Operations.IsIn;
  times: Times[];

  constructor(props: { times: Times[]; reverse?: boolean }) {
    super(props);
    this.times = props.times;

    this.getRight = this.getRight.bind(this);
  }

  getLeft(props: AvailabilityProps) {
    return props.time;
  }

  getRight() {
    return this.times;
  }
}

export class AvailableDaysNamesIsIn extends Available<DaysNames> {
  operation: Operations = Operations.IsIn;
  days: DaysNames[];

  constructor(props: { days: DaysNames[]; reverse?: boolean }) {
    super(props);
    this.days = props.days;

    this.getRight = this.getRight.bind(this);
  }

  getLeft(props: AvailabilityProps) {
    return props.currentDay.date.getDay();
  }

  getRight() {
    return this.days;
  }
}

export class AvailableLinkRouteEqual extends Available<Routes> {
  operation: Operations = Operations.Equal;

  constructor(props: { socialLink: SocialLinkType; reverse?: boolean }) {
    super(props);

    this.getLeft = this.getLeft.bind(props.socialLink);
  }

  getLeft(this: SocialLinkType, props: AvailabilityProps) {
    return props.previousDay.links[this.linkName].romance;
  }

  getRight(_props: AvailabilityProps, route?: Routes) {
    return route as Routes;
  }
}

export class AvailableLinkMaxLevel extends Available<number> {
  operation: Operations = Operations.GreaterOrEqueal;

  constructor(props: { socialLink: SocialLinkType; reverse?: boolean }) {
    super(props);

    this.getRight = this.getRight.bind(props.socialLink);
    this.getLeft = this.getLeft.bind(props.socialLink);
  }

  getLeft(this: SocialLinkType, props: AvailabilityProps) {
    return props.previousDay.links[this.linkName].level;
  }

  getRight(this: SocialLinkType) {
    return this.maxLevel;
  }
}

export class AvailableLinkLevelGreater extends Available<number> {
  operation: Operations = Operations.GreaterOrEqueal;
  level: number;

  constructor(props: {
    socialLink: SocialLinkType;
    level: number;
    reverse?: boolean;
  }) {
    super(props);
    this.level = props.level;

    this.getLeft = this.getLeft.bind(props.socialLink);
    this.getRight = this.getRight.bind(this);
  }

  getLeft(this: SocialLinkType, props: AvailabilityProps) {
    return props.previousDay.links[this.linkName].level;
  }

  getRight() {
    return this.level;
  }
}

export class AvailableLinkLevelEqual extends AvailableLinkLevelGreater {
  operation: Operations = Operations.Equal;
}

export class AvailableLinkLevelLess extends AvailableLinkLevelGreater {
  operation: Operations = Operations.Less;
}

export class AvailableLinkIsNewLevel extends Available<boolean> {
  operation: Operations = Operations.Equal;

  constructor(props: { socialLink: SocialLinkType; reverse?: boolean }) {
    super(props);

    this.getLeft = this.getLeft.bind(props.socialLink);
  }

  getLeft(this: SocialLinkType, props: SocialLinkAvailableProps) {
    const linkName = this.linkName;
    const previousLink = props.previousDay!.links[linkName];
    return this.isNewLevel(previousLink);
  }

  getRight() {
    return true;
  }
}

export class AvailableStatGreater extends Available<number> {
  operation: Operations = Operations.GreaterOrEqueal;
  name: StatsNames;
  level: number;

  constructor(props: { level: number; name: StatsNames; reverse?: boolean }) {
    super(props);
    this.name = props.name;
    this.level = props.level;

    this.getRight = this.getRight.bind(this);
  }

  getLeft(props: AvailabilityProps) {
    return props.previousDay.stats[this.name];
  }

  getRight() {
    return stats[this.name].levels[this.level].value;
  }
}

export class AvailableStatLess extends AvailableStatGreater {
  operation: Operations = Operations.Less;
}

export class AvailableIsDayOff extends Available<boolean> {
  operation: Operations = Operations.Equal;

  getLeft(props: AvailabilityProps) {
    return !!props.currentDay.isDayOff;
  }

  getRight() {
    return true;
  }
}

class AvailabilityArray implements AvailabilityType {
  availabilities: (Available<any> | AvailabilityArray)[];

  constructor(availabilities?: (Available<any> | AvailabilityArray)[]) {
    this.availabilities = availabilities ?? [];

    this.available = this.available.bind(this);
  }

  available(_props: SocialLinkAvailableProps, _route?: Routes) {
    return false;
  }
}

export class And_ extends AvailabilityArray {
  available(props: SocialLinkAvailableProps, route?: Routes) {
    if (props.previousDay === undefined) return false;

    return this.availabilities.every((a) =>
      a.available(
        {
          ...props,
          previousDay: props.previousDay as SingleDay,
        },
        route
      )
    );
  }
}

export class Or_ extends AvailabilityArray {
  available(props: SocialLinkAvailableProps, route: Routes) {
    if (props.previousDay === undefined) return false;

    return this.availabilities.some((a) =>
      a.available(
        {
          ...props,
          previousDay: props.previousDay as SingleDay,
        },
        route
      )
    );
  }
}

export class True_ extends AvailabilityArray {
  available() {
    return true;
  }
}
export class False_ extends AvailabilityArray {
  available() {
    return false;
  }
}
