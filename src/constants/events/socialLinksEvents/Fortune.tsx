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

export const fortuneEvents: {
  [SocialLinkNames.Fortune]: Event;
  [socialLinkShrineNames.FortuneShrineTime]: Event;
  [socialLinkInvitationNames.FortuneInvitation]: Event;
} = {
  [SocialLinkNames.Fortune]: new SocialLinkEvent({
    name: SocialLinkNames.Fortune,
  }),
  [socialLinkShrineNames.FortuneShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Fortune,
    name: socialLinkShrineNames.FortuneShrineTime,
  },
  [socialLinkInvitationNames.FortuneInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Fortune,
    name: socialLinkInvitationNames.FortuneInvitation,
    available: invitationAvailable([
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 7, 7).getTime(),
      new Date(2009, 8, 23).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2010, 0, 4).getTime(),
      new Date(2010, 0, 10).getTime(),
      new Date(2010, 0, 11).getTime(),
    ]),
  },
};
