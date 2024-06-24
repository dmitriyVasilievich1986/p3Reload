import { CharStats } from "../stats/types";
import React from "react";

export enum SocialLinkNames {
  Aeon = "Aeon",
  Chariot = "Chariot",
  Devil = "Devil",
  Emperor = "Emperor",
  Empress = "Empress",
  Fool = "Fool",
  Fortune = "Fortune",
  HangedMan = "HangedMan",
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
}

export type KeyProps = {
  key: string | number;
};

export type SocialLinkLevelBase = {
  points: number;
  element: (props: KeyProps) => React.ReactNode;
};

export type SocialLinkLevel = SocialLinkLevelBase & {
  maxPoints: number;
};

export type SocialLinkStats = {
  multiplier: number;
  romance: boolean;
  points: number;
  level: number;
};

export type SocialLinksStatsArray = {
  [key in SocialLinkNames]: SocialLinkStats;
};

export type GetlevelProps = {
  level: number;
  romance?: boolean;
};

export type CalculateProps = {
  currentLinks: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
  currentStats: CharStats;
  name: SocialLinkNames;
};

export type SocialLinkTypeBase = {
  maxLevel: number;
  getlevel: (props: GetlevelProps) => SocialLinkLevel;
  calculate: (props: CalculateProps) => { links: SocialLinksStatsArray };
  getStaleLevel: () => React.ReactNode;
  levelsRomance: SocialLinkLevel[];
  levels: SocialLinkLevel[];
};

export type SocialLinkType = SocialLinkTypeBase & {
  name: SocialLinkNames;
};
