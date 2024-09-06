import { SocialLinkEvent } from "./socialLinkEventsBase";
import { SocialLinkNames } from "@/constants/socialLinks";
import { Times, Event } from "../types";

export const deathEvents: {
  [SocialLinkNames.Death]: Event;
} = {
  [SocialLinkNames.Death]: new SocialLinkEvent({
    name: SocialLinkNames.Death,
    time: Times.DarkHour,
    special: true,
  }),
};
