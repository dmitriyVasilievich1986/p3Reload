import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { DaysNames } from "@/constants/monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";
import { Times, Event } from "../types";

export const hermitEvents: {
  [SocialLinkNames.Hermit]: Event;
} = {
  [SocialLinkNames.Hermit]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Hermit,
    linkName: SocialLinkNames.Hermit,
    label: function (props) {
      return (
        <EventCard
          multiplier={
            props.links && props.links[SocialLinkNames.Hermit].multiplier
          }
          charm={props?.stats && props.stats[stats.Charm.name] >= 100}
          card={props.arcanes.includes(SocialLinkNames.Hermit)}
          {...socialLinks.Hermit.linkDetails}
          head={this.name}
        />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [
        new Date(2009, 3, 29).getTime(),
        new Date(2009, 4, 4).getTime(),
        new Date(2009, 4, 5).getTime(),
        new Date(2009, 8, 22).getTime(),
        new Date(2009, 8, 23).getTime(),
        new Date(2009, 8, 24).getTime(),
        new Date(2009, 9, 12).getTime(),
      ];
      const isToday =
        currentDay.date.getDay() === DaysNames.sunday ||
        days.includes(currentDay.date.getTime());
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 29).getTime() &&
        time === Times.Day &&
        isToday
      );
    },
  },
};
