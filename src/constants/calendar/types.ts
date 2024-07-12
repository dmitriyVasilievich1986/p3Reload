import { SocialLinksStatsArray, SocialLinkNames } from "../socialLinks/types";
import { allEventsNames, Times, Event } from "../events/types";
import { CharStats } from "../stats/types";

export type singleDay = {
  links: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
  stats: CharStats;
  date: Date;
  getId: () => string;
  activities: Event[];
  singleTimeEvents: allEventsNames[];
};
