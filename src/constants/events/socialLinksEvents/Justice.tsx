import { SocialLinkNames, socialLinks, Routes } from "@/constants/socialLinks";
import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { DaysNames } from "@/constants/monthsNames";
import { SingleDay } from "@/constants/calendar";
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
      currentDay.links[SocialLinkNames.Justice].romance === route ||
      previousDay.links[SocialLinkNames.Justice].level === 4;
    const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday];
    return (
      currentDay.date.getTime() >= new Date(2009, 4, 7).getTime() &&
      previousDay.links[SocialLinkNames.Emperor].level > 0 &&
      days.includes(currentDay.date.getDay()) &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isRomance
    );
  };
}

const justiceBase: Event = {
  ...linkBaseFunctions,
  time: Times.Day,
  name: SocialLinkNames.Justice,
  linkName: SocialLinkNames.Justice,
  label: function (props) {
    return (
      <EventCard
        multiplier={
          props.links && props.links[SocialLinkNames.Justice].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Justice)}
        {...socialLinks.Justice.linkDetails}
        head={this.name}
      />
    );
  },
  available: available(Routes.Platonic),
};

export const justiceEvents: {
  [SocialLinkNames.Justice]: Event;
  [socialLinkRomanceNames.JusticeRomance]: Event;
  [socialLinkInvitationNames.JusticeInvitation]: Event;
} = {
  [SocialLinkNames.Justice]: justiceBase,
  [socialLinkRomanceNames.JusticeRomance]: {
    ...justiceBase,
    name: socialLinkRomanceNames.JusticeRomance,
    available: available(Routes.Romantic),
    upgrade: function (currentDay) {
      return socialLinks[SocialLinkNames.Justice].calculate(
        new SingleDay({
          ...currentDay,
          links: {
            ...currentDay.links,
            [SocialLinkNames.Justice]: {
              ...currentDay.links[SocialLinkNames.Justice],
              romance: Routes.Romantic,
            },
          },
        })
      );
    },
  },
  [socialLinkInvitationNames.JusticeInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.JusticeInvitation,
    linkName: SocialLinkNames.Justice,
    label: function () {
      return (
        <EventCard
          name={socialLinks.Justice.linkDetails.name}
          head={this.name}
        />
      );
    },
    _invitationsDates: [
      new Date(2009, 4, 31).getTime(),
      new Date(2009, 5, 21).getTime(),
      new Date(2009, 6, 5).getTime(),
      new Date(2009, 6, 26).getTime(),
      new Date(2009, 7, 9).getTime(),
      new Date(2009, 7, 27).getTime(),
      new Date(2009, 8, 27).getTime(),
      new Date(2009, 9, 25).getTime(),
      new Date(2009, 10, 29).getTime(),
      new Date(2010, 0, 5).getTime(),
      new Date(2010, 0, 10).getTime(),
    ],
  },
};
