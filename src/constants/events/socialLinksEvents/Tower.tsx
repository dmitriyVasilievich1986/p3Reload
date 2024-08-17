import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";
import { StatsNames } from "@/constants/stats";

import {
  socialLinkSpendTimeNames,
  socialLinkShrineNames,
  Times,
  Event,
} from "../types";

import {
  socialLinkSpendTimeEventBase,
  socialLinkShrineEventBase,
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
    const days = [
      DaysNames.thursday,
      DaysNames.friday,
      DaysNames.saturday,
      DaysNames.sunday,
    ];
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);
    return (
      currentDay.date.getTime() >= new Date(2009, 4, 23).getTime() &&
      previousDay.links[SocialLinkNames.Strength].level >= 4 &&
      previousDay.stats[StatsNames.Courage] >= 15 &&
      days.includes(currentDay.date.getDay()) &&
      isNewLevel === shouldLevelUp &&
      time === Times.Evening
    );
  };
}

export const towerEvents: {
  [SocialLinkNames.Tower]: Event;
  [socialLinkShrineNames.TowerShrineTime]: Event;
  [socialLinkSpendTimeNames.TowerSpendTime]: Event;
} = {
  [SocialLinkNames.Tower]: {
    ...socialLinkEventBase,
    time: Times.Evening,
    name: SocialLinkNames.Tower,
    linkName: SocialLinkNames.Tower,
    available: available(true),
  },
  [socialLinkSpendTimeNames.TowerSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    time: Times.Evening,
    name: SocialLinkNames.Tower,
    linkName: SocialLinkNames.Tower,
    available: available(false),
  },
  [socialLinkShrineNames.TowerShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Tower,
    name: socialLinkShrineNames.TowerShrineTime,
  },
};
