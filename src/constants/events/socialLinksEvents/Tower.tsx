import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { DaysNames } from "../../monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "../../stats/stats";
import { Times, Event } from "../types";

export const towerEvents: {
  [SocialLinkNames.Tower]: Event;
} = {
  [SocialLinkNames.Tower]: {
    ...linkBaseFunctions,
    time: Times.Evening,
    name: SocialLinkNames.Tower,
    linkName: SocialLinkNames.Tower,
    label: (props) => (
      <EventCard
        place="Club Escapade"
        name="Mutatsu"
        head="Tower"
        multiplier={
          props.links && props.links[SocialLinkNames.Tower].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Tower)}
      />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const days = [
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
        DaysNames.sunday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 23).getTime() &&
        previousDay.links[SocialLinkNames.Strength].level >= 4 &&
        previousDay.stats[stats.Courage.name] >= 15 &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Evening
      );
    },
  },
};
