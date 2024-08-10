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

export const strengthEvents: {
  [SocialLinkNames.Strength]: Event;
  [socialLinkRomanceNames.StrengthRomance]: Event;
  [socialLinkInvitationNames.StrengthInvitation]: Event;
} = {
  [SocialLinkNames.Strength]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Strength,
    linkName: SocialLinkNames.Strength,
    label: (props) => (
      <EventCard
        place="2F Classroom Hallway"
        name="Yuko Nishiwaki"
        head="Strength"
        multiplier={
          props.links && props.links[SocialLinkNames.Strength].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Strength)}
      />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isRomance =
        currentDay.links[SocialLinkNames.Strength].romance ===
          Routes.Platonic ||
        previousDay.links[SocialLinkNames.Strength].level === 2;
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[SocialLinkNames.Chariot].level >= 2 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isRomance
      );
    },
  },
  [socialLinkRomanceNames.StrengthRomance]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: socialLinkRomanceNames.StrengthRomance,
    linkName: SocialLinkNames.Strength,
    label: (props) => (
      <EventCard
        place="2F Classroom Hallway"
        head="Strength(Romance)"
        name="Yuko Nishiwaki"
        multiplier={
          props.links && props.links[SocialLinkNames.Strength].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Strength)}
      />
    ),
    upgrade: function (currentDay) {
      return socialLinks[SocialLinkNames.Strength].calculate({
        ...currentDay,
        links: {
          ...currentDay.links,
          [SocialLinkNames.Strength]: {
            ...currentDay.links[SocialLinkNames.Strength],
            romance: Routes.Romantic,
          },
        },
      });
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isRomance =
        currentDay.links[SocialLinkNames.Strength].romance ===
          Routes.Romantic ||
        previousDay.links[SocialLinkNames.Strength].level === 2;
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return (
        currentDay.date.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[SocialLinkNames.Chariot].level >= 2 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isRomance
      );
    },
  },
  [socialLinkInvitationNames.StrengthInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.StrengthInvitation,
    linkName: SocialLinkNames.Strength,
    label: () => (
      <EventCard head="Strength(Invitation)" name="Yuko Nishiwaki" />
    ),
    _invitationsDates: [
      new Date(2009, 4, 31).getTime(),
      new Date(2009, 6, 5).getTime(),
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 7, 26).getTime(),
      new Date(2009, 8, 22).getTime(),
      new Date(2009, 9, 25).getTime(),
      new Date(2009, 10, 15).getTime(),
      new Date(2010, 0, 6).getTime(),
      new Date(2010, 0, 17).getTime(),
    ],
  },
};
