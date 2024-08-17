import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkShrineNames, Times, Event } from "../types";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";

import {
  socialLinkShrineEventBase,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

export const hangedManEvents: {
  [SocialLinkNames.HangedMan]: Event;
  [socialLinkShrineNames.HangedManShrineTime]: Event;
} = {
  [SocialLinkNames.HangedMan]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.HangedMan,
    linkName: SocialLinkNames.HangedMan,
    available: function ({
      currentDay,
      time,
    }: {
      previousDay?: SingleDay;
      currentDay: SingleDay;
      time: Times;
    }) {
      const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.saturday];
      const link = this.linkName as SocialLinkNames;
      const thisLink = currentDay.links[link];
      const isNewLevel = socialLinks[link].isNewLevel(thisLink);
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 6).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day &&
        isNewLevel
      );
    },
  },
  [socialLinkShrineNames.HangedManShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.HangedMan,
    name: socialLinkShrineNames.HangedManShrineTime,
  },
};
