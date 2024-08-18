import { CardNeededCalculator } from "./calculationFunctions";
import { SingleDay } from "../calendar/SingleDay";
import { StatsNames } from "../stats/types";

import {
  SocialLinkStats,
  SocialLinkLevel,
  SocialLinkNames,
  InvitationsType,
  LinkDetailsType,
  LevelsType,
} from "./types";

const urlParams = new URLSearchParams(window.location.search);
export const mainCharName: string =
  urlParams.get("mainCharName") || "Protagonist";

export class SocialLink {
  readonly invitations?: InvitationsType;
  readonly linkDetails: LinkDetailsType;
  readonly linkName: SocialLinkNames;
  readonly levels: LevelsType;

  readonly maxLevel: number = 10;

  constructor(
    linkName: SocialLinkNames,
    linkDetails: LinkDetailsType,
    levels: LevelsType,
    invitations?: InvitationsType,
    maxLevel?: number
  ) {
    this.maxLevel = maxLevel || this.maxLevel;
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

  calculate(props: {
    currentDay: SingleDay;
    level: number;
    points: number;
    maxPoints?: number[];
    cardMultiplier: number;
    examMultiplier: number;
    maxCharmMultiplier: number;
  }) {
    const thisLink = props.currentDay.links[this.linkName];
    const currentLevel = this.getLevel(thisLink);
    const maxPoints = props.maxPoints || currentLevel.maxPoints;
    let points = props.points;

    let multiplier = props.examMultiplier;
    const newLevel = this.getLevel({
      ...thisLink,
      level: props.level,
      romance: thisLink.romance,
    });
    if (props.currentDay.stats[StatsNames.Charm] >= 100)
      multiplier *= props.maxCharmMultiplier;

    const cardNeeded = new CardNeededCalculator({
      nextLevelPoints: newLevel.points - points,
      cardMultiplier: props.cardMultiplier,
      multiplier,
      maxPoints,
    });

    if (props.currentDay.arcanes.includes(this.linkName)) {
      multiplier *= props.cardMultiplier;
    } else if (cardNeeded.isCardNeeded()) {
      multiplier *= props.cardMultiplier;
      props.currentDay.arcanes.push(this.linkName);
    }

    points += CardNeededCalculator.maxPointsSum(maxPoints, multiplier);

    return {
      links: {
        ...props.currentDay.links,
        [this.linkName]: {
          ...thisLink,
          level: props.level,
          points,
        },
      },
    };
  }
}

export class SocialLinkAlwaysLevelUp extends SocialLink {
  getLevel({ level }: SocialLinkStats) {
    if (level === 10) return this.levels[10].Platonic as SocialLinkLevel;
    if (level === 0) return this.levels[0].Platonic as SocialLinkLevel;
    return this.levels[1].Platonic as SocialLinkLevel;
  }

  calculate({
    currentDay,
    level,
  }: {
    currentDay: SingleDay;
    level: number;
    points: number;
    maxPoints: number[];
    cardMultiplier: number;
    examMultiplier: number;
    maxCharmMultiplier: number;
  }) {
    const thisLink = currentDay.links[this.linkName];
    return {
      links: {
        ...currentDay.links,
        [this.linkName]: { ...thisLink, level },
      },
    };
  }
}
