import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";
import { Times, Event } from "../types";

export const starEvents: {
  [SocialLinkNames.Star]: Event;
} = {
  [SocialLinkNames.Star]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Star,
    linkName: SocialLinkNames.Star,
    label: function (props) {
      return (
        <EventCard
          multiplier={
            props.links && props.links[SocialLinkNames.Star].multiplier
          }
          charm={props?.stats && props.stats[stats.Charm.name] >= 100}
          card={props.arcanes.includes(SocialLinkNames.Star)}
          {...socialLinks.Star.linkDetails}
          head={this.name}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.wednesday, DaysNames.friday, DaysNames.sunday];
      return (
        currentDay.date.getTime() >= new Date(2009, 7, 5).getTime() &&
        previousDay.stats[stats.Courage.name] >= 45 &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day
      );
    },
  },
};
