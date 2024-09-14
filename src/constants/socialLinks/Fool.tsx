import { SocialLinkAvailableProps, SocialLinkNames } from "./types";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { SocialLinkAlwaysLevelUp } from "./baseFunctions";

class SocialLinkFool extends SocialLinkAlwaysLevelUp {
  calculate(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    }
  ) {
    const previousLink = props.previousDay!.links[this.linkName];
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

  isAvailable(): boolean {
    return false;
  }
}

export const Fool = new SocialLinkFool(SocialLinkNames.Fool, {
  name: "S.E.E.S.",
  place: "Tartarus",
});
