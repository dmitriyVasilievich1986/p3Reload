import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkEventBase } from "./socialLinkEventsBase";
import { DaysNames } from "@/constants/monthsNames";
import { stats } from "@/constants/stats";
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
      return (
        currentDay.date.getTime() >= new Date(2009, 7, 9).getTime() &&
        previousDay.links[socialLinks.HangedMan.linkName].level >= 3 &&
        previousDay.stats[stats.Academics.name] >= 100 &&
        currentDay.date.getDay() == DaysNames.sunday &&
        time === Times.Day
      );
    },
  },
};
