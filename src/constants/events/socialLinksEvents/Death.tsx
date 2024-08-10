import { SocialLinkNames } from "@/constants/socialLinks";
import { CardWithoutMultiplier } from "./genericCards";
import { linkBaseFunctions } from "../base";
import { Times, Event } from "../types";

export const deathEvents: {
  [SocialLinkNames.Death]: Event;
} = {
  [SocialLinkNames.Death]: {
    ...linkBaseFunctions,
    time: Times.DarkHour,
    name: SocialLinkNames.Death,
    linkName: SocialLinkNames.Death,
    special: true,
    label: CardWithoutMultiplier,
    available: () => false,
  },
};
