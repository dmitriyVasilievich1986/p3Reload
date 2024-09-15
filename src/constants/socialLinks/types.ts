import { upgradeResponse, Times } from "../events/types";
import { SingleDay } from "../calendar/SingleDay";
import React from "react";

export enum SocialLinkNames {
  Sanada = "Sanada",
  Koromaru = "Koromaru",
  Amada = "Amada",
  Mochizuki = "Mochizuki",
  Iori = "Iori",
  Aragaki = "Aragaki",
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
  KitchenActivity = " (Kitchen Activity)",
  GardenActivity = " (Garden Activity)",
  BookActivity = " (Book Activity)",
  DVDActivity = " (DVD Activity)",
  Brush = " (Brush)",
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
  dorm1: number;
  dorm2: number;
};

export type SocialLinksStatsArray = {
  [key in SocialLinkNames]: SocialLinkStats;
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
  linkDetails: LinkDetailsType;
  linkName: SocialLinkNames;
  maxLevel: number;

  element(props: SocialLinkElementProps, route: Routes): React.ReactNode;
  getLevel(props: SocialLinkStats): SocialLinkLevel;
  isNewLevel(thisLink: SocialLinkStats): boolean;
  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    },
    route: Routes
  ): upgradeResponse;
};
