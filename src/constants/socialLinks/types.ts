import { upgradeResponse, Times } from "../events/types";
import { SingleDay } from "../calendar/SingleDay";
import React from "react";

export enum SocialLinkNames {
  Akihiko = "Akihiko",
  Koromaru = "Koromaru",
  Amada = "Amada",
  Aeon = "Aeon",
  Chariot = "Chariot",
  Devil = "Devil",
  Emperor = "Emperor",
  Empress = "Empress",
  Fool = "Fool",
  Fortune = "Fortune",
  HangedMan = "Hanged Man",
  Hermit = "Hermit",
  Hierophant = "Hierophant",
  Justice = "Justice",
  Lovers = "Lovers",
  Magician = "Magician",
  Moon = "Moon",
  Priestess = "Priestess",
  Star = "Star",
  Strength = "Strength",
  Sun = "Sun",
  Temperance = "Temperance",
  Tower = "Tower",
  Death = "Death",
}

export enum LabelHeadPrefixes {
  Shrine = " (Naganaki shrine)",
  Invitation = " (Invitation)",
  SpendTime = " (Spend time)",
  Romance = " (Romance)",
  Default = "",
}

export enum Routes {
  Platonic = "Platonic",
  Romantic = "Romantic",
}

export type KeyProps = {
  key: string | number;
};

export type SocialLinkLevelBase = {
  points: number;
  element: (props: KeyProps) => React.ReactNode;
};

export type SocialLinkLevel = SocialLinkLevelBase & {
  maxPoints: number[];
};

export type SocialLinkStats = {
  multiplier: number;
  romance: Routes;
  points: number;
  level: number;
};

export type SocialLinksStatsArray = {
  [key in SocialLinkNames]: SocialLinkStats;
};

export type InvitationsType = {
  [key: number]: { [key in Routes]?: React.ReactNode };
};

export type LevelsType = {
  [key: number]: { [key in Routes]?: SocialLinkLevel };
};

export type LinkDetailsType = {
  name: string;
  place?: string;
};

export type SocialLinkAvailableProps = {
  previousDay?: SingleDay;
  currentDay: SingleDay;
  time: Times;
};

export type SocialLinkElementProps = SocialLinkAvailableProps & {
  fullCard?: boolean;
};

export type SocialLinkType = {
  invitations?: InvitationsType;
  linkDetails: LinkDetailsType;
  linkName: SocialLinkNames;
  levels: LevelsType;
  maxLevel: number;

  element(props: SocialLinkElementProps): React.ReactNode;
  getLevel(props: SocialLinkStats): SocialLinkLevel;
  isNewLevel(thisLink: SocialLinkStats): boolean;
  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    }
  ): upgradeResponse;
};
