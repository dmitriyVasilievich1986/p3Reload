import { socialLinks, Routes } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";
import { Categories, Times, Event } from "../types";

import {
  CardWithMultiplier,
  InvitationCard,
  CardSpendTime,
  CardShrine,
} from "./genericCards";

import {
  SocialLinkNames,
  InvitationsType,
} from "@/constants/socialLinks/types";

function upgrade(romance: Routes) {
  return function (this: Event, { currentDay }: { currentDay: SingleDay }) {
    const linkName = this.linkName as SocialLinkNames;
    const level = currentDay.links[linkName].level + 1;

    return socialLinks[linkName].calculate({
      examMultiplier: currentDay.links[linkName].multiplier,
      maxCharmMultiplier: 1.51,
      cardMultiplier: 1.51,
      points: 0,
      level,
      currentDay: new SingleDay({
        ...currentDay,
        links: {
          ...currentDay.links,
          [linkName]: { ...currentDay.links[linkName], romance },
        },
      }),
    });
  };
}

const socialLinkEventBase: Event = {
  linkName: SocialLinkNames.Aeon,
  name: SocialLinkNames.Aeon,
  category: Categories.Links,
  time: Times.Day,
  label: CardWithMultiplier,
  available: () => false,
  upgrade: upgrade(Routes.Platonic),
};

const socialLinkRomanceEventBase: Event = {
  ...socialLinkEventBase,
  label: CardSpendTime,
  upgrade: upgrade(Routes.Romantic),
};

const socialLinkShrineEventBase: Event = {
  ...socialLinkEventBase,
  label: CardShrine,
  available: function ({
    currentDay,
    time,
  }: {
    previousDay?: SingleDay;
    currentDay: SingleDay;
    time: Times;
  }) {
    const link = this.linkName as SocialLinkNames;
    const thisLink = currentDay.links[link];
    const isNewLevel = socialLinks[link].isNewLevel(thisLink);

    return (
      thisLink.level < socialLinks[link].maxLevel &&
      time === Times.Day &&
      !isNewLevel
    );
  },
  upgrade: function ({ currentDay }: { currentDay: SingleDay }) {
    const linkName = this.linkName as SocialLinkNames;

    return socialLinks[linkName].calculate({
      examMultiplier: currentDay.links[linkName].multiplier,
      points: currentDay.links[linkName].points,
      level: currentDay.links[linkName].level,
      maxCharmMultiplier: 1.51,
      cardMultiplier: 1.51,
      maxPoints: [10],
      currentDay,
    });
  },
};

const socialLinkSpendTimeEventBase: Event = {
  ...socialLinkEventBase,
  label: CardSpendTime,
  upgrade: function ({ currentDay }: { currentDay: SingleDay }) {
    const linkName = this.linkName as SocialLinkNames;

    return socialLinks[linkName].calculate({
      examMultiplier: currentDay.links[linkName].multiplier > 1 ? 1.31 : 1,
      points: currentDay.links[linkName].points,
      level: currentDay.links[linkName].level,
      maxCharmMultiplier: 1.31,
      cardMultiplier: 1.31,
      maxPoints: [10],
      currentDay,
    });
  },
};

const socialLinkInvitationEventBase: Event = {
  ...socialLinkEventBase,
  label: InvitationCard,
  upgrade: function ({ currentDay }: { currentDay: SingleDay }) {
    const linkName = this.linkName as SocialLinkNames;

    return socialLinks[linkName].calculate({
      examMultiplier: currentDay.links[linkName].multiplier,
      points: currentDay.links[linkName].points,
      level: currentDay.links[linkName].level,
      maxCharmMultiplier: 1.51,
      cardMultiplier: 1.51,
      maxPoints: [30],
      currentDay,
    });
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
  socialLinkSpendTimeEventBase,
  socialLinkRomanceEventBase,
  socialLinkShrineEventBase,
  invitationAvailable,
  socialLinkEventBase,
};
