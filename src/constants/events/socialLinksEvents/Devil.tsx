import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { socialLinks } from "../../socialLinks";
import { DaysNames } from "../../monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "../../stats/stats";
import { Times, Event } from "../types";

export const devilEvents: {
  [SocialLinkNames.Devil]: Event;
} = {
  [SocialLinkNames.Devil]: {
    ...linkBaseFunctions,
    time: Times.Evening,
    name: SocialLinkNames.Devil,
    linkName: SocialLinkNames.Devil,
    label: () => (
      <EventCard name="President Tanaka" place="Paulownia Mall" head="Devil" />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.tuesday, DaysNames.saturday];
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 16).getTime() &&
        previousDay.links[socialLinks.Hermit.linkName].level >= 4 &&
        previousDay.stats[stats.Charm.name] >= 45 &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening
      );
    },
  },
};
