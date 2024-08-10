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

export const mainCharName: string = "Protagonist";

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

  calculate(props: SingleDay) {
    const thisLink = props.links[this.linkName];
    const currentLevel = this.getLevel(thisLink);
    const isNewlevel = this.isNewLevel(thisLink);
    const level = isNewlevel ? thisLink.level + 1 : thisLink.level;
    let points;

    if (isNewlevel) {
      let multiplier = thisLink.multiplier;
      const newLevel = this.getLevel({
        ...thisLink,
        level,
        romance: thisLink.romance,
      });
      if (props.stats[StatsNames.Charm] >= 100) multiplier *= 1.51;

      const cardNeeded = new CardNeededCalculator({
        maxPoints: currentLevel.maxPoints,
        nextLevelPoints: newLevel.points,
        multiplier: multiplier,
      });

      if (props.arcanes.includes(this.linkName)) {
        multiplier *= 1.51;
      } else if (cardNeeded.isCardNeeded()) {
        multiplier *= 1.51;
        props.arcanes.push(this.linkName);
      }

      points = CardNeededCalculator.maxPointsSum(
        currentLevel.maxPoints,
        multiplier
      );
    } else {
      points = thisLink.points + 10;
    }

    return {
      links: {
        ...props.links,
        [this.linkName]: {
          ...thisLink,
          points,
          level,
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

  calculate(props: SingleDay) {
    const thisLink = props.links[this.linkName];
    const isNewlevel = thisLink.level < this.maxLevel;
    return {
      links: {
        ...props.links,
        [this.linkName]: {
          ...thisLink,
          level: isNewlevel ? thisLink.level + 1 : thisLink.level,
        },
      },
    };
  }
}
