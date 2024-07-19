import { CreateBond, AutomaticLevelUp, LinkMaxed } from "./GenericCard";
import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { alwaysLevelUp } from "./baseFunctions";

export const Fool: SocialLinkType = {
  ...alwaysLevelUp,
  name: SocialLinkNames.Fool,
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
        element: AutomaticLevelUp,
      },
    },
    10: {
      [Routes.Platonic]: {
        points: 0,
        maxPoints: 0,
        element: LinkMaxed,
      },
    },
  },
};
