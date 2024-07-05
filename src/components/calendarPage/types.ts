import { Times, Event, allEventsNames } from "../../constants/events/types";
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
  links: SocialLinksStatsArray;
  arcanes: SocialLinkNames[];
  stats: CharStats;
  event: Event;
  time: Times;
  changeHandler: (props: allEventsNames) => void;
  singleTimeEvents: allEventsNames[];
} & DateProps &
  TartarusProps;

export type CalendarProps = singleDay & {
  previousDay: singleDay;
  stats: CharStats;
  setCalendarArray: React.Dispatch<React.SetStateAction<singleDay[]>>;
};
