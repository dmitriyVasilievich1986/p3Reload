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

export const justiceEvents: {
  [SocialLinkNames.Justice]: Event;
  [socialLinkRomanceNames.JusticeRomance]: Event;
  [socialLinkShrineNames.JusticeShrineTime]: Event;
  [socialLinkInvitationNames.JusticeInvitation]: Event;
} = {
  [SocialLinkNames.Justice]: new SocialLinkEvent({
    name: SocialLinkNames.Justice,
  }),
  [socialLinkRomanceNames.JusticeRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.JusticeRomance,
    linkName: SocialLinkNames.Justice,
    romance: Routes.Romantic,
  }),
  [socialLinkShrineNames.JusticeShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Justice,
    name: socialLinkShrineNames.JusticeShrineTime,
  },
  [socialLinkInvitationNames.JusticeInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Justice,
    name: socialLinkInvitationNames.JusticeInvitation,
    available: invitationAvailable([
      new Date(2009, 4, 31).getTime(),
      new Date(2009, 5, 21).getTime(),
      new Date(2009, 6, 5).getTime(),
      new Date(2009, 6, 26).getTime(),
      new Date(2009, 7, 9).getTime(),
      new Date(2009, 7, 27).getTime(),
      new Date(2009, 8, 27).getTime(),
      new Date(2009, 9, 25).getTime(),
      new Date(2009, 10, 29).getTime(),
      new Date(2010, 0, 5).getTime(),
      new Date(2010, 0, 10).getTime(),
    ]),
  },
};
