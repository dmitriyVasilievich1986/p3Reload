import { InvitationCard, CardSpendTime, CardShrine } from "./genericCards";
import { socialLinks, Routes } from "@/constants/socialLinks";
import { SingleDay } from "@/constants/calendar/SingleDay";

import {
  upgradeResponse,
  allEventsNames,
  Categories,
  Times,
  Event,
} from "../types";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
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

export class SocialLinkEvent implements Event {
  name: allEventsNames;
  linkName: SocialLinkNames;
  romance: Routes = Routes.Platonic;

  time: Times = Times.Day;
  special: boolean = false;
  category: Categories = Categories.Links;

  available: (props: SocialLinkAvailableProps) => boolean;
  label: (props: SocialLinkElementProps) => React.ReactNode;

  constructor(props: {
    name: allEventsNames;
    time?: Times;
    romance?: Routes;
    special?: boolean;
    linkName?: SocialLinkNames;
  }) {
    this.linkName = props.linkName || (props.name as SocialLinkNames);
    this.romance = props.romance || this.romance;
    this.special = props.special ?? this.special;
    this.time = props.time || this.time;
    this.name = props.name;

    this.available = socialLinks[this.linkName].isAvailable.bind(
      socialLinks[this.linkName]
    );
    this.label = socialLinks[this.linkName].element.bind(
      socialLinks[this.linkName]
    );
    this.upgrade = this.upgrade.bind(this);
  }

  upgrade(props: {
    previousWeek?: SingleDay;
    previousDay?: SingleDay;
    currentDay: SingleDay;
    time: Times;
  }): upgradeResponse {
    const linkName = this.linkName as SocialLinkNames;
    const level = props.currentDay.links[linkName].level + 1;

    return socialLinks[linkName].calculate.bind(socialLinks[linkName])({
      examMultiplier: props.currentDay.links[linkName].multiplier,
      maxCharmMultiplier: 1.51,
      cardMultiplier: 1.51,
      points: 0,
      level,
      currentDay: new SingleDay({
        ...props.currentDay,
        links: {
          ...props.currentDay.links,
          [linkName]: {
            ...props.currentDay.links[linkName],
            romance: this.romance,
          },
        },
      }),
    });
  }
}

const socialLinkEventBase: Event = {
  linkName: SocialLinkNames.Aeon,
  name: SocialLinkNames.Aeon,
  category: Categories.Links,
  time: Times.Day,
  label: function (props) {
    const link = this.linkName as SocialLinkNames;
    return socialLinks[link].element.bind(socialLinks[link])(props);
  },
  available: () => false,
  upgrade: upgrade(Routes.Platonic),
};

const socialLinkRomanceEventBase: Event = {
  ...socialLinkEventBase,
  label: function (props) {
    const link = this.linkName as SocialLinkNames;
    return socialLinks[link].element.bind(socialLinks[link])(props);
  },
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
