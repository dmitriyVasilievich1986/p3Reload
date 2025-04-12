import { AvailabilityProps } from "@/constants/availability/types";
import { SingleDay } from "@/constants/calendar/SingleDay";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  SocialLinkStats,
  SocialLinkLevel,
  SocialLinkNames,
  LinkDetailsType,
  SocialLinkType,
  Routes,
} from "../types";

import {
  LinkMainLevelsChooseAny,
  LinkMainLevelsEpisodes,
  LinkMainLevels,
  LinkLevels,
} from "./LinkLevels";

export class SocialLink implements SocialLinkType {
  linkDetails: LinkDetailsType;
  linkName: SocialLinkNames;
  levels: LinkLevels[];
  maxLevel: number;

  constructor(
    linkDetails: LinkDetailsType,
    linkName: SocialLinkNames,
    levels: LinkLevels[]
  ) {
    this.linkDetails = linkDetails;
    this.linkName = linkName;
    this.levels = levels;

    const mainLevel = levels.find(
      (l) => l instanceof LinkMainLevels
    ) as LinkMainLevels;
    this.maxLevel = Math.max(
      ...Object.keys(mainLevel.levels).map((k) => Number(k))
    );
  }

  getMainLevel(): LinkMainLevels {
    return this.levels.find(
      (l) => l instanceof LinkMainLevels
    ) as LinkMainLevels;
  }

  getLevels(props: AvailabilityProps): LinkLevels {
    return (
      this.levels.find((level) =>
        level.isAvailable({ ...props, socialLink: this })
      ) ?? (this.levels[0] as LinkLevels)
    );
  }

  getLevel(props: SocialLinkStats): SocialLinkLevel {
    const level = this.levels.find(
      (l) => l instanceof LinkMainLevels
    ) as LinkMainLevels;
    return level.levels[props.level][props.romance] as SocialLinkLevel;
  }

  isNewLevel(props: SocialLinkStats) {
    const level = this.getLevel(props);

    return props.level < this.maxLevel && props.points >= level.points;
  }

  isAvailable(props: AvailabilityProps): boolean {
    if (!props.previousDay) return false;

    const payload = this.levels.some((level) =>
      level.isAvailable({ ...props, socialLink: this })
    );
    return payload;
  }

  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ) {
    return this.getLevels({
      ...props,
      route,
      previousDay: props.previousDay as SingleDay,
    }).calculate(this, props, route);
  }

  element(props: SocialLinkElementProps, route: Routes) {
    if (!props.previousDay) return null;
    return this.getLevels({
      ...props,
      route,
      previousDay: props.previousDay as SingleDay,
    }).element(this, props, route);
  }
}

export class SocialLinkAlwaysLevelUp extends SocialLink {
  constructor(
    linkDetails: LinkDetailsType,
    linkName: SocialLinkNames,
    levels?: LinkLevels[]
  ) {
    super(linkDetails, linkName, levels ?? [new LinkMainLevelsChooseAny()]);
  }

  getLevel({ level }: SocialLinkStats) {
    if (level === 0)
      return this.levels[0].levels[0].Platonic as SocialLinkLevel;
    return this.levels[0].levels[10].Platonic as SocialLinkLevel;
  }
}

export class SocialLinkEpisodes extends SocialLink {
  getLevel() {
    const level = this.levels.find(
      (l) => l instanceof LinkMainLevelsEpisodes
    ) as LinkMainLevelsEpisodes;

    return level.levels[5][Routes.Platonic] as SocialLinkLevel;
  }
}
