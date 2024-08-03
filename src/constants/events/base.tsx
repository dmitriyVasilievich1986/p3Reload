import { upgradeResponse, upgradeProps, Categories, Times } from "./types";
import { SocialLinkNames } from "../socialLinks/types";
import { singleDay } from "../calendar/types";
import { socialLinks } from "../socialLinks";

export const initialUpgrade = {
  upgrade: function (props: upgradeProps): upgradeResponse {
    return { stats: props.currentStats, links: props.currentLinks };
  },
};

export const linkBaseFunctions = {
  name: SocialLinkNames.Aeon,
  linkName: SocialLinkNames.Aeon,
  category: Categories.Links,
  upgrade: function (props: upgradeProps): upgradeResponse {
    return socialLinks[this.linkName].calculate({ ...props });
  },
};

export const linkInvitationBaseFunctions = {
  ...linkBaseFunctions,
  category: Categories.Invitation,
  _invitationsDates: [],
  upgrade: function (props: upgradeProps): upgradeResponse {
    return {
      links: {
        ...props.currentLinks,
        [this.linkName]: {
          ...props.currentLinks[this.linkName],
          points: props.currentLinks[this.linkName].points + 30,
        },
      },
    };
  },
  available: function ({
    currentDay,
    time,
  }: {
    previousDay?: singleDay;
    currentDay: singleDay;
    time: Times;
  }) {
    const isInInvitations =
      currentDay.links[this.linkName].level in
        socialLinks[this.linkName].invitations &&
      currentDay.links[this.linkName].romance in
        socialLinks[this.linkName].invitations[
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
