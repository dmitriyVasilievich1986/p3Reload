import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { DaysNames } from "../../monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "../../stats/stats";
import { Times, Event } from "../types";

export const hermitEvents: {
  [SocialLinkNames.Hermit]: Event;
} = {
  [SocialLinkNames.Hermit]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Hermit,
    linkName: SocialLinkNames.Hermit,
    label: (props) => (
      <EventCard
        place="Laptop at the Protagonist's room"
        head="Hermit"
        name="Maya"
        multiplier={
          props.links && props.links[SocialLinkNames.Hermit].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Hermit)}
      />
    ),
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
