import { socialLinkEventBase } from "./socialLinkEventsBase";
import { SocialLinkNames } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { Times, Event } from "../types";

export const hierophantEvents: {
  [SocialLinkNames.Hierophant]: Event;
} = {
  [SocialLinkNames.Hierophant]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Hierophant,
    linkName: SocialLinkNames.Hierophant,
    available: function ({ currentDay, time }) {
      const days = [
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
        DaysNames.sunday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 25).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day
      );
    },
  },
};
