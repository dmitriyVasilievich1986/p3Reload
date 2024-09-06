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

export const priestessEvents: {
  [SocialLinkNames.Priestess]: Event;
  [socialLinkRomanceNames.PriestessRomance]: Event;
  [socialLinkShrineNames.PriestessShrineTime]: Event;
  [socialLinkInvitationNames.PriestessInvitation]: Event;
} = {
  [SocialLinkNames.Priestess]: new SocialLinkEvent({
    name: SocialLinkNames.Priestess,
  }),
  [socialLinkRomanceNames.PriestessRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.PriestessRomance,
    linkName: SocialLinkNames.Priestess,
    romance: Routes.Romantic,
  }),
  [socialLinkShrineNames.PriestessShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Priestess,
    name: socialLinkShrineNames.PriestessShrineTime,
  },
  [socialLinkInvitationNames.PriestessInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Priestess,
    name: socialLinkInvitationNames.PriestessInvitation,
    available: invitationAvailable([
      new Date(2009, 5, 28).getTime(),
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 8, 13).getTime(),
      new Date(2009, 10, 15).getTime(),
      new Date(2010, 0, 5).getTime(),
      new Date(2010, 0, 17).getTime(),
      new Date(2010, 0, 24).getTime(),
    ]),
  },
};
