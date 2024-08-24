import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkShrineNames, Times, Event } from "../types";
import { StatsNames, stats } from "@/constants/stats";
import { SingleDay } from "@/constants/calendar";

import {
  socialLinkShrineEventBase,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

export const moonEvents: {
  [SocialLinkNames.Moon]: Event;
  [socialLinkShrineNames.MoonShrineTime]: Event;
} = {
  [SocialLinkNames.Moon]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Moon,
    linkName: SocialLinkNames.Moon,
    available: function ({
      previousDay,
      currentDay,
      time,
    }: {
      previousDay?: SingleDay;
      currentDay: SingleDay;
      time: Times;
    }) {
      if (previousDay === undefined) return false;
      const link = this.linkName as SocialLinkNames;
      const thisLink = currentDay.links[link];
      const isNewLevel = socialLinks[link].isNewLevel(thisLink);
      const charmLevel = stats[StatsNames.Charm].levels[1].value;
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 28).getTime() &&
        previousDay.links[SocialLinkNames.Magician].level >= 3 &&
        previousDay.stats[StatsNames.Charm] >= charmLevel &&
        time === Times.Day &&
        isNewLevel
      );
    },
  },
  [socialLinkShrineNames.MoonShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Moon,
    name: socialLinkShrineNames.MoonShrineTime,
  },
};
