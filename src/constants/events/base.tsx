import { SocialLinkNames, InvitationsType } from "../socialLinks/types";
import { upgradeResponse, Categories, Times } from "./types";
import { SingleDay } from "../calendar/SingleDay";
import { socialLinks } from "../socialLinks";

export const initialUpgrade = {
  upgrade: function (currentDay: SingleDay): upgradeResponse {
    return { ...currentDay };
  },
};

export const linkBaseFunctions = {
  name: SocialLinkNames.Aeon,
  linkName: SocialLinkNames.Aeon,
  category: Categories.Links,
  upgrade: function (currentDay: SingleDay): upgradeResponse {
    return socialLinks[this.linkName].calculate(currentDay);
  },
};

export const linkInvitationBaseFunctions = {
  ...linkBaseFunctions,
  category: Categories.Invitation,
  _invitationsDates: [],
  upgrade: function (currentDay: SingleDay): upgradeResponse {
    return {
      links: {
        ...currentDay.links,
        [this.linkName]: {
          ...currentDay.links[this.linkName],
          points: currentDay.links[this.linkName].points + 30,
        },
      },
    };
  },
  available: function ({
    currentDay,
    time,
  }: {
    previousDay?: SingleDay;
    currentDay: SingleDay;
    time: Times;
  }) {
    const isInInvitations =
      currentDay.links[this.linkName].level in
        (socialLinks[this.linkName].invitations as InvitationsType) &&
      currentDay.links[this.linkName].romance in
        (socialLinks[this.linkName].invitations as InvitationsType)[
          currentDay.links[this.linkName].level
        ];

    return (
      (this._invitationsDates as Array<number>).includes(
        currentDay.date.getTime()
      ) &&
      time === Times.Day &&
      isInInvitations
    );
  },
};
