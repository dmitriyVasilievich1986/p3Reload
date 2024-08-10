import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { socialLinks } from "../../socialLinks";
import { linkBaseFunctions } from "../base";
import { stats } from "../../stats/stats";
import { Times, Event } from "../types";

export const moonEvents: {
  [SocialLinkNames.Moon]: Event;
} = {
  [SocialLinkNames.Moon]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Moon,
    linkName: SocialLinkNames.Moon,
    label: (props) => (
      <EventCard
        name="Nozomi Suemitsu"
        place="Paulownia Mall"
        head="Moon"
        multiplier={props.links && props.links[SocialLinkNames.Moon].multiplier}
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Moon)}
      />
    ),
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
