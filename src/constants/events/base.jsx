import { socialLinks } from "../socialLinks";

export const holidays = [
  new Date(2009, 3, 29).getTime(),
  new Date(2009, 4, 4).getTime(),
  new Date(2009, 4, 5).getTime(),
];

export const initialUpgrade = {
  upgrade: function ({ currentStats, currentLinks }) {
    return { stats: currentStats, links: currentLinks };
  },
};

export const linkBaseFunctions = {
  name: "",
  category: "links",
  upgrade: function (props) {
    return socialLinks[this.name].calculate({ ...props, name: this.name });
  },
};
