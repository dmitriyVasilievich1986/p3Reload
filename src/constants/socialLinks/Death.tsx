import { SocialLinkAvailableProps, SocialLinkNames } from "./types";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { SocialLinkAlwaysLevelUp } from "./baseFunctions";

class SocialLinkDeath extends SocialLinkAlwaysLevelUp {
  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    }
  ) {
    const previousLink = props.previousDay!.links[this.linkName];
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

  isAvailable(): boolean {
    return false;
  }
}

export const Death = new SocialLinkDeath(SocialLinkNames.Death, {
  name: "Pharos",
  place: "Main character room",
});
