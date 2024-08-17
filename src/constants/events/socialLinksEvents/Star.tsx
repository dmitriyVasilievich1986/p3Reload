import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkSpendTimeNames, Times, Event } from "../types";
import { DaysNames } from "@/constants/monthsNames";
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
    const days = [DaysNames.wednesday, DaysNames.friday, DaysNames.sunday];
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);
    return (
      currentDay.date.getTime() >= new Date(2009, 7, 5).getTime() &&
      previousDay.stats[StatsNames.Courage] >= 45 &&
      days.includes(currentDay.date.getDay()) &&
      isNewLevel === shouldLevelUp &&
      time === Times.Day
    );
  };
}

export const starEvents: {
  [SocialLinkNames.Star]: Event;
  [socialLinkSpendTimeNames.StarSpendTime]: Event;
} = {
  [SocialLinkNames.Star]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Star,
    linkName: SocialLinkNames.Star,
    available: available(true),
  },
  [socialLinkSpendTimeNames.StarSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    linkName: SocialLinkNames.Star,
    name: socialLinkSpendTimeNames.StarSpendTime,
    available: available(false),
  },
};
