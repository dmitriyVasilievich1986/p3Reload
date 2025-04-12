import { Times } from "@/constants/events/types";

import { EventAvailableProps, SocialLinkNames } from "./types";
import { LinkMainLevelsEpisodes } from "./classes/LinkLevels";
import { SocialLinkEpisodes } from "./classes/SocialLink";

class MochizukiMainLevels extends LinkMainLevelsEpisodes {
  isAvailable(props: EventAvailableProps): boolean {
    const linkName = props.socialLink.linkName;
    const previousLink = props.previousDay!.links[linkName];
    const isTime = props.time === Times.Day;
    let days = [];

    switch (previousLink.level) {
      case 1:
        days = [
          new Date(2009, 10, 12).getTime(),
          new Date(2009, 10, 14).getTime(),
          new Date(2009, 10, 16).getTime(),
        ];
        return days.includes(props.currentDay.date.getTime()) && isTime;
      case 2:
        days = [new Date(2009, 10, 18).getTime()];
        return days.includes(props.currentDay.date.getTime()) && isTime;
      case 3:
        days = [new Date(2009, 11, 1).getTime()];
        return days.includes(props.currentDay.date.getTime()) && isTime;
      case 4:
        days = [new Date(2009, 11, 31).getTime()];
        return days.includes(props.currentDay.date.getTime()) && isTime;
      default:
        return false;
    }
  }
}

export const Mochizuki = new SocialLinkEpisodes(
  { name: "Ryoji Mochizuki" },
  SocialLinkNames.Mochizuki,
  [new MochizukiMainLevels()]
);
