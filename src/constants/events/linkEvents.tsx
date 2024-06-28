import { socialLinkRomanceNames, Times, Event } from "./types";
import { SocialLinkNames } from "../socialLinks/types";
import { EventCard } from "../../components/eventCard";
import { DaysNames, holidays } from "../monthsNames";
import { socialLinks } from "../socialLinks";
import { linkBaseFunctions } from "./base";
import { stats } from "../stats/stats";

export const linkEvents: {
  [key in SocialLinkNames | socialLinkRomanceNames]: Event;
} = {
  [SocialLinkNames.Magician]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.Magician,
    label: () => (
      <EventCard head="Magician" name="Kenji Tomochika" place="Classroom 2F" />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.friday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 22).getTime() &&
        !holidays.includes(currentDate.getTime()) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
  },
  [SocialLinkNames.Priestess]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.Priestess,
    label: () => (
      <EventCard
        place="2nd Floor Hallway"
        name="Fuuka Yamagishi"
        head="Priestess"
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
        previousDay.links[SocialLinkNames.Priestess].level === 6;
      const isRomance =
        !currentLinks[SocialLinkNames.Priestess].romance || isFork;
      const days = [DaysNames.monday, DaysNames.friday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 19).getTime() &&
        previousDay.links[SocialLinkNames.Fortune].level > 0 &&
        previousDay.stats[stats.Courage.name] >= 80 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance
      );
    },
  },
  [socialLinkRomanceNames.PriestessRomance]: {
    ...linkBaseFunctions,
    name: socialLinkRomanceNames.PriestessRomance,
    label: () => (
      <EventCard
        head="Priestess(Romance)"
        place="2nd Floor Hallway"
        name="Fuuka Yamagishi"
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
        previousDay.links[SocialLinkNames.Priestess].level === 6;
      const isRomance =
        currentLinks[SocialLinkNames.Priestess].romance || isFork;
      const days = [DaysNames.monday, DaysNames.friday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 19).getTime() &&
        previousDay.stats[stats.Courage.name] >= 80 &&
        previousDay.links[SocialLinkNames.Fortune].level > 0 &&
        isRomance &&
        currentTime === Times.Day &&
        days.includes(currentDate.getDay())
      );
    },
  },
  [SocialLinkNames.Empress]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.Empress,
    label: () => (
      <EventCard
        place="Faculty Office Entrance"
        name="Mitsuru Kirijo"
        head="Empress"
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
        !currentLinks[SocialLinkNames.Empress].romance || isFork;
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
        isRomance &&
        currentTime === Times.Day &&
        days.includes(currentDate.getDay())
      );
    },
  },
  [socialLinkRomanceNames.EmpressRomance]: {
    ...linkBaseFunctions,
    name: socialLinkRomanceNames.EmpressRomance,
    label: () => (
      <EventCard
        place="Faculty Office Entrance"
        head="Empress(Romance)"
        name="Mitsuru Kirijo"
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
      const isRomance = currentLinks[SocialLinkNames.Empress].romance || isFork;
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
        isRomance &&
        currentTime === Times.Day &&
        days.includes(currentDate.getDay())
      );
    },
  },
  [SocialLinkNames.Emperor]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.Emperor,
    label: () => (
      <EventCard
        place="Student Council Room"
        name="Hidetoshi Odagiri"
        head="Emperor"
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.monday, DaysNames.wednesday, DaysNames.friday];
      const isToday =
        currentDate.getTime() >= new Date(2010, 0, 1).getTime() ||
        days.includes(currentDate.getDay());
      return (
        currentDate.getTime() >= new Date(2009, 3, 27).getTime() &&
        !holidays.includes(currentDate.getTime()) &&
        currentTime === Times.Day &&
        isToday
      );
    },
  },
  [SocialLinkNames.Hierophant]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.Hierophant,
    label: () => (
      <EventCard
        place="Bookworms Used Books"
        name="Bunkichi and Mitsuko"
        head="Hierophant"
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
    name: SocialLinkNames.Lovers,
    label: () => (
      <EventCard head="Lovers" name="Yukari Takeba" place="Classroom 2F" />
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
        !currentLinks[SocialLinkNames.Empress].romance || isFork;
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
        isRomance
      );
    },
  },
  [socialLinkRomanceNames.LoversRomance]: {
    ...linkBaseFunctions,
    name: socialLinkRomanceNames.LoversRomance,
    label: () => (
      <EventCard
        head="Lovers(Romance)"
        name="Yukari Takeba"
        place="Classroom 2F"
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
      const isRomance = currentLinks[SocialLinkNames.Empress].romance || isFork;
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
        isRomance
      );
    },
  },
  [SocialLinkNames.Chariot]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.Chariot,
    label: () => (
      <EventCard name="Kazushi Miyamoto" place="Classroom 2F" head="Chariot" />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [
        DaysNames.monday,
        DaysNames.tuesday,
        DaysNames.thursday,
        DaysNames.friday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 3, 23).getTime() &&
        !holidays.includes(currentDate.getTime()) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
  },
  [SocialLinkNames.Justice]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.Justice,
    label: () => (
      <EventCard
        place="2nd Floor Hallway"
        name="Chihiro Fushimi"
        head="Justice"
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
        !currentLinks[SocialLinkNames.Empress].romance || isFork;
      const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 7).getTime() &&
        previousDay.links[SocialLinkNames.Emperor].level > 0 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance
      );
    },
  },
  [socialLinkRomanceNames.JusticeRomance]: {
    ...linkBaseFunctions,
    name: socialLinkRomanceNames.JusticeRomance,
    label: () => (
      <EventCard
        place="2nd Floor Hallway"
        name="Chihiro Fushimi"
        head="Justice"
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
      const isRomance = currentLinks[SocialLinkNames.Empress].romance || isFork;
      const days = [DaysNames.tuesday, DaysNames.thursday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 7).getTime() &&
        previousDay.links[SocialLinkNames.Emperor].level > 0 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance
      );
    },
  },
  [SocialLinkNames.Hermit]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.Hermit,
    label: () => (
      <EventCard
        place="Laptop at the Protagonist's room"
        head="Hermit"
        name="Maya"
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const freeDay =
        holidays.includes(currentDate.getTime()) ||
        currentDate.getDay() === DaysNames.sunday;
      return (
        currentDate.getTime() >= new Date(2009, 3, 29).getTime() &&
        currentTime === Times.Day &&
        freeDay
      );
    },
  },
  [SocialLinkNames.Fortune]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.Fortune,
    label: () => (
      <EventCard name="Keisuke Hiraga" place="Art Club Room" head="Fortune" />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.thursday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 17).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
  },
  [SocialLinkNames.Strength]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.Strength,
    label: () => (
      <EventCard
        place="2F Classroom Hallway"
        name="Yuko Nishiwaki"
        head="Strength"
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
        previousDay.links[SocialLinkNames.Strength].level === 2;
      const isRomance =
        !currentLinks[SocialLinkNames.Strength].romance || isFork;
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[SocialLinkNames.Chariot].level >= 2 &&
        !holidays.includes(currentDate.getTime()) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance
      );
    },
  },
  [socialLinkRomanceNames.StrengthRomance]: {
    ...linkBaseFunctions,
    name: socialLinkRomanceNames.StrengthRomance,
    label: () => (
      <EventCard
        place="2F Classroom Hallway"
        head="Strength(Romance)"
        name="Yuko Nishiwaki"
      />
    ),
    upgrade: function ({ currentLinks, ...props }) {
      return socialLinks[SocialLinkNames.Strength].calculate({
        ...props,
        currentLinks: {
          ...currentLinks,
          [SocialLinkNames.Strength]: {
            ...currentLinks[SocialLinkNames.Strength],
            romance: true,
          },
        },
      });
    },
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[SocialLinkNames.Strength].level === 2;
      const isRomance =
        currentLinks[SocialLinkNames.Strength].romance || isFork;
      const days = [DaysNames.wednesday, DaysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[SocialLinkNames.Chariot].level >= 2 &&
        !holidays.includes(currentDate.getTime()) &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day &&
        isRomance
      );
    },
  },
  [SocialLinkNames.HangedMan]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.HangedMan,
    label: () => (
      <EventCard
        place="Naganaki Shrine"
        name="Maiko Oohashi"
        head="Hanged Man"
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
    name: SocialLinkNames.Temperance,
    label: () => (
      <EventCard
        place="2F Classroom Hallway / 1F Laboratory Hallway (Home Economics Room)"
        name='André Laurent Jean "Bebe" Geraux'
        head="Temperance"
      />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      const days = [DaysNames.tuesday, DaysNames.wednesday, DaysNames.friday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 8).getTime() &&
        previousDay.links[socialLinks.Hierophant.name].level >= 3 &&
        previousDay.stats[stats.Academics.name] >= 20 &&
        days.includes(currentDate.getDay()) &&
        currentTime === Times.Day
      );
    },
  },
  [SocialLinkNames.Devil]: {
    ...linkBaseFunctions,
    name: SocialLinkNames.Devil,
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
    name: SocialLinkNames.Tower,
    label: () => (
      <EventCard place="Club Escapade" name="Mutatsu" head="Tower" />
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
    name: SocialLinkNames.Star,
    label: () => (
      <EventCard
        place="Iwatodai Station Strip Mall 1F"
        name="Mamoru Hayase"
        head="Star"
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
    name: SocialLinkNames.Moon,
    label: () => (
      <EventCard name="Nozomi Suemitsu" place="Paulownia Mall" head="Moon" />
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
    name: SocialLinkNames.Sun,
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
    name: SocialLinkNames.Aeon,
    label: () => <EventCard place="Classroom 2F" name="Aigis" head="Aeon" />,
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
        !currentLinks[SocialLinkNames.Empress].romance || isFork;
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
    name: socialLinkRomanceNames.AeonRomance,
    label: () => <EventCard place="Classroom 2F" name="Aigis" head="Aeon" />,
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
        !currentLinks[SocialLinkNames.Empress].romance || isFork;
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
    name: SocialLinkNames.Fool,
    special: true,
    label: () => <EventCard head="Fool" name="S.E.E.S." place="Tartarus" />,
    available: () => false,
  },
};
