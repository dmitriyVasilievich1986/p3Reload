import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { linkBaseFunctions } from "../base";
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
    label: () => <EventCard name="Pharos" head="Death" />,
    available: () => false,
  },
};
