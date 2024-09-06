import { SocialLinkNames } from "@/constants/socialLinks";
import { socialLinkShrineNames, Event } from "../types";

import {
  socialLinkShrineEventBase,
  SocialLinkEvent,
} from "./socialLinkEventsBase";

export const hierophantEvents: {
  [SocialLinkNames.Hierophant]: Event;
  [socialLinkShrineNames.HierophantShrineTime]: Event;
} = {
  [SocialLinkNames.Hierophant]: new SocialLinkEvent({
    name: SocialLinkNames.Hierophant,
  }),
  [socialLinkShrineNames.HierophantShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Hierophant,
    name: socialLinkShrineNames.HierophantShrineTime,
  },
};
