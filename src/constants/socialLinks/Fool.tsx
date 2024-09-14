import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
} from "./types";

import {
  SocialLinkAlwaysLevelUp,
  LinkMainLevelsChooseAny,
} from "./baseFunctions";

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
  SocialLinkNames.Fool,
  {
    name: "S.E.E.S.",
    place: "Tartarus",
  },
  { mainLevels: new SocialLinkFool() }
);
