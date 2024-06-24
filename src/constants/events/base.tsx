import { socialLinks } from "../socialLinks";
import { SocialLinkNames } from "../socialLinks/types";
import { upgradeProps, upgradeResponse, Categories } from "./types";

export const initialUpgrade = {
  upgrade: function (props: upgradeProps): upgradeResponse {
    return { stats: props.currentStats, links: props.currentLinks };
  },
};

export const linkBaseFunctions = {
  name: SocialLinkNames.Aeon,
  category: Categories.Links,
  upgrade: function (props: upgradeProps): upgradeResponse {
    return socialLinks[this.name].calculate({ ...props });
  },
};
