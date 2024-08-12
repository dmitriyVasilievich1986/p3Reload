import { SocialLinkNames, Routes } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";

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
      currentDay.links[SocialLinkNames.Strength].romance === route ||
      previousDay.links[SocialLinkNames.Strength].level === 2;
    const days = [DaysNames.wednesday, DaysNames.saturday];
    return (
      currentDay.date.getTime() >= new Date(2009, 3, 24).getTime() &&
      previousDay.links[SocialLinkNames.Chariot].level >= 2 &&
      days.includes(currentDay.date.getDay()) &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isRomance
    );
  };
}

export const strengthEvents: {
  [SocialLinkNames.Strength]: Event;
  [socialLinkRomanceNames.StrengthRomance]: Event;
  [socialLinkInvitationNames.StrengthInvitation]: Event;
} = {
  [SocialLinkNames.Strength]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Strength,
    linkName: SocialLinkNames.Strength,
    available: available(Routes.Platonic),
  },
  [socialLinkRomanceNames.StrengthRomance]: {
    ...socialLinkRomanceEventBase,
    linkName: SocialLinkNames.Strength,
    name: socialLinkRomanceNames.StrengthRomance,
    available: available(Routes.Romantic),
  },
  [socialLinkInvitationNames.StrengthInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Strength,
    name: socialLinkInvitationNames.StrengthInvitation,
    available: invitationAvailable([
      new Date(2009, 4, 31).getTime(),
      new Date(2009, 6, 5).getTime(),
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 7, 26).getTime(),
      new Date(2009, 8, 22).getTime(),
      new Date(2009, 9, 25).getTime(),
      new Date(2009, 10, 15).getTime(),
      new Date(2010, 0, 6).getTime(),
      new Date(2010, 0, 17).getTime(),
    ]),
  },
};
