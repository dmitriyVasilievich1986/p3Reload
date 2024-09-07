import { SocialLinkAvailableProps, SocialLinkNames, Routes } from "./types";
import { SocialLinkAlwaysLevelUp } from "./baseFunctions";
import { StatsNames, stats } from "@/constants/stats";
import { DaysNames } from "@/constants/monthsNames";
import { Times } from "@/constants/events/types";

import {
  createBondObject,
  ChooseAnyObject,
  LinkMaxedObject,
} from "./GenericCard";

class DevilSocialLink extends SocialLinkAlwaysLevelUp {
  isLinkAvailable(props: SocialLinkAvailableProps): boolean {
    const previousLink = props.previousDay!.links[this.linkName];
    const isNewLevel = this.isNewLevel(previousLink);
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

export const Devil = new DevilSocialLink(
  SocialLinkNames.Devil,
  { name: "President Tanaka", place: "Paulownia Mall" },
  {
    0: {
      [Routes.Platonic]: createBondObject,
    },
    1: {
      [Routes.Platonic]: ChooseAnyObject,
    },
    10: {
      [Routes.Platonic]: LinkMaxedObject,
    },
  }
);
