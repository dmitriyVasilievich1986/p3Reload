import { SocialLinkNames } from "@/constants/socialLinks";

import {
  socialLinkInvitationNames,
  socialLinkShrineNames,
  Event,
} from "../types";

import {
  socialLinkInvitationEventBase,
  socialLinkShrineEventBase,
  invitationAvailable,
  SocialLinkEvent,
} from "./socialLinkEventsBase";

export const chariotEvents: {
  [SocialLinkNames.Chariot]: Event;
  [socialLinkShrineNames.ChariotShrineTime]: Event;
  [socialLinkInvitationNames.ChariotInvitation]: Event;
} = {
  [SocialLinkNames.Chariot]: new SocialLinkEvent({
    name: SocialLinkNames.Chariot,
  }),
  [socialLinkShrineNames.ChariotShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Chariot,
    name: socialLinkShrineNames.ChariotShrineTime,
  },
  [socialLinkInvitationNames.ChariotInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Chariot,
    name: socialLinkInvitationNames.ChariotInvitation,
    available: invitationAvailable([
      new Date(2009, 4, 4).getTime(),
      new Date(2009, 4, 24).getTime(),
      new Date(2009, 5, 7).getTime(),
      new Date(2009, 5, 14).getTime(),
      new Date(2009, 7, 5).getTime(),
      new Date(2009, 8, 27).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2009, 10, 8).getTime(),
      new Date(2010, 0, 6).getTime(),
      new Date(2010, 0, 10).getTime(),
    ]),
  },
};
