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

export const magicianEvents: {
  [SocialLinkNames.Magician]: Event;
  [socialLinkShrineNames.MagicianShrineTime]: Event;
  [socialLinkInvitationNames.MagicianInvitation]: Event;
} = {
  [SocialLinkNames.Magician]: new SocialLinkEvent({
    name: SocialLinkNames.Magician,
  }),
  [socialLinkShrineNames.MagicianShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Magician,
    name: socialLinkShrineNames.MagicianShrineTime,
  },
  [socialLinkInvitationNames.MagicianInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Magician,
    name: socialLinkInvitationNames.MagicianInvitation,
    available: invitationAvailable([
      new Date(2009, 3, 26).getTime(),
      new Date(2009, 4, 5).getTime(),
      new Date(2009, 4, 24).getTime(),
      new Date(2009, 5, 14).getTime(),
      new Date(2009, 7, 5).getTime(),
      new Date(2009, 7, 26).getTime(),
      new Date(2009, 8, 22).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2010, 0, 4).getTime(),
      new Date(2010, 0, 11).getTime(),
    ]),
  },
};
