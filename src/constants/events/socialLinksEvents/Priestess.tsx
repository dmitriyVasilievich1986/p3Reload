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
      currentDay.links[SocialLinkNames.Priestess].romance === route ||
      previousDay.links[SocialLinkNames.Priestess].level === 6;
    const days = [DaysNames.monday, DaysNames.friday, DaysNames.saturday];
    return (
      currentDay.date.getTime() >= new Date(2009, 5, 19).getTime() &&
      previousDay.links[SocialLinkNames.Fortune].level > 0 &&
      previousDay.stats[stats.Courage.name] >= 80 &&
      days.includes(currentDay.date.getDay()) &&
      !currentDay.isDayOff &&
      time === Times.Day &&
      !currentDay.exams &&
      isRomance
    );
  };
}

const priestessBase: Event = {
  ...linkBaseFunctions,
  time: Times.Day,
  name: SocialLinkNames.Priestess,
  linkName: SocialLinkNames.Priestess,
  label: function (props) {
    return (
      <EventCard
        multiplier={
          props.links && props.links[SocialLinkNames.Priestess].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Priestess)}
        {...socialLinks.Priestess.linkDetails}
        head={this.name}
      />
    );
  },
  available: available(Routes.Platonic),
};

export const priestessEvents: {
  [SocialLinkNames.Priestess]: Event;
  [socialLinkRomanceNames.PriestessRomance]: Event;
  [socialLinkInvitationNames.PriestessInvitation]: Event;
} = {
  [SocialLinkNames.Priestess]: priestessBase,
  [socialLinkRomanceNames.PriestessRomance]: {
    ...priestessBase,
    name: socialLinkRomanceNames.PriestessRomance,
    upgrade: function (currentDay) {
      return socialLinks[SocialLinkNames.Priestess].calculate(
        new SingleDay({
          ...currentDay,
          links: {
            ...currentDay.links,
            [SocialLinkNames.Priestess]: {
              ...currentDay.links[SocialLinkNames.Priestess],
              romance: Routes.Romantic,
            },
          },
        })
      );
    },
  },
  [socialLinkInvitationNames.PriestessInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    linkName: SocialLinkNames.Priestess,
    name: socialLinkInvitationNames.PriestessInvitation,
    label: function () {
      return (
        <EventCard
          name={socialLinks.Priestess.linkDetails.name}
          head={this.name}
        />
      );
    },
    _invitationsDates: [
      new Date(2009, 5, 28).getTime(),
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 8, 13).getTime(),
      new Date(2009, 10, 15).getTime(),
      new Date(2010, 0, 5).getTime(),
      new Date(2010, 0, 17).getTime(),
      new Date(2010, 0, 24).getTime(),
    ],
  },
};
