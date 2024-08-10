import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";
import { Times, Event } from "../types";

export const emperorEvents: {
  [SocialLinkNames.Emperor]: Event;
} = {
  [SocialLinkNames.Emperor]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Emperor,
    linkName: SocialLinkNames.Emperor,
    label: function (props) {
      return (
        <EventCard
          multiplier={
            props.links && props.links[SocialLinkNames.Emperor].multiplier
          }
          charm={props?.stats && props.stats[stats.Charm.name] >= 100}
          card={props.arcanes.includes(SocialLinkNames.Emperor)}
          {...socialLinks.Emperor.linkDetails}
          head={this.name}
        />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.friday];
      const isToday =
        currentDay.date.getTime() >= new Date(2010, 0, 1).getTime() ||
        days.includes(currentDay.date.getDay());
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 27).getTime() &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isToday
      );
    },
  },
};
