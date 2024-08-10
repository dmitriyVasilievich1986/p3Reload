import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { CardWithMultiplier } from "./genericCards";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "@/constants/stats";
import { Times, Event } from "../types";

export const sunEvents: {
  [SocialLinkNames.Sun]: Event;
} = {
  [SocialLinkNames.Sun]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Sun,
    linkName: SocialLinkNames.Sun,
    label: CardWithMultiplier,
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
