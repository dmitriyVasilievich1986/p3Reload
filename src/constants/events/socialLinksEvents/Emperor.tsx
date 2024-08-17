import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkShrineNames, Times, Event } from "../types";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";

import {
  socialLinkShrineEventBase,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

export const emperorEvents: {
  [SocialLinkNames.Emperor]: Event;
  [socialLinkShrineNames.EmperorShrineTime]: Event;
} = {
  [SocialLinkNames.Emperor]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Emperor,
    linkName: SocialLinkNames.Emperor,
    available: function ({
      currentDay,
      time,
    }: {
      previousDay?: SingleDay;
      currentDay: SingleDay;
      time: Times;
    }) {
      const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.friday];
      const isToday =
        currentDay.date.getTime() >= new Date(2010, 0, 1).getTime() ||
        days.includes(currentDay.date.getDay());
      const link = this.linkName as SocialLinkNames;
      const thisLink = currentDay.links[link];
      const isNewLevel = socialLinks[link].isNewLevel(thisLink);
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 27).getTime() &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isNewLevel &&
        isToday
      );
    },
  },
  [socialLinkShrineNames.EmperorShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Emperor,
    name: socialLinkShrineNames.EmperorShrineTime,
  },
};
