import { Categories, Times, Event } from "../events/types";
import { StatsNames, CharStats } from "../stats/types";
import { MonthNames } from "../monthsNames";
import { singleDay } from "./types";
import { events } from "../events";

import {
  SocialLinksStatsArray,
  SocialLinkStats,
  SocialLinkNames,
} from "../socialLinks/types";

const initialStats: CharStats = {
  [StatsNames.Academics]: 0,
  [StatsNames.Charm]: 0,
  [StatsNames.Courage]: 0,
};

const zeroStats: SocialLinkStats = {
  level: 0,
  points: 0,
  multiplier: 1,
  romance: false,
};
const initialLinks: SocialLinksStatsArray = {
  [SocialLinkNames.Aeon]: { ...zeroStats },
  [SocialLinkNames.Chariot]: { ...zeroStats },
  [SocialLinkNames.Devil]: { ...zeroStats },
  [SocialLinkNames.Emperor]: { ...zeroStats },
  [SocialLinkNames.Empress]: { ...zeroStats },
  [SocialLinkNames.Fool]: { ...zeroStats },
  [SocialLinkNames.Fortune]: { ...zeroStats },
  [SocialLinkNames.HangedMan]: { ...zeroStats },
  [SocialLinkNames.Hermit]: { ...zeroStats },
  [SocialLinkNames.Hierophant]: { ...zeroStats },
  [SocialLinkNames.Justice]: { ...zeroStats },
  [SocialLinkNames.Lovers]: { ...zeroStats },
  [SocialLinkNames.Magician]: { ...zeroStats },
  [SocialLinkNames.Moon]: { ...zeroStats },
  [SocialLinkNames.Priestess]: { ...zeroStats },
  [SocialLinkNames.Star]: { ...zeroStats },
  [SocialLinkNames.Strength]: { ...zeroStats },
  [SocialLinkNames.Sun]: { ...zeroStats },
  [SocialLinkNames.Temperance]: { ...zeroStats },
  [SocialLinkNames.Tower]: { ...zeroStats },
};

export const baseCalendar = {
  date: new Date(),
  links: initialLinks,
  stats: initialStats,
  getId: function () {
    const month = MonthNames[this.date.getMonth()];
    const day = this.date.getDate();
    return `${month}_${day}`;
  },
};

export const classmates: SocialLinkNames[] = [
  SocialLinkNames.Magician,
  SocialLinkNames.Strength,
  SocialLinkNames.Chariot,
  SocialLinkNames.Lovers,
  SocialLinkNames.Emperor,
  SocialLinkNames.Moon,
];

export function initialCalculataion(calendar: singleDay[]) {
  (Object.values(calendar) as Array<singleDay>).forEach((c) => {
    const previousDay: singleDay | undefined = calendar.find(
      (d) => d.date.getTime() === c.date.getTime() - 86400000
    );
    const weekAgoStats = calendar.find(
      (d) => d.date.getTime() === c.date.getTime() - 86400000 * 7
    )?.stats || { ...initialStats };
    let currentStats = previousDay?.stats || { ...initialStats };
    let currentLinks = previousDay?.links || { ...initialLinks };
    let singleTimeEvents = previousDay?.singleTimeEvents || [];
    let response = null;

    if (
      previousDay !== undefined &&
      (
        [
          previousDay.activities[Times.Day].category,
          previousDay.activities[Times[Times.Evening]].category,
        ] as Array<Categories>
      ).includes(events.Tartarus.category)
    ) {
      response = events.drinkMedicine.upgrade({
        singleTimeEvents: singleTimeEvents,
        weekAgoStats: weekAgoStats,
        currentStats: currentStats,
        currentLinks: currentLinks,
        arcanes: c.arcanes,
      });
      currentStats = response?.stats || currentStats;
    }
    [Times.Morning, Times.AfterSchool, Times.Day, Times.Evening]
      .filter((time) => !!c.activities?.[time])
      .forEach((time) => {
        response = (c.activities[time] as Event).upgrade({
          singleTimeEvents: singleTimeEvents,
          weekAgoStats: weekAgoStats,
          currentStats: currentStats,
          currentLinks: currentLinks,
          arcanes: c.arcanes,
        });
        singleTimeEvents = response?.singleTimeEvents || singleTimeEvents;
        currentStats = response?.stats || currentStats;
        currentLinks = response?.links || currentLinks;
      });

    c.singleTimeEvents = [...singleTimeEvents];
    c.stats = currentStats;
    c.links = currentLinks;
  });

  return calendar;
}
