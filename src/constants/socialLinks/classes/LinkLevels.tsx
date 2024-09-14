import { upgradeResponse, Times } from "@/constants/events/types";
import { getCalulateFunction } from "./calculationFunctions";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { StatsNames, stats } from "@/constants/stats";
import { EventCard } from "@/components";

import {
  SpendingTimeObject,
  createBondObject,
  ChooseAnyObject,
  SpendingTime,
} from "./GenericCard";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  SocialLinkStats,
  SocialLinkLevel,
  SocialLinkType,
  LevelsType,
  Routes,
} from "../types";

export abstract class LinkLevels {
  abstract levels: LevelsType;

  abstract calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ): upgradeResponse;

  abstract element(
    socialLink: SocialLinkType,
    props: SocialLinkElementProps,
    route: Routes
  ): React.ReactNode;

  abstract isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps,
    route: Routes
  ): boolean;
}

export class EmptyLevels extends LinkLevels {
  levels: LevelsType = {};

  calculate() {
    return {};
  }

  element() {
    return null;
  }

  isAvailable() {
    return false;
  }
}

export abstract class LinkMainLevels extends LinkLevels {
  element(
    socialLink: SocialLinkType,
    props: SocialLinkElementProps,
    route: Routes = Routes.Platonic
  ): React.ReactNode {
    if (!props.previousDay) return null;
    const linkName = socialLink.linkName;
    const charmLevel = stats[StatsNames.Charm].levels[5].value;
    const previousLevel = props.previousDay.links[linkName] as SocialLinkStats;
    const headPostfix = route === Routes.Romantic ? " (Romantic)" : "";
    const isNewLevel = socialLink.isNewLevel(previousLevel);
    const level = socialLink.getLevel({
      ...previousLevel,
      romance: route,
    }) as SocialLinkLevel;

    const Card = () => {
      if (!props.fullCard) return null;
      if (isNewLevel) return level.element({ key: linkName });
      return SpendingTime();
    };

    return (
      <div>
        <EventCard
          charm={
            props.fullCard &&
            props.currentDay?.stats &&
            props.currentDay.stats[StatsNames.Charm] >= charmLevel
          }
          multiplier={
            props.fullCard
              ? props.currentDay.links &&
                props.currentDay.links[linkName].multiplier
              : undefined
          }
          card={props.fullCard && props.currentDay.arcanes.includes(linkName)}
          place={socialLink.linkDetails.place}
          name={socialLink.linkDetails.name}
          head={`${linkName}${headPostfix}`}
        />
        <Card />
      </div>
    );
  }

  calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ) {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);
    const previousLevel = socialLink.getLevel(previousLink);
    const maxPoints = isNewLevel ? previousLevel.maxPoints : [10];

    return getCalulateFunction(
      1.51,
      isNewLevel,
      maxPoints,
      socialLink,
      props,
      route
    );
  }
}

export abstract class LinkMainLevelsEpisodes extends LinkMainLevels {
  levels: LevelsType = {
    5: {
      [Routes.Platonic]: ChooseAnyObject,
    },
  };
}

export class LinkMainLevelsChooseAny extends LinkMainLevels {
  isAvailable(
    _socialLink: SocialLinkType,
    _props: SocialLinkAvailableProps,
    _route: Routes
  ): boolean {
    return false;
  }

  calculate(socialLink: SocialLinkType, props: SocialLinkAvailableProps) {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];

    return {
      links: {
        ...props.currentDay.links,
        [linkName]: { ...previousLink, level: previousLink.level + 1 },
      },
    };
  }

  levels: LevelsType = {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    10: {
      [Routes.Platonic]: ChooseAnyObject,
    },
  };
}

export abstract class InvitationLevels extends LinkLevels {
  abstract dates: number[];

  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps,
    route: Routes
  ): boolean {
    const linkName = socialLink.linkName;

    return (
      props.currentDay.links[linkName].level in this.levels &&
      props.previousDay!.links[linkName].romance === route &&
      this.dates.includes(props.currentDay.date.getTime()) &&
      props.time === Times.Day
    );
  }

  calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ) {
    return getCalulateFunction(1.51, false, [30], socialLink, props, route);
  }

  element(
    socialLink: SocialLinkType,
    props: SocialLinkElementProps
  ): React.ReactNode {
    if (!props.previousDay) return null;
    const linkName = socialLink.linkName;
    const charmLevel = stats[StatsNames.Charm].levels[5].value;
    const currentLevel = props.currentDay.links[linkName] as SocialLinkStats;
    const level = this.levels[currentLevel.level][
      currentLevel.romance
    ] as SocialLinkLevel;

    return (
      <div>
        <EventCard
          charm={
            props.fullCard &&
            props.currentDay?.stats &&
            props.currentDay.stats[StatsNames.Charm] >= charmLevel
          }
          multiplier={
            props.fullCard
              ? props.currentDay.links &&
                props.currentDay.links[linkName].multiplier
              : undefined
          }
          card={props.fullCard && props.currentDay.arcanes.includes(linkName)}
          name={socialLink.linkDetails.name}
          head={`${linkName} (Invitation)`}
        />
        {props.fullCard && level.element({ key: linkName })}
      </div>
    );
  }
}

export class ShrineLevels extends LinkLevels {
  levels: LevelsType = {
    0: {
      [Routes.Platonic]: SpendingTimeObject,
    },
  };

  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps,
    route: Routes
  ): boolean {
    const linkName = socialLink.linkName;

    return (
      !socialLink.isNewLevel(props.previousDay!.links[linkName]) &&
      props.previousDay!.links[linkName].romance === route &&
      props.previousDay!.links[linkName].level > 0 &&
      props.time === Times.Day
    );
  }

  calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ) {
    return getCalulateFunction(1.51, false, [10], socialLink, props, route);
  }

  element(socialLink: SocialLinkType, props: SocialLinkElementProps) {
    if (!props.previousDay) return null;
    const linkName = socialLink.linkName;
    const charmLevel = stats[StatsNames.Charm].levels[5].value;

    return (
      <div>
        <EventCard
          charm={
            props.fullCard &&
            props.currentDay?.stats &&
            props.currentDay.stats[StatsNames.Charm] >= charmLevel
          }
          multiplier={
            props.fullCard
              ? props.currentDay.links &&
                props.currentDay.links[linkName].multiplier
              : undefined
          }
          card={props.fullCard && props.currentDay.arcanes.includes(linkName)}
          head={`${linkName} (Naganaki shrine)`}
          name={socialLink.linkDetails.name}
          place="Naganaki shrine"
        />
      </div>
    );
  }
}
