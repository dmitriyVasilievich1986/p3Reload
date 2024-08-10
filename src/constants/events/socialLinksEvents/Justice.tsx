import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { SocialLinkNames, Routes } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { SingleDay } from "../../calendar/SingleDay";
import { socialLinks } from "../../socialLinks";
import { DaysNames } from "../../monthsNames";
import { stats } from "../../stats/stats";

import {
  socialLinkInvitationNames,
  socialLinkRomanceNames,
  Times,
  Event,
} from "../types";

export const justiceEvents: {
  [SocialLinkNames.Justice]: Event;
  [socialLinkRomanceNames.JusticeRomance]: Event;
  [socialLinkInvitationNames.JusticeInvitation]: Event;
} = {
  [SocialLinkNames.Justice]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Justice,
    linkName: SocialLinkNames.Justice,
    label: (props) => (
      <EventCard
        place="2nd Floor Hallway"
        name="Chihiro Fushimi"
        head="Justice"
        multiplier={
          props.links && props.links[SocialLinkNames.Justice].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Justice)}
      />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isRomance =
        currentDay.links[SocialLinkNames.Empress].romance === Routes.Platonic ||
        previousDay.links[SocialLinkNames.Justice].level === 4;
      const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday];
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 7).getTime() &&
        previousDay.links[SocialLinkNames.Emperor].level > 0 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isRomance
      );
    },
  },
  [socialLinkRomanceNames.JusticeRomance]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: socialLinkRomanceNames.JusticeRomance,
    linkName: SocialLinkNames.Justice,
    label: (props) => (
      <EventCard
        place="2nd Floor Hallway"
        head="Justice(Romance)"
        name="Chihiro Fushimi"
        multiplier={
          props.links && props.links[SocialLinkNames.Justice].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Justice)}
      />
    ),
    upgrade: function (currentDay) {
      return socialLinks[SocialLinkNames.Justice].calculate(
        new SingleDay({
          ...currentDay,
          links: {
            ...currentDay.links,
            [SocialLinkNames.Justice]: {
              ...currentDay.links[SocialLinkNames.Justice],
              romance: Routes.Romantic,
            },
          },
        })
      );
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isRomance =
        currentDay.links[SocialLinkNames.Empress].romance === Routes.Romantic ||
        previousDay.links[SocialLinkNames.Justice].level === 4;
      const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday];
      return (
        currentDay.date.getTime() >= new Date(2009, 4, 7).getTime() &&
        previousDay.links[SocialLinkNames.Emperor].level > 0 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isRomance
      );
    },
  },
  [socialLinkInvitationNames.JusticeInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.JusticeInvitation,
    linkName: SocialLinkNames.Justice,
    label: () => (
      <EventCard head="Justice(Invitation)" name="Chihiro Fushimi" />
    ),
    _invitationsDates: [
      new Date(2009, 4, 31).getTime(),
      new Date(2009, 5, 21).getTime(),
      new Date(2009, 6, 5).getTime(),
      new Date(2009, 6, 26).getTime(),
      new Date(2009, 7, 9).getTime(),
      new Date(2009, 7, 27).getTime(),
      new Date(2009, 8, 27).getTime(),
      new Date(2009, 9, 25).getTime(),
      new Date(2009, 10, 29).getTime(),
      new Date(2010, 0, 5).getTime(),
      new Date(2010, 0, 10).getTime(),
    ],
  },
};
