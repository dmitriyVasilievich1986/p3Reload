import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkSpendTimeNames, Times, Event } from "../types";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";

import {
  socialLinkSpendTimeEventBase,
  socialLinkEventBase,
} from "./socialLinkEventsBase";

function available(shouldLevelUp: boolean) {
  return function (
    this: Event,
    {
      currentDay,
      time,
    }: {
      previousDay?: SingleDay;
      currentDay: SingleDay;
      time: Times;
    }
  ) {
    const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.friday];
    const isToday =
      currentDay.date.getTime() >= new Date(2010, 0, 1).getTime() ||
      days.includes(currentDay.date.getDay());
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);
    return (
      currentDay.date.getTime() >= new Date(2009, 3, 27).getTime() &&
      isNewLevel === shouldLevelUp &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isToday
    );
  };
}

export const emperorEvents: {
  [SocialLinkNames.Emperor]: Event;
  [socialLinkSpendTimeNames.EmperorSpendTime]: Event;
} = {
  [SocialLinkNames.Emperor]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Emperor,
    linkName: SocialLinkNames.Emperor,
    available: available(true),
  },
  [socialLinkSpendTimeNames.EmperorSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    linkName: SocialLinkNames.Emperor,
    name: socialLinkSpendTimeNames.EmperorSpendTime,
    available: available(false),
  },
};
