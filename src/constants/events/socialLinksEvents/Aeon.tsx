import { SocialLinkNames, Routes } from "../../socialLinks/types";
import { socialLinkRomanceNames, Times, Event } from "../types";
import { EventCard } from "../../../components/eventCard";
import { DaysNames } from "../../monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "../../stats/stats";

export const aeonEvents: {
  [SocialLinkNames.Aeon]: Event;
  [socialLinkRomanceNames.AeonRomance]: Event;
} = {
  [SocialLinkNames.Aeon]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Aeon,
    linkName: SocialLinkNames.Aeon,
    label: (props) => (
      <EventCard
        place="Classroom 2F"
        name="Aigis"
        head="Aeon"
        multiplier={props.links && props.links[SocialLinkNames.Aeon].multiplier}
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Aeon)}
      />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isRomance =
        currentDay.links[SocialLinkNames.Empress].romance === Routes.Platonic ||
        previousDay.links[SocialLinkNames.Empress].level === 6;
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2010, 0, 8).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day &&
        isRomance
      );
    },
  },
  [socialLinkRomanceNames.AeonRomance]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: socialLinkRomanceNames.AeonRomance,
    linkName: SocialLinkNames.Aeon,
    label: (props) => (
      <EventCard
        place="Classroom 2F"
        name="Aigis"
        head="Aeon"
        multiplier={props.links && props.links[SocialLinkNames.Aeon].multiplier}
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Aeon)}
      />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Empress].level === 6;
      const isRomance =
        currentDay.links[SocialLinkNames.Empress].romance === Routes.Romantic ||
        isFork;
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2010, 0, 8).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day &&
        isRomance
      );
    },
  },
};
