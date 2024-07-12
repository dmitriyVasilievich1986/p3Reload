import { Times, Event } from "../../constants/events/types";
import { singleDay } from "../../constants/calendar/types";
import { CharStats } from "../../constants/stats/types";

import {
  SocialLinksStatsArray,
  SocialLinkNames,
} from "../../constants/socialLinks/types";

export type DateProps = {
  date: Date;
};

export type TartarusProps = {
  previousDay: singleDay;
};

export type SocialLinksProps = {
  links: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
};

export type HeroStatsProps = {
  previousDay: singleDay;
  stats: CharStats;
};

export type UpdateCalendarProps = {
  activity: { [key in Times]?: Event };
};

export type DayEventProps = {
  onClick: (time: Times) => void;
  links: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
  stats: CharStats;
  event: Event;
} & TartarusProps;

export type CalendarProps = singleDay & {
  setDayConstants: (time: Times) => void;
  previousDay: singleDay;
  stats: CharStats;
};
