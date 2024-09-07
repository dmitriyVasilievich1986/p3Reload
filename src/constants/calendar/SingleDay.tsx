import { allEventsNames, Event } from "../events/types";
import { StatsNames, CharStats } from "../stats/types";
import { MonthNames } from "../monthsNames";

import {
  SocialLinksStatsArray,
  SocialLinkStats,
  SocialLinkNames,
  Routes,
} from "../socialLinks/types";

const zeroStats: SocialLinkStats = {
  level: 0,
  points: 0,
  multiplier: 1,
  romance: Routes.Platonic,
};

const initialStats: CharStats = {
  [StatsNames.Academics]: 0,
  [StatsNames.Charm]: 0,
  [StatsNames.Courage]: 0,
};

const initialLinks: SocialLinksStatsArray = {
  [SocialLinkNames.Akihiko]: { ...zeroStats },
  [SocialLinkNames.Koromaru]: { ...zeroStats },
  [SocialLinkNames.Amada]: { ...zeroStats },
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
