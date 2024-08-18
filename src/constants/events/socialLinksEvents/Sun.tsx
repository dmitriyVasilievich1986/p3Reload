import { socialLinkEventBase } from "./socialLinkEventsBase";
import { SocialLinkNames } from "@/constants/socialLinks";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { Times, Event } from "../types";

export const sunEvents: {
  [SocialLinkNames.Sun]: Event;
} = {
  [SocialLinkNames.Sun]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Sun,
    linkName: SocialLinkNames.Sun,
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const academicsLevel = stats[StatsNames.Academics].levels[5].value;
      return (
        currentDay.date.getTime() >= new Date(2009, 7, 9).getTime() &&
        previousDay.stats[StatsNames.Academics] >= academicsLevel &&
        previousDay.links[SocialLinkNames.HangedMan].level >= 3 &&
        currentDay.date.getDay() == DaysNames.sunday &&
        time === Times.Day
      );
    },
  },
};
