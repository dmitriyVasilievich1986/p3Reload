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
      isNewLevel === shouldLevelUp &&
      time === Times.Day
    );
  };
}

export const hierophantEvents: {
  [SocialLinkNames.Hierophant]: Event;
  [socialLinkSpendTimeNames.HierophantSpendTime]: Event;
} = {
  [SocialLinkNames.Hierophant]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Hierophant,
    linkName: SocialLinkNames.Hierophant,
    available: available(true),
  },
  [socialLinkSpendTimeNames.HierophantSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    linkName: SocialLinkNames.Hierophant,
    name: socialLinkSpendTimeNames.HierophantSpendTime,
    available: available(false),
  },
};
