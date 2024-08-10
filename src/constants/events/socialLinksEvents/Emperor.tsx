import { SocialLinkNames } from "@/constants/socialLinks";
import { CardWithMultiplier } from "./genericCards";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { Times, Event } from "../types";

export const emperorEvents: {
  [SocialLinkNames.Emperor]: Event;
} = {
  [SocialLinkNames.Emperor]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Emperor,
    linkName: SocialLinkNames.Emperor,
    label: CardWithMultiplier,
    available: function ({ currentDay, time }) {
      const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.friday];
      const isToday =
        currentDay.date.getTime() >= new Date(2010, 0, 1).getTime() ||
        days.includes(currentDay.date.getDay());
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 27).getTime() &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isToday
      );
    },
  },
};
