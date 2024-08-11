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
      currentDay.links[SocialLinkNames.Priestess].romance === route ||
      previousDay.links[SocialLinkNames.Priestess].level === 6;
    const days = [DaysNames.monday, DaysNames.friday, DaysNames.saturday];
    return (
      currentDay.date.getTime() >= new Date(2009, 5, 19).getTime() &&
      previousDay.links[SocialLinkNames.Fortune].level > 0 &&
      previousDay.stats[stats.Courage.name] >= 80 &&
      days.includes(currentDay.date.getDay()) &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isRomance
    );
  };
}

export const priestessEvents: {
  [SocialLinkNames.Priestess]: Event;
  [socialLinkRomanceNames.PriestessRomance]: Event;
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
