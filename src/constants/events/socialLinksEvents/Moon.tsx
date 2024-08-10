import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { linkBaseFunctions } from "../base";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";
import { Times, Event } from "../types";

export const moonEvents: {
  [SocialLinkNames.Moon]: Event;
} = {
  [SocialLinkNames.Moon]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Moon,
    linkName: SocialLinkNames.Moon,
    label: function (props) {
      return (
        <EventCard
          multiplier={
            props.links && props.links[SocialLinkNames.Moon].multiplier
          }
          charm={props?.stats && props.stats[stats.Charm.name] >= 100}
          card={props.arcanes.includes(SocialLinkNames.Moon)}
          {...socialLinks.Moon.linkDetails}
          head={this.name}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 28).getTime() &&
        previousDay.links[socialLinks.Magician.linkName].level >= 3 &&
        previousDay.stats[stats.Charm.name] >= 15 &&
        time === Times.Day
      );
    },
  },
};
