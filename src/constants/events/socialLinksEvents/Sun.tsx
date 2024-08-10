import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { socialLinks } from "../../socialLinks";
import { DaysNames } from "../../monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "../../stats/stats";
import { Times, Event } from "../types";

export const sunEvents: {
  [SocialLinkNames.Sun]: Event;
} = {
  [SocialLinkNames.Sun]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Sun,
    linkName: SocialLinkNames.Sun,
    label: () => (
      <EventCard place="Naganaki Shrine" name="Akinari Kamiki" head="Sun" />
    ),
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
