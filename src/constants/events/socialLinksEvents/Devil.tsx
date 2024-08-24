import { socialLinkEventBase } from "./socialLinkEventsBase";
import { SocialLinkNames } from "@/constants/socialLinks";
import { CardWithoutMultiplier } from "./genericCards";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { Times, Event } from "../types";

export const devilEvents: {
  [SocialLinkNames.Devil]: Event;
} = {
  [SocialLinkNames.Devil]: {
    ...socialLinkEventBase,
    time: Times.Evening,
    name: SocialLinkNames.Devil,
    linkName: SocialLinkNames.Devil,
    label: CardWithoutMultiplier,
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.tuesday, DaysNames.saturday];
      const charmLevel = stats[StatsNames.Charm].levels[3].value;
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 16).getTime() &&
        previousDay.links[SocialLinkNames.Hermit].level >= 4 &&
        previousDay.stats[StatsNames.Charm] >= charmLevel &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening
      );
    },
  },
};
