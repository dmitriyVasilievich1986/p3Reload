import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkEventBase } from "./socialLinkEventsBase";
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

      const link = this.linkName as SocialLinkNames;
      const thisLink = currentDay.links[link];
      const isNewLevel = socialLinks[link].isNewLevel(thisLink);
      const days = [DaysNames.tuesday, DaysNames.saturday];
      const charmLevel = stats[StatsNames.Charm].levels[3].value;

      return (
        currentDay.date.getTime() >= new Date(2009, 4, 16).getTime() &&
        previousDay.links[SocialLinkNames.Hermit].level >= 4 &&
        previousDay.stats[StatsNames.Charm] >= charmLevel &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening &&
        isNewLevel
      );
    },
  },
};
