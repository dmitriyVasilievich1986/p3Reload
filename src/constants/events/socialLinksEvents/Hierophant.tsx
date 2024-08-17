import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkShrineNames, Times, Event } from "../types";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";

import {
  socialLinkShrineEventBase,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

export const hierophantEvents: {
  [SocialLinkNames.Hierophant]: Event;
  [socialLinkShrineNames.HierophantShrineTime]: Event;
} = {
  [SocialLinkNames.Hierophant]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Hierophant,
    linkName: SocialLinkNames.Hierophant,
    available: function ({
      currentDay,
      time,
    }: {
      previousDay?: SingleDay;
      currentDay: SingleDay;
      time: Times;
    }) {
      const days = [
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
        DaysNames.sunday,
      ];
      const link = this.linkName as SocialLinkNames;
      const thisLink = currentDay.links[link];
      const isNewLevel = socialLinks[link].isNewLevel(thisLink);
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 25).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day &&
        isNewLevel
      );
    },
  },
  [socialLinkShrineNames.HierophantShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Hierophant,
    name: socialLinkShrineNames.HierophantShrineTime,
  },
};
