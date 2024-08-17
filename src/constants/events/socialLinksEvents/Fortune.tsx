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

export const fortuneEvents: {
  [SocialLinkNames.Fortune]: Event;
  [socialLinkShrineNames.FortuneShrineTime]: Event;
  [socialLinkInvitationNames.FortuneInvitation]: Event;
} = {
  [SocialLinkNames.Fortune]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Fortune,
    linkName: SocialLinkNames.Fortune,
    available: function ({
      currentDay,
      time,
    }: {
      previousDay?: SingleDay;
      currentDay: SingleDay;
      time: Times;
    }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.thursday];
      const link = this.linkName as SocialLinkNames;
      const thisLink = currentDay.links[link];
      const isNewLevel = socialLinks[link].isNewLevel(thisLink);
      return (
        currentDay.date.getTime() >= new Date(2009, 5, 17).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isNewLevel
      );
    },
  },
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
