import { SocialLinkNames } from "@/constants/socialLinks";
import { CardWithoutMultiplier } from "./genericCards";
import { linkBaseFunctions } from "../base";
import { Times, Event } from "../types";

export const foolEvents: {
  [SocialLinkNames.Fool]: Event;
} = {
  [SocialLinkNames.Fool]: {
    ...linkBaseFunctions,
    time: Times.DarkHour,
    name: SocialLinkNames.Fool,
    linkName: SocialLinkNames.Fool,
    special: true,
    label: CardWithoutMultiplier,
    available: () => false,
  },
};
