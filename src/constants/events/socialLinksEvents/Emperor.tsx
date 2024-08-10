import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { DaysNames } from "../../monthsNames";
import { linkBaseFunctions } from "../base";
import { stats } from "../../stats/stats";
import { Times, Event } from "../types";

export const emperorEvents: {
  [SocialLinkNames.Emperor]: Event;
} = {
  [SocialLinkNames.Emperor]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Emperor,
    linkName: SocialLinkNames.Emperor,
    label: (props) => (
      <EventCard
        place="Student Council Room"
        name="Hidetoshi Odagiri"
        head="Emperor"
        multiplier={
          props.links && props.links[SocialLinkNames.Emperor].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Emperor)}
      />
    ),
    available: function ({ currentDay, time }) {
      const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.friday];
      const isToday =
        currentDay.date.getTime() >= new Date(2010, 0, 1).getTime() ||
        days.includes(currentDay.date.getDay());
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 27).getTime() &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isToday
      );
    },
  },
};
