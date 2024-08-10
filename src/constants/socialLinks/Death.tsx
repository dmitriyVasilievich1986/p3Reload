import { createBondObject, ChooseAnyObject } from "./GenericCard";
import { SingleDay } from "../calendar/SingleDay";
import { SocialLink } from "./baseFunctions";

import {
  SocialLinkStats,
  SocialLinkNames,
  SocialLinkLevel,
  Routes,
} from "./types";

class SocialLinkDeath extends SocialLink {
  getLevel({ level }: SocialLinkStats) {
    if (level <= 1) return this.levels[0].Platonic as SocialLinkLevel;
    return this.levels[1].Platonic as SocialLinkLevel;
  }

  calculate(currentDay: SingleDay) {
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
  }
}

export const Death = new SocialLinkDeath(
  SocialLinkNames.Death,
  { name: "Pharos", place: "Main character room" },
  {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: ChooseAnyObject,
    },
  }
);
