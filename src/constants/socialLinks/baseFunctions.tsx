import { EventCard } from "../../components/eventCard";
import { StatsNames } from "../stats/types";

import {
  SocialLinkTypeBase,
  SocialLinkNames,
  CalculateProps,
  Routes,
} from "./types";

export const mainCharName: string = "Protagonist";

export const baseSocialLinkCalculation: SocialLinkTypeBase = {
  name: SocialLinkNames.Aeon,
  invitations: [],
  maxLevel: 10,
  getlevel: function ({ level, romance }) {
    return romance === Routes.Romantic
      ? this.levelsRomance[level]
      : this.levels[level];
  },
  _calculate: function ({
    currentStats,
    currentLinks,
    arcanes,
  }: CalculateProps) {
    const thisLink = currentLinks[this.name];
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
      if (currentStats[StatsNames.Charm] >= 100) multiplier *= 1.51;

      if (arcanes.includes(this.name)) {
        multiplier *= 1.51;
      } else if (
        Math.floor(
          (newLevel.points - currentLevel.maxPoints * multiplier * 1.51) / 10 +
            0.99
        ) <
          Math.floor(
            (newLevel.points - currentLevel.maxPoints * multiplier) / 10 + 0.99
          ) &&
        Math.floor(currentLevel.maxPoints * multiplier) < newLevel.points
      ) {
        multiplier *= 1.51;
        arcanes.push(this.name);
      }

      points = Math.floor(currentLevel.maxPoints * multiplier);
    } else {
      points = thisLink.points + 10;
    }

    return {
      links: {
        ...currentLinks,
        [this.name]: {
          ...thisLink,
          points,
          level,
        },
      },
    };
  },
  calculate: function (props: CalculateProps) {
    return this._calculate(props);
  },
  getStaleLevel: function () {
    return <EventCard head="Spending time" />;
  },
  levelsRomance: [],
  levels: [],
};

export const alwaysLevelUp: SocialLinkTypeBase = {
  ...baseSocialLinkCalculation,
  getlevel: function ({ level }) {
    if (level === 10) return this.levels[2];
    if (level === 0) return this.levels[0];
    return this.levels[1];
  },
  calculate: function ({ currentLinks }) {
    const thisLink = currentLinks[this.name];
    const isNewlevel = thisLink.level < this.maxLevel;
    return {
      links: {
        ...currentLinks,
        [this.name]: {
          ...thisLink,
          level: isNewlevel ? thisLink.level + 1 : thisLink.level,
        },
      },
    };
  },
};
