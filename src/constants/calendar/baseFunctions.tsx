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

    c.activities.forEach((activity) => {
      response = activity.upgrade({
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
