import { SocialLinkNames } from "@/constants/socialLinks";
import { SocialLinkEvent } from "./socialLinkEventsBase";
import { Event } from "../types";

export const sunEvents: {
  [SocialLinkNames.Sun]: Event;
} = {
  [SocialLinkNames.Sun]: new SocialLinkEvent({
    name: SocialLinkNames.Sun,
  }),
};
