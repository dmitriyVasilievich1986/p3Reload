import { upgradeProps, upgradeResponse, Categories } from "./types";
import { SocialLinkNames } from "../socialLinks/types";
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
