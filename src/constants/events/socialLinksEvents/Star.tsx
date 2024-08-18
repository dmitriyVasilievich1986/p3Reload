import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkShrineNames, Times, Event } from "../types";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";

import {
  socialLinkShrineEventBase,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

export const starEvents: {
  [SocialLinkNames.Star]: Event;
  [socialLinkShrineNames.StarShrineTime]: Event;
} = {
  [SocialLinkNames.Star]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Star,
    linkName: SocialLinkNames.Star,
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
      const days = [DaysNames.wednesday, DaysNames.friday, DaysNames.sunday];
      const link = this.linkName as SocialLinkNames;
      const thisLink = currentDay.links[link];
      const isNewLevel = socialLinks[link].isNewLevel(thisLink);
      const courageLevel = stats[StatsNames.Courage].levels[3].value;
      return (
        currentDay.date.getTime() >= new Date(2009, 7, 5).getTime() &&
        previousDay.stats[StatsNames.Courage] >= courageLevel &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day &&
        isNewLevel
      );
    },
  },
  [socialLinkShrineNames.StarShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Star,
    name: socialLinkShrineNames.StarShrineTime,
  },
};
