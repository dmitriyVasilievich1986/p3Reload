import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { CardWithoutMultiplier } from "./genericCards";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "@/constants/stats";
import { Times, Event } from "../types";

export const devilEvents: {
  [SocialLinkNames.Devil]: Event;
} = {
  [SocialLinkNames.Devil]: {
    ...linkBaseFunctions,
    time: Times.Evening,
    name: SocialLinkNames.Devil,
    linkName: SocialLinkNames.Devil,
    label: CardWithoutMultiplier,
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.tuesday, DaysNames.saturday];
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 16).getTime() &&
        previousDay.links[socialLinks.Hermit.linkName].level >= 4 &&
        previousDay.stats[stats.Charm.name] >= 45 &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening
      );
    },
  },
};
