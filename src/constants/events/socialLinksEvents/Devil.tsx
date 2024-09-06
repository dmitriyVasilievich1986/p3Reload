import { SocialLinkNames } from "@/constants/socialLinks";
import { SocialLinkEvent } from "./socialLinkEventsBase";
import { Times, Event } from "../types";

export const devilEvents: {
  [SocialLinkNames.Devil]: Event;
} = {
  [SocialLinkNames.Devil]: new SocialLinkEvent({
    name: SocialLinkNames.Devil,
    time: Times.Evening,
  }),
};
