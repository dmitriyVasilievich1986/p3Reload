import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";
import { Times, Event } from "../types";

export const hierophantEvents: {
  [SocialLinkNames.Hierophant]: Event;
} = {
  [SocialLinkNames.Hierophant]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Hierophant,
    linkName: SocialLinkNames.Hierophant,
    label: function (props) {
      return (
        <EventCard
          multiplier={
            props.links && props.links[SocialLinkNames.Hierophant].multiplier
          }
          charm={props?.stats && props.stats[stats.Charm.name] >= 100}
          card={props.arcanes.includes(SocialLinkNames.Hierophant)}
          {...socialLinks.Hierophant.linkDetails}
          head={this.name}
        />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
        DaysNames.sunday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 25).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day
      );
    },
  },
};
