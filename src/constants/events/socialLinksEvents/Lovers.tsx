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
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.saturday,
    ];
    const charmLevel = stats[StatsNames.Charm].levels[5].value;
    return (
      currentDay.date.getTime() >= new Date(2009, 6, 25).getTime() &&
      previousDay.stats[StatsNames.Charm] >= charmLevel &&
      days.includes(currentDay.date.getDay()) &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isNewLevel &&
      isRomance
    );
  };
}

export const loversEvents: {
  [SocialLinkNames.Lovers]: Event;
  [socialLinkRomanceNames.LoversRomance]: Event;
  [socialLinkShrineNames.LoversShrineTime]: Event;
  [socialLinkInvitationNames.LoversInvitation]: Event;
} = {
  [SocialLinkNames.Lovers]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Lovers,
    linkName: SocialLinkNames.Lovers,
    available: available(Routes.Platonic),
  },
  [socialLinkRomanceNames.LoversRomance]: {
    ...socialLinkRomanceEventBase,
    linkName: SocialLinkNames.Lovers,
    name: socialLinkRomanceNames.LoversRomance,
    available: available(Routes.Romantic),
  },
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
