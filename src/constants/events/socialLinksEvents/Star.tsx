import { SocialLinkNames } from "@/constants/socialLinks";
import { socialLinkShrineNames, Event } from "../types";

import {
  socialLinkShrineEventBase,
  SocialLinkEvent,
} from "./socialLinkEventsBase";

export const starEvents: {
  [SocialLinkNames.Star]: Event;
  [socialLinkShrineNames.StarShrineTime]: Event;
} = {
  [SocialLinkNames.Star]: new SocialLinkEvent({
    name: SocialLinkNames.Star,
  }),
  [socialLinkShrineNames.StarShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Star,
    name: socialLinkShrineNames.StarShrineTime,
  },
};
