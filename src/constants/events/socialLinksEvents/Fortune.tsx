import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkInvitationNames, Times, Event } from "../types";
import { DaysNames } from "@/constants/monthsNames";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";

export const fortuneEvents: {
  [SocialLinkNames.Fortune]: Event;
  [socialLinkInvitationNames.FortuneInvitation]: Event;
} = {
  [SocialLinkNames.Fortune]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Fortune,
    linkName: SocialLinkNames.Fortune,
    label: function (props) {
      return (
        <EventCard
          multiplier={
            props.links && props.links[SocialLinkNames.Fortune].multiplier
          }
          charm={props?.stats && props.stats[stats.Charm.name] >= 100}
          card={props.arcanes.includes(SocialLinkNames.Fortune)}
          {...socialLinks.Fortune.linkDetails}
          head={this.name}
        />
      );
    },
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
    linkName: SocialLinkNames.Fortune,
    name: socialLinkInvitationNames.FortuneInvitation,
    label: function () {
      return (
        <EventCard
          name={socialLinks.Fortune.linkDetails.name}
          head={this.name}
        />
      );
    },
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
