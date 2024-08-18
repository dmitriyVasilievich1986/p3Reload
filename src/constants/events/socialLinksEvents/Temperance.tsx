import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { StatsNames, stats } from "@/constants/stats";
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

export const TemperanceEvents: {
  [SocialLinkNames.Temperance]: Event;
  [socialLinkShrineNames.TemperanceShrineTime]: Event;
  [socialLinkInvitationNames.TemperanceInvitation]: Event;
} = {
  [SocialLinkNames.Temperance]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Temperance,
    linkName: SocialLinkNames.Temperance,
    available: function ({
      previousDay,
      currentDay,
      time,
    }: {
      previousDay?: SingleDay;
      currentDay: SingleDay;
      time: Times;
    }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
      const link = this.linkName as SocialLinkNames;
      const thisLink = currentDay.links[link];
      const isNewLevel = socialLinks[link].isNewLevel(thisLink);
      const academicsLevel = stats[StatsNames.Academics].levels[1].value;
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 8).getTime() &&
        previousDay.stats[StatsNames.Academics] >= academicsLevel &&
        previousDay.links[SocialLinkNames.Hierophant].level >= 3 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isNewLevel
      );
    },
  },
  [socialLinkShrineNames.TemperanceShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Temperance,
    name: socialLinkShrineNames.TemperanceShrineTime,
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
