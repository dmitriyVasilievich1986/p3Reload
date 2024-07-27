import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { alwaysLevelUp } from "./baseFunctions";

import {
  AutomaticLevelUpObject,
  createBondObject,
  LinkMaxedObject,
} from "./GenericCard";

export const Fool: SocialLinkType = {
  ...alwaysLevelUp,
  name: SocialLinkNames.Fool,
  calculate: function ({ currentLinks }) {
    const thisLink = currentLinks[SocialLinkNames.Fool];
    const level =
      thisLink.level === 7 ? thisLink.level + 2 : thisLink.level + 1;
    return {
      links: {
        ...currentLinks,
        [SocialLinkNames.Fool]: { ...thisLink, level },
      },
    };
  },
  levels: {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: AutomaticLevelUpObject,
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  },
};
