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

export const TemperanceEvents: {
  [SocialLinkNames.Temperance]: Event;
  [socialLinkShrineNames.TemperanceShrineTime]: Event;
  [socialLinkInvitationNames.TemperanceInvitation]: Event;
} = {
  [SocialLinkNames.Temperance]: new SocialLinkEvent({
    name: SocialLinkNames.Temperance,
  }),
  [socialLinkShrineNames.TemperanceShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Temperance,
    name: socialLinkShrineNames.TemperanceShrineTime,
  },
  [socialLinkInvitationNames.TemperanceInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Temperance,
    name: socialLinkInvitationNames.TemperanceInvitation,
    available: invitationAvailable([
      new Date(2009, 5, 7).getTime(),
      new Date(2009, 5, 21).getTime(),
      new Date(2009, 6, 26).getTime(),
      new Date(2009, 7, 7).getTime(),
      new Date(2009, 7, 27).getTime(),
      new Date(2009, 8, 27).getTime(),
      new Date(2009, 10, 8).getTime(),
      new Date(2009, 10, 29).getTime(),
      new Date(2010, 0, 5).getTime(),
    ]),
  },
};
