import { alwaysLevelUp } from "./baseFunctions";
import React from "react";

export const Devil = {
  name: "Devil",
  ...alwaysLevelUp,
  levels: [
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Create bond</h3>,
    },
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Choose Any</h3>,
    },
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Link Maxed</h3>,
    },
  ],
};
