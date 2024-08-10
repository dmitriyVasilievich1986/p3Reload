import { SocialLinkNames } from "@/constants/socialLinks";
import { CardWithMultiplier } from "./genericCards";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "@/constants/stats";
import { Times, Event } from "../types";

export const starEvents: {
  [SocialLinkNames.Star]: Event;
} = {
  [SocialLinkNames.Star]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Star,
    linkName: SocialLinkNames.Star,
    label: CardWithMultiplier,
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.wednesday, DaysNames.friday, DaysNames.sunday];
      return (
        currentDay.date.getTime() >= new Date(2009, 7, 5).getTime() &&
        previousDay.stats[stats.Courage.name] >= 45 &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day
      );
    },
  },
};
