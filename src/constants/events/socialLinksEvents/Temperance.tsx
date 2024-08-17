import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";
import { StatsNames } from "@/constants/stats";

import {
  socialLinkInvitationNames,
  socialLinkSpendTimeNames,
  Times,
  Event,
} from "../types";

import {
  socialLinkInvitationEventBase,
  socialLinkSpendTimeEventBase,
  invitationAvailable,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

function available(shouldLevelUp: boolean) {
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
    const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);
    return (
      currentDay.date.getTime() >= new Date(2009, 4, 8).getTime() &&
      previousDay.links[SocialLinkNames.Hierophant].level >= 3 &&
      previousDay.stats[StatsNames.Academics] >= 20 &&
      days.includes(currentDay.date.getDay()) &&
      isNewLevel === shouldLevelUp &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams
    );
  };
}

export const TemperanceEvents: {
  [SocialLinkNames.Temperance]: Event;
  [socialLinkSpendTimeNames.TemperanceSpendTime]: Event;
  [socialLinkInvitationNames.TemperanceInvitation]: Event;
} = {
  [SocialLinkNames.Temperance]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Temperance,
    linkName: SocialLinkNames.Temperance,
    available: available(true),
  },
  [socialLinkSpendTimeNames.TemperanceSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    linkName: SocialLinkNames.Temperance,
    name: socialLinkSpendTimeNames.TemperanceSpendTime,
    available: available(false),
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
