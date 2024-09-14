import { upgradeResponse, Times } from "@/constants/events/types";
import { CardNeededCalculator } from "./calculationFunctions";
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
  SocialLinkNames,
  LinkDetailsType,
  SocialLinkType,
  LevelsType,
  Routes,
} from "./types";

const urlParams = new URLSearchParams(window.location.search);
export const mainCharName: string =
  urlParams.get("mainCharName") || "Protagonist";

function getCalulateFunction(
  maxMultiplier: number,
  isNewLevel: boolean,
  maxPoints: number[],
  socialLink: SocialLinkType,
  props: SocialLinkAvailableProps & {
    previousWeek?: SingleDay;
  },
  route: Routes = Routes.Platonic
) {
  const linkName = socialLink.linkName;
  const previousLink = props.previousDay!.links[linkName];
  const currentLink = props.currentDay.links[linkName];
  const charmMax = stats[StatsNames.Charm].levels[5].value;

  const level = isNewLevel ? previousLink.level + 1 : previousLink.level;
  let points = isNewLevel ? 0 : currentLink.points;

  const examMultiplier = previousLink.multiplier === 1 ? 1 : maxMultiplier;
  const cardMultiplier = maxMultiplier;
  const maxCharmMultiplier =
    props.currentDay.stats[StatsNames.Charm] >= charmMax ? maxMultiplier : 1;

  let multiplier = examMultiplier * maxCharmMultiplier;

  const newLevel = socialLink.getLevel({
    ...previousLink,
    romance: route,
    level,
  });

  const cardNeeded = new CardNeededCalculator({
    nextLevelPoints: newLevel.points - points,
    cardMultiplier: cardMultiplier,
    multiplier,
    maxPoints,
  });

  if (props.currentDay.arcanes.includes(linkName)) {
    multiplier *= cardMultiplier;
  } else if (cardNeeded.isCardNeeded()) {
    multiplier *= cardMultiplier;
    props.currentDay.arcanes.push(linkName);
  }

  points += CardNeededCalculator.maxPointsSum(maxPoints, multiplier);

  return {
    links: {
      ...props.currentDay.links,
      [linkName]: {
        ...previousLink,
        romance: route,
        points,
        level,
      },
    },
  };
}

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

class EmptyLevels extends LinkLevels {
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

export class SocialLink implements SocialLinkType {
  linkDetails: LinkDetailsType;
  linkName: SocialLinkNames;
  maxLevel: number;

  shrineLevels: LinkLevels;
  invitations: LinkLevels;
  mainLevels: LinkLevels;

  constructor(
    linkName: SocialLinkNames,
    linkDetails: LinkDetailsType,
    levels: {
      shrineLevels?: LinkLevels;
      invitations?: LinkLevels;
      mainLevels: LinkLevels;
    }
  ) {
    this.maxLevel = Math.max(
      ...Object.keys(levels.mainLevels.levels).map((k) => Number(k))
    );
    this.shrineLevels = levels?.shrineLevels || new ShrineLevels();
    this.invitations = levels?.invitations || new EmptyLevels();
    this.mainLevels = levels.mainLevels;
    this.linkDetails = linkDetails;
    this.linkName = linkName;
  }

  getLevels(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes = Routes.Platonic
  ): LinkLevels {
    if (this.invitations.isAvailable(this, props, route))
      return this.invitations;
    if (this.shrineLevels.isAvailable(this, props, route))
      return this.shrineLevels;
    return this.mainLevels;
  }

  getLevel({ romance, level }: SocialLinkStats) {
    return this.mainLevels.levels[level][romance] as SocialLinkLevel;
  }

  isNewLevel(thisLink: SocialLinkStats) {
    const currentLevel = this.getLevel(thisLink);
    return (
      thisLink.level < this.maxLevel && thisLink.points >= currentLevel.points
    );
  }

  isAvailable(props: SocialLinkAvailableProps, route: Routes): boolean {
    if (!props.previousDay) return false;

    return (
      this.shrineLevels.isAvailable(this, props, route) ||
      this.invitations.isAvailable(this, props, route) ||
      this.mainLevels.isAvailable(this, props, route)
    );
  }

  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes = Routes.Platonic
  ) {
    return this.getLevels(props, route).calculate(this, props, route);
  }

  element(props: SocialLinkElementProps, route: Routes = Routes.Platonic) {
    if (!props.previousDay) return null;
    return this.getLevels(props, route).element(this, props, route);
  }
}

export class SocialLinkAlwaysLevelUp extends SocialLink {
  constructor(
    linkName: SocialLinkNames,
    linkDetails: LinkDetailsType,
    levels?: { mainLevels?: LinkLevels }
  ) {
    super(linkName, linkDetails, {
      mainLevels: levels?.mainLevels ?? new LinkMainLevelsChooseAny(),
      shrineLevels: new EmptyLevels(),
      invitations: new EmptyLevels(),
    });
  }

  getLevel({ level }: SocialLinkStats) {
    if (level === 0)
      return this.mainLevels.levels[0].Platonic as SocialLinkLevel;
    return this.mainLevels.levels[10].Platonic as SocialLinkLevel;
  }
}

export class SocialLinkEpisodes extends SocialLink {
  getLevel() {
    return this.mainLevels.levels[5][Routes.Platonic] as SocialLinkLevel;
  }
}
