import { SocialLinkNames, socialLinks, Routes } from "@/constants/socialLinks";
import { CardWithoutMultiplier, CardWithMultiplier } from "./genericCards";
import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";
import { stats } from "@/constants/stats";

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
      currentDay.links[SocialLinkNames.Lovers].romance === route ||
      previousDay.links[SocialLinkNames.Lovers].level === 6;
    const days = [
      DaysNames.monday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.saturday,
    ];
    return (
      currentDay.date.getTime() >= new Date(2009, 6, 25).getTime() &&
      previousDay.stats[stats.Charm.name] >= 100 &&
      days.includes(currentDay.date.getDay()) &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isRomance
    );
  };
}

const loversBase: Event = {
  ...linkBaseFunctions,
  time: Times.Day,
  name: SocialLinkNames.Lovers,
  linkName: SocialLinkNames.Lovers,
  label: CardWithMultiplier,
  available: available(Routes.Platonic),
};

export const loversEvents: {
  [SocialLinkNames.Lovers]: Event;
  [socialLinkRomanceNames.LoversRomance]: Event;
  [socialLinkInvitationNames.LoversInvitation]: Event;
} = {
  [SocialLinkNames.Lovers]: loversBase,
  [socialLinkRomanceNames.LoversRomance]: {
    ...loversBase,
    name: socialLinkRomanceNames.LoversRomance,
    upgrade: function (currentDay) {
      return socialLinks[SocialLinkNames.Lovers].calculate(
        new SingleDay({
          ...currentDay,
          links: {
            ...currentDay.links,
            [SocialLinkNames.Lovers]: {
              ...currentDay.links[SocialLinkNames.Lovers],
              romance: Routes.Romantic,
            },
          },
        })
      );
    },
  },
  [socialLinkInvitationNames.LoversInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    linkName: SocialLinkNames.Lovers,
    name: socialLinkInvitationNames.LoversInvitation,
    label: CardWithoutMultiplier,
    _invitationsDates: [
      new Date(2009, 8, 13).getTime(),
      new Date(2009, 8, 23).getTime(),
      new Date(2009, 9, 25).getTime(),
      new Date(2009, 10, 15).getTime(),
      new Date(2010, 0, 7).getTime(),
      new Date(2010, 0, 10).getTime(),
      new Date(2010, 0, 17).getTime(),
      new Date(2010, 0, 24).getTime(),
    ],
  },
};
