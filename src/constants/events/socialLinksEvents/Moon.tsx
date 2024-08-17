import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkSpendTimeNames, Times, Event } from "../types";
import { SingleDay } from "@/constants/calendar";
import { StatsNames } from "@/constants/stats";

import {
  socialLinkSpendTimeEventBase,
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
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);
    return (
      currentDay.date.getTime() >= new Date(2009, 3, 28).getTime() &&
      previousDay.links[SocialLinkNames.Magician].level >= 3 &&
      previousDay.stats[StatsNames.Charm] >= 15 &&
      isNewLevel === shouldLevelUp &&
      time === Times.Day
    );
  };
}

export const moonEvents: {
  [SocialLinkNames.Moon]: Event;
  [socialLinkSpendTimeNames.MoonSpendTime]: Event;
} = {
  [SocialLinkNames.Moon]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Moon,
    linkName: SocialLinkNames.Moon,
    available: available(true),
  },
  [socialLinkSpendTimeNames.MoonSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    linkName: SocialLinkNames.Moon,
    name: socialLinkSpendTimeNames.MoonSpendTime,
    available: available(false),
  },
};
