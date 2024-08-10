import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { SocialLinkNames, Routes } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { socialLinks } from "../../socialLinks";
import { DaysNames } from "../../monthsNames";
import { stats } from "../../stats/stats";

import {
  socialLinkInvitationNames,
  socialLinkRomanceNames,
  Times,
  Event,
} from "../types";

export const priestessEvents: {
  [SocialLinkNames.Priestess]: Event;
  [socialLinkRomanceNames.PriestessRomance]: Event;
  [socialLinkInvitationNames.PriestessInvitation]: Event;
} = {
  [SocialLinkNames.Priestess]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Priestess,
    linkName: SocialLinkNames.Priestess,
    label: (props) => (
      <EventCard
        place="2nd Floor Hallway"
        name="Fuuka Yamagishi"
        head="Priestess"
        multiplier={
          props.links && props.links[SocialLinkNames.Priestess].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Priestess)}
      />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isRomance =
        currentDay.links[SocialLinkNames.Priestess].romance ===
          Routes.Platonic ||
        previousDay.links[SocialLinkNames.Priestess].level === 6;
      const days = [DaysNames.monday, DaysNames.friday, DaysNames.saturday];
      return (
        currentDay.date.getTime() >= new Date(2009, 5, 19).getTime() &&
        previousDay.links[SocialLinkNames.Fortune].level > 0 &&
        previousDay.stats[stats.Courage.name] >= 80 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isRomance
      );
    },
  },
  [socialLinkRomanceNames.PriestessRomance]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: socialLinkRomanceNames.PriestessRomance,
    linkName: SocialLinkNames.Priestess,
    label: (props) => (
      <EventCard
        head="Priestess(Romance)"
        place="2nd Floor Hallway"
        name="Fuuka Yamagishi"
        multiplier={
          props.links && props.links[SocialLinkNames.Priestess].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Priestess)}
      />
    ),
    upgrade: function (currentDay) {
      return socialLinks[SocialLinkNames.Priestess].calculate({
        ...currentDay,
        links: {
          ...currentDay.links,
          [SocialLinkNames.Priestess]: {
            ...currentDay.links[SocialLinkNames.Priestess],
            romance: Routes.Romantic,
          },
        },
      });
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isRomance =
        currentDay.links[SocialLinkNames.Priestess].romance ===
          Routes.Romantic ||
        previousDay.links[SocialLinkNames.Priestess].level === 6;
      const days = [DaysNames.monday, DaysNames.friday, DaysNames.saturday];
      return (
        currentDay.date.getTime() >= new Date(2009, 5, 19).getTime() &&
        previousDay.links[SocialLinkNames.Fortune].level > 0 &&
        previousDay.stats[stats.Courage.name] >= 80 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isRomance
      );
    },
  },
  [socialLinkInvitationNames.PriestessInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.PriestessInvitation,
    linkName: SocialLinkNames.Priestess,
    label: () => (
      <EventCard head="Priestess(Invitation)" name="Fuuka Yamagishi" />
    ),
    _invitationsDates: [
      new Date(2009, 5, 28).getTime(),
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 8, 13).getTime(),
      new Date(2009, 10, 15).getTime(),
      new Date(2010, 0, 5).getTime(),
      new Date(2010, 0, 17).getTime(),
      new Date(2010, 0, 24).getTime(),
    ],
  },
};
