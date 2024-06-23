import { alwaysLevelUp } from "./baseFunctions";
import React from "react";

export const Fool = {
  name: "Fool",
  ...alwaysLevelUp,
  getlevel: function ({ level }) {
    if (level === 0) return this.levels[0];
    return this.levels[1];
  },
  levels: [
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Create bond</h3>,
    },
    {
      points: 0,
      maxPoints: 0,
      element: () => <h3>Automatic</h3>,
    },
  ],
};
