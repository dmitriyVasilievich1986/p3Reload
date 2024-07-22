import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { CreateBond, ChooseAny, LinkMaxed } from "./GenericCard";
import { alwaysLevelUp } from "./baseFunctions";

export const Sun: SocialLinkType = {
  ...alwaysLevelUp,
  name: SocialLinkNames.Sun,
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
    10: {
      [Routes.Platonic]: {
        points: 0,
        maxPoints: 0,
        element: LinkMaxed,
      },
    },
  },
};
