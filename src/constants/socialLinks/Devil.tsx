import { SocialLinkNames, SocialLinkType } from "./types";
import { EventCard } from "../../components/eventCard";
import { alwaysLevelUp } from "./baseFunctions";

export const Devil: SocialLinkType = {
  ...alwaysLevelUp,
  name: SocialLinkNames.Devil,
  levels: [
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Create bond" />,
    },
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Choose Any" />,
    },
    {
      points: 0,
      maxPoints: 0,
      element: () => <EventCard head="Link Maxed" />,
    },
  ],
};
