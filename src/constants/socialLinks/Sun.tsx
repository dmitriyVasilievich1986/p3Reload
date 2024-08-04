import { SocialLinkAlwaysLevelUp } from "./baseFunctions";
import { SocialLinkNames, Routes } from "./types";

import {
  createBondObject,
  ChooseAnyObject,
  LinkMaxedObject,
} from "./GenericCard";

export const Sun = new SocialLinkAlwaysLevelUp(
  SocialLinkNames.Sun,
  { name: "Akinari Kamiki", place: "Naganaki Shrine" },
  {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: ChooseAnyObject,
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  }
);
