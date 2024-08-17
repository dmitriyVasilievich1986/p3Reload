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
    const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.friday];
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);
    return (
      currentDay.date.getTime() >= new Date(2009, 3, 22).getTime() &&
      days.includes(currentDay.date.getDay()) &&
      isNewLevel === shouldLevelUp &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams
    );
  };
}

export const magicianEvents: {
  [SocialLinkNames.Magician]: Event;
  [socialLinkSpendTimeNames.MagicianSpendTime]: Event;
  [socialLinkInvitationNames.MagicianInvitation]: Event;
} = {
  [SocialLinkNames.Magician]: {
    ...socialLinkEventBase,
    name: SocialLinkNames.Magician,
    linkName: SocialLinkNames.Magician,
    available: available(true),
  },
  [socialLinkSpendTimeNames.MagicianSpendTime]: {
    ...socialLinkSpendTimeEventBase,
    linkName: SocialLinkNames.Magician,
    name: socialLinkSpendTimeNames.MagicianSpendTime,
    available: available(false),
  },
  [socialLinkInvitationNames.MagicianInvitation]: {
    ...socialLinkInvitationEventBase,
    linkName: SocialLinkNames.Magician,
    name: socialLinkInvitationNames.MagicianInvitation,
    available: invitationAvailable([
      new Date(2009, 3, 26).getTime(),
      new Date(2009, 4, 5).getTime(),
      new Date(2009, 4, 24).getTime(),
      new Date(2009, 5, 14).getTime(),
      new Date(2009, 7, 5).getTime(),
      new Date(2009, 7, 26).getTime(),
      new Date(2009, 8, 22).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2010, 0, 4).getTime(),
      new Date(2010, 0, 11).getTime(),
    ]),
  },
};
