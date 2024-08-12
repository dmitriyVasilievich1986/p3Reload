import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkEventBase } from "./socialLinkEventsBase";
import { stats } from "@/constants/stats";
import { Times, Event } from "../types";

export const moonEvents: {
  [SocialLinkNames.Moon]: Event;
} = {
  [SocialLinkNames.Moon]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Moon,
    linkName: SocialLinkNames.Moon,
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 28).getTime() &&
        previousDay.links[socialLinks.Magician.linkName].level >= 3 &&
        previousDay.stats[stats.Charm.name] >= 15 &&
        time === Times.Day
      );
    },
  },
};
