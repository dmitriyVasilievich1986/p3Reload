import { SocialLinkAvailableProps, SocialLinkNames, Routes } from "./types";
import { SocialLinkEpisodes } from "./baseFunctions";
import { Times } from "@/constants/events/types";
import { ChooseAnyObject } from "./GenericCard";

class MochizukiSocialLink extends SocialLinkEpisodes {
  isLinkAvailable(props: SocialLinkAvailableProps): boolean {
    const previousLink = props.previousDay!.links[this.linkName];
    const isTime = props.time === Times.Day;
    let days = [];

    switch (previousLink.level) {
      case 1:
        days = [
          new Date(2009, 10, 12).getTime(),
          new Date(2009, 10, 14).getTime(),
          new Date(2009, 10, 16).getTime(),
        ];
        return days.includes(props.currentDay.date.getDay()) && isTime;
      case 2:
        days = [new Date(2009, 10, 18).getTime()];
        return days.includes(props.currentDay.date.getDay()) && isTime;
      case 3:
        days = [new Date(2009, 11, 1).getTime()];
        return days.includes(props.currentDay.date.getDay()) && isTime;
      case 4:
        days = [new Date(2009, 11, 31).getTime()];
        return days.includes(props.currentDay.date.getDay()) && isTime;
      default:
        return false;
    }
  }
}

export const Mochizuki = new MochizukiSocialLink(
  SocialLinkNames.Mochizuki,
  { name: "Ryoji Mochizuki" },
  {
    5: {
      [Routes.Platonic]: ChooseAnyObject,
    },
  }
);
