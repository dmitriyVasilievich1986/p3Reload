import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { alwaysLevelUp } from "./baseFunctions";

import {
  createBondObject,
  ChooseAnyObject,
  LinkMaxedObject,
} from "./GenericCard";

export const Devil: SocialLinkType = {
  ...alwaysLevelUp,
  name: SocialLinkNames.Devil,
  levels: {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: ChooseAnyObject,
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  },
};
