import { SocialLinkAlwaysLevelUp, LinkMainLevels } from "./baseFunctions";
import { createBondObject, ChooseAnyObject } from "./GenericCard";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
  LevelsType,
  Routes,
} from "./types";

class SunMainLevels extends LinkMainLevels {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps
  ): boolean {
    const linkName = socialLink.linkName;
    const academicsLevel = stats[StatsNames.Academics].levels[5].value;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);

    return (
      props.currentDay.date.getTime() >= new Date(2009, 7, 9).getTime() &&
      props.previousDay!.stats[StatsNames.Academics] >= academicsLevel &&
      props.previousDay!.links[SocialLinkNames.HangedMan].level >= 3 &&
      props.currentDay.date.getDay() == DaysNames.sunday &&
      props.time === Times.Day &&
      isNewLevel
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

export const Sun = new SocialLinkAlwaysLevelUp(
  SocialLinkNames.Sun,
  { name: "Akinari Kamiki", place: "Naganaki Shrine" },
  { mainLevels: new SunMainLevels() }
);
