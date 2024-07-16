import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { EventCard } from "../../components/eventCard";
import { alwaysLevelUp } from "./baseFunctions";

export const Devil: SocialLinkType = {
  ...alwaysLevelUp,
  name: SocialLinkNames.Devil,
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
        element: () => <EventCard head="Choose Any" />,
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
