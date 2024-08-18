import { SocialLinkNames, socialLinks, Routes } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";

import {
  socialLinkInvitationEventBase,
  socialLinkRomanceEventBase,
  socialLinkShrineEventBase,
  invitationAvailable,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

import {
  socialLinkInvitationNames,
  socialLinkRomanceNames,
  socialLinkShrineNames,
  Times,
  Event,
} from "../types";

function available(route: Routes) {
  return function (
    this: Event,
    {
      previousDay,
      currentDay,
      time,
    }: {
      previousDay?: SingleDay;
      currentDay: SingleDay;
      time: Times;
    }
  ) {
    if (previousDay === undefined) return false;
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);
    const isRomance =
      previousDay.links[link].level === 6 || thisLink.romance === route;
    const days = [
      DaysNames.monday,
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.saturday,
    ];
    const academicsLevel = stats[StatsNames.Academics].levels[5].value;
    return (
      currentDay.date.getTime() >= new Date(2009, 10, 21).getTime() &&
      previousDay.stats[StatsNames.Academics] >= academicsLevel &&
      days.includes(currentDay.date.getDay()) &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isNewLevel &&
      isRomance
    );
  };
}

export const empressEvents: {
  [SocialLinkNames.Empress]: Event;
  [socialLinkRomanceNames.EmpressRomance]: Event;
  [socialLinkShrineNames.EmpressShrineTime]: Event;
  [socialLinkInvitationNames.EmpressInvitation]: Event;
} = {
  [SocialLinkNames.Empress]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Empress,
    linkName: SocialLinkNames.Empress,
    available: available(Routes.Platonic),
  },
  [socialLinkRomanceNames.EmpressRomance]: {
    ...socialLinkRomanceEventBase,
    linkName: SocialLinkNames.Empress,
    name: socialLinkRomanceNames.EmpressRomance,
    available: available(Routes.Romantic),
  },
  [socialLinkShrineNames.EmpressShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Empress,
    name: socialLinkShrineNames.EmpressShrineTime,
  },
  [socialLinkInvitationNames.EmpressInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Empress,
    name: socialLinkInvitationNames.EmpressInvitation,
    available: invitationAvailable([
      new Date(2010, 1, 4).getTime(),
      new Date(2010, 1, 7).getTime(),
      new Date(2010, 1, 24).getTime(),
    ]),
  },
};
