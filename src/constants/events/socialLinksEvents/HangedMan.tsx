import { socialLinkEventBase } from "./socialLinkEventsBase";
import { SocialLinkNames } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { Times, Event } from "../types";

export const hangedManEvents: {
  [SocialLinkNames.HangedMan]: Event;
} = {
  [SocialLinkNames.HangedMan]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.HangedMan,
    linkName: SocialLinkNames.HangedMan,
    available: function ({ currentDay, time }) {
      const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.saturday];
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 6).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day
      );
    },
  },
};
