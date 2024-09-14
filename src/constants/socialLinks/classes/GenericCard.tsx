import { SocialLinkLevel } from "../types";
import { EventCard } from "@/components";

export function CreateBond() {
  return <EventCard head="Create bond" />;
}

export const createBondObject: SocialLinkLevel = {
  points: 0,
  maxPoints: [],
  element: CreateBond,
};

export function ChooseAny() {
  return <EventCard head="Choose Any" />;
}

export const ChooseAnyObject: SocialLinkLevel = {
  points: 0,
  maxPoints: [],
  element: ChooseAny,
};

export function LinkMaxed() {
  return <EventCard head="Link Maxed" />;
}

export const LinkMaxedObject: SocialLinkLevel = {
  points: 0,
  maxPoints: [],
  element: LinkMaxed,
};

export function AutomaticLevelUp() {
  return <EventCard head="Automatic" />;
}

export const AutomaticLevelUpObject: SocialLinkLevel = {
  points: 0,
  maxPoints: [],
  element: AutomaticLevelUp,
};

export function SpendingTime() {
  return <EventCard head="Spending time" />;
}

export const SpendingTimeObject: SocialLinkLevel = {
  points: 0,
  maxPoints: [],
  element: SpendingTime,
};
