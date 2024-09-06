import { SocialLinkNames } from "@/constants/socialLinks";
import { SocialLinkEvent } from "./socialLinkEventsBase";
import { Times, Event } from "../types";

export const foolEvents: {
  [SocialLinkNames.Fool]: Event;
} = {
  [SocialLinkNames.Fool]: new SocialLinkEvent({
    name: SocialLinkNames.Fool,
    time: Times.DarkHour,
    special: true,
  }),
};
