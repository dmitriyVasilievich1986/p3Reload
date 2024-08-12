import { socialLinkEventBase } from "./socialLinkEventsBase";
import { SocialLinkNames } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { Times, Event } from "../types";

export const hermitEvents: {
  [SocialLinkNames.Hermit]: Event;
} = {
  [SocialLinkNames.Hermit]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Hermit,
    linkName: SocialLinkNames.Hermit,
    available: function ({ currentDay, time }) {
      const days = [
        new Date(2009, 3, 29).getTime(),
        new Date(2009, 4, 4).getTime(),
        new Date(2009, 4, 5).getTime(),
        new Date(2009, 8, 22).getTime(),
        new Date(2009, 8, 23).getTime(),
        new Date(2009, 8, 24).getTime(),
        new Date(2009, 9, 12).getTime(),
      ];
      const isToday =
        currentDay.date.getDay() === DaysNames.sunday ||
        days.includes(currentDay.date.getTime());
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 29).getTime() &&
        time === Times.Day &&
        isToday
      );
    },
  },
};
