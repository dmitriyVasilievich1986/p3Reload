import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { socialLinkInvitationNames, Times, Event } from "../types";
import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { DaysNames } from "../../monthsNames";
import { stats } from "../../stats/stats";

export const fortuneEvents: {
  [SocialLinkNames.Fortune]: Event;
  [socialLinkInvitationNames.FortuneInvitation]: Event;
} = {
  [SocialLinkNames.Fortune]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Fortune,
    linkName: SocialLinkNames.Fortune,
    label: (props) => (
      <EventCard
        name="Keisuke Hiraga"
        place="Art Club Room"
        head="Fortune"
        multiplier={
          props.links && props.links[SocialLinkNames.Fortune].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Fortune)}
      />
    ),
    available: function ({ currentDay, time }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.thursday];
      return (
        currentDay.date.getTime() >= new Date(2009, 5, 17).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams
      );
    },
  },
  [socialLinkInvitationNames.FortuneInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.FortuneInvitation,
    linkName: SocialLinkNames.Fortune,
    label: () => <EventCard head="Fortune(Invitation)" name="Keisuke Hiraga" />,
    _invitationsDates: [
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 7, 7).getTime(),
      new Date(2009, 8, 23).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2010, 0, 4).getTime(),
      new Date(2010, 0, 10).getTime(),
      new Date(2010, 0, 11).getTime(),
    ],
  },
};
