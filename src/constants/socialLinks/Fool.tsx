import { SocialLinkAlwaysLevelUp } from "./classes/SocialLink";
import { LinkMainLevelsChooseAny } from "./classes/LinkLevels";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
} from "./types";

class SocialLinkFool extends LinkMainLevelsChooseAny {
  calculate(socialLink: SocialLinkType, props: SocialLinkAvailableProps) {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const level =
      previousLink.level === 7
        ? previousLink.level + 2
        : previousLink.level + 1;
    return {
      links: {
        ...props.currentDay.links,
        [SocialLinkNames.Fool]: { ...previousLink, level },
      },
    };
  }
}

export const Fool = new SocialLinkAlwaysLevelUp(
  {
    name: "S.E.E.S.",
    place: "Tartarus",
  },
  SocialLinkNames.Fool,
  [new SocialLinkFool()]
);
