import EventCard from "../../components/eventCard/EventCard";
import { linkBaseFunctions, holidays } from "./base";
import { socialLinks } from "../socialLinks";
import { daysNames } from "../monthsNames";
import { stats } from "../stats";
import React from "react";

export const linkEvents = {
  Magician: {
    ...linkBaseFunctions,
    name: socialLinks.Magician.name,
    label: () => (
      <EventCard head="Magician" name="Kenji Tomochika" place="Classroom 2F" />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.tuesday, daysNames.thursday, daysNames.friday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 22).getTime() &&
        !holidays.includes(currentDate.getTime()) &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
  },
  Priestess: {
    ...linkBaseFunctions,
    name: socialLinks.Priestess.name,
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
        previousDay.links[socialLinks.Priestess.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Priestess.name].romance || isFork;
      const days = [daysNames.monday, daysNames.friday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 19).getTime() &&
        previousDay.links[socialLinks.Fortune.name].level > 0 &&
        previousDay.stats[stats.Courage.name] >= 80 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  PriestessRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Priestess.name,
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
        previousDay.links[socialLinks.Priestess.name].level === 6;
      const isRomance =
        currentLinks[socialLinks.Priestess.name].romance || isFork;
      const days = [daysNames.monday, daysNames.friday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 19).getTime() &&
        previousDay.stats[stats.Courage.name] >= 80 &&
        previousDay.links[socialLinks.Fortune.name].level > 0 &&
        isRomance &&
        currentTime === "day" &&
        days.includes(currentDate.getDay())
      );
    },
  },
  Empress: {
    ...linkBaseFunctions,
    name: socialLinks.Empress.name,
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
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 10, 21).getTime() &&
        previousDay.stats[stats.Academics.name] >= 230 &&
        isRomance &&
        currentTime === "day" &&
        days.includes(currentDate.getDay())
      );
    },
  },
  EmpressRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Empress.name,
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
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 10, 21).getTime() &&
        previousDay.stats[stats.Academics.name] >= 230 &&
        isRomance &&
        currentTime === "day" &&
        days.includes(currentDate.getDay())
      );
    },
  },
  Emperor: {
    ...linkBaseFunctions,
    name: socialLinks.Emperor.name,
    label: () => (
      <EventCard
        place="Student Council Room"
        name="Hidetoshi Odagiri"
        head="Emperor"
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.monday, daysNames.wednesday, daysNames.friday];
      const isToday =
        currentDate.getTime() >= new Date(2010, 0, 1).getTime() ||
        days.includes(currentDate.getDay());
      return (
        currentDate.getTime() >= new Date(2009, 3, 27).getTime() &&
        !holidays.includes(currentDate.getTime()) &&
        currentTime === "day" &&
        isToday
      );
    },
  },
  Hierophant: {
    ...linkBaseFunctions,
    name: socialLinks.Hierophant.name,
    label: () => (
      <EventCard
        place="Bookworms Used Books"
        name="Bunkichi and Mitsuko"
        head="Hierophant"
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.friday,
        daysNames.saturday,
        daysNames.sunday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 3, 25).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
  },
  Lovers: {
    ...linkBaseFunctions,
    name: socialLinks.Lovers.name,
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
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 6, 25).getTime() &&
        previousDay.stats[stats.Charm.name] >= 100 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  LoversRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Lovers.name,
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
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 6, 25).getTime() &&
        previousDay.stats[stats.Charm.name] >= 100 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  Chariot: {
    ...linkBaseFunctions,
    name: socialLinks.Chariot.name,
    label: () => (
      <EventCard name="Kazushi Miyamoto" place="Classroom 2F" head="Chariot" />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.thursday,
        daysNames.friday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 3, 23).getTime() &&
        !holidays.includes(currentDate.getTime()) &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
  },
  Justice: {
    ...linkBaseFunctions,
    name: socialLinks.Justice.name,
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
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [daysNames.tuesday, daysNames.thursday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 7).getTime() &&
        previousDay.links[socialLinks.Emperor.name].level > 0 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  JusticeRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Justice.name,
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
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [daysNames.tuesday, daysNames.thursday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 7).getTime() &&
        previousDay.links[socialLinks.Emperor.name].level > 0 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  Hermit: {
    ...linkBaseFunctions,
    name: socialLinks.Hermit.name,
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
        currentDate.getDay() === daysNames.sunday;
      return (
        currentDate.getTime() >= new Date(2009, 3, 29).getTime() &&
        currentTime === "day" &&
        freeDay
      );
    },
  },
  Fortune: {
    ...linkBaseFunctions,
    name: socialLinks.Fortune.name,
    label: () => (
      <EventCard name="Keisuke Hiraga" place="Art Club Room" head="Fortune" />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.tuesday, daysNames.wednesday, daysNames.thursday];
      return (
        currentDate.getTime() >= new Date(2009, 5, 17).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
  },
  Strength: {
    ...linkBaseFunctions,
    name: socialLinks.Strength.name,
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
        previousDay.links[socialLinks.Strength.name].level === 2;
      const isRomance =
        !currentLinks[socialLinks.Strength.name].romance || isFork;
      const days = [daysNames.wednesday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[socialLinks.Chariot.name].level >= 2 &&
        !holidays.includes(currentDate.getTime()) &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  StrengthRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Strength.name,
    label: () => (
      <EventCard
        place="2F Classroom Hallway"
        head="Strength(Romance)"
        name="Yuko Nishiwaki"
      />
    ),
    upgrade: function ({ currentLinks, ...props }) {
      return socialLinks[this.name].calculate({
        ...props,
        name: this.name,
        currentLinks: {
          ...currentLinks,
          [socialLinks.Strength.name]: {
            ...currentLinks[socialLinks.Strength.name],
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
        previousDay.links[socialLinks.Strength.name].level === 2;
      const isRomance =
        currentLinks[socialLinks.Strength.name].romance || isFork;
      const days = [daysNames.wednesday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 24).getTime() &&
        previousDay.links[socialLinks.Chariot.name].level >= 2 &&
        !holidays.includes(currentDate.getTime()) &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  HangedMan: {
    ...linkBaseFunctions,
    name: socialLinks.HangedMan.name,
    label: () => (
      <EventCard
        place="Naganaki Shrine"
        name="Maiko Oohashi"
        head="Hanged Man"
      />
    ),
    available: function ({ currentDate, currentTime }) {
      const days = [daysNames.monday, daysNames.wednesday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 6).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
  },
  Temperance: {
    ...linkBaseFunctions,
    name: socialLinks.Temperance.name,
    label: () => (
      <EventCard
        place="2F Classroom Hallway / 1F Laboratory Hallway (Home Economics Room)"
        name='André Laurent Jean "Bebe" Geraux'
        head="Temperance"
      />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      const days = [daysNames.tuesday, daysNames.wednesday, daysNames.friday];
      return (
        currentDate.getTime() >= new Date(2009, 3, 8).getTime() &&
        previousDay.links[socialLinks.Hierophant.name].level >= 3 &&
        previousDay.stats[stats.Academics.name] >= 20 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
  },
  Devil: {
    ...linkBaseFunctions,
    name: socialLinks.Devil.name,
    label: () => (
      <EventCard name="President Tanaka" place="Paulownia Mall" head="Devil" />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      const days = [daysNames.tuesday, daysNames.saturday];
      return (
        currentDate.getTime() >= new Date(2009, 4, 16).getTime() &&
        previousDay.links[socialLinks.Hermit.name].level >= 4 &&
        previousDay.stats[stats.Charm.name] >= 45 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "evening"
      );
    },
  },
  Tower: {
    ...linkBaseFunctions,
    name: socialLinks.Tower.name,
    label: () => (
      <EventCard place="Club Escapade" name="Mutatsu" head="Tower" />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      const days = [
        daysNames.thursday,
        daysNames.friday,
        daysNames.saturday,
        daysNames.sunday,
      ];
      return (
        currentDate.getTime() >= new Date(2009, 4, 23).getTime() &&
        previousDay.links[socialLinks.Strength.name].level >= 4 &&
        previousDay.stats[stats.Courage.name] >= 15 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "evening"
      );
    },
  },
  Star: {
    ...linkBaseFunctions,
    name: socialLinks.Star.name,
    label: () => (
      <EventCard
        place="Iwatodai Station Strip Mall 1F"
        name="Mamoru Hayase"
        head="Star"
      />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      const days = [daysNames.wednesday, daysNames.friday, daysNames.sunday];
      return (
        currentDate.getTime() >= new Date(2009, 7, 5).getTime() &&
        previousDay.stats[stats.Courage.name] >= 45 &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day"
      );
    },
  },
  Moon: {
    ...linkBaseFunctions,
    name: socialLinks.Moon.name,
    label: () => (
      <EventCard name="Nozomi Suemitsu" place="Paulownia Mall" head="Moon" />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      return (
        currentDate.getTime() >= new Date(2009, 3, 28).getTime() &&
        previousDay.links[socialLinks.Magician.name].level >= 3 &&
        previousDay.stats[stats.Charm.name] >= 15 &&
        currentTime === "day"
      );
    },
  },
  Sun: {
    ...linkBaseFunctions,
    name: socialLinks.Sun.name,
    label: () => (
      <EventCard place="Naganaki Shrine" name="Akinari Kamiki" head="Sun" />
    ),
    available: function ({ currentDate, currentTime, previousDay }) {
      if (previousDay === undefined) return false;
      return (
        currentDate.getTime() >= new Date(2009, 7, 9).getTime() &&
        previousDay.links[socialLinks.HangedMan.name].level >= 3 &&
        previousDay.stats[stats.Academics.name] >= 100 &&
        currentDate.getDay() == daysNames.sunday &&
        currentTime === "day"
      );
    },
  },
  Aeon: {
    ...linkBaseFunctions,
    name: socialLinks.Aeon.name,
    label: () => <EventCard place="Classroom 2F" label="Aeon" head="Aigis" />,
    available: function ({
      currentDate,
      currentTime,
      currentLinks,
      previousDay,
    }) {
      if (previousDay === undefined) return false;
      const isFork =
        previousDay.links &&
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.friday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2010, 0, 8).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  AeonRomance: {
    ...linkBaseFunctions,
    name: socialLinks.Aeon.name,
    label: () => (
      <EventCard head="Aeon(Romance)" place="Classroom 2F" name="Aigis" />
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
        previousDay.links[socialLinks.Empress.name].level === 6;
      const isRomance =
        !currentLinks[socialLinks.Empress.name].romance || isFork;
      const days = [
        daysNames.monday,
        daysNames.tuesday,
        daysNames.wednesday,
        daysNames.thursday,
        daysNames.friday,
        daysNames.saturday,
      ];
      return (
        currentDate.getTime() >= new Date(2010, 0, 8).getTime() &&
        days.includes(currentDate.getDay()) &&
        currentTime === "day" &&
        isRomance
      );
    },
  },
  Fool: {
    ...linkBaseFunctions,
    name: socialLinks.Fool.name,
    special: true,
    label: () => <EventCard head="Fool" name="S.E.E.S." place="Tartarus" />,
    available: () => false,
  },
};
