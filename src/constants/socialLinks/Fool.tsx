import { SocialLinkAlwaysLevelUp } from "./baseFunctions";
import { SocialLinkNames, Routes } from "./types";
import { singleDay } from "../calendar/types";

import {
  AutomaticLevelUpObject,
  createBondObject,
  LinkMaxedObject,
} from "./GenericCard";

class SocialLinkFool extends SocialLinkAlwaysLevelUp {
  calculate(currentDay: singleDay) {
    const thisLink = currentDay.links[SocialLinkNames.Fool];
    const level =
      thisLink.level === 7 ? thisLink.level + 2 : thisLink.level + 1;
    return {
      links: {
        ...currentDay.links,
        [SocialLinkNames.Fool]: { ...thisLink, level },
      },
    };
  }
}

export const Fool = new SocialLinkFool(
  SocialLinkNames.Fool,
  { name: "S.E.E.S.", place: "Tartarus" },
  {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: AutomaticLevelUpObject,
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  }
);
