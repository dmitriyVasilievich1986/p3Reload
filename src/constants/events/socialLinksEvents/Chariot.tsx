import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";

import {
  socialLinkInvitationNames,
  socialLinkShrineNames,
  Times,
  Event,
} from "../types";

import {
  socialLinkInvitationEventBase,
  socialLinkShrineEventBase,
  invitationAvailable,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

export const chariotEvents: {
  [SocialLinkNames.Chariot]: Event;
  [socialLinkShrineNames.ChariotShrineTime]: Event;
  [socialLinkInvitationNames.ChariotInvitation]: Event;
} = {
  [SocialLinkNames.Chariot]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Chariot,
    linkName: SocialLinkNames.Chariot,
    available: function ({
      currentDay,
      time,
    }: {
      previousDay?: SingleDay;
      currentDay: SingleDay;
      time: Times;
    }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.thursday,
        DaysNames.friday,
      ];
      const link = this.linkName as SocialLinkNames;
      const thisLink = currentDay.links[link];
      const isNewLevel = socialLinks[link].isNewLevel(thisLink);
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 23).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isNewLevel
      );
    },
  },
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
