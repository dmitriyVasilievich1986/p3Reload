import { SocialLinkAlwaysLevelUp } from "./classes/SocialLink";
import { LinkMainLevelsChooseAny } from "./classes/LinkLevels";
import { SingleDay } from "@/constants/calendar/SingleDay";

import {
  SocialLinkAvailableProps,
  SocialLinkNames,
  SocialLinkType,
} from "./types";

class DeathtMainLevels extends LinkMainLevelsChooseAny {
  calculate(
    socialLink: SocialLinkType,
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    }
  ) {
    const linkName = socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const level = [1, 3, 6, 8].includes(previousLink.level)
      ? previousLink.level + 2
      : previousLink.level + 1;
    return {
      links: {
        ...props.currentDay.links,
        [SocialLinkNames.Death]: { ...previousLink, level },
      },
    };
  }
}

export const Death = new SocialLinkAlwaysLevelUp(
  SocialLinkNames.Death,
  {
    name: "Pharos",
    place: "Main character room",
  },
  { mainLevels: new DeathtMainLevels() }
);
