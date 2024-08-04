import { singleDay } from "../calendar/types";
import { SpendingTime } from "./GenericCard";
import { StatsNames } from "../stats/types";

import { SocialLinkTypeBase, SocialLinkLevel, SocialLinkNames } from "./types";

export const mainCharName: string = "Protagonist";

function calculateMaxPoints(maxPoints: number[], multiplier: number): number {
  return maxPoints.reduce((a, b) => a + Math.floor(b * multiplier), 0);
}

export const baseSocialLinkCalculation: SocialLinkTypeBase = {
  name: SocialLinkNames.Aeon,
  invitations: [],
  maxLevel: 10,
  getlevel: function ({ level, romance }) {
    return this.levels[level][romance] as SocialLinkLevel;
  },
  _calculate: function (props: singleDay) {
    const thisLink = props.links[this.name];
    const currentLevel = this.getlevel(thisLink);
    const isNewlevel =
      thisLink.level < this.maxLevel && thisLink.points >= currentLevel.points;
    const level = isNewlevel ? thisLink.level + 1 : thisLink.level;
    let points;

    if (isNewlevel) {
      let multiplier = thisLink.multiplier;
      const newLevel = this.getlevel({
        ...thisLink,
        level,
        romance: thisLink.romance,
      });
      if (props.stats[StatsNames.Charm] >= 100) multiplier *= 1.51;

      if (props.arcanes.includes(this.name)) {
        multiplier *= 1.51;
      } else if (
        Math.floor(
          (newLevel.points -
            calculateMaxPoints(currentLevel.maxPoints, multiplier * 1.51)) /
            10 +
            0.99
        ) <
          Math.floor(
            (newLevel.points -
              calculateMaxPoints(currentLevel.maxPoints, multiplier)) /
              10 +
              0.99
          ) &&
        calculateMaxPoints(currentLevel.maxPoints, multiplier) < newLevel.points
      ) {
        multiplier *= 1.51;
        props.arcanes.push(this.name);
      }

      points = calculateMaxPoints(currentLevel.maxPoints, multiplier);
    } else {
      points = thisLink.points + 10;
    }

    return {
      links: {
        ...props.links,
        [this.name]: {
          ...thisLink,
          points,
          level,
        },
      },
    };
  },
  calculate: function (props: singleDay) {
    return this._calculate(props);
  },
  getStaleLevel: SpendingTime,
  levels: {},
};

export const alwaysLevelUp: SocialLinkTypeBase = {
  ...baseSocialLinkCalculation,
  getlevel: function ({ level }) {
    if (level === 10) return this.levels[10].Platonic as SocialLinkLevel;
    if (level === 0) return this.levels[0].Platonic as SocialLinkLevel;
    return this.levels[1].Platonic as SocialLinkLevel;
  },
  calculate: function (props: singleDay) {
    const thisLink = props.links[this.name];
    const isNewlevel = thisLink.level < this.maxLevel;
    return {
      links: {
        ...props.links,
        [this.name]: {
          ...thisLink,
          level: isNewlevel ? thisLink.level + 1 : thisLink.level,
        },
      },
    };
  },
};
