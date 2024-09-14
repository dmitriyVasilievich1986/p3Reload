import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";

import {
  SocialLinkAlwaysLevelUp,
  LinkMainLevelsChooseAny,
} from "./baseFunctions";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
  Routes,
} from "./types";

class DevilMainLevels extends LinkMainLevelsChooseAny {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps,
    route: Routes
  ): boolean {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);
    const isRomance =
      previousLink.level === 6 || previousLink.romance === route;
    const days = [
      DaysNames.monday,
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.friday,
      DaysNames.saturday,
    ];

    return (
      props.currentDay.date.getTime() >= new Date(2010, 0, 8).getTime() &&
      days.includes(props.currentDay.date.getDay()) &&
      props.time === Times.Day &&
      isNewLevel &&
      isRomance
    );
  }
}

export const Devil = new SocialLinkAlwaysLevelUp(
  SocialLinkNames.Devil,
  { name: "President Tanaka", place: "Paulownia Mall" },
  { mainLevels: new DevilMainLevels() }
);
