import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";
import { Times, Event } from "../types";

export const sunEvents: {
  [SocialLinkNames.Sun]: Event;
} = {
  [SocialLinkNames.Sun]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Sun,
    linkName: SocialLinkNames.Sun,
    label: function (props) {
      return (
        <EventCard
          multiplier={
            props.links && props.links[SocialLinkNames.Sun].multiplier
          }
          charm={props?.stats && props.stats[stats.Charm.name] >= 100}
          card={props.arcanes.includes(SocialLinkNames.Sun)}
          {...socialLinks.Sun.linkDetails}
          head={this.name}
        />
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      return (
        currentDay.date.getTime() >= new Date(2009, 7, 9).getTime() &&
        previousDay.links[socialLinks.HangedMan.linkName].level >= 3 &&
        previousDay.stats[stats.Academics.name] >= 100 &&
        currentDay.date.getDay() == DaysNames.sunday &&
        time === Times.Day
      );
    },
  },
};
