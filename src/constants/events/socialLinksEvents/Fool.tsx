import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { linkBaseFunctions } from "../base";
import { EventCard } from "@/components";
import { Times, Event } from "../types";

export const foolEvents: {
  [SocialLinkNames.Fool]: Event;
} = {
  [SocialLinkNames.Fool]: {
    ...linkBaseFunctions,
    time: Times.DarkHour,
    name: SocialLinkNames.Fool,
    linkName: SocialLinkNames.Fool,
    special: true,
    label: function () {
      return <EventCard {...socialLinks.Fool.linkDetails} head={this.name} />;
    },
    available: () => false,
  },
};
