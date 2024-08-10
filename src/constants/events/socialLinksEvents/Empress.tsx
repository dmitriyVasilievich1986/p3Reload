import { linkInvitationBaseFunctions, linkBaseFunctions } from "../base";
import { SocialLinkNames, Routes } from "../../socialLinks/types";
import { EventCard } from "../../../components/eventCard";
import { DaysNames } from "../../monthsNames";
import { stats } from "../../stats/stats";

import {
  socialLinkInvitationNames,
  socialLinkRomanceNames,
  Times,
  Event,
} from "../types";

export const empressEvents: {
  [SocialLinkNames.Empress]: Event;
  [socialLinkRomanceNames.EmpressRomance]: Event;
  [socialLinkInvitationNames.EmpressInvitation]: Event;
} = {
  [SocialLinkNames.Empress]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Empress,
    linkName: SocialLinkNames.Empress,
    label: (props) => (
      <EventCard
        place="Faculty Office Entrance"
        name="Mitsuru Kirijo"
        head="Empress"
        multiplier={
          props.links && props.links[SocialLinkNames.Empress].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Empress)}
      />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isRomance =
        currentDay.links[SocialLinkNames.Empress].romance === Routes.Romantic ||
        previousDay.links[SocialLinkNames.Empress].level === 6;
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.saturday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2009, 10, 21).getTime() &&
        previousDay.stats[stats.Academics.name] >= 230 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isRomance
      );
    },
  },
  [socialLinkRomanceNames.EmpressRomance]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: socialLinkRomanceNames.EmpressRomance,
    linkName: SocialLinkNames.Empress,
    label: (props) => (
      <EventCard
        place="Faculty Office Entrance"
        head="Empress(Romance)"
        name="Mitsuru Kirijo"
        multiplier={
          props.links && props.links[SocialLinkNames.Empress].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Empress)}
      />
    ),
    available: function ({ previousDay, currentDay, time }) {
      if (previousDay === undefined) return false;
      const isRomance =
        currentDay.links[SocialLinkNames.Empress].romance === Routes.Romantic ||
        previousDay.links[SocialLinkNames.Empress].level === 6;
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.saturday,
      ];
      return (
        currentDay.date.getTime() >= new Date(2009, 10, 21).getTime() &&
        previousDay.stats[stats.Academics.name] >= 230 &&
        days.includes(currentDay.date.getDay()) &&
        !currentDay.isDayOff &&
        time === Times.Day &&
        !currentDay.exams &&
        isRomance
      );
    },
  },
  [socialLinkInvitationNames.EmpressInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.EmpressInvitation,
    linkName: SocialLinkNames.Empress,
    label: () => <EventCard head="Empress(Invitation)" name="Mitsuru Kirijo" />,
    _invitationsDates: [
      new Date(2010, 1, 4).getTime(),
      new Date(2010, 1, 7).getTime(),
      new Date(2010, 1, 24).getTime(),
    ],
  },
};
