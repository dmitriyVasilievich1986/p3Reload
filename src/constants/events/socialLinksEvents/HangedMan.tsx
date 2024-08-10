import { SocialLinkNames } from "@/constants/socialLinks";
import { CardWithMultiplier } from "./genericCards";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { Times, Event } from "../types";

export const hangedManEvents: {
  [SocialLinkNames.HangedMan]: Event;
} = {
  [SocialLinkNames.HangedMan]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.HangedMan,
    linkName: SocialLinkNames.HangedMan,
    label: CardWithMultiplier,
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
