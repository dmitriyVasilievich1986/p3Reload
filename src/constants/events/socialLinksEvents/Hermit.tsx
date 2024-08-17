import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkShrineNames, Times, Event } from "../types";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";

import {
  socialLinkShrineEventBase,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

export const hermitEvents: {
  [SocialLinkNames.Hermit]: Event;
  [socialLinkShrineNames.HermitShrineTime]: Event;
} = {
  [SocialLinkNames.Hermit]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Hermit,
    linkName: SocialLinkNames.Hermit,
    available: function ({
      currentDay,
      time,
    }: {
      previousDay?: SingleDay;
      currentDay: SingleDay;
      time: Times;
    }) {
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
      const link = this.linkName as SocialLinkNames;
      const thisLink = currentDay.links[link];
      const isNewLevel = socialLinks[link].isNewLevel(thisLink);
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 29).getTime() &&
        time === Times.Day &&
        isNewLevel &&
        isToday
      );
    },
  },
  [socialLinkShrineNames.HermitShrineTime]: {
    ...socialLinkShrineEventBase,
    linkName: SocialLinkNames.Hermit,
    name: socialLinkShrineNames.HermitShrineTime,
  },
};
