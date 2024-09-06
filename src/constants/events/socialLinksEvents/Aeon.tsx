import { socialLinkRomanceNames, socialLinkShrineNames, Event } from "../types";
import { Routes, SocialLinkNames } from "@/constants/socialLinks";

import {
  socialLinkShrineEventBase,
  SocialLinkEvent,
} from "./socialLinkEventsBase";

export const aeonEvents: {
  [SocialLinkNames.Aeon]: Event;
  [socialLinkRomanceNames.AeonRomance]: Event;
  [socialLinkShrineNames.AeonShrineTime]: Event;
} = {
  [SocialLinkNames.Aeon]: new SocialLinkEvent({
    name: SocialLinkNames.Aeon,
  }),
  [socialLinkRomanceNames.AeonRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.AeonRomance,
    linkName: SocialLinkNames.Aeon,
    romance: Routes.Romantic,
  }),
  [socialLinkShrineNames.AeonShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Aeon,
    name: socialLinkShrineNames.AeonShrineTime,
  },
};
