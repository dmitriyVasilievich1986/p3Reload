import { socialLinkEventBase } from "./socialLinkEventsBase";
import { SocialLinkNames } from "@/constants/socialLinks";
import { Times, Event } from "../types";

export const foolEvents: {
  [SocialLinkNames.Fool]: Event;
} = {
  [SocialLinkNames.Fool]: {
    ...socialLinkEventBase,
    special: true,
    time: Times.DarkHour,
    name: SocialLinkNames.Fool,
    linkName: SocialLinkNames.Fool,
  },
};
