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
    time: Times.Day,
    name: SocialLinkNames.Magician,
    linkName: SocialLinkNames.Magician,
    label: (props) => (
      <EventCard
        name="Kenji Tomochika"
        place="Classroom 2F"
        head="Magician"
        card={props?.card}
      />
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
    time: Times.Day,
    name: SocialLinkNames.Priestess,
    linkName: SocialLinkNames.Priestess,
    label: (props) => (
      <EventCard
        place="2nd Floor Hallway"
        name="Fuuka Yamagishi"
        head="Priestess"
        card={props?.card}
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
    time: Times.Day,
    name: socialLinkRomanceNames.PriestessRomance,
    linkName: SocialLinkNames.Priestess,
    label: (props) => (
      <EventCard
        head="Priestess(Romance)"
        place="2nd Floor Hallway"
        name="Fuuka Yamagishi"
        card={props?.card}
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
    time: Times.Day,
    name: SocialLinkNames.Empress,
    linkName: SocialLinkNames.Empress,
    label: (props) => (
      <EventCard
        place="Faculty Office Entrance"
        name="Mitsuru Kirijo"
        head="Empress"
        card={props?.card}
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
    time: Times.Day,
    name: socialLinkRomanceNames.EmpressRomance,
    linkName: SocialLinkNames.Empress,
    label: (props) => (
      <EventCard
        place="Faculty Office Entrance"
        head="Empress(Romance)"
        name="Mitsuru Kirijo"
        card={props?.card}
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
    time: Times.Day,
    name: SocialLinkNames.Emperor,
    linkName: SocialLinkNames.Emperor,
    label: (props) => (
      <EventCard
        place="Student Council Room"
        name="Hidetoshi Odagiri"
        head="Emperor"
        card={props?.card}
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
    time: Times.Day,
    name: SocialLinkNames.Hierophant,
    linkName: SocialLinkNames.Hierophant,
    label: (props) => (
      <EventCard
        place="Bookworms Used Books"
        name="Bunkichi and Mitsuko"
        head="Hierophant"
        card={props?.card}
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
        card={props?.card}
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
    time: Times.Day,
    name: socialLinkRomanceNames.LoversRomance,
    linkName: SocialLinkNames.Lovers,
    label: (props) => (
      <EventCard
        head="Lovers(Romance)"
        name="Yukari Takeba"
        place="Classroom 2F"
        card={props?.card}
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
    time: Times.Day,
    name: SocialLinkNames.Chariot,
    linkName: SocialLinkNames.Chariot,
    label: (props) => (
      <EventCard
        name="Kazushi Miyamoto"
        place="Classroom 2F"
        head="Chariot"
        card={props?.card}
      />
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
    time: Times.Day,
    name: SocialLinkNames.Justice,
    linkName: SocialLinkNames.Justice,
    label: (props) => (
      <EventCard
        place="2nd Floor Hallway"
        name="Chihiro Fushimi"
        head="Justice"
        card={props?.card}
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
        previousDay.links[SocialLinkNames.Justice].level === 4;
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
    time: Times.Day,
    name: socialLinkRomanceNames.JusticeRomance,
    linkName: SocialLinkNames.Justice,
    label: (props) => (
      <EventCard
        place="2nd Floor Hallway"
        head="Justice(Romance)"
        name="Chihiro Fushimi"
        card={props?.card}
      />
    ),
    upgrade: function (props) {
      return socialLinks[SocialLinkNames.Justice].calculate({
        ...props,
        currentLinks: {
          ...props.currentLinks,
          [SocialLinkNames.Justice]: {
            ...props.currentLinks[SocialLinkNames.Justice],
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
        previousDay.links[SocialLinkNames.Justice].level === 4;
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
    time: Times.Day,
    name: SocialLinkNames.Hermit,
    linkName: SocialLinkNames.Hermit,
    label: (props) => (
      <EventCard
        place="Laptop at the Protagonist's room"
        head="Hermit"
        name="Maya"
        card={props?.card}
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
    time: Times.Day,
    name: SocialLinkNames.Fortune,
    linkName: SocialLinkNames.Fortune,
    label: (props) => (
      <EventCard
        name="Keisuke Hiraga"
        place="Art Club Room"
        head="Fortune"
        card={props?.card}
      />
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
    time: Times.Day,
    name: SocialLinkNames.Strength,
    linkName: SocialLinkNames.Strength,
    label: (props) => (
      <EventCard
        place="2F Classroom Hallway"
        name="Yuko Nishiwaki"
        head="Strength"
        card={props?.card}
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
    time: Times.Day,
    name: socialLinkRomanceNames.StrengthRomance,
    linkName: SocialLinkNames.Strength,
    label: (props) => (
      <EventCard
        place="2F Classroom Hallway"
        head="Strength(Romance)"
        name="Yuko Nishiwaki"
        card={props?.card}
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
    time: Times.Day,
    name: SocialLinkNames.HangedMan,
    linkName: SocialLinkNames.HangedMan,
    label: (props) => (
      <EventCard
        place="Naganaki Shrine"
        name="Maiko Oohashi"
        head="Hanged Man"
        card={props?.card}
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
        place="2F Classroom Hallway / 1F Laboratory Hallway (Home Economics Room)"
        name='André Laurent Jean "Bebe" Geraux'
        head="Temperance"
        card={props?.card}
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
    time: Times.Evening,
    name: SocialLinkNames.Devil,
    linkName: SocialLinkNames.Devil,
    label: (props) => (
      <EventCard
        name="President Tanaka"
        place="Paulownia Mall"
        head="Devil"
        card={props?.card}
      />
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
        card={props?.card}
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
        card={props?.card}
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
        card={props?.card}
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
    label: (props) => (
      <EventCard
        place="Naganaki Shrine"
        name="Akinari Kamiki"
        head="Sun"
        card={props?.card}
      />
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
        card={props?.card}
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
        card={props?.card}
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
    label: (props) => (
      <EventCard
        place="Tartarus"
        name="S.E.E.S."
        head="Fool"
        card={props?.card}
      />
    ),
    available: () => false,
  },
};
