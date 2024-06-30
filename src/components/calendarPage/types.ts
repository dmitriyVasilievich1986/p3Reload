import { Times, Event, allEventsNames } from "../../constants/events/types";
import { singleDay } from "../../constants/calendar/types";
import { CharStats } from "../../constants/stats/types";

import {
  SocialLinksStatsArray,
  SocialLinkNames,
} from "../../constants/socialLinks/types";

export type SocialLinksProps = {
  links: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
  changeHandler: (props: { arcane: SocialLinkNames }) => void;
};

export type HeroStatsProps = {
  previousDay: singleDay;
  stats: CharStats;
};

export type DayEventProps = {
  links: SocialLinksStatsArray;
  previousDay: singleDay;
  stats: CharStats;
  event: Event;
  time: Times;
  date: Date;
  changeHandler: (props: allEventsNames) => void;
  singleTimeEvents: allEventsNames[];
};

export type CalendarProps = {
  links: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
  previousDay: singleDay;
  stats: CharStats;
  date: Date;
  setCalendarArray: React.Dispatch<React.SetStateAction<singleDay[]>>;
  activities: {
    [Times.Morning]: Event;
    [Times.AfterSchool]?: Event | null;
    [Times.Day]: Event;
    [Times.Evening]: Event;
  };
  singleTimeEvents: allEventsNames[];
};
