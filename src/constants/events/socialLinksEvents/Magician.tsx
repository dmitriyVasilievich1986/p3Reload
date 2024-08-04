import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { socialLinkInvitationNames, Times, Event } from "../types";
import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { DaysNames } from "../../monthsNames";
import { stats } from "../../stats/stats";

export const magicianEvents: {
  [SocialLinkNames.Magician]: Event;
  [socialLinkInvitationNames.MagicianInvitation]: Event;
} = {
  [SocialLinkNames.Magician]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Magician,
    linkName: SocialLinkNames.Magician,
    label: (props) => (
      <EventCard
        name="Kenji Tomochika"
        place="Classroom 2F"
        head="Magician"
        multiplier={
          props.links && props.links[SocialLinkNames.Magician].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Magician)}
      />
    ),
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.friday];
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 22).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        time === Times.Day &&
        !currentDay.isDayOff &&
        !currentDay.exams
      );
    },
  },
  [socialLinkInvitationNames.MagicianInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.MagicianInvitation,
    linkName: SocialLinkNames.Magician,
    label: () => (
      <EventCard head="Magician(Invitation)" name="Kenji Tomochika" />
    ),
    _invitationsDates: [
      new Date(2009, 3, 26).getTime(),
      new Date(2009, 4, 5).getTime(),
      new Date(2009, 4, 24).getTime(),
      new Date(2009, 5, 14).getTime(),
      new Date(2009, 7, 5).getTime(),
      new Date(2009, 7, 26).getTime(),
      new Date(2009, 8, 22).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2010, 0, 4).getTime(),
      new Date(2010, 0, 11).getTime(),
    ],
  },
};
