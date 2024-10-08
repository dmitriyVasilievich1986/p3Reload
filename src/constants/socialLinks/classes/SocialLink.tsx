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
  ShrineLevels,
  EmptyLevels,
  LinkLevels,
} from "./LinkLevels";

export class SocialLink implements SocialLinkType {
  linkDetails: LinkDetailsType;
  linkName: SocialLinkNames;
  maxLevel: number;

  koromaruWalks: LinkLevels;
  shrineLevels: LinkLevels;
  invitations: LinkLevels;
  dormHangout1: LinkLevels;
  dormHangout2: LinkLevels;
  mainLevels: LinkLevels;

  constructor(
    linkName: SocialLinkNames,
    linkDetails: LinkDetailsType,
    levels: {
      koromaruWalks?: LinkLevels;
      shrineLevels?: LinkLevels;
      dormHangout1?: LinkLevels;
      dormHangout2?: LinkLevels;
      invitations?: LinkLevels;
      mainLevels: LinkLevels;
    }
  ) {
    this.maxLevel = Math.max(
      ...Object.keys(levels.mainLevels.levels).map((k) => Number(k))
    );
    this.koromaruWalks = levels?.koromaruWalks || new EmptyLevels();
    this.shrineLevels = levels?.shrineLevels || new ShrineLevels();
    this.dormHangout1 = levels?.dormHangout1 || new EmptyLevels();
    this.dormHangout2 = levels?.dormHangout2 || new EmptyLevels();
    this.invitations = levels?.invitations || new EmptyLevels();
    this.mainLevels = levels.mainLevels;
    this.linkDetails = linkDetails;
    this.linkName = linkName;
  }

  getLevels(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes = Routes.Platonic
  ): LinkLevels {
    if (this.koromaruWalks.isAvailable(this, props, route))
      return this.koromaruWalks;
    if (this.dormHangout1.isAvailable(this, props, route))
      return this.dormHangout1;
    if (this.dormHangout2.isAvailable(this, props, route))
      return this.dormHangout2;
    if (this.invitations.isAvailable(this, props, route))
      return this.invitations;
    if (this.shrineLevels.isAvailable(this, props, route))
      return this.shrineLevels;
    return this.mainLevels;
  }

  getLevel({ romance, level }: SocialLinkStats) {
    return this.mainLevels.levels[level][romance] as SocialLinkLevel;
  }

  isNewLevel(thisLink: SocialLinkStats) {
    const currentLevel = this.getLevel(thisLink);
    return (
      thisLink.level < this.maxLevel && thisLink.points >= currentLevel.points
    );
  }

  isAvailable(props: SocialLinkAvailableProps, route: Routes): boolean {
    if (!props.previousDay) return false;

    return (
      this.koromaruWalks.isAvailable(this, props, route) ||
      this.shrineLevels.isAvailable(this, props, route) ||
      this.dormHangout1.isAvailable(this, props, route) ||
      this.dormHangout2.isAvailable(this, props, route) ||
      this.invitations.isAvailable(this, props, route) ||
      this.mainLevels.isAvailable(this, props, route)
    );
  }

  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ) {
    return this.getLevels(props, route).calculate(this, props, route);
  }

  element(props: SocialLinkElementProps, route: Routes) {
    if (!props.previousDay) return null;
    return this.getLevels(props, route).element(this, props, route);
  }
}

export class SocialLinkAlwaysLevelUp extends SocialLink {
  constructor(
    linkName: SocialLinkNames,
    linkDetails: LinkDetailsType,
    levels?: { mainLevels?: LinkLevels }
  ) {
    super(linkName, linkDetails, {
      mainLevels: levels?.mainLevels ?? new LinkMainLevelsChooseAny(),
      shrineLevels: new EmptyLevels(),
      invitations: new EmptyLevels(),
    });
  }

  getLevel({ level }: SocialLinkStats) {
    if (level === 0)
      return this.mainLevels.levels[0].Platonic as SocialLinkLevel;
    return this.mainLevels.levels[10].Platonic as SocialLinkLevel;
  }
}

export class SocialLinkEpisodes extends SocialLink {
  getLevel() {
    return this.mainLevels.levels[5][Routes.Platonic] as SocialLinkLevel;
  }
}
