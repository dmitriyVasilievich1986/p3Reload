import { linkInvitationBaseFunctions, linkBaseFunctions } from "./base";
import { SocialLinkNames, Routes } from "../socialLinks/types";
import { EventCard } from "../../components/eventCard";
import { socialLinks } from "../socialLinks";
import { DaysNames } from "../monthsNames";
import { stats } from "../stats/stats";

import {
  socialLinkInvitationNames,
  socialLinkRomanceNames,
  Times,
  Event,
} from "./types";

export const linkEvents: {
  [key in
    | SocialLinkNames
    | socialLinkRomanceNames
    | socialLinkInvitationNames]: Event;
} = {
  [SocialLinkNames.Magician]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Magician,
    linkName: SocialLinkNames.Magician,
    label: (props) => (
      <EventCard
        name="Kenji Tomochika"
        place="Classroom 2F"
        head="Magician"
        multiplier={
          props.links && props.links[SocialLinkNames.Magician].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Magician)}
      />
    ),
    available: function ({ currentDate, currentTime, isDayOff, exams }) {
      const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.friday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 22).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        !isDayOff &&
        !exams
      );
    },
  },
  [socialLinkInvitationNames.MagicianInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.MagicianInvitation,
    linkName: SocialLinkNames.Magician,
    label: () => (
      <EventCard head="Magician(Invitation)" name="Kenji Tomochika" />
    ),
    _invitationsDates: [
      new Date(2009, 3, 26).getTime(),
      new Date(2009, 4, 5).getTime(),
      new Date(2009, 4, 24).getTime(),
      new Date(2009, 5, 14).getTime(),
      new Date(2009, 7, 5).getTime(),
      new Date(2009, 7, 26).getTime(),
      new Date(2009, 8, 22).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2010, 0, 4).getTime(),
      new Date(2010, 0, 11).getTime(),
    ],
  },
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
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
      isDayOff,
      exams,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Priestess].level === 6;
      const isRomance =
        currentLinks[SocialLinkNames.Priestess].romance === Routes.Platonic ||
        isFork;
      const days = [DaysNames.monday, DaysNames.friday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 19).getTime() &&
        previousDay.links[SocialLinkNames.Fortune].level > 0 &&
        previousDay.stats[stats.Courage.name] >= 80 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance &&
        !isDayOff &&
        !exams
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
    upgrade: function (props) {
      return socialLinks[SocialLinkNames.Priestess].calculate({
        ...props,
        currentLinks: {
          ...props.currentLinks,
          [SocialLinkNames.Priestess]: {
            ...props.currentLinks[SocialLinkNames.Priestess],
            romance: Routes.Romantic,
          },
        },
      });
    },
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
      isDayOff,
      exams,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Priestess].level === 6;
      const isRomance =
        currentLinks[SocialLinkNames.Priestess].romance === Routes.Romantic ||
        isFork;
      const days = [DaysNames.monday, DaysNames.friday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 19).getTime() &&
        previousDay.links[SocialLinkNames.Fortune].level > 0 &&
        previousDay.stats[stats.Courage.name] >= 80 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance &&
        !isDayOff &&
        !exams
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
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
      isDayOff,
      exams,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Empress].level === 6;
      const isRomance =
        currentLinks[SocialLinkNames.Empress].romance === Routes.Romantic ||
        isFork;
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 10, 21).getTime() &&
        previousDay.stats[stats.Academics.name] >= 230 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance &&
        !isDayOff &&
        !exams
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
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
      isDayOff,
      exams,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Empress].level === 6;
      const isRomance =
        currentLinks[SocialLinkNames.Empress].romance === Routes.Romantic ||
        isFork;
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 10, 21).getTime() &&
        previousDay.stats[stats.Academics.name] >= 230 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance &&
        !isDayOff &&
        !exams
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
  [SocialLinkNames.Emperor]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Emperor,
    linkName: SocialLinkNames.Emperor,
    label: (props) => (
      <EventCard
        place="Student Council Room"
        name="Hidetoshi Odagiri"
        head="Emperor"
        multiplier={
          props.links && props.links[SocialLinkNames.Emperor].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Emperor)}
      />
    ),
    available: function ({ currentDate, currentTime, isDayOff, exams }) {
      const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.friday];
      const isToday =
        currentDate.getTime() >= new Date(2010, 0, 1).getTime() ||
        days.includes(currentDate.getDay());
      return (
        currentDate.getTime() >= new Date(2009, 3, 27).getTime() &&
        currentTime === Times.Day &&
        !isDayOff &&
        isToday &&
        !exams
      );
    },
  },
  [SocialLinkNames.Hierophant]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Hierophant,
    linkName: SocialLinkNames.Hierophant,
    label: (props) => (
      <EventCard
        place="Bookworms Used Books"
        name="Bunkichi and Mitsuko"
        head="Hierophant"
        multiplier={
          props.links && props.links[SocialLinkNames.Hierophant].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Hierophant)}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
        DaysNames.sunday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 3, 25).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
  },
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
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
      isDayOff,
      exams,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Empress].level === 6;
      const isRomance =
        currentLinks[SocialLinkNames.Empress].romance === Routes.Platonic ||
        isFork;
      const days = [
        DaysNames.monday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 6, 25).getTime() &&
        previousDay.stats[stats.Charm.name] >= 100 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance &&
        !isDayOff &&
        !exams
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
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
      isDayOff,
      exams,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Empress].level === 6;
      const isRomance =
        currentLinks[SocialLinkNames.Empress].romance === Routes.Romantic ||
        isFork;
      const days = [
        DaysNames.monday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 6, 25).getTime() &&
        previousDay.stats[stats.Charm.name] >= 100 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance &&
        !isDayOff &&
        !exams
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
  [SocialLinkNames.Chariot]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Chariot,
    linkName: SocialLinkNames.Chariot,
    label: (props) => (
      <EventCard
        name="Kazushi Miyamoto"
        place="Classroom 2F"
        head="Chariot"
        multiplier={
          props.links && props.links[SocialLinkNames.Chariot].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Chariot)}
      />
    ),
    available: function ({ currentDate, currentTime, isDayOff, exams }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.thursday,
        DaysNames.friday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 3, 23).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        !isDayOff &&
        !exams
      );
    },
  },
  [socialLinkInvitationNames.ChariotInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.ChariotInvitation,
    linkName: SocialLinkNames.Chariot,
    label: () => (
      <EventCard name="Kazushi Miyamoto" head="Chariot(Invitation)" />
    ),
    _invitationsDates: [
      new Date(2009, 4, 4).getTime(),
      new Date(2009, 4, 24).getTime(),
      new Date(2009, 5, 7).getTime(),
      new Date(2009, 5, 14).getTime(),
      new Date(2009, 7, 5).getTime(),
      new Date(2009, 8, 27).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2009, 10, 8).getTime(),
      new Date(2010, 0, 6).getTime(),
      new Date(2010, 0, 10).getTime(),
    ],
  },
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
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
      isDayOff,
      exams,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Justice].level === 4;
      const isRomance =
        currentLinks[SocialLinkNames.Empress].romance === Routes.Platonic ||
        isFork;
      const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 7).getTime() &&
        previousDay.links[SocialLinkNames.Emperor].level > 0 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance &&
        !isDayOff &&
        !exams
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
    upgrade: function (props) {
      return socialLinks[SocialLinkNames.Justice].calculate({
        ...props,
        currentLinks: {
          ...props.currentLinks,
          [SocialLinkNames.Justice]: {
            ...props.currentLinks[SocialLinkNames.Justice],
            romance: Routes.Romantic,
          },
        },
      });
    },
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
      isDayOff,
      exams,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Justice].level === 4;
      const isRomance =
        currentLinks[SocialLinkNames.Empress].romance === Routes.Romantic ||
        isFork;
      const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 7).getTime() &&
        previousDay.links[SocialLinkNames.Emperor].level > 0 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance &&
        !isDayOff &&
        !exams
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
  [SocialLinkNames.Hermit]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Hermit,
    linkName: SocialLinkNames.Hermit,
    label: (props) => (
      <EventCard
        place="Laptop at the Protagonist's room"
        head="Hermit"
        name="Maya"
        multiplier={
          props.links && props.links[SocialLinkNames.Hermit].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Hermit)}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [
        new Date(2009, 3, 29).getTime(),
        new Date(2009, 4, 4).getTime(),
        new Date(2009, 4, 5).getTime(),
        new Date(2009, 8, 22).getTime(),
        new Date(2009, 8, 23).getTime(),
        new Date(2009, 8, 24).getTime(),
        new Date(2009, 9, 12).getTime(),
      ];
      const isToday =
        currentDate.getDay() === DaysNames.sunday ||
        days.includes(currentDate.getTime());
      return (
        currentDate.getTime() >= new Date(2009, 3, 29).getTime() &&
        currentTime === Times.Day &&
        isToday
      );
    },
  },
  [SocialLinkNames.Fortune]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Fortune,
    linkName: SocialLinkNames.Fortune,
    label: (props) => (
      <EventCard
        name="Keisuke Hiraga"
        place="Art Club Room"
        head="Fortune"
        multiplier={
          props.links && props.links[SocialLinkNames.Fortune].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Fortune)}
      />
    ),
    available: function ({ currentDate, currentTime, isDayOff, exams }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.thursday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 17).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        !isDayOff &&
        !exams
      );
    },
  },
  [socialLinkInvitationNames.FortuneInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.FortuneInvitation,
    linkName: SocialLinkNames.Fortune,
    label: () => <EventCard head="Fortune(Invitation)" name="Keisuke Hiraga" />,
    _invitationsDates: [
      new Date(2009, 7, 4).getTime(),
      new Date(2009, 7, 7).getTime(),
      new Date(2009, 8, 23).getTime(),
      new Date(2009, 9, 18).getTime(),
      new Date(2010, 0, 4).getTime(),
      new Date(2010, 0, 10).getTime(),
      new Date(2010, 0, 11).getTime(),
    ],
  },
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
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
      isDayOff,
      exams,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Strength].level === 2;
      const isRomance =
        currentLinks[SocialLinkNames.Strength].romance === Routes.Platonic ||
        isFork;
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[SocialLinkNames.Chariot].level >= 2 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance &&
        !isDayOff &&
        !exams
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
    upgrade: function ({ currentLinks, ...props }) {
      return socialLinks[SocialLinkNames.Strength].calculate({
        ...props,
        currentLinks: {
          ...currentLinks,
          [SocialLinkNames.Strength]: {
            ...currentLinks[SocialLinkNames.Strength],
            romance: Routes.Romantic,
          },
        },
      });
    },
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
      isDayOff,
      exams,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Strength].level === 2;
      const isRomance =
        currentLinks[SocialLinkNames.Strength].romance === Routes.Romantic ||
        isFork;
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[SocialLinkNames.Chariot].level >= 2 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance &&
        !isDayOff &&
        !exams
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
  [SocialLinkNames.HangedMan]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.HangedMan,
    linkName: SocialLinkNames.HangedMan,
    label: (props) => (
      <EventCard
        place="Naganaki Shrine"
        name="Maiko Oohashi"
        head="Hanged Man"
        multiplier={
          props.links && props.links[SocialLinkNames.HangedMan].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.HangedMan)}
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 6).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
  },
  [SocialLinkNames.Temperance]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Temperance,
    linkName: SocialLinkNames.Temperance,
    label: (props) => (
      <EventCard
        name='André Laurent Jean "Bebe" Geraux'
        place="2F Classroom Hallway"
        head="Temperance"
        multiplier={
          props.links && props.links[SocialLinkNames.Temperance].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Temperance)}
      />
    ),
    available: function ({
      currentDate,
      currentTime,
      previousDay,
      isDayOff,
      exams,
    }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
      return (
        previousDay.links[socialLinks.Hierophant.name].level >= 3 &&
        currentDate.getTime() >= new Date(2009, 4, 8).getTime() &&
        previousDay.stats[stats.Academics.name] >= 20 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        !isDayOff &&
        !exams
      );
    },
  },
  [socialLinkInvitationNames.TemperanceInvitation]: {
    ...linkInvitationBaseFunctions,
    time: Times.Day,
    name: socialLinkInvitationNames.TemperanceInvitation,
    linkName: SocialLinkNames.Temperance,
    label: () => (
      <EventCard
        name='André Laurent Jean "Bebe" Geraux'
        head="Temperance(Invitation)"
      />
    ),
    _invitationsDates: [
      new Date(2009, 5, 7).getTime(),
      new Date(2009, 5, 21).getTime(),
      new Date(2009, 6, 26).getTime(),
      new Date(2009, 7, 7).getTime(),
      new Date(2009, 7, 27).getTime(),
      new Date(2009, 8, 27).getTime(),
      new Date(2009, 10, 8).getTime(),
      new Date(2009, 10, 29).getTime(),
      new Date(2010, 0, 5).getTime(),
    ],
  },
  [SocialLinkNames.Devil]: {
    ...linkBaseFunctions,
    time: Times.Evening,
    name: SocialLinkNames.Devil,
    linkName: SocialLinkNames.Devil,
    label: () => (
      <EventCard name="President Tanaka" place="Paulownia Mall" head="Devil" />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.tuesday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 16).getTime() &&
        previousDay.links[socialLinks.Hermit.name].level >= 4 &&
        previousDay.stats[stats.Charm.name] >= 45 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Evening
      );
    },
  },
  [SocialLinkNames.Tower]: {
    ...linkBaseFunctions,
    time: Times.Evening,
    name: SocialLinkNames.Tower,
    linkName: SocialLinkNames.Tower,
    label: (props) => (
      <EventCard
        place="Club Escapade"
        name="Mutatsu"
        head="Tower"
        multiplier={
          props.links && props.links[SocialLinkNames.Tower].multiplier
        }
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Tower)}
      />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      const days = [
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
        DaysNames.sunday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 4, 23).getTime() &&
        previousDay.links[SocialLinkNames.Strength].level >= 4 &&
        previousDay.stats[stats.Courage.name] >= 15 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Evening
      );
    },
  },
  [SocialLinkNames.Star]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Star,
    linkName: SocialLinkNames.Star,
    label: (props) => (
      <EventCard
        place="Iwatodai Station Strip Mall 1F"
        name="Mamoru Hayase"
        head="Star"
        multiplier={props.links && props.links[SocialLinkNames.Star].multiplier}
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Star)}
      />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.wednesday, DaysNames.friday, DaysNames.sunday];
      return (
        currentDate.getTime() >= new Date(2009, 7, 5).getTime() &&
        previousDay.stats[stats.Courage.name] >= 45 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
  },
  [SocialLinkNames.Moon]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Moon,
    linkName: SocialLinkNames.Moon,
    label: (props) => (
      <EventCard
        name="Nozomi Suemitsu"
        place="Paulownia Mall"
        head="Moon"
        multiplier={props.links && props.links[SocialLinkNames.Moon].multiplier}
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Moon)}
      />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      return (
        currentDate.getTime() >= new Date(2009, 3, 28).getTime() &&
        previousDay.links[socialLinks.Magician.name].level >= 3 &&
        previousDay.stats[stats.Charm.name] >= 15 &&
        currentTime === Times.Day
      );
    },
  },
  [SocialLinkNames.Sun]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Sun,
    linkName: SocialLinkNames.Sun,
    label: () => (
      <EventCard place="Naganaki Shrine" name="Akinari Kamiki" head="Sun" />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      return (
        currentDate.getTime() >= new Date(2009, 7, 9).getTime() &&
        previousDay.links[socialLinks.HangedMan.name].level >= 3 &&
        previousDay.stats[stats.Academics.name] >= 100 &&
        currentDate.getDay() == DaysNames.sunday &&
        currentTime === Times.Day
      );
    },
  },
  [SocialLinkNames.Aeon]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: SocialLinkNames.Aeon,
    linkName: SocialLinkNames.Aeon,
    label: (props) => (
      <EventCard
        place="Classroom 2F"
        name="Aigis"
        head="Aeon"
        multiplier={props.links && props.links[SocialLinkNames.Aeon].multiplier}
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Aeon)}
      />
    ),
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Empress].level === 6;
      const isRomance =
        currentLinks[SocialLinkNames.Empress].romance === Routes.Platonic ||
        isFork;
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2010, 0, 8).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance
      );
    },
  },
  [socialLinkRomanceNames.AeonRomance]: {
    ...linkBaseFunctions,
    time: Times.Day,
    name: socialLinkRomanceNames.AeonRomance,
    linkName: SocialLinkNames.Aeon,
    label: (props) => (
      <EventCard
        place="Classroom 2F"
        name="Aigis"
        head="Aeon"
        multiplier={props.links && props.links[SocialLinkNames.Aeon].multiplier}
        charm={props?.stats && props.stats[stats.Charm.name] >= 100}
        card={props.arcanes.includes(SocialLinkNames.Aeon)}
      />
    ),
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Empress].level === 6;
      const isRomance =
        currentLinks[SocialLinkNames.Empress].romance === Routes.Romantic ||
        isFork;
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.wednesday,
        DaysNames.thursday,
        DaysNames.friday,
        DaysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2010, 0, 8).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance
      );
    },
  },
  [SocialLinkNames.Fool]: {
    ...linkBaseFunctions,
    time: Times.DarkHour,
    name: SocialLinkNames.Fool,
    linkName: SocialLinkNames.Fool,
    special: true,
    label: () => <EventCard place="Tartarus" name="S.E.E.S." head="Fool" />,
    available: () => false,
  },
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
