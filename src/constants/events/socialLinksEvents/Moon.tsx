import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkShrineNames, Times, Event } from "../types";
import { SingleDay } from "@/constants/calendar";
import { StatsNames } from "@/constants/stats";

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
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 28).getTime() &&
        previousDay.links[SocialLinkNames.Magician].level >= 3 &&
        previousDay.stats[StatsNames.Charm] >= 15 &&
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
