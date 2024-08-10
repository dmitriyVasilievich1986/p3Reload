import { SocialLinkNames, socialLinks, Routes } from "@/constants/socialLinks";
import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { DaysNames } from "@/constants/monthsNames";
import { stats } from "@/constants/stats";
import { EventCard } from "@/components";

import {
  socialLinkInvitationNames,
  socialLinkRomanceNames,
  Times,
  Event,
} from "../types";

function available(route: Routes) {
  return function ({
    previousDay,
    currentDay,
    time,
  }: {
    previousDay?: SingleDay;
    currentDay: SingleDay;
    time: Times;
  }) {
    if (previousDay === undefined) return false;
    const isRomance =
      currentDay.links[SocialLinkNames.Empress].romance === route ||
      previousDay.links[SocialLinkNames.Empress].level === 6;
    const days = [
      DaysNames.monday,
      DaysNames.tuesday,
      DaysNames.wednesday,
      DaysNames.thursday,
      DaysNames.saturday,
    ];
    return (
      currentDay.date.getTime() >= new Date(2009, 10, 21).getTime() &&
      previousDay.stats[stats.Academics.name] >= 230 &&
      days.includes(currentDay.date.getDay()) &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isRomance
    );
  };
}

const empressBase: Event = {
  ...linkBaseFunctions,
  time: Times.Day,
  name: SocialLinkNames.Empress,
  linkName: SocialLinkNames.Empress,
  label: function (props) {
    return (
      <EventCard
        multiplier={
          props.links && props.links[SocialLinkNames.Empress].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Empress)}
        {...socialLinks.Empress.linkDetails}
        head={this.name}
      />
    );
  },
  available: available(Routes.Platonic),
};

export const empressEvents: {
  [SocialLinkNames.Empress]: Event;
  [socialLinkRomanceNames.EmpressRomance]: Event;
  [socialLinkInvitationNames.EmpressInvitation]: Event;
} = {
  [SocialLinkNames.Empress]: empressBase,
  [socialLinkRomanceNames.EmpressRomance]: {
    ...empressBase,
    name: socialLinkRomanceNames.EmpressRomance,
    available: available(Routes.Romantic),
  },
  [socialLinkInvitationNames.EmpressInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    linkName: SocialLinkNames.Empress,
    name: socialLinkInvitationNames.EmpressInvitation,
    label: function () {
      return (
        <EventCard
          name={socialLinks.Empress.linkDetails.name}
          head={this.name}
        />
      );
    },
    _invitationsDates: [
      new Date(2010, 1, 4).getTime(),
      new Date(2010, 1, 7).getTime(),
      new Date(2010, 1, 24).getTime(),
    ],
  },
};
