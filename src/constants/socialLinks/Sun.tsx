import { LinkMainLevelsChooseAny } from "./classes/LinkLevels";
import { SocialLinkAlwaysLevelUp } from "./classes/SocialLink";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
} from "./types";

class SunMainLevels extends LinkMainLevelsChooseAny {
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
}

export const Sun = new SocialLinkAlwaysLevelUp(
  SocialLinkNames.Sun,
  { name: "Akinari Kamiki", place: "Naganaki Shrine" },
  { mainLevels: new SunMainLevels() }
);
