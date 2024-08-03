import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { alwaysLevelUp } from "./baseFunctions";
import { singleDay } from "../calendar/types";

import {
  AutomaticLevelUpObject,
  createBondObject,
  LinkMaxedObject,
} from "./GenericCard";

export const Fool: SocialLinkType = {
  ...alwaysLevelUp,
  name: SocialLinkNames.Fool,
  calculate: function (currentDay: singleDay) {
    const thisLink = currentDay.links[SocialLinkNames.Fool];
    const level =
      thisLink.level === 7 ? thisLink.level + 2 : thisLink.level + 1;
    return {
      links: {
        ...currentDay.links,
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
