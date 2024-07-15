import { SocialLinkNames, SocialLinkType, SocialLinkStats } from "./types";
import { EventCard } from "../../components/eventCard";
import { alwaysLevelUp } from "./baseFunctions";

export const Fool: SocialLinkType = {
  ...alwaysLevelUp,
  name: SocialLinkNames.Fool,
  getlevel: function ({ level }: SocialLinkStats) {
    if (level === 0) return this.levels[0];
    return this.levels[1];
  },
  levels: [
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Create bond" />,
    },
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Automatic" />,
    },
  ],
};
