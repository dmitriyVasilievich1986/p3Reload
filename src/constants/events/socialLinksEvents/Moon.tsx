import { SocialLinkNames } from "@/constants/socialLinks";
import { socialLinkShrineNames, Event } from "../types";

import {
  socialLinkShrineEventBase,
  SocialLinkEvent,
} from "./socialLinkEventsBase";

export const moonEvents: {
  [SocialLinkNames.Moon]: Event;
  [socialLinkShrineNames.MoonShrineTime]: Event;
} = {
  [SocialLinkNames.Moon]: new SocialLinkEvent({
    name: SocialLinkNames.Moon,
  }),
  [socialLinkShrineNames.MoonShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Moon,
    name: socialLinkShrineNames.MoonShrineTime,
  },
};
