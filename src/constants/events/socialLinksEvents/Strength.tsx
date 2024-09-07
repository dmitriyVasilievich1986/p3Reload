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
} = {
  [SocialLinkNames.Strength]: new SocialLinkEvent({
    name: SocialLinkNames.Strength,
  }),
  [socialLinkRomanceNames.StrengthRomance]: new SocialLinkEvent({
    name: socialLinkRomanceNames.StrengthRomance,
    linkName: SocialLinkNames.Strength,
    romance: Routes.Romantic,
  }),
};
