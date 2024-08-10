import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { socialLinkInvitationNames, Times, Event } from "../types";
import { DaysNames } from "@/constants/monthsNames";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";

export const chariotEvents: {
  [SocialLinkNames.Chariot]: Event;
  [socialLinkInvitationNames.ChariotInvitation]: Event;
} = {
  [SocialLinkNames.Chariot]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Chariot,
    linkName: SocialLinkNames.Chariot,
    label: function (props) {
      return (
        <EventCard
          multiplier={
            props.links && props.links[SocialLinkNames.Chariot].multiplier
          }
          charm={props?.stats && props.stats[stats.Charm.name] >= 100}
          card={props.arcanes.includes(SocialLinkNames.Chariot)}
          {...socialLinks.Chariot.linkDetails}
          head={this.name}
        />
      );
    },
    available: function ({ currentDay, time }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.thursday,
        DaysNames.friday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 23).getTime() &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams
      );
    },
  },
  [socialLinkInvitationNames.ChariotInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    linkName: SocialLinkNames.Chariot,
    name: socialLinkInvitationNames.ChariotInvitation,
    label: function () {
      return (
        <EventCard
          name={socialLinks.Chariot.linkDetails.name}
          head={this.name}
        />
      );
    },
    _invitationsDates: [
      new Date(2009, 4, 4).getTime(),
      new Date(2009, 4, 24).getTime(),
      new Date(2009, 5, 7).getTime(),
      new Date(2009, 5, 14).getTime(),
      new Date(2009, 7, 5).getTime(),
      new Date(2009, 8, 27).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2009, 10, 8).getTime(),
      new Date(2010, 0, 6).getTime(),
      new Date(2010, 0, 10).getTime(),
    ],
  },
};
