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
    const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.saturday];
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);
    return (
      currentDay.date.getTime() >= new Date(2009, 4, 6).getTime() &&
      days.includes(currentDay.date.getDay()) &&
      isNewLevel === shouldLevelUp &&
      time === Times.Day
    );
  };
}

export const hangedManEvents: {
  [SocialLinkNames.HangedMan]: Event;
  [socialLinkSpendTimeNames.HangedManSpendTime]: Event;
} = {
  [SocialLinkNames.HangedMan]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.HangedMan,
    linkName: SocialLinkNames.HangedMan,
    available: available(true),
  },
  [socialLinkSpendTimeNames.HangedManSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    linkName: SocialLinkNames.HangedMan,
    name: socialLinkSpendTimeNames.HangedManSpendTime,
    available: available(false),
  },
};
