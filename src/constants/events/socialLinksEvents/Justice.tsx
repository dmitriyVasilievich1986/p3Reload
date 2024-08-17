import { SocialLinkNames, socialLinks, Routes } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";

import {
  socialLinkInvitationEventBase,
  socialLinkSpendTimeEventBase,
  socialLinkRomanceEventBase,
  invitationAvailable,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

import {
  socialLinkInvitationNames,
  socialLinkSpendTimeNames,
  socialLinkRomanceNames,
  Times,
  Event,
} from "../types";

function available(route: Routes | null, shouldLevelUp: boolean = true) {
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
    const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday];
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);
    const isRomance =
      previousDay.links[link].level === 4 ||
      thisLink.romance === route ||
      route === null;
    return (
      currentDay.date.getTime() >= new Date(2009, 4, 7).getTime() &&
      previousDay.links[SocialLinkNames.Emperor].level > 0 &&
      days.includes(currentDay.date.getDay()) &&
      isNewLevel === shouldLevelUp &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isRomance
    );
  };
}

export const justiceEvents: {
  [SocialLinkNames.Justice]: Event;
  [socialLinkRomanceNames.JusticeRomance]: Event;
  [socialLinkSpendTimeNames.JusticeSpendTime]: Event;
  [socialLinkInvitationNames.JusticeInvitation]: Event;
} = {
  [SocialLinkNames.Justice]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Justice,
    linkName: SocialLinkNames.Justice,
    available: available(Routes.Platonic),
  },
  [socialLinkRomanceNames.JusticeRomance]: {
    ...socialLinkRomanceEventBase,
    linkName: SocialLinkNames.Justice,
    name: socialLinkRomanceNames.JusticeRomance,
    available: available(Routes.Romantic),
  },
  [socialLinkSpendTimeNames.JusticeSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    linkName: SocialLinkNames.Justice,
    name: socialLinkSpendTimeNames.JusticeSpendTime,
    available: available(null, false),
  },
  [socialLinkInvitationNames.JusticeInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Justice,
    name: socialLinkInvitationNames.JusticeInvitation,
    available: invitationAvailable([
      new Date(2009, 4, 31).getTime(),
      new Date(2009, 5, 21).getTime(),
      new Date(2009, 6, 5).getTime(),
      new Date(2009, 6, 26).getTime(),
      new Date(2009, 7, 9).getTime(),
      new Date(2009, 7, 27).getTime(),
      new Date(2009, 8, 27).getTime(),
      new Date(2009, 9, 25).getTime(),
      new Date(2009, 10, 29).getTime(),
      new Date(2010, 0, 5).getTime(),
      new Date(2010, 0, 10).getTime(),
    ]),
  },
};
