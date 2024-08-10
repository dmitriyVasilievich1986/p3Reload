import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { socialLinkInvitationNames, Times, Event } from "../types";
import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { socialLinks } from "../../socialLinks";
import { DaysNames } from "../../monthsNames";
import { stats } from "../../stats/stats";

export const TemperanceEvents: {
  [SocialLinkNames.Temperance]: Event;
  [socialLinkInvitationNames.TemperanceInvitation]: Event;
} = {
  [SocialLinkNames.Temperance]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Temperance,
    linkName: SocialLinkNames.Temperance,
    label: (props) => (
      <EventCard
        name='André Laurent Jean "Bebe" Geraux'
        place="2F Classroom Hallway"
        head="Temperance"
        multiplier={
          props.links && props.links[SocialLinkNames.Temperance].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Temperance)}
      />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
      return (
        previousDay.links[socialLinks.Hierophant.linkName].level >= 3 &&
        currentDay.date.getTime() >= new Date(2009, 4, 8).getTime() &&
        previousDay.stats[stats.Academics.name] >= 20 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams
      );
    },
  },
  [socialLinkInvitationNames.TemperanceInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.TemperanceInvitation,
    linkName: SocialLinkNames.Temperance,
    label: () => (
      <EventCard
        name='André Laurent Jean "Bebe" Geraux'
        head="Temperance(Invitation)"
      />
    ),
    _invitationsDates: [
      new Date(2009, 5, 7).getTime(),
      new Date(2009, 5, 21).getTime(),
      new Date(2009, 6, 26).getTime(),
      new Date(2009, 7, 7).getTime(),
      new Date(2009, 7, 27).getTime(),
      new Date(2009, 8, 27).getTime(),
      new Date(2009, 10, 8).getTime(),
      new Date(2009, 10, 29).getTime(),
      new Date(2010, 0, 5).getTime(),
    ],
  },
};
