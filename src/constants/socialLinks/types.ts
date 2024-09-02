import React from "react";

export enum SocialLinkNames {
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
