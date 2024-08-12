import { socialLinkEventBase } from "./socialLinkEventsBase";
import { SocialLinkNames } from "@/constants/socialLinks";
import { CardWithoutMultiplier } from "./genericCards";
import { Times, Event } from "../types";

export const deathEvents: {
  [SocialLinkNames.Death]: Event;
} = {
  [SocialLinkNames.Death]: {
    ...socialLinkEventBase,
    special: true,
    time: Times.DarkHour,
    name: SocialLinkNames.Death,
    linkName: SocialLinkNames.Death,
    label: CardWithoutMultiplier,
  },
};
