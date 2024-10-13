import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";

import { LinkMainLevelsChooseAny } from "./classes/LinkLevels";
import { SocialLinkAlwaysLevelUp } from "./classes/SocialLink";
import { EventAvailableProps, SocialLinkNames } from "./types";

class SunMainLevels extends LinkMainLevelsChooseAny {
  isAvailable(props: EventAvailableProps): boolean {
    const linkName = props.socialLink.linkName;
    const academicsLevel = stats[StatsNames.Academics].levels[3].value;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = props.socialLink.isNewLevel(previousLink);

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
  { name: "Akinari Kamiki", place: "Naganaki Shrine" },
  SocialLinkNames.Sun,
  [new SunMainLevels()]
);
