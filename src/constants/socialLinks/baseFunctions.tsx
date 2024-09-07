import { CardNeededCalculator } from "./calculationFunctions";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { StatsNames, stats } from "@/constants/stats";
import { Times } from "@/constants/events/types";
import { EventCard } from "@/components";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  LabelHeadPrefixes,
  SocialLinkStats,
  SocialLinkLevel,
  SocialLinkNames,
  InvitationsType,
  LinkDetailsType,
  SocialLinkType,
  LevelsType,
  Routes,
} from "./types";

const urlParams = new URLSearchParams(window.location.search);
export const mainCharName: string =
  urlParams.get("mainCharName") || "Protagonist";

export abstract class SocialLink implements SocialLinkType {
  invitations?: InvitationsType;
  linkDetails: LinkDetailsType;
  linkName: SocialLinkNames;
  levels: LevelsType;
  maxLevel: number;

  constructor(
    linkName: SocialLinkNames,
    linkDetails: LinkDetailsType,
    levels: LevelsType,
    invitations?: InvitationsType
  ) {
    this.maxLevel = Math.max(...Object.keys(levels).map((k) => Number(k)));
    this.linkDetails = linkDetails;
    this.invitations = invitations;
    this.linkName = linkName;
    this.levels = levels;
  }

  getLevel({ romance, level }: SocialLinkStats) {
    return this.levels[level][romance] as SocialLinkLevel;
  }

  isNewLevel(thisLink: SocialLinkStats) {
    const currentLevel = this.getLevel(thisLink);
    return (
      thisLink.level < this.maxLevel && thisLink.points >= currentLevel.points
    );
  }

  abstract isLinkAvailable(
    props: SocialLinkAvailableProps,
    route: Routes
  ): boolean;

  abstract isInvitationAvailable(
    props: SocialLinkAvailableProps,
    route: Routes
  ): boolean;

  isShrineAvailable(props: SocialLinkAvailableProps, route: Routes): boolean {
    return (
      !this.isNewLevel(props.previousDay!.links[this.linkName]) &&
      props.previousDay!.links[this.linkName].romance === route &&
      props.previousDay!.links[this.linkName].level > 0 &&
      props.time === Times.Day
    );
  }

  isAvailable(props: SocialLinkAvailableProps, route: Routes): boolean {
    if (!props.previousDay) return false;
    else if (props.previousDay.links[this.linkName].level >= this.maxLevel)
      return false;

    return (
      this.isInvitationAvailable(props, route) ||
      this.isShrineAvailable(props, route) ||
      this.isLinkAvailable(props, route)
    );
  }

  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes = Routes.Platonic
  ) {
    const previousLink = props.previousDay!.links[this.linkName];
    const currentLink = props.currentDay.links[this.linkName];
    const charmMax = stats[StatsNames.Charm].levels[5].value;
    const isNewLevel = this.isNewLevel(previousLink);

    const previousLevel = this.getLevel(previousLink);
    let maxPoints = previousLevel.maxPoints;
    let level = previousLink.level + 1;
    let points = 0;

    let examMultiplier = previousLink.multiplier;
    let cardMultiplier = 1.51;
    let maxCharmMultiplier =
      props.currentDay.stats[StatsNames.Charm] >= charmMax ? 1.51 : 1;

    if (this.isInvitationAvailable(props, route)) {
      points = currentLink.points;
      level = currentLink.level;
      maxPoints = [30];
    } else if (!isNewLevel) {
      points = currentLink.points;
      level = currentLink.level;

      maxPoints = [10];

      if (!this.isShrineAvailable(props, route)) {
        maxCharmMultiplier = maxCharmMultiplier === 1 ? 1 : 1.31;
        examMultiplier = examMultiplier === 1 ? 1 : 1.31;
        cardMultiplier = 1.31;
      }
    }

    let multiplier = examMultiplier * maxCharmMultiplier;

    const newLevel = this.getLevel({
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

    if (props.currentDay.arcanes.includes(this.linkName)) {
      multiplier *= cardMultiplier;
    } else if (cardNeeded.isCardNeeded()) {
      multiplier *= cardMultiplier;
      props.currentDay.arcanes.push(this.linkName);
    }

    points += CardNeededCalculator.maxPointsSum(maxPoints, multiplier);

    return {
      links: {
        ...props.currentDay.links,
        [this.linkName]: {
          ...previousLink,
          romance: route,
          points,
          level,
        },
      },
    };
  }

  element(props: SocialLinkElementProps, route: Routes = Routes.Platonic) {
    if (!props.previousDay) return null;
    const charmLevel = stats[StatsNames.Charm].levels[5].value;
    const previousLevel = props.previousDay.links[
      this.linkName
    ] as SocialLinkStats;
    const currentLevel = props.currentDay.links[
      this.linkName
    ] as SocialLinkStats;

    const standard = [LabelHeadPrefixes.Default, LabelHeadPrefixes.Romance];
    let headPrefix: LabelHeadPrefixes = LabelHeadPrefixes.Default;
    if (this.isInvitationAvailable(props, route))
      headPrefix = LabelHeadPrefixes.Invitation;
    else if (this.isShrineAvailable(props, route))
      headPrefix = LabelHeadPrefixes.Shrine;
    else if (!this.isNewLevel(props.previousDay.links[this.linkName]))
      headPrefix = LabelHeadPrefixes.SpendTime;
    else if (route === Routes.Romantic) headPrefix = LabelHeadPrefixes.Romance;

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
                props.currentDay.links[this.linkName].multiplier
              : undefined
          }
          card={
            props.fullCard && props.currentDay.arcanes.includes(this.linkName)
          }
          name={this.linkDetails.name}
          head={`${this.linkName}${headPrefix}`}
          place={
            standard.includes(headPrefix) ? this.linkDetails.place : undefined
          }
        />
        {props.fullCard &&
          standard.includes(headPrefix) &&
          (
            this.getLevel({
              ...previousLevel,
              romance: route,
            }) as SocialLinkLevel
          ).element({
            key: this.linkName,
          })}
        {props.fullCard &&
          headPrefix === LabelHeadPrefixes.Invitation &&
          this.invitations![previousLevel.level][currentLevel.romance]}
      </div>
    );
  }
}

export abstract class SocialLinkAlwaysLevelUp extends SocialLink {
  getLevel({ level }: SocialLinkStats) {
    if (level === 0) return this.levels[0].Platonic as SocialLinkLevel;
    return this.levels[1].Platonic as SocialLinkLevel;
  }

  isInvitationAvailable(
    _props: SocialLinkAvailableProps,
    _route: Routes
  ): boolean {
    return false;
  }

  isShrineAvailable(_props: SocialLinkAvailableProps, _route: Routes): boolean {
    return false;
  }

  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    }
  ) {
    const previousLink = props.previousDay!.links[this.linkName];

    return {
      links: {
        ...props.previousDay!.links,
        [this.linkName]: { ...previousLink, level: previousLink.level + 1 },
      },
    };
  }

  element(props: SocialLinkElementProps) {
    if (!props.previousDay) return null;
    const level = props.previousDay.links[this.linkName] as SocialLinkStats;

    return (
      <div>
        <EventCard
          place={this.linkDetails.place}
          name={this.linkDetails.name}
          head={this.linkName}
        />
        {props.fullCard &&
          (this.getLevel(level) as SocialLinkLevel).element({
            key: this.linkName,
          })}
      </div>
    );
  }
}
