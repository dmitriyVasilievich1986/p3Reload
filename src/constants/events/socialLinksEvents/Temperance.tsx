import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkInvitationNames, Times, Event } from "../types";
import { DaysNames } from "@/constants/monthsNames";
import { stats } from "@/constants/stats";

import {
  socialLinkInvitationEventBase,
  invitationAvailable,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

export const TemperanceEvents: {
  [SocialLinkNames.Temperance]: Event;
  [socialLinkInvitationNames.TemperanceInvitation]: Event;
} = {
  [SocialLinkNames.Temperance]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Temperance,
    linkName: SocialLinkNames.Temperance,
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
      return (
        previousDay.links[socialLinks.Hierophant.linkName].level >= 3 &&
        currentDay.date.getTime() >= new Date(2009, 4, 8).getTime() &&
        previousDay.stats[stats.Academics.name] >= 20 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams
      );
    },
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
