import { SocialLinkAlwaysLevelUp, LinkMainLevels } from "./baseFunctions";
import { createBondObject, ChooseAnyObject } from "./GenericCard";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
  LevelsType,
  Routes,
} from "./types";

class DevilMainLevels extends LinkMainLevels {
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

  levels: LevelsType = {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    10: {
      [Routes.Platonic]: ChooseAnyObject,
    },
  };
}

export const Devil = new SocialLinkAlwaysLevelUp(
  SocialLinkNames.Devil,
  { name: "President Tanaka", place: "Paulownia Mall" },
  { mainLevels: new DevilMainLevels() }
);
