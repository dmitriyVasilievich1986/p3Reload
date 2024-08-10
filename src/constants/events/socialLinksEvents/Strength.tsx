import { SocialLinkNames, socialLinks, Routes } from "@/constants/socialLinks";
import { CardWithoutMultiplier, CardWithMultiplier } from "./genericCards";
import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";

import {
  socialLinkInvitationNames,
  socialLinkRomanceNames,
  Times,
  Event,
} from "../types";

function available(route: Routes) {
  return function ({
    previousDay,
    currentDay,
    time,
  }: {
    previousDay?: SingleDay;
    currentDay: SingleDay;
    time: Times;
  }) {
    if (previousDay === undefined) return false;
    const isRomance =
      currentDay.links[SocialLinkNames.Strength].romance === route ||
      previousDay.links[SocialLinkNames.Strength].level === 2;
    const days = [DaysNames.wednesday, DaysNames.saturday];
    return (
      currentDay.date.getTime() >= new Date(2009, 3, 24).getTime() &&
      previousDay.links[SocialLinkNames.Chariot].level >= 2 &&
      days.includes(currentDay.date.getDay()) &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isRomance
    );
  };
}

const strengthBase: Event = {
  ...linkBaseFunctions,
  time: Times.Day,
  name: SocialLinkNames.Strength,
  linkName: SocialLinkNames.Strength,
  label: CardWithMultiplier,
  available: available(Routes.Platonic),
};

export const strengthEvents: {
  [SocialLinkNames.Strength]: Event;
  [socialLinkRomanceNames.StrengthRomance]: Event;
  [socialLinkInvitationNames.StrengthInvitation]: Event;
} = {
  [SocialLinkNames.Strength]: strengthBase,
  [socialLinkRomanceNames.StrengthRomance]: {
    ...strengthBase,
    name: socialLinkRomanceNames.StrengthRomance,
    upgrade: function (currentDay) {
      return socialLinks[SocialLinkNames.Strength].calculate(
        new SingleDay({
          ...currentDay,
          links: {
            ...currentDay.links,
            [SocialLinkNames.Strength]: {
              ...currentDay.links[SocialLinkNames.Strength],
              romance: Routes.Romantic,
            },
          },
        })
      );
    },
    available: available(Routes.Romantic),
  },
  [socialLinkInvitationNames.StrengthInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    linkName: SocialLinkNames.Strength,
    name: socialLinkInvitationNames.StrengthInvitation,
    label: CardWithoutMultiplier,
    _invitationsDates: [
      new Date(2009, 4, 31).getTime(),
      new Date(2009, 6, 5).getTime(),
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 7, 26).getTime(),
      new Date(2009, 8, 22).getTime(),
      new Date(2009, 9, 25).getTime(),
      new Date(2009, 10, 15).getTime(),
      new Date(2010, 0, 6).getTime(),
      new Date(2010, 0, 17).getTime(),
    ],
  },
};
