import { StatsNames, CharStats } from "../stats/types";
import { MonthNames } from "../monthsNames";
import { singleDay } from "./types";

import {
  SocialLinksStatsArray,
  SocialLinkStats,
  SocialLinkNames,
  Routes,
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
  romance: Routes.Platonic,
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
  [SocialLinkNames.Death]: { ...zeroStats },
};

export const baseCalendar = {
  date: new Date(),
  links: initialLinks,
  stats: initialStats,
  singleTimeEvents: [],
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
  SocialLinkNames.Temperance,
  SocialLinkNames.Justice,
  SocialLinkNames.Moon,
];

export function initialCalculataion(calendar: singleDay[]) {
  (Object.values(calendar) as Array<singleDay>).forEach((c, i, cArray) => {
    const previousDay: singleDay = cArray?.[i - 1] || baseCalendar;
    const weekAgoDay: singleDay | undefined = cArray?.[i - 1];
    const weekAgoStats = weekAgoDay?.stats || { ...initialStats };

    c.singleTimeEvents = previousDay.singleTimeEvents;
    c.stats = previousDay.stats;
    c.links = previousDay.links;

    c.activities.forEach((activity) => {
      const response = activity.upgrade({
        singleTimeEvents: c.singleTimeEvents,
        weekAgoStats: weekAgoStats,
        currentStats: c.stats,
        currentLinks: c.links,
        arcanes: c.arcanes,
      });
      c.singleTimeEvents = response?.singleTimeEvents || c.singleTimeEvents;
      c.stats = response?.stats || c.stats;
      c.links = response?.links || c.links;
    });
  });

  return calendar;
}
