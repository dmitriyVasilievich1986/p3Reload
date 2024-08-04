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

export const loversEvents: {
  [SocialLinkNames.Lovers]: Event;
  [socialLinkRomanceNames.LoversRomance]: Event;
  [socialLinkInvitationNames.LoversInvitation]: Event;
} = {
  [SocialLinkNames.Lovers]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Lovers,
    linkName: SocialLinkNames.Lovers,
    label: (props) => (
      <EventCard
        name="Yukari Takeba"
        place="Classroom 2F"
        head="Lovers"
        multiplier={
          props.links && props.links[SocialLinkNames.Lovers].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Lovers)}
      />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isRomance =
        currentDay.links[SocialLinkNames.Lovers].romance === Routes.Platonic ||
        previousDay.links[SocialLinkNames.Lovers].level === 6;
      const days = [
        DaysNames.monday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.saturday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2009, 6, 25).getTime() &&
        previousDay.stats[stats.Charm.name] >= 100 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isRomance
      );
    },
  },
  [socialLinkRomanceNames.LoversRomance]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: socialLinkRomanceNames.LoversRomance,
    linkName: SocialLinkNames.Lovers,
    label: (props) => (
      <EventCard
        head="Lovers(Romance)"
        name="Yukari Takeba"
        place="Classroom 2F"
        multiplier={
          props.links && props.links[SocialLinkNames.Lovers].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Lovers)}
      />
    ),
    upgrade: function (currentDay) {
      return socialLinks[SocialLinkNames.Lovers].calculate({
        ...currentDay,
        links: {
          ...currentDay.links,
          [SocialLinkNames.Lovers]: {
            ...currentDay.links[SocialLinkNames.Lovers],
            romance: Routes.Romantic,
          },
        },
      });
    },
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isRomance =
        currentDay.links[SocialLinkNames.Lovers].romance === Routes.Romantic ||
        previousDay.links[SocialLinkNames.Lovers].level === 6;
      const days = [
        DaysNames.monday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.saturday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2009, 6, 25).getTime() &&
        previousDay.stats[stats.Charm.name] >= 100 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isRomance
      );
    },
  },
  [socialLinkInvitationNames.LoversInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.LoversInvitation,
    linkName: SocialLinkNames.Lovers,
    label: () => <EventCard head="Lovers(Invitation)" name="Yukari Takeba" />,
    _invitationsDates: [
      new Date(2009, 8, 13).getTime(),
      new Date(2009, 8, 23).getTime(),
      new Date(2009, 9, 25).getTime(),
      new Date(2009, 10, 15).getTime(),
      new Date(2010, 0, 7).getTime(),
      new Date(2010, 0, 10).getTime(),
      new Date(2010, 0, 17).getTime(),
      new Date(2010, 0, 24).getTime(),
    ],
  },
};
