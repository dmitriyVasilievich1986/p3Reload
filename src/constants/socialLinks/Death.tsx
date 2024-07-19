import { CreateBond, ChooseAny } from "./GenericCard";
import { alwaysLevelUp } from "./baseFunctions";

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
  calculate: function ({ currentLinks }) {
    const thisLink = currentLinks[SocialLinkNames.Death];
    const level = [0, 2, 5, 7].includes(thisLink.level)
      ? thisLink.level + 2
      : thisLink.level + 1;
    return {
      links: {
        ...currentLinks,
        [SocialLinkNames.Death]: { ...thisLink, level },
      },
    };
  },
  levels: {
    0: {
      [Routes.Platonic]: {
        points: 0,
        maxPoints: 0,
        element: CreateBond,
      },
    },
    1: {
      [Routes.Platonic]: {
        points: 0,
        maxPoints: 0,
        element: ChooseAny,
      },
    },
  },
};
