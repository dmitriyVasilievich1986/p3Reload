import { SocialLinkNames, socialLinks } from "@/constants/socialLinks";
import { linkBaseFunctions } from "../base";
import { EventCard } from "@/components";
import { Times, Event } from "../types";

export const deathEvents: {
  [SocialLinkNames.Death]: Event;
} = {
  [SocialLinkNames.Death]: {
    ...linkBaseFunctions,
    time: Times.DarkHour,
    name: SocialLinkNames.Death,
    linkName: SocialLinkNames.Death,
    special: true,
    label: function () {
      return (
        <EventCard name={socialLinks.Death.linkDetails.name} head={this.name} />
      );
    },
    available: () => false,
  },
};
