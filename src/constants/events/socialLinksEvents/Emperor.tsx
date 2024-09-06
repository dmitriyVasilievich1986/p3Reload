import { SocialLinkNames } from "@/constants/socialLinks";
import { socialLinkShrineNames, Event } from "../types";

import {
  socialLinkShrineEventBase,
  SocialLinkEvent,
} from "./socialLinkEventsBase";

export const emperorEvents: {
  [SocialLinkNames.Emperor]: Event;
  [socialLinkShrineNames.EmperorShrineTime]: Event;
} = {
  [SocialLinkNames.Emperor]: new SocialLinkEvent({
    name: SocialLinkNames.Emperor,
  }),
  [socialLinkShrineNames.EmperorShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Emperor,
    name: socialLinkShrineNames.EmperorShrineTime,
  },
};
