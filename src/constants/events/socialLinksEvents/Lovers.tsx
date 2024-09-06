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

export const loversEvents: {
  [SocialLinkNames.Lovers]: Event;
  [socialLinkRomanceNames.LoversRomance]: Event;
  [socialLinkShrineNames.LoversShrineTime]: Event;
  [socialLinkInvitationNames.LoversInvitation]: Event;
} = {
  [SocialLinkNames.Lovers]: new SocialLinkEvent({
    name: SocialLinkNames.Lovers,
  }),
  [socialLinkRomanceNames.LoversRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.LoversRomance,
    linkName: SocialLinkNames.Lovers,
    romance: Routes.Romantic,
  }),
  [socialLinkShrineNames.LoversShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Lovers,
    name: socialLinkShrineNames.LoversShrineTime,
  },
  [socialLinkInvitationNames.LoversInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Lovers,
    name: socialLinkInvitationNames.LoversInvitation,
    available: invitationAvailable([
      new Date(2009, 8, 13).getTime(),
      new Date(2009, 8, 23).getTime(),
      new Date(2009, 9, 25).getTime(),
      new Date(2009, 10, 15).getTime(),
      new Date(2010, 0, 7).getTime(),
      new Date(2010, 0, 10).getTime(),
      new Date(2010, 0, 17).getTime(),
      new Date(2010, 0, 24).getTime(),
    ]),
  },
};
