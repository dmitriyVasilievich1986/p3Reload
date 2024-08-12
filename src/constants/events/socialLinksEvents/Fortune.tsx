import { socialLinkInvitationNames, Times, Event } from "../types";
import { SocialLinkNames } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";

import {
  socialLinkInvitationEventBase,
  invitationAvailable,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

export const fortuneEvents: {
  [SocialLinkNames.Fortune]: Event;
  [socialLinkInvitationNames.FortuneInvitation]: Event;
} = {
  [SocialLinkNames.Fortune]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Fortune,
    linkName: SocialLinkNames.Fortune,
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.thursday];
      return (
        currentDay.date.getTime() >= new Date(2009, 5, 17).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams
      );
    },
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
