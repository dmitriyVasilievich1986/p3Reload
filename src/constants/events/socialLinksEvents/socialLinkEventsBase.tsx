import { CardWithMultiplier, InvitationCard } from "./genericCards";
import { socialLinks, Routes } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { Categories, Times, Event } from "../types";

import {
  SocialLinkNames,
  InvitationsType,
} from "@/constants/socialLinks/types";

const socialLinkEventBase: Event = {
  linkName: SocialLinkNames.Aeon,
  name: SocialLinkNames.Aeon,
  category: Categories.Links,
  time: Times.Day,
  label: CardWithMultiplier,
  available: () => false,
  upgrade: function (currentDay) {
    return socialLinks[this.linkName as SocialLinkNames].calculate(currentDay);
  },
};

const socialLinkRomanceEventBase: Event = {
  ...socialLinkEventBase,
  upgrade: function (currentDay) {
    const linkName = this.linkName as SocialLinkNames;
    return socialLinks[linkName].calculate(
      new SingleDay({
        ...currentDay,
        links: {
          ...currentDay.links,
          [linkName]: {
            ...currentDay.links[linkName],
            romance: Routes.Romantic,
          },
        },
      })
    );
  },
};

const socialLinkInvitationEventBase: Event = {
  ...socialLinkEventBase,
  label: InvitationCard,
  upgrade: function (currentDay) {
    const linkName = this.linkName as SocialLinkNames;
    return {
      links: {
        ...currentDay.links,
        [linkName]: {
          ...currentDay.links[linkName],
          points: currentDay.links[linkName].points + 30,
        },
      },
    };
  },
};

function invitationAvailable(invitationsDates: number[]) {
  return function (
    this: Event,
    {
      currentDay,
      time,
    }: {
      previousDay?: SingleDay;
      currentDay: SingleDay;
      time: Times;
    }
  ) {
    const linkName = this.linkName as SocialLinkNames;
    const invitations = socialLinks[linkName].invitations as InvitationsType;
    const isInInvitations =
      currentDay.links[linkName].level in invitations &&
      currentDay.links[linkName].romance in
        invitations[currentDay.links[linkName].level];

    return (
      invitationsDates.includes(currentDay.date.getTime()) &&
      time === Times.Day &&
      isInInvitations
    );
  };
}

export {
  socialLinkInvitationEventBase,
  socialLinkRomanceEventBase,
  invitationAvailable,
  socialLinkEventBase,
};
