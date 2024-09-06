import { SocialLinkNames } from "@/constants/socialLinks";
import { socialLinkShrineNames, Event } from "../types";

import {
  socialLinkShrineEventBase,
  SocialLinkEvent,
} from "./socialLinkEventsBase";

export const hermitEvents: {
  [SocialLinkNames.Hermit]: Event;
  [socialLinkShrineNames.HermitShrineTime]: Event;
} = {
  [SocialLinkNames.Hermit]: new SocialLinkEvent({
    name: SocialLinkNames.Hermit,
  }),
  [socialLinkShrineNames.HermitShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Hermit,
    name: socialLinkShrineNames.HermitShrineTime,
  },
};
