import { SocialLinkNames, Routes } from "../socialLinks/types";
import { socialLinks } from "../socialLinks";

import {
  upgradeResponse,
  availableProps,
  upgradeProps,
  Categories,
  Times,
} from "./types";

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
    currentDate,
    currentTime,
    currentLinks,
  }: availableProps) {
    const route = currentLinks[this.linkName].romance
      ? Routes.Romantic
      : Routes.Platonic;
    const isInInvitations =
      currentLinks[this.linkName].level in
        socialLinks[this.linkName].invitations &&
      route in
        socialLinks[this.linkName].invitations[
          currentLinks[this.linkName].level
        ];

    return (
      (this._invitationsDates as Array<number>).includes(
        currentDate.getTime()
      ) &&
      currentTime === Times.Day &&
      isInInvitations
    );
  },
};
