import { SocialLinkAvailableProps, SocialLinkNames, Routes } from "./types";
import { createBondObject, ChooseAnyObject } from "./GenericCard";
import { SocialLinkAlwaysLevelUp } from "./baseFunctions";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";

class SunSocialLink extends SocialLinkAlwaysLevelUp {
  isLinkAvailable(props: SocialLinkAvailableProps): boolean {
    const academicsLevel = stats[StatsNames.Academics].levels[5].value;
    const previousLink = props.previousDay!.links[this.linkName];
    const isNewLevel = this.isNewLevel(previousLink);

    return (
      props.currentDay.date.getTime() >= new Date(2009, 7, 9).getTime() &&
      props.previousDay!.stats[StatsNames.Academics] >= academicsLevel &&
      props.previousDay!.links[SocialLinkNames.HangedMan].level >= 3 &&
      props.currentDay.date.getDay() == DaysNames.sunday &&
      props.time === Times.Day &&
      isNewLevel
    );
  }
}

export const Sun = new SunSocialLink(
  SocialLinkNames.Sun,
  { name: "Akinari Kamiki", place: "Naganaki Shrine" },
  {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    10: {
      [Routes.Platonic]: ChooseAnyObject,
    },
  }
);
