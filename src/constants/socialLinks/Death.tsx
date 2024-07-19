import { EventCard } from "../../components/eventCard";
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
    if (level === 10) return this.levels[10].Platonic as SocialLinkLevel;
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
        element: () => <EventCard head="Create bond" />,
      },
    },
    1: {
      [Routes.Platonic]: {
        points: 0,
        maxPoints: 0,
        element: () => <EventCard head="Choose any" />,
      },
    },
    10: {
      [Routes.Platonic]: {
        points: 0,
        maxPoints: 0,
        element: () => <EventCard head="Link Maxed" />,
      },
    },
  },
};
