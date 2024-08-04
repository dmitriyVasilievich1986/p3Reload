import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { DaysNames } from "../../monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "../../stats/stats";
import { Times, Event } from "../types";

export const hangedManEvents: {
  [SocialLinkNames.HangedMan]: Event;
} = {
  [SocialLinkNames.HangedMan]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.HangedMan,
    linkName: SocialLinkNames.HangedMan,
    label: (props) => (
      <EventCard
        place="Naganaki Shrine"
        name="Maiko Oohashi"
        head="Hanged Man"
        multiplier={
          props.links && props.links[SocialLinkNames.HangedMan].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.HangedMan)}
      />
    ),
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
