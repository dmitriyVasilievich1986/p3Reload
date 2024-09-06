import { SocialLinkNames, Routes } from "@/constants/socialLinks";

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

export const strengthEvents: {
  [SocialLinkNames.Strength]: Event;
  [socialLinkRomanceNames.StrengthRomance]: Event;
  [socialLinkShrineNames.StrengthShrineTime]: Event;
  [socialLinkInvitationNames.StrengthInvitation]: Event;
} = {
  [SocialLinkNames.Strength]: new SocialLinkEvent({
    name: SocialLinkNames.Strength,
  }),
  [socialLinkRomanceNames.StrengthRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.StrengthRomance,
    linkName: SocialLinkNames.Strength,
    romance: Routes.Romantic,
  }),
  [socialLinkShrineNames.StrengthShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Strength,
    name: socialLinkShrineNames.StrengthShrineTime,
  },
  [socialLinkInvitationNames.StrengthInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Strength,
    name: socialLinkInvitationNames.StrengthInvitation,
    available: invitationAvailable([
      new Date(2009, 4, 31).getTime(),
      new Date(2009, 6, 5).getTime(),
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 7, 26).getTime(),
      new Date(2009, 8, 22).getTime(),
      new Date(2009, 9, 25).getTime(),
      new Date(2009, 10, 15).getTime(),
      new Date(2010, 0, 6).getTime(),
      new Date(2010, 0, 17).getTime(),
    ]),
  },
};
