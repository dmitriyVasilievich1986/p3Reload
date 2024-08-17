import { SocialLinkNames, socialLinks, Routes } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";

import {
  socialLinkSpendTimeNames,
  socialLinkRomanceNames,
  Times,
  Event,
} from "../types";

import {
  socialLinkSpendTimeEventBase,
  socialLinkRomanceEventBase,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

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
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);
    const isRomance =
      previousDay.links[link].level === 6 ||
      thisLink.romance === route ||
      route === null;
    const days = [
      DaysNames.monday,
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.friday,
      DaysNames.saturday,
    ];
    return (
      currentDay.date.getTime() >= new Date(2010, 0, 8).getTime() &&
      days.includes(currentDay.date.getDay()) &&
      isNewLevel === shouldLevelUp &&
      time === Times.Day &&
      isRomance
    );
  };
}

export const aeonEvents: {
  [SocialLinkNames.Aeon]: Event;
  [socialLinkRomanceNames.AeonRomance]: Event;
  [socialLinkSpendTimeNames.AeonSpendTime]: Event;
} = {
  [SocialLinkNames.Aeon]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Aeon,
    linkName: SocialLinkNames.Aeon,
    available: available(Routes.Platonic),
  },
  [socialLinkRomanceNames.AeonRomance]: {
    ...socialLinkRomanceEventBase,
    name: SocialLinkNames.Aeon,
    linkName: SocialLinkNames.Aeon,
    available: available(Routes.Romantic),
  },
  [socialLinkSpendTimeNames.AeonSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    linkName: SocialLinkNames.Aeon,
    name: socialLinkSpendTimeNames.AeonSpendTime,
    available: available(null, false),
  },
};
