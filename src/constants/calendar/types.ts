import { SocialLinksStatsArray, SocialLinkNames } from "../socialLinks/types";
import { allEventsNames, Event } from "../events/types";
import { CharStats } from "../stats/types";

export type singleDay = {
  links: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
  stats: CharStats;
  date: Date;
  isDayOff?: boolean;
  exams?: boolean;
  foolMoon?: boolean;
  getId: () => string;
  activities: Event[];
  singleTimeEvents: allEventsNames[];
};
