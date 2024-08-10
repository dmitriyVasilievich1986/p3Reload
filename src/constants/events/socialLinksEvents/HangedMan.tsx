import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";
import { Times, Event } from "../types";

export const hangedManEvents: {
  [SocialLinkNames.HangedMan]: Event;
} = {
  [SocialLinkNames.HangedMan]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.HangedMan,
    linkName: SocialLinkNames.HangedMan,
    label: function (props) {
      return (
        <EventCard
          multiplier={
            props.links && props.links[SocialLinkNames.HangedMan].multiplier
          }
          charm={props?.stats && props.stats[stats.Charm.name] >= 100}
          card={props.arcanes.includes(SocialLinkNames.HangedMan)}
          {...socialLinks.HangedMan.linkDetails}
          head={this.name}
        />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.saturday];
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 6).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day
      );
    },
  },
};
