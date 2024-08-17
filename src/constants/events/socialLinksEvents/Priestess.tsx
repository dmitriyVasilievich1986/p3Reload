import { SocialLinkNames, socialLinks, Routes } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";
import { StatsNames } from "@/constants/stats";

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
    const days = [DaysNames.monday, DaysNames.friday, DaysNames.saturday];
    return (
      currentDay.date.getTime() >= new Date(2009, 5, 19).getTime() &&
      previousDay.links[SocialLinkNames.Fortune].level > 0 &&
      previousDay.stats[StatsNames.Courage] >= 80 &&
      days.includes(currentDay.date.getDay()) &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isNewLevel &&
      isRomance
    );
  };
}

export const priestessEvents: {
  [SocialLinkNames.Priestess]: Event;
  [socialLinkRomanceNames.PriestessRomance]: Event;
  [socialLinkShrineNames.PriestessShrineTime]: Event;
  [socialLinkInvitationNames.PriestessInvitation]: Event;
} = {
  [SocialLinkNames.Priestess]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Priestess,
    linkName: SocialLinkNames.Priestess,
    available: available(Routes.Platonic),
  },
  [socialLinkRomanceNames.PriestessRomance]: {
    ...socialLinkRomanceEventBase,
    linkName: SocialLinkNames.Priestess,
    name: socialLinkRomanceNames.PriestessRomance,
    available: available(Routes.Romantic),
  },
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
