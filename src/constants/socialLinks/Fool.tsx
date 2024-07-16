import { SocialLinkNames, SocialLinkType, Routes } from "./types";
import { EventCard } from "../../components/eventCard";
import { alwaysLevelUp } from "./baseFunctions";

export const Fool: SocialLinkType = {
  ...alwaysLevelUp,
  name: SocialLinkNames.Fool,
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
        element: () => <EventCard head="Automatic" />,
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
