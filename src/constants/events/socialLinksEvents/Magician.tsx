import { CardWithoutMultiplier, CardWithMultiplier } from "./genericCards";
import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { socialLinkInvitationNames, Times, Event } from "../types";
import { SocialLinkNames } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";

export const magicianEvents: {
  [SocialLinkNames.Magician]: Event;
  [socialLinkInvitationNames.MagicianInvitation]: Event;
} = {
  [SocialLinkNames.Magician]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Magician,
    linkName: SocialLinkNames.Magician,
    label: CardWithMultiplier,
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.friday];
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 22).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day &&
        !currentDay.isDayOff &&
        !currentDay.exams
      );
    },
  },
  [socialLinkInvitationNames.MagicianInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    linkName: SocialLinkNames.Magician,
    name: socialLinkInvitationNames.MagicianInvitation,
    label: CardWithoutMultiplier,
    _invitationsDates: [
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
    ],
  },
};
