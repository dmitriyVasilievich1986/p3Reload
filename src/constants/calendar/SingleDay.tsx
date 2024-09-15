import { allEventsNames, Event } from "@/constants/events/types";
import { StatsNames, CharStats } from "@/constants/stats/types";
import { MonthNames } from "@/constants/monthsNames";

import {
  SocialLinksStatsArray,
  SocialLinkStats,
  SocialLinkNames,
  Routes,
} from "@/constants/socialLinks/types";

const zeroStats: SocialLinkStats = {
  romance: Routes.Platonic,
  multiplier: 1,
  points: 0,
  level: 0,
  dorm1: 0,
  dorm2: 0,
};

const initialStats: CharStats = {
  [StatsNames.Academics]: 0,
  [StatsNames.Charm]: 0,
  [StatsNames.Courage]: 0,
};

const initialLinks: SocialLinksStatsArray = {
  [SocialLinkNames.Sanada]: { ...zeroStats },
  [SocialLinkNames.Koromaru]: { ...zeroStats },
  [SocialLinkNames.Amada]: { ...zeroStats },
  [SocialLinkNames.Mochizuki]: { ...zeroStats },
  [SocialLinkNames.Iori]: { ...zeroStats },
  [SocialLinkNames.Aragaki]: { ...zeroStats },
  [SocialLinkNames.Fool]: { ...zeroStats },
  [SocialLinkNames.Magician]: { ...zeroStats },
  [SocialLinkNames.Priestess]: { ...zeroStats },
  [SocialLinkNames.Empress]: { ...zeroStats },
  [SocialLinkNames.Emperor]: { ...zeroStats },
  [SocialLinkNames.Hierophant]: { ...zeroStats },
  [SocialLinkNames.Lovers]: { ...zeroStats },
  [SocialLinkNames.Chariot]: { ...zeroStats },
  [SocialLinkNames.Justice]: { ...zeroStats },
  [SocialLinkNames.Hermit]: { ...zeroStats },
  [SocialLinkNames.Fortune]: { ...zeroStats },
  [SocialLinkNames.Strength]: { ...zeroStats },
  [SocialLinkNames.HangedMan]: { ...zeroStats },
  [SocialLinkNames.Death]: { ...zeroStats },
  [SocialLinkNames.Temperance]: { ...zeroStats },
  [SocialLinkNames.Devil]: { ...zeroStats },
  [SocialLinkNames.Tower]: { ...zeroStats },
  [SocialLinkNames.Star]: { ...zeroStats },
  [SocialLinkNames.Moon]: { ...zeroStats },
  [SocialLinkNames.Sun]: { ...zeroStats },
  [SocialLinkNames.Aeon]: { ...zeroStats },
};

export class SingleDay {
  links: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
  stats: CharStats;
  date: Date;
  singleTimeEvents: allEventsNames[];
  activities: Event[];
  isDayOff?: boolean;
  foolMoon?: boolean;
  exams?: boolean;

  constructor(props?: {
    singleTimeEvents?: allEventsNames[];
    arcanes?: SocialLinkNames[];
    activities: Event[];
    date: Date;
    links?: SocialLinksStatsArray;
    isDayOff?: boolean;
    foolMoon?: boolean;
    stats?: CharStats;
    exams?: boolean;
  }) {
    this.singleTimeEvents = props?.singleTimeEvents ?? [];
    this.links = props?.links ?? initialLinks;
    this.stats = props?.stats ?? initialStats;
    this.activities = props?.activities ?? [];
    this.date = props?.date ?? new Date();
    this.arcanes = props?.arcanes ?? [];
    this.isDayOff = props?.isDayOff;
    this.foolMoon = props?.foolMoon;
    this.exams = props?.exams;
  }

  getId() {
    const month = MonthNames[this.date.getMonth()];
    const day = this.date.getDate();
    return `${month}_${day}`;
  }
}
