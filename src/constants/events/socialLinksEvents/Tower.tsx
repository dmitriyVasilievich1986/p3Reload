import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";
import { Times, Event } from "../types";

export const towerEvents: {
  [SocialLinkNames.Tower]: Event;
} = {
  [SocialLinkNames.Tower]: {
    ...linkBaseFunctions,
    time: Times.Evening,
    name: SocialLinkNames.Tower,
    linkName: SocialLinkNames.Tower,
    label: function (props) {
      return (
        <EventCard
          multiplier={
            props.links && props.links[SocialLinkNames.Tower].multiplier
          }
          charm={props?.stats && props.stats[stats.Charm.name] >= 100}
          card={props.arcanes.includes(SocialLinkNames.Tower)}
          {...socialLinks.Tower.linkDetails}
          head={this.name}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const days = [
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
        DaysNames.sunday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 23).getTime() &&
        previousDay.links[SocialLinkNames.Strength].level >= 4 &&
        previousDay.stats[stats.Courage.name] >= 15 &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening
      );
    },
  },
};
