import { Routes, SocialLinkNames } from "@/constants/socialLinks";

import {
  socialLinkInvitationEventBase,
  socialLinkShrineEventBase,
  invitationAvailable,
  SocialLinkEvent,
} from "./socialLinkEventsBase";

import {
  socialLinkInvitationNames,
  socialLinkRomanceNames,
  socialLinkShrineNames,
  Event,
} from "../types";

export const empressEvents: {
  [SocialLinkNames.Empress]: Event;
  [socialLinkRomanceNames.EmpressRomance]: Event;
  [socialLinkShrineNames.EmpressShrineTime]: Event;
  [socialLinkInvitationNames.EmpressInvitation]: Event;
} = {
  [SocialLinkNames.Empress]: new SocialLinkEvent({
    name: SocialLinkNames.Empress,
  }),
  [socialLinkRomanceNames.EmpressRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.EmpressRomance,
    linkName: SocialLinkNames.Empress,
    romance: Routes.Romantic,
  }),
  [socialLinkShrineNames.EmpressShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Empress,
    name: socialLinkShrineNames.EmpressShrineTime,
  },
  [socialLinkInvitationNames.EmpressInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Empress,
    name: socialLinkInvitationNames.EmpressInvitation,
    available: invitationAvailable([
      new Date(2010, 1, 4).getTime(),
      new Date(2010, 1, 7).getTime(),
      new Date(2010, 1, 24).getTime(),
    ]),
  },
};
