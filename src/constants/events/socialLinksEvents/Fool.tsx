import { SocialLinkNames } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { linkBaseFunctions } from "../base";
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
    label: () => <EventCard place="Tartarus" name="S.E.E.S." head="Fool" />,
    available: () => false,
  },
};
