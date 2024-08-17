import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";

import {
  socialLinkInvitationNames,
  socialLinkSpendTimeNames,
  Times,
  Event,
} from "../types";

import {
  socialLinkInvitationEventBase,
  socialLinkSpendTimeEventBase,
  invitationAvailable,
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
    const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.thursday];
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);
    return (
      currentDay.date.getTime() >= new Date(2009, 5, 17).getTime() &&
      days.includes(currentDay.date.getDay()) &&
      isNewLevel === shouldLevelUp &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams
    );
  };
}

export const fortuneEvents: {
  [SocialLinkNames.Fortune]: Event;
  [socialLinkSpendTimeNames.FortuneSpendTime]: Event;
  [socialLinkInvitationNames.FortuneInvitation]: Event;
} = {
  [SocialLinkNames.Fortune]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Fortune,
    linkName: SocialLinkNames.Fortune,
    available: available(true),
  },
  [socialLinkSpendTimeNames.FortuneSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    linkName: SocialLinkNames.Fortune,
    name: socialLinkSpendTimeNames.FortuneSpendTime,
    available: available(false),
  },
  [socialLinkInvitationNames.FortuneInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Fortune,
    name: socialLinkInvitationNames.FortuneInvitation,
    available: invitationAvailable([
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 7, 7).getTime(),
      new Date(2009, 8, 23).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2010, 0, 4).getTime(),
      new Date(2010, 0, 10).getTime(),
      new Date(2010, 0, 11).getTime(),
    ]),
  },
};
