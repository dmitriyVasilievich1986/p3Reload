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
