import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { DaysNames } from "../../monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "../../stats/stats";
import { Times, Event } from "../types";

export const starEvents: {
  [SocialLinkNames.Star]: Event;
} = {
  [SocialLinkNames.Star]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Star,
    linkName: SocialLinkNames.Star,
    label: (props) => (
      <EventCard
        place="Iwatodai Station Strip Mall 1F"
        name="Mamoru Hayase"
        head="Star"
        multiplier={props.links && props.links[SocialLinkNames.Star].multiplier}
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Star)}
      />
    ),
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
