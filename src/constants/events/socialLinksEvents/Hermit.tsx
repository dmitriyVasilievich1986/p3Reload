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
      isNewLevel === shouldLevelUp &&
      time === Times.Day &&
      isToday
    );
  };
}

export const hermitEvents: {
  [SocialLinkNames.Hermit]: Event;
  [socialLinkSpendTimeNames.HermitSpendTime]: Event;
} = {
  [SocialLinkNames.Hermit]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Hermit,
    linkName: SocialLinkNames.Hermit,
    available: available(true),
  },
  [socialLinkSpendTimeNames.HermitSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    linkName: SocialLinkNames.Hermit,
    name: socialLinkSpendTimeNames.HermitSpendTime,
    available: available(false),
  },
};
