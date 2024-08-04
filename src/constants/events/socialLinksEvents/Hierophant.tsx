import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { DaysNames } from "../../monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "../../stats/stats";
import { Times, Event } from "../types";

export const hierophantEvents: {
  [SocialLinkNames.Hierophant]: Event;
} = {
  [SocialLinkNames.Hierophant]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Hierophant,
    linkName: SocialLinkNames.Hierophant,
    label: (props) => (
      <EventCard
        place="Bookworms Used Books"
        name="Bunkichi and Mitsuko"
        head="Hierophant"
        multiplier={
          props.links && props.links[SocialLinkNames.Hierophant].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Hierophant)}
      />
    ),
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
