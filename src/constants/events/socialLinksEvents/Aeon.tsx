import { SocialLinkNames, Routes } from "@/constants/socialLinks";
import { socialLinkRomanceNames, Times, Event } from "../types";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { CardWithMultiplier } from "./genericCards";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";

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
      currentDay.links[SocialLinkNames.Empress].romance === route ||
      previousDay.links[SocialLinkNames.Empress].level === 6;
    const days = [
      DaysNames.monday,
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.friday,
      DaysNames.saturday,
    ];
    return (
      currentDay.date.getTime() >= new Date(2010, 0, 8).getTime() &&
      days.includes(currentDay.date.getDay()) &&
      time === Times.Day &&
      isRomance
    );
  };
}

const aeonBase: Event = {
  ...linkBaseFunctions,
  time: Times.Day,
  name: SocialLinkNames.Aeon,
  linkName: SocialLinkNames.Aeon,
  label: CardWithMultiplier,
  available: available(Routes.Platonic),
};

export const aeonEvents: {
  [SocialLinkNames.Aeon]: Event;
  [socialLinkRomanceNames.AeonRomance]: Event;
} = {
  [SocialLinkNames.Aeon]: aeonBase,
  [socialLinkRomanceNames.AeonRomance]: {
    ...aeonBase,
    available: available(Routes.Romantic),
  },
};
