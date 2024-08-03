import { createBondObject, ChooseAnyObject } from "./GenericCard";
import { alwaysLevelUp } from "./baseFunctions";
import { singleDay } from "../calendar/types";

import {
  SocialLinkNames,
  SocialLinkLevel,
  SocialLinkType,
  Routes,
} from "./types";

export const Death: SocialLinkType = {
  ...alwaysLevelUp,
  name: SocialLinkNames.Death,
  getlevel: function ({ level }) {
    if (level <= 1) return this.levels[0].Platonic as SocialLinkLevel;
    return this.levels[1].Platonic as SocialLinkLevel;
  },
  calculate: function (currentDay: singleDay) {
    const thisLink = currentDay.links[SocialLinkNames.Death];
    const level = [1, 3, 6, 8].includes(thisLink.level)
      ? thisLink.level + 2
      : thisLink.level + 1;
    return {
      links: {
        ...currentDay.links,
        [SocialLinkNames.Death]: { ...thisLink, level },
      },
    };
  },
  levels: {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: ChooseAnyObject,
    },
  },
};
