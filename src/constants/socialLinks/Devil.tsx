import { SocialLinkAlwaysLevelUp } from "./baseFunctions";
import { SocialLinkNames, Routes } from "./types";

import {
  createBondObject,
  ChooseAnyObject,
  LinkMaxedObject,
} from "./GenericCard";

export const Devil = new SocialLinkAlwaysLevelUp(
  SocialLinkNames.Devil,
  { name: "President Tanaka", place: "Paulownia Mall" },
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
