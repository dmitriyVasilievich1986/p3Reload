import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";

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
    const courageLevel = stats[StatsNames.Courage].levels[1].value;
    return (
      currentDay.date.getTime() >= new Date(2009, 4, 23).getTime() &&
      previousDay.links[SocialLinkNames.Strength].level >= 4 &&
      previousDay.stats[StatsNames.Courage] >= courageLevel &&
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
