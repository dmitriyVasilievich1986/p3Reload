import { SocialLinkNames, Routes } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";
import { stats } from "@/constants/stats";

import {
  socialLinkInvitationEventBase,
  socialLinkRomanceEventBase,
  invitationAvailable,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

import {
  socialLinkInvitationNames,
  socialLinkRomanceNames,
  Times,
  Event,
} from "../types";

function available(route: Routes) {
  return function ({
    previousDay,
    currentDay,
    time,
  }: {
    previousDay?: SingleDay;
    currentDay: SingleDay;
    time: Times;
  }) {
    if (previousDay === undefined) return false;
    const isRomance =
      currentDay.links[SocialLinkNames.Empress].romance === route ||
      previousDay.links[SocialLinkNames.Empress].level === 6;
    const days = [
      DaysNames.monday,
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.saturday,
    ];
    return (
      currentDay.date.getTime() >= new Date(2009, 10, 21).getTime() &&
      previousDay.stats[stats.Academics.name] >= 230 &&
      days.includes(currentDay.date.getDay()) &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isRomance
    );
  };
}

export const empressEvents: {
  [SocialLinkNames.Empress]: Event;
  [socialLinkRomanceNames.EmpressRomance]: Event;
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
