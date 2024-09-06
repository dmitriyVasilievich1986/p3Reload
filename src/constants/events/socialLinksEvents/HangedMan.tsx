import { SocialLinkNames } from "@/constants/socialLinks";
import { socialLinkShrineNames, Event } from "../types";

import {
  socialLinkShrineEventBase,
  SocialLinkEvent,
} from "./socialLinkEventsBase";

export const hangedManEvents: {
  [SocialLinkNames.HangedMan]: Event;
  [socialLinkShrineNames.HangedManShrineTime]: Event;
} = {
  [SocialLinkNames.HangedMan]: new SocialLinkEvent({
    name: SocialLinkNames.HangedMan,
  }),
  [socialLinkShrineNames.HangedManShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.HangedMan,
    name: socialLinkShrineNames.HangedManShrineTime,
  },
};
