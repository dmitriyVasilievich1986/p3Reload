import { CardWithoutMultiplier, CardWithMultiplier } from "./genericCards";
import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { socialLinkInvitationNames, Times, Event } from "../types";
import { SocialLinkNames } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";

export const fortuneEvents: {
  [SocialLinkNames.Fortune]: Event;
  [socialLinkInvitationNames.FortuneInvitation]: Event;
} = {
  [SocialLinkNames.Fortune]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Fortune,
    linkName: SocialLinkNames.Fortune,
    label: CardWithMultiplier,
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.thursday];
      return (
        currentDay.date.getTime() >= new Date(2009, 5, 17).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams
      );
    },
  },
  [socialLinkInvitationNames.FortuneInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    linkName: SocialLinkNames.Fortune,
    name: socialLinkInvitationNames.FortuneInvitation,
    label: CardWithoutMultiplier,
    _invitationsDates: [
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 7, 7).getTime(),
      new Date(2009, 8, 23).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2010, 0, 4).getTime(),
      new Date(2010, 0, 10).getTime(),
      new Date(2010, 0, 11).getTime(),
    ],
  },
};
