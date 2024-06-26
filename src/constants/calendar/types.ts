import { SocialLinksStatsArray, SocialLinkNames } from "../socialLinks/types";
import { Times, Event } from "../events/types";
import { CharStats } from "../stats/types";

import {
  SpecialEventsNames,
  pcProgramsNames,
  statsEventsAcademicsNames,
  statsEventsCharmNames,
  statsEventsCourageNames,
  socialLinkRomanceNames,
} from "../events/types";

export type singleDay = {
  links: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
  stats: CharStats;
  date: Date;
  activities: {
    [Times.Morning]: Event;
    [Times.AfterSchool]?: Event | null;
    [Times.Day]: Event;
    [Times.Evening]: Event;
  };
  singleTimeEvents: (
    | SpecialEventsNames
    | pcProgramsNames
    | statsEventsAcademicsNames
    | statsEventsCharmNames
    | statsEventsCourageNames
    | SocialLinkNames
    | socialLinkRomanceNames
  )[];
};
