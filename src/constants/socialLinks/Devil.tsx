import { SocialLinkAlwaysLevelUp } from "./classes/SocialLink";
import { LinkMainLevelsChooseAny } from "./classes/LinkLevels";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
} from "./types";

class DevilMainLevels extends LinkMainLevelsChooseAny {
  isAvailable(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps
  ): boolean {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isNewLevel = socialLink.isNewLevel(previousLink);
    const days = [DaysNames.tuesday, DaysNames.saturday];
    const charmLevel = stats[StatsNames.Charm].levels[3].value;

    return (
      props.currentDay.date.getTime() >= new Date(2009, 4, 16).getTime() &&
      props.previousDay!.links[SocialLinkNames.Hermit].level >= 4 &&
      props.previousDay!.stats[StatsNames.Charm] >= charmLevel &&
      days.includes(props.currentDay.date.getDay()) &&
      props.time === Times.Evening &&
      isNewLevel
    );
  }
}

export const Devil = new SocialLinkAlwaysLevelUp(
  SocialLinkNames.Devil,
  { name: "President Tanaka", place: "Paulownia Mall" },
  { mainLevels: new DevilMainLevels() }
);
